import React from "react";
import { Container } from "./Components/StyledComponents";

// components on demand
const Content = React.lazy(() => import("./Components/Content"));

function App() {
  return (
    <Container>
      <Content />
    </Container>
  );
}

export default App;
