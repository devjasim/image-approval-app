import React from "react";
import styled from "styled-components";
import { ImSpinner3 } from "react-icons/im";

const LoadingSpin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2rem;
  }
`;

/**
 * @name Loader Component
 * @description Loader component when initializing app
 * @returns Loader Component
 */
const Loader = () => {
  return (
    <LoadingSpin>
      <ImSpinner3 />
    </LoadingSpin>
  );
};

export default Loader;
