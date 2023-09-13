import { styled } from "styled-components";
import brandmark from "../../assets/images/CMG-Brandmark-RGB-White.png";
import Links from "../reusable-ui/Links";
import { BsTwitter, BsSkype, BsTelephoneOutboundFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <FotterStyled>
      <div>
        <Links className={"link-footer"} />
        <div className="centriste">
          <img src={brandmark} alt="BrandMark Cyrus Management Group" />
          <div className="contact">
            <div className="phone">
              <BsTelephoneOutboundFill className="icon" />
              <p> (407) 590-3830</p>
            </div>
            <div className="mail">
              <AiOutlineMail className="icon" />
              <p>contact@cyrusmanagementgroup.com</p>
            </div>
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

        .icon {
          color: white;
          margin-right: 8px;
        }
        p {
          color: white;
        }
        .phone:hover,
        .mail:hover {
          .icon,
          p {
            cursor: pointer;
            transform: translateY(-2px);
            text-shadow: 2px 2px 2px #D3D3D3;
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
