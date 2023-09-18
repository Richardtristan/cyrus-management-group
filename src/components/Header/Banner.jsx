import { styled } from "styled-components";
import { device } from "../../device";
import "animate.css";

import PrimaryButton from "../reusable-ui/PrimaryButton";
import SecondaryButton from "../reusable-ui/SecondaryButton";

export default function Banner() {
  return (
    <BannerStyled>
      <h1 className="fadeInDown">Complete it services</h1>
      <h3 className="fadeInUp">for Residential, Small & Medium Businesses</h3>

      <div>
        <PrimaryButton label="Learn more" />
        <SecondaryButton label="Contact" />
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
    font-size: 42px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 18px;
    margin-bottom: 30px;
  }
  button {
    margin: 15px;
  }

  .fadeInDown {
    animation: fadeInDown;
    animation-duration: 3s;
  }
  .fadeInUp {
    animation: fadeInUp;
    animation-duration: 3s;
  }

  @media ${device.mobileS} {
    button {
      margin: 10px;
    }
  }
  @media ${device.tablet} {
    h3 {
      font-size: 20px;
      margin-bottom: 78px;
    }
    button {
      margin: 50px;
    }
  }
`;
