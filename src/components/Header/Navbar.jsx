import { styled } from "styled-components";
import { device } from "../../device/";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import Logo from "../../assets/images/CMG-Horizontal-Logo-RGB-Full-Color.png";
import NavbarLinks from "./NavbarLinks";
import PrimaryButton from "../reusable-ui/PrimaryButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const hideMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarStyled className="navbar">
      <img className="Logo" src={Logo} alt="" />
      <div className="link-desktop">
        <NavbarLinks />
        <PrimaryButton label={"Contact"} />
      </div>
      <AiOutlineMenu onClick={toggleMenu} className="icon" />
      <div className={`link-mobile ${isOpen ? "is-open" : ""}`}>
        <nav>
          <NavbarLinks className={"navbar-menu"} onClick={hideMenu} />
        </nav>
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
    transform: scale(1.5);

    &:hover {
      cursor: pointer;
    }

    @media ${device.tablet} {
      display: none;
    }
  }

  .link-mobile {
    background-color: red;
    position: fixed;
    top: 10vh;
    left: 0;
    height: 90vh;
    width: 100vw;
    .navbar-menu {
      flex-direction: column;
    }
  }

  .link-mobile.is-open {
    display: block;
  }
  .is-open {
    display: block;
  }
  @media ${device.mobileM} {
    .link-mobile {
      display: none;
    }
  }
`;
