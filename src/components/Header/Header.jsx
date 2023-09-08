import { styled } from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="navbar">
        <div className="Logo">logo</div>
        <nav>
          <p>Links</p>
          <p>Links</p>
          <p>Links</p>
        </nav>
      </div>
      <div className="banner">banner</div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  .navbar {
    background-color: red;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .Logo {
      background-color: Pink;
    }

    nav {
      background-color: purple;
      display: flex;

      p {
        padding: 5px;
      }
    }
  }
  .banner {
    background-color: blue;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
