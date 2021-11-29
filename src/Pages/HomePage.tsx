import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomepageWrapper>
      <Heading>Welcome to my page</Heading>
    </HomepageWrapper>
  );
};
const HomepageWrapper = styled.div`
min-height=100vh`;
const Heading = styled.div`
font-size=200px`;
export default HomePage;
