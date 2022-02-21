import React, { useState } from "react";
import { ImageProp } from "../../models/";
import { AllState } from "../models";
import { NavigateIcon, ThumbNail, ImageList, Title } from "../StyledComponents";
import { useSelector } from "react-redux";

const ApprovedImage = (props: any) => {
  // Approved Images from redux store
  const { approvedList } = useSelector((state: AllState) => state.list);

  // Fetch Image Function from Props
  const { fetchImage } = props;

  //   Show hide arrow when navigation image list
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);

  //   Handle Scroll function for navigation
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
            <ThumbNail width="70" height="40" className="placeholder">
              A
            </ThumbNail>
          ) : (
            approvedList.map((item: ImageProp) => (
              <ThumbNail width="70" height="40" key={item.id}>
                <img src={item.url} alt="Approved" />
              </ThumbNail>
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
