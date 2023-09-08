import { styled } from "styled-components";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <HeaderStyled>
        <Navbar />
      <div className="banner">banner</div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  .banner {
    background-color: blue;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
