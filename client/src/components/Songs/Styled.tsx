import styled from "styled-components";
import { COLORS } from "../../utils/variables";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`;

export const LoadMore = styled.div`
  margin-top: 19px;
  font-size: 16px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  cursor: pointer;

  color: ${COLORS.green};
`;
