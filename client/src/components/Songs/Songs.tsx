import React, { useEffect, useState } from "react";
import Song from "../Song/Song";
import * as S from "./Styled";
import { getAllTracks } from "../../api/tracks";
import axios from "axios";
import { API_URL } from "config.ts";
import tracksState from "../../store/tracksState";
import { observer } from "mobx-react-lite";

interface Props {
  loadMore?: void;
}

const Songs: React.FC<Props> = ({ loadMore }) => {
  const [tracks] = useState(() => tracksState);

  return (
    <S.Wrapper>
      {!tracks.loaded && "Loading..."}
      {tracks?.tracks.map((track, i) => (
        <Song key={i} details={track} listNumber={i + 1} />
      ))}
      {loadMore && <S.LoadMore onClick={loadMore}>Load more</S.LoadMore>}
    </S.Wrapper>
  );
};

export default observer(Songs);
