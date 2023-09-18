import { styled } from "styled-components";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { device } from "../../device";

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
    border-radius: 10px;
    background: #fff;
    border: 1px solid transparent;

    .accordion-title {
      padding-left: 25px;
      color: #000;
      text-align: justify;
      font-family: "Hind";
      font-size: 12px;
      font-weight: 400;
    }

    .icon {
      width: 35px;
      height: 35px;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      .accordion-title {
        color: #1bbabf;
      }
    }
  }

  .AccordionBody {
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-top: 3px;
    display: flex;
    justify-self: flex-end;

    .accordion-body {
      color: #000;
      text-align: justify;
      font-family: "Hind";
      font-size: 12px;
      font-weight: 400;
      padding: 20px;
    }
  }
`;