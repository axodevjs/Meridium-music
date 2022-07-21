import React, { FC, useEffect } from "react";
import * as S from "./Styled";
import SidebarItem from "./SidebarItem/SidebarItem";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "assets/svg/home.svg";
import FavoriteIcon from "assets/svg/favorite.svg";

const SidebarItems: FC = () => {
  const pathname = useLocation().pathname;

  return (
    <S.SidebarItems>
      <Link to={"/"}>
        <SidebarItem
          name={"Home"}
          link={"/"}
          active={pathname === "/"}
          icon={HomeIcon}
        />
      </Link>

      <Link to={"/favorites"}>
        <SidebarItem
          name={"Favorite Tracks"}
          link={"/favorites"}
          active={pathname.includes("/favorites")}
          icon={FavoriteIcon}
        />
      </Link>
    </S.SidebarItems>
  );
};

export default SidebarItems;
