import styled, { css } from "styled-components";
import { device } from "../utils/media";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

     /* Apply media query for mini screens and above */
  @media ${device.mini} {
    ${(props) =>
      props.type === "horizontal" &&
      css`
        flex-direction: column;
        align-items: flex-start;
        gap: 1.6rem;
      `}
  }
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
