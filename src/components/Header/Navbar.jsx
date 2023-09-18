import { styled } from "styled-components";
import { device } from "../../device/";
import { AiOutlineMenu } from "react-icons/ai";

import Logo from "../../assets/images/CMG-Horizontal-Logo-RGB-Full-Color.png";
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
      <AiOutlineMenu className="icon" />
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
    display: none;

    @media ${device.tablet} {
      display: flex;
      align-items: center;
      button {
        margin-left: 10px;
      }
    }
  }

  .icon {
    color: #1bbabf;
    margin-right: 20px;

    &:hover {
      cursor: pointer;
    }

    @media ${device.tablet} {
      display: none;
    }
  }
`;
