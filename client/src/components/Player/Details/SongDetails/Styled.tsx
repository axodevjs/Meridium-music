import styled from "styled-components";
import { COLORS } from "utils/variables";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Cover = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  margin-left: 32px;
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  justify-content: center;
`;

export const Name = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  color: ${COLORS.textColor};
`;

export const SongName = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  color: ${COLORS.textColor};
`;

export const ArtistName = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 8px;

  color: ${COLORS.textColor};
  opacity: 0.72;
`;
