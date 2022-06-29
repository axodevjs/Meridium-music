import React, { FC } from "react";
import LikeSong from "../../LikeSong/LikeSong";
import CenterControls from "./CenterControls/CenterControls";
import RightControls from "./RightControls/RightControls";
import SongDetails from "./SongDetails/SongDetails";
import * as S from "./Styled";

const Details: FC = () => {
  return (
    <S.Details>
      <S.Left>
        <SongDetails />
        <LikeSong active={false} />
      </S.Left>
      <S.Center>
        <CenterControls />
      </S.Center>
      <S.Right>
        <RightControls />
      </S.Right>
    </S.Details>
  );
};

export default Details;
