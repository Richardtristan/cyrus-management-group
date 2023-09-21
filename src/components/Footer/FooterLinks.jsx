import { HashLink as Link } from "react-router-hash-link";
import { styled } from "styled-components";
import { device } from "../../device";
import { theme } from "../../theme";

export default function FooterLinks({ className }) {
  return (
    <LinksStyled className={className}>
      <Link className="link" to="/Main/Services#Services">
        Services
      </Link>
      <Link className="link" to="/Main/Price#Price">
        Price
      </Link>
      <Link className="link" to="/Main/Faq#Faq">
        F.a.q
      </Link>
    </LinksStyled>
  );
}

const LinksStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;

  .link {
    color: ${theme.colors.White};
    position: relative;
    text-decoration: none;
    margin: 5px 15px;
    font-family: "Montserrat", sans-serif;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.regular};
    text-transform: uppercase;
    width: auto;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 4px;
      background-color: ${theme.colors.White};
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
      color: ${theme.colors.White};
    }
  }

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
