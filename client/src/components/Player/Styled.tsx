import styled, { css } from "styled-components";
import { COLORS } from "../../utils/variables";

interface PlayerProps {
  show: boolean;
}

export const Player = styled.div<PlayerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.darkGray};
  height: 112px;
  width: 100%;
  justify-content: center;

  ${({ show }) =>
    !show &&
    css`
      display: none;
    `}
`;
