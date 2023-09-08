import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="navbar">
        <div className="Logo">logo</div>
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/">
            Services
          </Link>
          <Link className="link" to="/">
            Price
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

      .link {
        color: #18272f;
        position: relative;
        text-decoration: none;
        margin: 5px;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          border-radius: 4px;
          background-color: #1bbabf;
          bottom: 0;
          left: 0;
          transform-origin: right;
          transform: scaleX(0);
          transition: transform 0.3s ease-in-out;
        }
        &:hover::before {
          transform-origin: left;
          transform: scaleX(1);
        }
        &:hover {
            color: #1bbabf;
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
