import { styled } from "styled-components";
import NestedAccordion from "../reusable-ui/NestedAccordion";

export default function Faq() {
  return (
    <FaqStyled>
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
    color: #000;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-top: 120px;
    margin-bottom: 62px;
  }
`;
