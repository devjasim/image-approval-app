import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setApprovedImage,
  setRejectedImage,
} from "../../appRedux/actions/imageSliceAction";
import {
  Thumb,
  ContentWrapper,
  Heading,
  PreviewImage,
  Title,
} from "../StyledComponents";
import ApprovedList from "./ApprovedList";
import { ImageProp } from "../../models";
import { AllState } from "../models";
import Header from "../Header";
import Footer from "../Footer";

const Content = () => {
  const APP_ID = "M2i3RlZAG_vmYZUa01zHbCPhEg7vEhzmLa_cppmwjhA";

  const dispatch = useDispatch();

  const [loadImage, setLoadImage] = useState<ImageProp>();
  const [thumbnailImage, setThumbnailImage] = useState<ImageProp>();

  const { rejectedList } = useSelector((state: AllState) => state.list);

  // Set image into redux either it's approved or rejected
  const handleLoadedImage = (type: string, data: ImageProp) => {
    if (type === "approved") {
      dispatch(setApprovedImage(data));
      setThumbnailImage(undefined);
    } else {
      dispatch(setRejectedImage(data));
      setThumbnailImage(undefined);
    }
  };

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

  // Check is the loaded image is duplicate
  useEffect(() => {
    const findDuplicate =
      rejectedList.length &&
      loadImage &&
      rejectedList.find((item: ImageProp) => item.id === loadImage.id);

    if (!findDuplicate) {
      setThumbnailImage(loadImage);
    } else {
      fetchImage();
    }
  }, [loadImage, rejectedList]);

  return (
    <ContentWrapper>
      <Header title="Image Approval Application" />

      <ApprovedList fetchImage={fetchImage} />

      <PreviewImage>
        <Thumb height="300" className={`${!thumbnailImage && "add large"}`}>
          {thumbnailImage ? (
            <img src={thumbnailImage.url} alt="Loaded" />
          ) : (
            <span>a</span>
          )}
        </Thumb>
      </PreviewImage>
      <Footer
        thumbnailImage={thumbnailImage}
        handleLoadedImage={handleLoadedImage}
      />
    </ContentWrapper>
  );
};

export default Content;
