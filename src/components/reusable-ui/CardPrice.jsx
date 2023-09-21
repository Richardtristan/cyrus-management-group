import { styled } from "styled-components";

import PrimaryButton from "./PrimaryButton";
import { theme } from "../../theme";

export default function CardPrice({ className, price, title }) {
  return (
    <CardPriceStyled className={className}>
      <div className="card-price">
        <p>$</p>
        <p>{price}</p>
        <p>/ month</p>
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <ul>
          <li>Basic Security Package</li>
          <li>Remote Assistance</li>
          <li>Helpdesk - ticket or call</li>
          <li>Advanced Security</li>
          <li>On-site Support</li>
        </ul>
        <p>
          This package includes 1 hour of monthly maintenance (up to 5 devices)
          + 1 hour of monthly IT support + software bundle (that includes
          security, monitoring and remote access for assistance)
        </p>
      </div>
      <PrimaryButton className={"card-button"} label={"Learn More"} />
    </CardPriceStyled>
  );
}

const CardPriceStyled = styled.div`
  width: 250px;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 25px;
  .card-price {
    width: 100px;
    height: 100px;
    transform: rotate(45deg) translateY(35px) translateX(35px);
    flex-shrink: 0;
    border-radius: 10px;
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
        font-size: ${theme.fonts.size.P3};
        font-weight: ${theme.fonts.weights.bold};
      }
      &:nth-child(3) {
        padding-left: 50px;
        opacity: 0.3;
      }
    }
  }
  .card-content {
    background-color: ${theme.colors.Cyan};
    border-radius: ${theme.borderRadius.round};
    padding: 0 10px;
    padding-top: 100px;
    padding-bottom: 60px;
    color: ${theme.colors.White};
    h4 {
      color: ${theme.colors.White};
      font-family: "Montserrat", sans-serif;
      font-size: ${theme.fonts.size.P3};
      font-weight: ${theme.fonts.weights.bold};
      text-align: center;
      text-transform: uppercase;
    }
    ul {
      padding: 0;
      margin: 20px;
      li {
        list-style: none;
        text-align: center;
        color: ${theme.colors.White};
        text-align: center;
        font-family: "Hind";
        font-size: ${theme.fonts.size.P1};
        &:nth-child(4),
        &:nth-child(5) {
          text-decoration: line-through;
          opacity: 0.5;
        }
      }
    }
    p {
      color: ${theme.colors.White};
      text-align: justify;
      font-family: "Hind";
      font-size: ${theme.fonts.size.XS};
      font-weight: ${theme.fonts.weights.light};
    }
  }
  .card-button {
    transform: translateY(-25px);
  }
`;
