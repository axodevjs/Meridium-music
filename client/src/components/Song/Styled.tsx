import styled from "styled-components";
import { COLORS } from "../../utils/variables";

interface SongProps {
  playing: boolean;
}

export const Song = styled.div<SongProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  border-top: 1px solid #4d4d4d;
  padding: 16px 0;

  background: ${(props) =>
    props.playing ? COLORS.grayGradient : COLORS.darkGray};

  &:nth-child(1) {
    border-top: none;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Number = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;
  min-width: 24px;

  color: ${COLORS.textColor};
`;

export const Cover = styled.img`
  width: 54px;
  height: 54px;

  background: url(image.png);
  border-radius: 12px;
  margin-left: 24px;
`;

export const Name = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-left: 16px;

  color: #ffffff;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Listens = styled.div`
  display: flex;
  align-items: center;
`;

export const ListensNumber = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-left: 12px;

  color: ${COLORS.textColor};
`;

export const Sfdong = styled.div``;
