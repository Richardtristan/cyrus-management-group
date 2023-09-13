import { styled } from "styled-components";
import SecondaryButton from "../reusable-ui/SecondaryButton";

export default function Cta() {
  return (
    <CtaStyled>
    <h3>Discover how I can assist you in realizing your goals. </h3>

    <SecondaryButton label={"Contact"} />
  </CtaStyled>
  )
}

const CtaStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    h3 {
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 20px;
    }
`;