import { styled } from "styled-components";
import Services from "./Services";
import Gradient from "../reusable-ui/Gradient";
import SecondaryButton from "../reusable-ui/SecondaryButton";

export default function Main() {
  return (
    <MainStyled>
      <Gradient />
      <Services />
      <div className="cta">
        <h3>Discover how I can assist you in realizing your goals. </h3>

        <SecondaryButton label={"Contact"} />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    h3 {
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 20px;
    }
  }
`;
