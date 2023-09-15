import { styled } from "styled-components";
import Services from "./Services";
import Gradient from "../reusable-ui/Gradient";
import Cta from "./Cta";
import Price from "./Price";
import Faq from "./Faq";

export default function Main() {
  return (
    <MainStyled>
      <Gradient className={"gradient-top"} />
      <Services />
      <Cta />
      <Price />
      <Faq />
      <Gradient className={"gradient-bottom"} />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;

  .gradient-top {
    top: 0;
    left: 0;
  }
  .gradient-bottom {
    transform: rotate(180deg);
    bottom: 0;
    left: 0;
  }
`;
