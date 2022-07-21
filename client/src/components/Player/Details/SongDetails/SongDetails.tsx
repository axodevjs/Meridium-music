import React, { FC } from "react";
import * as S from "./Styled";
import AlbumIcon from "assets/img/album1.png";
import playerState from "../../../../store/playerState";
import { API_URL } from "config.ts";

const SongDetails: FC = () => {
  return (
    <S.Container>
      <S.Cover src={playerState.picture} />
      <S.Names>
        <S.SongName>{playerState.name}</S.SongName>
        <S.ArtistName>{playerState.artist}</S.ArtistName>
      </S.Names>
    </S.Container>
  );
};

export default SongDetails;
