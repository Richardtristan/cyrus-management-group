import { styled } from "styled-components";
import { useInView } from "react-intersection-observer";

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
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 700;
  }
  P {
    color: #000;
    text-align: justify;
    font-family: "Hind";
    font-size: 12px;
    font-weight: 300;
  }
  .notVisible {
    visibility: hidden;
  }
`;
