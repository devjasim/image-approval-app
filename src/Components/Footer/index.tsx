import React from "react";
import { ImageProp } from "../../models";
import { Button, ButtonContainer, ShortDes } from "../StyledComponents";
import { FaTimes, FaCheck } from "react-icons/fa";

// Props Types For Footer Component
interface Props {
  thumbnailImage?: ImageProp;
  handleLoadedImage: (type: string, thumbnailImage: ImageProp) => void;
}

/**
 * @name Footer Component
 * @description Footer compnent of the container
 * @param props
 * @returns
 */
const Footer = (props: Props) => {
  const { thumbnailImage, handleLoadedImage } = props;

  return (
    <ButtonContainer>
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
    </ButtonContainer>
  );
};

export default Footer;
