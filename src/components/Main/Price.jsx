import { styled } from "styled-components";
import CardPrice from "../reusable-ui/CardPrice";
import CardPriceHourly from "./CardPriceHourly";

export default function Price() {
  return (
    <PriceStyled>
      <h2>Price</h2>
      <div className="cards">
        <CardPrice price={140} title={"Montly Basic"} />
        <CardPrice price={840} title={"Yearly Basic"} />
      </div>
      <CardPriceHourly />
    </PriceStyled>
  );
}

const PriceStyled = styled.div`
margin-top: 120px;
  h2 {
    text-align: center;
    text-transform: uppercase;
    color: #000;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin: 30px 0;
  }
  .cards {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
  }
`;
