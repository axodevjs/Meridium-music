import React from "react";
import * as S from "./Styled";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Player from "../Player/Player";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Content>
        <Header />
        {children}
        <Player />
      </S.Content>
    </S.Wrapper>
  );
};

export default MainLayout;
