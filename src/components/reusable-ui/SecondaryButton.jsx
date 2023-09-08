import { styled } from "styled-components";

export default function SecondaryButton({ label }) {
  return (
    <SecondaryButtonStyled>
      <span>{label}</span>
    </SecondaryButtonStyled>
  );
}

const SecondaryButtonStyled = styled.button`
  width: 140px;
  height: 50px;
  color: white;
  background-color: #1bbabf;
  border: 2px solid white;
  border-radius: 40px;
  margin: 10px;
  font-family: "Hind", sans-serif;

  &:hover {
    cursor: pointer;
    color: #1bbabf;
    background-color: white;
    transition: all 0.5s ease-in-out;
  }
`;
