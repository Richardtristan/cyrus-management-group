import { styled } from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { device } from "../../device";

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
    border-radius: 10px;
    border: 3px solid #1ca6b5;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      transform: rotate(-45deg);
      color: #1ca6b5;
      font-family: "Hind";
      font-size: 8px;
      font-weight: 100;

      &:nth-child(1) {
        padding-right: 75px;
        opacity: 0.3;
      }
      &:nth-child(2) {
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        font-weight: 700;
      }
      &:nth-child(3) {
        padding-left: 50px;
        opacity: 0.3;
      }
    }
  }
  .card-content {
    width: 100%;
    background-color: #1bbabf;
    border-radius: 10px;
    padding: 0 10px;
    padding-top: 80px;
    padding-bottom: 60px;
    color: white;
    h4 {
      color: #fff;
      font-family: "Montserrat", sans-serif;
      font-size: 24px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 5px;
    }
    p {
      color: #fff;
      text-align: center;
      font-family: "Hind";
      font-size: 12px;
      font-weight: 300;
    }
  }
  .card-button {
    transform: translateY(-25px);
  }


  @media ${device.tablet} {
    width: 550px;
  }
`;
