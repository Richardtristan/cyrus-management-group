import { styled } from "styled-components";
import brandmark from "../../assets/images/Brandmark_Cyrus--WIP.png";

export default function Footer() {
  return (
    <FotterStyled>
      <div>
        <div className="link">
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
        <div className="centriste">
          <img src={brandmark} alt="BrandMark Cyrus Management Group" />
          <div>
            <p>Tel : 0000/00.00.00</p>
            <p>Mail : contact@cyrus.com</p>
          </div>
        </div>
        <div className="reseaux">
          <p>F</p>
          <p>Y</p>
          <p>G</p>
          <p>T</p>
          <p>X</p>
          <p>L</p>
        </div>
      </div>
      <p className="copyright">
        ©2023 Copyright Cyrus Management Group. All Rights Reserved
      </p>
    </FotterStyled>
  );
}

const FotterStyled = styled.footer`
    background-color: antiquewhite;
    margin-top: 160px;
  div {
    display: flex;
    justify-content: space-between;

    .link {
      background-color: yellow;
      display: flex;
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
    .reseaux {
      background-color: green;
      padding: 40px;
      display: flex;
      flex-direction: column;
    }
  }
  .copyright {
    text-align: right;
  }
`;
