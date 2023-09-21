import { styled } from "styled-components";
import SecondaryButton from "../reusable-ui/SecondaryButton";
import { theme } from "../../theme";

export default function Cta() {
  return (
    <CtaStyled>
      <h3>Discover how I can assist you in realizing your goals. </h3>
      <SecondaryButton label={"Contact"} />
    </CtaStyled>
  );
}

const CtaStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  background-color: ${theme.colors.Cyan};
  width: 100%;
  padding: 50px 0px;
  h3 {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: ${theme.fonts.size.P1};
    font-weight: ${theme.fonts.weights.bigHeavy};
    margin-bottom: 20px;
    color: ${theme.colors.White};
  }
`;
