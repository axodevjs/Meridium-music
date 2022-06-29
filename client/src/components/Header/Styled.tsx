import styled from "styled-components";
import { COLORS } from "../../utils/variables";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 35px;
  align-items: center;
`;

export const PageName = styled.header`
  margin-left: 30px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  color: #ffffff;
`;

export const AddSongBlock = styled.header`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 49px;
`;

export const AddSongText = styled.header`
  margin-left: 16px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: ${COLORS.textColor};
  opacity: 0.72;
`;

export const Header2 = styled.header``;
