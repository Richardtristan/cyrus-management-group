import { styled } from "styled-components";
import { device } from "../../device/";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
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
        <div className="logo-with-menu">
          <img className="Logo" src={Logo} alt="" />
          <RxCross2 onClick={toggleMenu} className="icon" />
        </div>
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

  .link-desktop {
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
    z-index: 10;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding: 20px;

    .logo-with-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .icon {
        transform: scale(2);
      }
    }

    .navbar-menu {
      flex-direction: column;
      text-align: center;
      margin-top: 40px;

      .link {
        padding: 20px 0;
        background-color: #f1f1f1;
      }
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
