import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="navbar">
        <div className="Logo">logo</div>
        <nav>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/">
            <p>Services</p>
          </Link>
          <Link to="/">
            <p>Price</p>
          </Link>
        </nav>
      </div>
      <div className="banner">banner</div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  .navbar {
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .Logo {
      background-color: Pink;
    }

    nav {
      display: flex;

      p {
        text-decoration: none;
        margin: 5px;
        color: Black;

        &:hover {
            cursor: pointer;
            color: white;
        }
      }
    }
  }
  .banner {
    background-color: blue;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
