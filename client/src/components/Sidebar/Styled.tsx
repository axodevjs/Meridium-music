import styled from "styled-components";
import { COLORS } from "../../utils/variables";

export const SidebarOut = styled.div`
  width: 270px;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarContainer = styled.div`
  background: ${COLORS.gray};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoBlock = styled.div`
  margin-top: 35px;
  width: 153px;
  height: 44px;
  cursor: pointer;
`;

export const SidebarContainer2 = styled.div``;
