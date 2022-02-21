import React, { useState } from "react";
import { ImageProp } from "../../models/";
import { AllState } from "../models";
import { NavigateIcon, Thumb, ImageList, Title } from "../StyledComponents";
import { useSelector } from "react-redux";

const ApprovedImage = (props: any) => {
  const { approvedList } = useSelector((state: AllState) => state.list);

  const { fetchImage } = props;

  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);

  const handleScrollImage = (direction: string) => {
    const container = document.querySelector(".wrapper");
    let scrollCompleted = 0;

    if (container) {
      const scrollWidth = container.scrollWidth;

      direction === "right" && setShowLeftArrow(true);
      container.scrollLeft <= 0 && setShowLeftArrow(false);
      scrollWidth <= container.scrollLeft + 253
        ? setShowRightArrow(false)
        : setShowRightArrow(true);

      let slideVar = setInterval(function () {
        if (direction === "left") {
          container.scrollLeft -= 10;
        } else {
          container.scrollLeft += 10;
        }
        scrollCompleted += 10;
        if (scrollCompleted >= 100) {
          window.clearInterval(slideVar);
        }
      }, 50);
    }
  };

  return (
    <>
      <Title>Approved Images ({approvedList.length})</Title>
      <ImageList>
        {showLeftArrow && (
          <NavigateIcon left onClick={() => handleScrollImage("left")}>
            A
          </NavigateIcon>
        )}
        <div className="wrapper">
          {approvedList.length === 0 ? (
            <Thumb width="70" height="40" className="add">
              A
            </Thumb>
          ) : (
            approvedList.map((item: ImageProp) => (
              <Thumb width="70" height="40" key={item.id}>
                <img src={item.url} alt="Approved" />
              </Thumb>
            ))
          )}
        </div>
        {approvedList.length >= 4 && showRightArrow && (
          <NavigateIcon onClick={() => handleScrollImage("right")}>
            A
          </NavigateIcon>
        )}
      </ImageList>
    </>
  );
};

export default ApprovedImage;
