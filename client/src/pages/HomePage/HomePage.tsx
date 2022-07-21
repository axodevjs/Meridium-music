import React, { useEffect, useState } from "react";
import PageLayout from "../../components/Layouts/PageLayout/PageLayout";
import * as S from "./Styled";
import Songs from "components/Songs/Songs";
import { getAllTracks } from "../../utils/tracks";
import tracksState from "../../store/tracksState";
import { observer } from "mobx-react-lite";

const HomePage: React.FC = () => {
  const [tracks] = useState(() => tracksState);

  useEffect(() => {
    getAllTracks();
  }, []);

  const loadMore = async () => {
    getAllTracks(tracks.tracks.length + 20);
  };

  return (
    <PageLayout>
      <S.Title>New songs</S.Title>
      <Songs loadMore={loadMore} />
    </PageLayout>
  );
};

export default observer(HomePage);
