import React from "react";
import { Heading, Title } from "../StyledComponents";

// Props Tpyes For Header Component
interface Prop {
  title: string;
}

/**
 * @name Header
 * @description Header of the app
 * @param props
 * @returns Header component
 */
const Header = (props: Prop) => {
  return (
    <Heading>
      <Title>{props.title}</Title>
    </Heading>
  );
};

export default Header;
