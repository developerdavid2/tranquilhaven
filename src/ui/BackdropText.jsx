import styled from "styled-components";
import { device } from "../utils/media";

const StyledBackDrop = styled.div`
  position: relative;
`;

const Text = styled.h1`
  color: rgba(135, 136, 138, 0.082);
  font-size: 30rem;
  position: absolute;
  top: 100px;
  left: -85%;
  @media ${device.mini} {
    font-size: 10rem;
  }
`;
const StyledBlurBody = styled.div`
  position: absolute;
  left: 100%;
  top: 1px;
  /* transform: translate(-50%, 66.67%); */
  z-index: 0;
`;
const BlurBody = styled.div`
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
  border: 20px solid #1d4ed8;
  filter: blur(80px);
`;

const StyledBlurContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 250px;
  /* transform: translate(-50%, 66.67%); */
  z-index: 0;
`;

const BlurShape = styled.div`
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
  border: 20px solid #1d4ed8;
  filter: blur(70px);
`;

function BackdropText() {
  return (
    <StyledBackDrop>
      <Text>Tranquil</Text>
      <StyledBlurBody>
        <BlurBody />
      </StyledBlurBody>
      <StyledBlurContainer>
        <BlurShape />
      </StyledBlurContainer>
    </StyledBackDrop>
  );
}

export default BackdropText;
