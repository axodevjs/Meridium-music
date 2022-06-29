import styled from "styled-components";
import { COLORS } from "utils/variables";
export const RightControls = styled.div`
  display: flex;
  align-items: center;
`;

export const Time = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  text-align: right;
  margin-right: 32px;

  color: ${COLORS.grayTextColor};
`;
