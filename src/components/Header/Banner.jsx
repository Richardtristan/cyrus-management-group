import { styled } from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import SecondaryButton from "../reusable-ui/SecondaryButton";

export default function Banner() {
  return (
    <BannerStyled>
      <h1>Complete it services</h1>
      <h3>for Residential, Small & Medium Businesses</h3>

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
    font-size: 60px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 78px;
  }
  button {
    margin: 50px;
  }
`;
