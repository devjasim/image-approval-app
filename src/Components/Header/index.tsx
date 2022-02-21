import React from "react";
import { Heading, Title } from "../StyledComponents";

// Props Tpyes For Header Component
interface Prop {
  title: string;
}

const Header = (props: Prop) => {
  return (
    <Heading>
      <Title>{props.title}</Title>
    </Heading>
  );
};

export default Header;
