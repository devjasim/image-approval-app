import React from "react";
import { ImageProp } from "../../models";
import { Button, Buttons, ShortDes } from "../StyledComponents";
import { FaTimes, FaCheck } from "react-icons/fa";

interface Props {
  thumbnailImage?: ImageProp;
  handleLoadedImage: (type: string, thumbnailImage: ImageProp) => void;
}

const Footer = (props: Props) => {
  const { thumbnailImage, handleLoadedImage } = props;

  return (
    <Buttons>
      {thumbnailImage ? (
        <>
          <Button
            onClick={() =>
              thumbnailImage && handleLoadedImage("cancle", thumbnailImage)
            }
            color="secondary"
          >
            <FaTimes />
          </Button>
          <Button
            onClick={() =>
              thumbnailImage && handleLoadedImage("approved", thumbnailImage)
            }
            color="primary"
          >
            <FaCheck />
          </Button>
        </>
      ) : (
        <ShortDes>
          Click on the <span>+</span> in order to get image recommendations
        </ShortDes>
      )}
    </Buttons>
  );
};

export default Footer;
