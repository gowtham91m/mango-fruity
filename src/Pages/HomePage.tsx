import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomepageWrapper>
      <Heading>
        full time artist that includes photography, pencil sketching and coding.
        Some of it helps me make my living when I code for someone else...
      </Heading>
    </HomepageWrapper>
  );
};
const HomepageWrapper = styled.div`
min-height=100vh`;
const Heading = styled.div`
  font-size: 20px;
`;
export default HomePage;
