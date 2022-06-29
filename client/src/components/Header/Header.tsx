import React, { FC, useEffect, useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import * as S from "./Styled";
import AddSongIcon from "assets/svg/add-song.svg";
import { useLocation } from "react-router-dom";

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pageName, setPageName] = useState("");
  const pathname = useLocation().pathname;

  useEffect(() => {
    switch (pathname) {
      case "/":
        setPageName("Home");
        break;
      case "/albums":
        setPageName("Albums");
        break;
    }
  }, [pathname]);

  return (
    <S.Header>
      <S.PageName>{pageName}</S.PageName>
      <SearchInput
        value={searchValue}
        setValue={setSearchValue}
        placeholder="Search music, artist, albums..."
      />
      <S.AddSongBlock>
        <img src={AddSongIcon} alt="" />
        <S.AddSongText>Add song</S.AddSongText>
      </S.AddSongBlock>
    </S.Header>
  );
};

export default Header;
