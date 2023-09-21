import { styled } from "styled-components";
import { device } from "../../device";
import "animate.css";

import PrimaryButton from "../reusable-ui/PrimaryButton";
import SecondaryButton from "../reusable-ui/SecondaryButton";
import { theme } from "../../theme";

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
  background-color: ${theme.colors.Cyan};
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1,
  h3 {
    color: ${theme.colors.White};
    font-family: "Montserrat", sans-serif;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
  }
  h1 {
    font-size: ${theme.fonts.size.P5};
    margin-bottom: 10px;
  }
  h3 {
    font-size: ${theme.fonts.size.P1};
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
      font-size: ${theme.fonts.size.P2};
      margin-bottom: 78px;
    }
    button {
      margin: 50px;
    }
  }
`;
