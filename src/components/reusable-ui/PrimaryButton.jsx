import { styled } from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ className, label }) {
  return (
    <PrimaryButtonStyled className={className}>
      <span>{label}</span>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 140px;
  height: 50px;
  color: ${theme.colors.Cyan};
  background-color: white;
  border: 2px solid ${theme.colors.Cyan};
  border-radius: 40px;
  font-family: "Hind", sans-serif;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.White};
    background-color: ${theme.colors.Cyan};
    border: 2px solid ${theme.colors.White};
    transition: all 0.5s ease-in-out;
  }
`;
