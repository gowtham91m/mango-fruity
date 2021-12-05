import React from "react";
import styled from "styled-components";
import image from "../photos/image.jpeg";

const Photography = (): React.ReactElement => {
  return (
    <div>
      <Imgdiv>
        <img src={image} />
      </Imgdiv>
    </div>
  );
};
const Imgdiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  > img {
    width :1000px ;
    }
    
  @media only screen and (max-width: 1000px) {
      > img {
        width : 400px;
      }
    }
  }
`;

export default Photography;
