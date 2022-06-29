import React, { FC } from "react";
import * as S from "./Styled";
import AlbumIcon from "assets/img/album1.png";

const SongDetails: FC = () => {
  return (
    <S.Container>
      <S.Cover src={AlbumIcon} />
      <S.Names>
        <S.SongName>Shape of you</S.SongName>
        <S.ArtistName>Ed sheeran</S.ArtistName>
      </S.Names>
    </S.Container>
  );
};

export default SongDetails;
