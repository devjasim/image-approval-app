import React from "react";
import { ImageProp } from "../../models";
import { PreviewImage, ThumbNail } from "../StyledComponents";
import { TiPlus } from "react-icons/ti";

// Props types form Preview Component
interface Prop {
  thumbnailImage?: ImageProp;
  fetchImage: () => void;
}

const Preview = (props: Prop) => {
  const { thumbnailImage, fetchImage } = props;
  return (
    <PreviewImage>
      <ThumbNail
        height="300"
        className={`${!thumbnailImage && "placeholder large"}`}
      >
        {thumbnailImage ? (
          <img src={thumbnailImage.url} alt="Loaded" />
        ) : (
          <TiPlus onClick={fetchImage} />
        )}
      </ThumbNail>
    </PreviewImage>
  );
};

export default Preview;
