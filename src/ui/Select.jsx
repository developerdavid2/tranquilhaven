import styled from "styled-components";

const StyledSelect = styled.select`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);

  option {
    cursor: pointer;
    background-color: var(--color-grey-0);
    color: var(--color-grey-700);
    padding: 0.4rem;
  }

  option:hover {
    background-color: var(--color-brand-700); /* This sets the hover color */
    color: var(--color-brand-50); /* Optionally, set the text color on hover */
  }
`;

function Select({ options, value, ...props }) {
  return (
    <StyledSelect value={value} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
