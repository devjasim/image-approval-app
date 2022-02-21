import React from "react";
import { Heading, Title } from "../StyledComponents";

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
