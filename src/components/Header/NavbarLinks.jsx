import { styled } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { theme } from "../../theme";

export default function NavbarLinks({ className, onClick }) {
  return (
    <LinksStyled className={className}>
      <Link className="link" to="/Main/Services#Services" onClick={onClick}>
        Services
      </Link>
      <Link className="link" to="/Main/Price#Price" onClick={onClick}>
        Price
      </Link>
      <Link className="link" to="/Main/Faq#Faq" onClick={onClick}>
        F.a.q
      </Link>
    </LinksStyled>
  );
}

const LinksStyled = styled.nav`
  display: flex;

  .link {
    color: ${theme.colors.Dark};
    position: relative;
    text-decoration: none;
    margin: 5px 15px;
    font-family: "Montserrat", sans-serif;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 4px;
      background-color: ${theme.colors.Cyan};
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
      color: ${theme.colors.Cyan};
    }
  }
`;
