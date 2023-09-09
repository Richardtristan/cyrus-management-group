import { styled } from "styled-components";
import Services from "./Services";

export default function Main() {
  return (
    <MainStyled>
      <div className="gradient"></div>
      <Services />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .gradient {
    height: 1100px;
    width: 100vw;
    flex-shrink: 0;
    background: linear-gradient(
      180deg,
      #1bbabf 8.28%,
      rgba(255, 255, 255, 0) 50%
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
