import { styled } from "styled-components";
import brandmark from "../../assets/images/Brandmark_Cyrus--WIP.png";
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
          <div>
            <p>Tel : 0000/00.00.00</p>
            <p>Mail : contact@cyrus.com</p>
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
      background-color: aqua;
      padding-top: 5px;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      img {
        width: 150px;
        margin-bottom: 35px;
      }
      div {
        display: flex;
        flex-direction: column;
        text-align: center;
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
  }
`;
