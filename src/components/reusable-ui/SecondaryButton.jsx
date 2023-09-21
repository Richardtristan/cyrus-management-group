import { styled } from "styled-components";
import { theme } from "../../theme";

export default function SecondaryButton({ className, label }) {
  return (
    <SecondaryButtonStyled className={className}>
      <span>{label}</span>
    </SecondaryButtonStyled>
  );
}

const SecondaryButtonStyled = styled.button`
  width: 140px;
  height: 50px;
  color: ${theme.colors.White};
  background-color: ${theme.colors.Cyan};
  border: 2px solid ${theme.colors.White};
  border-radius: 40px;
  font-family: "Hind", sans-serif;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.Cyan};
    background-color: ${theme.colors.White};
    border: 2px solid ${theme.colors.Cyan};
    transition: all 0.5s ease-in-out;
  }
`;
