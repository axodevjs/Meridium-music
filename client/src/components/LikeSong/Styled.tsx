import styled, { css } from "styled-components";

interface Props {
  active: boolean;
  margin?: string;
}

export const LikeSong = styled.div<Props>`
  width: 24px;
  height: 24px;
  margin-left: 25px;
  opacity: 0.72;
  cursor: pointer;
  margin: ${({ margin }) => margin || ""};

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
    `};
`;
