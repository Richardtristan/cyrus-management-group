import { styled } from "styled-components";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <HeaderStyled>
      <Navbar />
      <div className="banner">
        <h1>Complete it services</h1>
        <h3>for Residential, Small & Medium Businesses</h3>

        <div className="cta">
          <button>Learn more</button>
          <button>Contact</button>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  .banner {
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

    .cta {

      button {
        width: 140px;
        height: 50px;
        color: #1bbabf;
        background-color: white;
        border: 1px solid white;
        border-radius: 40px;
        margin: 10px;
        font-family: 'Hind', sans-serif;

        &:hover {
          cursor: pointer;
          color: white;
          background-color: #1bbabf;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
`;
