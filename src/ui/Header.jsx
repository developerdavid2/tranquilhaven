import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import { device } from "../utils/media";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

const ResponsiveLogo = styled.div`
  @media ${device.mini} {
    height: 100%;
    width: 100%;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <ResponsiveLogo>
        <Logo />
      </ResponsiveLogo>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
