import styled from "styled-components";

const ButtonText = styled.button`
  color: var(--color-brand-800);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  border-radius: var(--border-radius-tiny);

  &:hover,
  &:active {
    background: var(--color-grey-100);
  }
`;

export default ButtonText;
