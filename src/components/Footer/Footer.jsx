import { styled } from "styled-components";

export default function Footer() {
  return (
    <FotterStyled>
      <div className="link">
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
      </div>
      <div className="centriste">
        Logo
      </div>
      <div className="reseaux">
        <p>F</p>
        <p>Y</p>
        <p>G</p>
        <p>T</p>
        <p>X</p>
        <p>L</p>
      </div>
    </FotterStyled>
  );
}

const FotterStyled = styled.footer`
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  margin-top: 160px;
  
  .link {
    background-color: yellow;
    display: flex;
    flex-direction: column;
    padding:40px;
  }
  .centriste {
    background-color: aqua;
    padding-top: 5px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .reseaux {
    background-color: green;
    padding: 40px;
  }
`;