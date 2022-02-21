import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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
  const APP_ID = "M2i3RlZAG_vmYZUa01zHbCPhEg7vEhzmLa_cppmwjhA";

  const dispatch = useDispatch();

  const [loadImage, setLoadImage] = useState<ImageProp>();
  const [thumbnailImage, setThumbnailImage] = useState<ImageProp>();

  const { rejectedList } = useSelector((state: AllState) => state.list);

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
  const fetchImage = () => {
    fetch("https://api.unsplash.com/photos/random?client_id=" + APP_ID)
      .then((res) => res.json())
      .then((data) => {
        setLoadImage({ url: data.urls.thumb, id: data.id });
      })
      .catch((err) => {
        console.log("Error happened during fetching!", err);
      });
  };

  /**
   * @name findDuplocation
   * @description is used for find duplicate or rejected image from rejected list
   * @props Loaded Image and rejected list iamge
   * @returns if find image rejected image it will call again api, else add to thumbnail image
   */
  const findDuplocation = (loadImage: ImageProp, rejectedList: ImageProp[]) => {
    const findDuplicate =
      rejectedList.length &&
      loadImage &&
      rejectedList.find((item: ImageProp) => item.id === loadImage.id);

    if (!findDuplicate) {
      setThumbnailImage(loadImage);
    } else {
      fetchImage();
    }
  };

  //   Call find Duplicate iamge
  useEffect(() => {
    loadImage && findDuplocation(loadImage, rejectedList);
  }, [loadImage, rejectedList]);

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
