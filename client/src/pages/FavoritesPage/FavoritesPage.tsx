import React, { FC } from "react";
import * as S from "./Styled";
import Songs from "../../components/Songs/Songs";
import PageLayout from "components/Layouts/PageLayout/PageLayout";

const FavoritesPage: FC = () => {
  return (
    <PageLayout>
      <Songs></Songs>
    </PageLayout>
  );
};

export default FavoritesPage;
