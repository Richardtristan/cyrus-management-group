import { styled } from "styled-components";
import Button from "../reusable-ui/PrimaryButton";

export default function Banner() {
  return (
    <BannerStyled>
      <h1>Complete it services</h1>
      <h3>for Residential, Small & Medium Businesses</h3>

      <div>
        <Button label="Learn more"/>
        <Button label="Contact" />
      </div>
    </BannerStyled>
  );
}

const BannerStyled = styled.div`
    background-color: #1bbabf;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1,
    h3 {
      color: white;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      text-transform: uppercase;
    }
    h1 {
      font-size: 60px;
    }
    h3 {
      font-size: 20px;
    }
  `;
