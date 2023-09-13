import { styled } from "styled-components";
import Services from "./Services";
import Gradient from "../reusable-ui/Gradient";
import Cta from "./Cta";
import Price from "./Price";

export default function Main() {
  return (
    <MainStyled>
      <Gradient />
      <Services />
      <Cta />
      <Price />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
