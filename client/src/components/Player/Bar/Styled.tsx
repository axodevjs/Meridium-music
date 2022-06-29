import styled from "styled-components";

interface Props {
  percentage: number;
}

export const BarProgress = styled.div<Props>`
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    #ffffff ${(props) => props.percentage}%,
    #4d4d4d 0
  );
`;

export const Baer = styled.div``;
