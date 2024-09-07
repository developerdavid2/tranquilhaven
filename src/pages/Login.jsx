import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import BackdropText from "../ui/BackdropText";
import { device } from "../utils/media";

const LoginLayout = styled.div`
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  overflow: hidden;

  @media ${device.mini} {
    grid-template-columns: 32rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <BackdropText />
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
