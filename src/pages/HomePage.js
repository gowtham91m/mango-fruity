import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomepageWrapper>
      <Heading>Home page</Heading>
    </HomepageWrapper>
  );
};
const HomepageWrapper = styled.div`
min-height=100vh`;
const Heading = styled.div``;
export default HomePage;
