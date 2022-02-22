import React from "react";
import { Container, ContentWrapper } from "./Components/StyledComponents";

// components on demand
const Content = React.lazy(() => import("./Components/Content"));
const Header = React.lazy(() => import("./Components/Header"));

function App() {
  return (
    <Container>
      <ContentWrapper>
        <Header title="Image Approval Application" />
        <Content />
      </ContentWrapper>
    </Container>
  );
}

export default App;
