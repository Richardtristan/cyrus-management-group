import Logo from "../../assets/images/CMG-Horizontal-Logo-RGB-Full-Color.png";
import { styled } from "styled-components";
import Links from "./Links";

export default function Navbar() {
  return (
    <NavbarStyled className="navbar">
      <img className="Logo" src={Logo} alt="" />
      <Links />
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
`;
