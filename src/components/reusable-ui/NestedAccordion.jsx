import { styled } from "styled-components";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { theme } from "../../theme";

export default function NestedAccordion({ title, text }) {
  return (
    <NestedAccordionStyled>
      <Accordion className="accordion">
        <AccordionItem className="accordion-item">
          <AccordionHeader className="accordion-header">
            <h3 className={`accordion-title `}>{title}</h3>
          </AccordionHeader>
          <AccordionBody className="AccordionBody">
            <div className="accordion-body">{text}</div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </NestedAccordionStyled>
  );
}

const NestedAccordionStyled = styled.div`
  margin: 15px;
  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    height: 75px;
    flex-shrink: 0;
    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.White};
    border: 1px solid transparent;

    .accordion-title {
      padding-left: 25px;
      color: ${theme.colors.Dark};
      text-align: justify;
      font-family: "Hind";
      font-size: ${theme.fonts.size.XS};
      font-weight: ${theme.fonts.weights.regular};
    }

    .icon {
      width: 35px;
      height: 35px;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0px 4px 4px 0px ${theme.colors.Dark};

      .accordion-title {
        color: ${theme.colors.Cyan};
      }
    }
  }

  .AccordionBody {
    background-color: ${theme.colors.White};
    box-shadow: 0px 4px 4px 0px ${theme.colors.Dark};
    border-radius: ${theme.borderRadius.round};
    margin-top: 3px;
    display: flex;
    justify-self: flex-end;

    .accordion-body {
      color: ${theme.colors.Dark};
      text-align: justify;
      font-family: "Hind";
      font-size: ${theme.fonts.size.XS};
      font-weight: ${theme.fonts.weights.regular};
      padding: 20px;
    }
  }
`;
