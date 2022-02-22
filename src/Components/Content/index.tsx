import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchImageSlice,
  setApprovedImage,
  setRejectedImage,
} from "../../appRedux/actions/imageSliceAction";
import { ContentWrapper } from "../StyledComponents";
import ApprovedList from "./ApprovedList";
import { ImageProp } from "../../models";
import { AllState } from "../models";
import Header from "../Header";
import Footer from "../Footer";
import Preview from "./Preview";

const Content = () => {
  const dispatch = useDispatch();

  // Initially set loaded image in state
  const [loadImage, setLoadImage] = useState<any>();
  const [thumbnailImage, setThumbnailImage] = useState<ImageProp>();

  //   Rejected iamge list from redux store
  const { rejectedList } = useSelector((state: AllState) => state.list);

  const { thumbnail } = useSelector((state: AllState) => state.thumb);

  useEffect(() => {
    thumbnail && setLoadImage(thumbnail);
  }, [thumbnail]);

  /**
   * @name handleLoadedImage
   * @description use for after load image for cancel and approval thourgh button click
   * @props type and data
   * @returns dispatch action either approved or reject
   */
  const handleLoadedImage = (type: string, data: ImageProp) => {
    if (type === "approved") {
      dispatch(setApprovedImage(data));
      setThumbnailImage(undefined);
    } else {
      dispatch(setRejectedImage(data));
      setThumbnailImage(undefined);
    }
  };

  /**
   * @name fetchImage
   * @description is used for call the unsplash random iamge api
   * @returns return iamge url and id and set to state
   */
  const fetchImage = useCallback(() => {
    dispatch(fetchImageSlice());
  }, [dispatch]);

  /**
   * @name findDuplocation
   * @description is used for find duplicate or rejected image from rejected list
   * @props Loaded Image and rejected list iamge
   * @returns if find image rejected image it will call again api, else add to thumbnail image
   */
  const findDuplication = useCallback(() => {
    const findDuplicate =
      rejectedList.length &&
      loadImage &&
      rejectedList.find((item: ImageProp) => item.id === loadImage.id);

    if (!findDuplicate) {
      setThumbnailImage(loadImage);
    } else {
      fetchImage();
    }
  }, [fetchImage, loadImage, rejectedList]);

  //Call find Duplicate iamge
  useEffect(() => {
    findDuplication();
  }, [findDuplication]);

  return (
    <ContentWrapper>
      <Header title="Image Approval Application" />

      <ApprovedList fetchImage={fetchImage} />

      {/* Preview thumbnail image component  */}
      <Preview fetchImage={fetchImage} thumbnailImage={thumbnailImage} />

      <Footer
        thumbnailImage={thumbnailImage}
        handleLoadedImage={handleLoadedImage}
      />
    </ContentWrapper>
  );
};

export default Content;
