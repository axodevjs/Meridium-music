import styled from "styled-components";
import { COLORS } from "utils/variables";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  mex-height: 100vh;
  background: ${COLORS.darkGray};
  color: ${COLORS.textColor};
  font-family: "Manrope", sans-serif;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
