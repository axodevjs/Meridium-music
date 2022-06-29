import React, {FC} from 'react';
import * as S from './Styled';
import LogoSvg from 'assets/svg/logo.svg'
import SidebarItems from "./SidebarItems/SidebarItems";

const Sidebar: FC = () => {
    return (
        <S.SidebarContainer>
            <S.LogoBlock>
                <img src={LogoSvg} alt=""/>
            </S.LogoBlock>
            <SidebarItems/>
        </S.SidebarContainer>
    );
};

export default Sidebar;