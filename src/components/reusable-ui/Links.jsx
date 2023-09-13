import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Links({className}) {
  return (
    <LinksStyled className={className}>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/">
        Services
      </Link>
      <Link className="link" to="/">
        Price
      </Link>
    </LinksStyled>
  );
}

const LinksStyled = styled.nav`
  display: flex;

  .link {
    color: #18272f;
    position: relative;
    text-decoration: none;
    margin: 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 4px;
      background-color: #1bbabf;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }
    &:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
    &:hover {
      color: #1bbabf;
    }
  }
`;
