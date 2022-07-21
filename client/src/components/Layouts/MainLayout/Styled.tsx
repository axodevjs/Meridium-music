import styled from "styled-components";
import { COLORS } from "utils/variables";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  padding-bottom: 130px;
`;
