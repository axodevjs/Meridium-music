import React from "react";
import PageLayout from "../../components/Layouts/PageLayout/PageLayout";
import * as S from "./Styled";
import Songs from "components/Songs/Songs";

const HomePage: React.FC = () => {
  return (
    <PageLayout>
      <S.Title>New songs</S.Title>
      <Songs />
    </PageLayout>
  );
};

export default HomePage;
