import { FC } from "react";
import * as S from "./Styled";
import { observer } from "mobx-react-lite";
import playerState from "../../../../store/playerState";
import * as moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

const RightControls: FC = observer(() => {
  const formatDuration = (duration) => {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  };

  return (
    <S.RightControls>
      <S.Time>
        {formatDuration(playerState.currentTime)} /{" "}
        {formatDuration(playerState.duration)}
      </S.Time>
    </S.RightControls>
  );
});

export default RightControls;
