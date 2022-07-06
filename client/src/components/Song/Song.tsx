import React, { FC } from "react";
import LikeSong from "../LikeSong/LikeSong";
import * as S from "./Styled";
import AlbumCover from "assets/img/album1.png";

interface SongProps {
  playing: boolean;
  listNumber: number;
}

const Song: FC<SongProps> = ({ playing, listNumber }) => {
  return (
    <S.Song playing={playing}>
      <S.Left>
        {playing ? (
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M11.97 22.0001C17.4928 22.0001 21.97 17.5229 21.97 12.0001C21.97 6.47721 17.4928 2.00006 11.97 2.00006C6.44715 2.00006 1.97 6.47721 1.97 12.0001C1.97 17.5229 6.44715 22.0001 11.97 22.0001Z"
              fill="white"
            />
            <path
              d="M14.97 10.2301L12.07 8.56006C11.35 8.14006 10.48 8.14006 9.75999 8.56006C9.03999 8.98006 8.60999 9.72006 8.60999 10.5601V13.9101C8.60999 14.7401 9.03999 15.4901 9.75999 15.9101C10.12 16.1201 10.52 16.2201 10.91 16.2201C11.31 16.2201 11.7 16.1201 12.06 15.9101L14.96 14.2401C15.68 13.8201 16.11 13.0801 16.11 12.2401C16.13 11.4001 15.7 10.6501 14.97 10.2301Z"
              fill="white"
            />
          </svg>
        ) : (
          <S.Number>{listNumber}</S.Number>
        )}

        <S.Cover src={AlbumCover} alt="" />
        <S.Name>Shiver</S.Name>
      </S.Left>
      <S.Right>
        <S.Listens>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M2.75 18.65C2.34 18.65 2 18.31 2 17.9V12.2C1.95 9.48999 2.96 6.92999 4.84 5.00999C6.72 3.09999 9.24 2.04999 11.95 2.04999C17.49 2.04999 22 6.55999 22 12.1V17.8C22 18.21 21.66 18.55 21.25 18.55C20.84 18.55 20.5 18.21 20.5 17.8V12.1C20.5 7.38999 16.67 3.54999 11.95 3.54999C9.64 3.54999 7.5 4.43999 5.91 6.05999C4.31 7.68999 3.46 9.85999 3.5 12.18V17.89C3.5 18.31 3.17 18.65 2.75 18.65Z"
              fill="white"
            />
            <path
              d="M5.94 12.45H5.81C3.71 12.45 2 14.16 2 16.26V18.14C2 20.24 3.71 21.95 5.81 21.95H5.94C8.04 21.95 9.75 20.24 9.75 18.14V16.26C9.75 14.16 8.04 12.45 5.94 12.45Z"
              fill="white"
            />
            <path
              d="M18.19 12.45H18.06C15.96 12.45 14.25 14.16 14.25 16.26V18.14C14.25 20.24 15.96 21.95 18.06 21.95H18.19C20.29 21.95 22 20.24 22 18.14V16.26C22 14.16 20.29 12.45 18.19 12.45Z"
              fill="white"
            />
          </svg>
          <S.ListensNumber>460,228,511</S.ListensNumber>
        </S.Listens>
        <LikeSong active={false} margin="0 0 0 62px" />
      </S.Right>
    </S.Song>
  );
};

export default Song;
