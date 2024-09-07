import styled, { css } from "styled-components";
import { device } from "../utils/media";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}
  ${(props) =>
    props.type === "login" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: rgba(var(--color-grey-0), 0.5);

      border: 1.5px solid var(--color-grey-300);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(15px);
      z-index: 1;
      grid-template-columns: 48rem;
      @media ${device.mini} {
        padding: 2rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};
export default Form;
