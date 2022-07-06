import React from "react";
import * as S from "./Styled";

interface LayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default PageLayout;
