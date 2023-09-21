import { styled } from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { device } from "../../device";
import { theme } from "../../theme";

export default function CardPriceHourly() {
  return (
    <CardPriceHourlyStyled>
      <div className="card-price">
        <p>$</p>
        <p>70</p>
        <p>/ Hour</p>
      </div>
      <div className="card-content">
        <h4>Hourly rate</h4>
        <p>This is our hourly rate</p>
      </div>
      <PrimaryButton className={"card-button"} label={"Learn More"} />
    </CardPriceHourlyStyled>
  );
}

const CardPriceHourlyStyled = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  .card-price {
    width: 100px;
    height: 100px;
    transform: rotate(45deg) translateY(35px) translateX(35px);
    flex-shrink: 0;
    border-radius: ${theme.borderRadius.round};
    border: 3px solid ${theme.colors.Cyan};
    background: ${theme.colors.White};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      transform: rotate(-45deg);
      color: ${theme.colors.Cyan};
      font-family: "Hind";
      font-size: ${theme.fonts.size.XXXS};
      font-weight: 100;

      &:nth-child(1) {
        padding-right: 75px;
        opacity: 0.3;
      }
      &:nth-child(2) {
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        font-weight: ${theme.fonts.weights.bold};
      }
      &:nth-child(3) {
        padding-left: 50px;
        opacity: 0.3;
      }
    }
  }
  .card-content {
    width: 100%;
    background-color: ${theme.colors.Cyan};
    border-radius: ${theme.borderRadius.round};
    padding: 0 10px;
    padding-top: 80px;
    padding-bottom: 60px;
    color: ${theme.colors.White};
    h4 {
      color: ${theme.colors.White};
      font-family: "Montserrat", sans-serif;
      font-size: ${theme.fonts.size.P3};
      font-weight: ${theme.fonts.weights.bold};
      text-align: center;
      margin-bottom: 5px;
    }
    p {
      color: ${theme.colors.White};
      text-align: center;
      font-family: "Hind";
      font-size: ${theme.fonts.size.XS};
      font-weight: ${theme.fonts.weights.light};
    }
  }
  .card-button {
    transform: translateY(-25px);
  }

  @media ${device.tablet} {
    width: 550px;
  }
`;
