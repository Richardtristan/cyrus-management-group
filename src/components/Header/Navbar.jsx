import { Link } from "react-router-dom";
import Logo from "../../assets/images/CMG-Horizontal-Logo-RGB-Full-Color.png";
import { styled } from "styled-components";

export default function Navbar() {
  return (
    <NavbarStyled className="navbar">
      <img className="Logo" src={Logo} alt="" />
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
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .Logo {
    height: 50px;
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
`;
