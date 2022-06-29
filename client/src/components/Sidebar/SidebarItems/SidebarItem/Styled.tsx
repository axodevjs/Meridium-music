import styled from 'styled-components'
import {COLORS} from "../../../../utils/variables";

interface ItemProps {
    active: boolean;
}

export const SidebarItem = styled.div<ItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 100%;
  background: ${({active}) => active ? COLORS.lightGray : COLORS.gray};
  cursor: pointer;
  opacity: ${({active}) => active ? "1" : "0.72"};
`

export const Data = styled.div`
  display: flex;
  margin-left: 30px;
  align-items: center;
`

export const Icon = styled.img`
`

export const Name = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  color: #FFFFFF;
  margin-left: 16px;
`

export const ActiveLine = styled.div`
  height: 100%;
  width: 6px;
  background: ${COLORS.green};
  border-radius: 3px 0px 0px 3px;
`