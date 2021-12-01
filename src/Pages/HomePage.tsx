import React from "react";
import styled from "styled-components";

const HomePage = (): React.ReactElement => {
  return (
    <div>
      <Welcome>
        <p>Welcome to mangokulfi</p>
      </Welcome>
    </div>
  );
};
const Welcome = styled.p`
  display: flex;
  justify-content: center;
  font-size: 30px;
`;
export default HomePage;
