import React, {FC, useEffect} from 'react';
import * as S from './Styled'
import { useLocation } from "react-router-dom";

interface ItemProps {
    name: string;
    link: string;
    active: boolean;
    icon: any;
}

const SidebarItem: FC<ItemProps> = ({name, link, active, icon}) => {
    return (
        <S.SidebarItem active={active}>
            <S.Data>
                <S.Icon src={icon}/>
                <S.Name>{name}</S.Name>
            </S.Data>
            {active && <S.ActiveLine/>}
        </S.SidebarItem>
    );
};

export default SidebarItem;