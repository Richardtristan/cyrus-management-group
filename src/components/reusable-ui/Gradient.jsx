import { styled } from "styled-components";
import { theme } from "../../theme";

export default function Gradient({ className }) {
  return <GradientStyled className={className}></GradientStyled>;
}

const GradientStyled = styled.div`
  height: 1100px;
  width: 100vw;
  flex-shrink: 0;
  background: linear-gradient(
    180deg,
    ${theme.colors.Cyan} 8.28%,
    rgba(255, 255, 255, 0) 50%
  );
  position: absolute;
  z-index: -1;
`;
