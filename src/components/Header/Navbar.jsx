import Logo from "../../assets/images/CMG-Horizontal-Logo-RGB-Full-Color.png";
import { styled } from "styled-components";
import NavbarLinks from "./NavbarLinks";
import PrimaryButton from "../reusable-ui/PrimaryButton";

export default function Navbar() {
  return (
    <NavbarStyled className="navbar">
      <img className="Logo" src={Logo} alt="" />
      <div>
        <NavbarLinks />
        <PrimaryButton label={"Contact"} />
      </div>
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

  div {
    display: flex;
    align-items: center;
    button {
      margin-left: 10px;
    }
  }
`;
