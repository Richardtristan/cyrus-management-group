import { styled } from "styled-components";
import brandmark from "../../assets/images/CMG-Brandmark-RGB-White.png";
import Links from "../reusable-ui/Links";
import { BsTwitter, BsSkype } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <FotterStyled>
      <div>
        <Links className={"link-footer"} />
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
  background-color: #1babbf;
  margin-top: 160px;
  div {
    display: flex;
    justify-content: space-between;

    .link-footer {
      flex-direction: column;
      padding: 40px;
    }

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
          color: white;
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
            border-bottom: 3px solid white;
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
      padding: 40px;
      display: flex;
      flex-direction: column;

      .icon {
        color: white;
        padding: 5px;
        margin: 3px;
        width: 25px;
        height: 25px;

        &:hover {
          cursor: pointer;
          background-color: white;
          color: #1babbf;
          border-radius: 50%;
          transform: translateY(-3px);
          transition: 0.3s ease-in-out;
        }
      }
    }
  }
  .copyright {
    text-align: right;
    color: #fff;
    font-family: "Hind";
    font-size: 12px;
    font-weight: 300;
  }
`;
