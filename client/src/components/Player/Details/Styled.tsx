import styled from "styled-components";
import { COLORS } from "utils/variables";

export const Details = styled.div`
  display: grid;
  align-content: center;
  height: 100%;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Center = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
`;

export const Right = styled.div`
  display: grid;
  align-content: center;
  justify-items: end;
`;

export const Details2 = styled.div``;
