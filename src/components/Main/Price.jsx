import { styled } from "styled-components";

import CardPrice from "../reusable-ui/CardPrice";
import CardPriceHourly from "./CardPriceHourly";
import { device } from "../../device";
import { theme } from "../../theme";

export default function Price() {
  return (
    <PriceStyled id="Price">
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
    color: ${theme.colors.Dark};
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bigHeavy};
    margin: 30px 0;
  }
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  @media ${device.tablet} {
    .cards {
      flex-direction: row;
    }
  }
`;
