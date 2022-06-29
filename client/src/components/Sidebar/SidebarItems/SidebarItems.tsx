import React, {FC, useEffect} from 'react';
import * as S from "./Styled";
import SidebarItem from "./SidebarItem/SidebarItem";
import {Link, useLocation} from "react-router-dom";
import HomeIcon from 'assets/svg/home.svg';
import AlbumsIcon from 'assets/svg/albums.svg';

const SidebarItems: FC = () => {
    const pathname = useLocation().pathname

    return (
        <S.SidebarItems>
            <Link to={"/"}>
                <SidebarItem name={"Home"} link={"/"} active={pathname === '/'} icon={HomeIcon}/>
            </Link>

            <Link to={"/albums"}>
                <SidebarItem name={"Albums"} link={"/albums"} active={pathname.includes('/albums')} icon={AlbumsIcon}/>
            </Link>
        </S.SidebarItems>
    );
};

export default SidebarItems;