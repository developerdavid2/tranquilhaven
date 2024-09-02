import styled from "styled-components";
import Heading from "./Heading";

const StyledEmpty = styled.div`
  text-align: center;
  padding: 2rem;
`;
const EmptyImage = styled.img`
  height: 29rem;
`;

function Empty({ resourceName }) {
  return (
    <StyledEmpty>
      <EmptyImage
        src={`empty-${resourceName}.svg`}
        alt={`No ${resourceName} found`}
      />
      <Heading as="h2">No {resourceName} could be found.</Heading>
      {resourceName === "bookings" && (
        <p>
          Once a reservation is made, booking details will appear here for easy
          management.
        </p>
      )}
    </StyledEmpty>
  );
}

export default Empty;
