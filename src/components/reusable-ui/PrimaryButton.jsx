import { styled } from "styled-components";

export default function PrimaryButton({ label }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 140px;
  height: 50px;
  color: #1bbabf;
  background-color: white;
  border: 2px solid #1bbabf;
  border-radius: 40px;
  font-family: "Hind", sans-serif;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: #1bbabf;
    border: 2px solid white;
    transition: all 0.5s ease-in-out;
  }
`;
