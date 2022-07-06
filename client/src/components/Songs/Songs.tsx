import React from "react";
import Song from "../Song/Song";
import * as S from "./Styled";

interface SongsProps {
  songs: [];
}

const Songs: React.FC<SongsProps> = ({ songs }) => {
  return (
    <S.Wrapper>
      <Song playing={false} listNumber={1} />
      <Song playing={true} listNumber={2} />
      <Song playing={false} listNumber={32} />
    </S.Wrapper>
  );
};

export default Songs;
