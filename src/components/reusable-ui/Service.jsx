import { styled } from "styled-components";
import { useInView } from "react-intersection-observer";
import { theme } from "../../theme";

export default function Service({ Title, Text, className }) {
  const { ref, inView } = useInView();

  return (
    <ServiceStyled
      className={` ${inView ? `${className}` : "notVisible"}`}
      ref={ref}
    >
      <h3>{Title}</h3>
      <p>{Text}</p>
    </ServiceStyled>
  );
}

const ServiceStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 35vw;
  h3 {
    color: ${theme.colors.Dark};
    font-family: "Montserrat", sans-serif;
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bold};
  }
  P {
    color: ${theme.colors.Dark};
    text-align: justify;
    font-family: "Hind";
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.light};
  }
  .notVisible {
    visibility: hidden;
  }
`;
