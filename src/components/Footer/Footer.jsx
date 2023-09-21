import { styled } from "styled-components";
import brandmark from "../../assets/images/CMG-Brandmark-RGB-White.png";
import { BsTwitter, BsSkype } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import FooterLinks from "./FooterLinks";
import { device } from "../../device";
import { theme } from "../../theme";

export default function Footer() {
  return (
    <FotterStyled>
      <div>
        <FooterLinks />
        <div className="centriste">
          <img src={brandmark} alt="BrandMark Cyrus Management Group" />
          <div className="contact">
            <a href="tel:(407) 590-3830" className="phone">
              (407) 590-3830
            </a>
            <a href="mailto:contact@cyrusmanagementgroup.com" className="mail">
              contact@cyrusmanagementgroup.com
            </a>
          </div>
        </div>
        <div className="networks">
          <BsTwitter className="icon" />
          <FaFacebookF className="icon" />
          <AiFillInstagram className="icon" />
          <BsSkype className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
      </div>
      <p className="copyright">
        ©2023 Copyright Cyrus Management Group. All Rights Reserved
      </p>
    </FotterStyled>
  );
}

const FotterStyled = styled.footer`
  background-color: ${theme.colors.Cyan};
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .centriste {
      padding-top: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      img {
        width: 120px;
        margin-bottom: 25px;
      }
      .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        a {
          color: ${theme.colors.White};
          text-decoration: none;
          display: inline-block;
          font-weight: lighter;
          padding: 0.5em;
          margin-left: -0.5em;
          position: relative;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

          &:before,
          &:after {
            position: absolute;
            content: "";
            border-bottom: 3px solid ${theme.colors.White};
            border-radius: 1em;
            bottom: 0.3em;
            transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          }

          &:before {
            width: 1em;
            transform-origin: left;
          }

          &:after {
            width: 82%;
            left: 1em;
            transform: translateX(110%);
          }

          &:hover:before {
            transform: scaleX(0.3);
          }

          &:hover:after {
            transform: translateX(0);
          }
        }
      }
    }
    .networks {
      padding: 40px 80px;
      display: flex;
      flex-direction: row;

      .icon {
        color: ${theme.colors.White};
        padding: 5px;
        margin: 3px;
        width: 25px;
        height: 25px;

        &:hover {
          cursor: pointer;
          background-color: ${theme.colors.White};
          color: ${theme.colors.Cyan};
          border-radius: 50%;
          transform: translateY(-3px);
          transition: 0.3s ease-in-out;
        }
      }
    }
  }
  .copyright {
    text-align: right;
    color: ${theme.colors.White};
    font-family: "Hind";
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights};
  }

  @media ${device.tablet} {
    div {
      flex-direction: row;
      .networks {
        padding: 40px 40px;
        flex-direction: column;
      }
    }
  }
`;
