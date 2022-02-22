import styled from "styled-components";

const color = {
  primary: "#384de8",
  secondary: "#F0F2F7",
  black: "#454545",
  gray: "#E3E8F0",
};

// App Container
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

// App Container Wrapper
export const ContentWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 25px 35px -5px rgba(0, 10, 82, 25%);
  border-radius: 5px;
  padding: 1rem 1.2rem;
  width: 320px;
  margin: 0 auto;
  margin: 2rem 0;
`;

// App Common Title
export const Title = styled.h2`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${color.primary};
  margin: 0;
`;

// App Heading
export const Heading = styled.div`
  border-bottom: 1px solid ${color.secondary};
  padding: 0 1rem 0.5rem 1rem;
  margin: 0 -1.2rem 1.5rem;
`;

// Image Approved List Component
export const ImageList = styled.div`
  margin: 0.8rem 0 1rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  div.wrapper {
    width: 100%;
    overflow-x: auto;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

// NavigateIcon Props types
interface NavProp {
  left?: boolean;
}

// Navigaation Icon style
export const NavigateIcon = styled.div`
  margin-left: ${(props: NavProp) => (props.left ? "-0.5rem" : ".2rem")};
  margin-right: ${(props: NavProp) => (props.left ? ".2rem" : "-0.5rem")};
  svg {
    color: ${color.primary};
    font-size: 1.2rem;
    cursor: pointer;
    user-select: none;
  }
`;

// Thubmbnail Prop
interface ThumbProp {
  width?: string;
  height?: string;
}

// Thumbnail Image Style
export const ThumbNail = styled.div`
  min-width: ${(props: ThumbProp) =>
    props?.width ? `${props.width}px` : "100%"};
  height: ${(props: ThumbProp) =>
    props?.height ? `${props.height}px` : "auto"};
  border-radius: 4px;
  border: 1px solid ${color.secondary};
  position: relative;
  transition: 0.3s all ease-in-out;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(55, 77, 232, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    transition: 0.3s all ease-in-out;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
    height: 100%;
  }
  &.placeholder {
    background: ${color.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      content: none;
    }
    svg {
      font-size: 1.6rem;
      color: ${color.gray};
      cursor: pointer;
    }
    &.large {
      svg {
        font-size: 5rem;
      }
    }
  }
`;

// Preview Image wrapper
export const PreviewImage = styled.div`
  margin: 1.5rem 0 1rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid ${color.secondary};
  border-bottom: 1px solid ${color.secondary};
`;

// Footer Buttons Contaienr
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
`;

// Button Style
export const Button = styled.button`
  padding: 0.8rem 3rem;
  border-radius: 25px;
  line-height: 0;
  font-size: 1.2rem;
  border: 0;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  background-color: ${(props) =>
    props.color === "primary" ? color.primary : color.black};
`;

// Footer short description
export const ShortDes = styled.p`
  font-size: 0.875rem;
  font-wieght: 300;
  margin-top: 1rem;
  color: #9b9b9b;
  text-align: center;
  line-height: 1.4;
  margin: 0 0 7px 0;
  span {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 0;
    color: ${color.gray};
  }
`;
