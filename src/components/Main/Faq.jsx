import { styled } from "styled-components";
import NestedAccordion from "../reusable-ui/NestedAccordion";
import { device } from "../../device";
import { theme } from "../../theme";

export default function Faq() {
  return (
    <FaqStyled id="Faq">
      <h2>F.A.Q</h2>
      <NestedAccordion title={"Title 1"} text={"Text"} />
      <NestedAccordion title={"Title 2"} text={"Text"} />
      <NestedAccordion title={"Title 3"} text={"Text"} />
    </FaqStyled>
  );
}

const FaqStyled = styled.div`
  margin-bottom: 160px;

  h2 {
    color: ${theme.colors.Dark};
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bold};
    margin-top: 120px;
    margin-bottom: 62px;
  }
`;
