import { FC } from "react";
import * as S from "./Styled";
import FilledHeart from "assets/svg/filled-heart.svg";
import EmptyHeart from "assets/svg/empty-heart.svg";

interface Props {
  active: boolean;
  margin?: string;
  onClick?: () => void;
}

const LikeSong: FC<Props> = ({ active, margin, onClick }) => {
  return (
    <S.LikeSong onClick={onClick} active={active} margin={margin}>
      {active ? (
        <img src={FilledHeart} alt="" />
      ) : (
        <img src={EmptyHeart} alt="" />
      )}
    </S.LikeSong>
  );
};

export default LikeSong;
