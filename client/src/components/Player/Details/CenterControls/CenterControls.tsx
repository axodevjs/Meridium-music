import { FC, useEffect } from "react";
import * as S from "./Styled";
import PlayIcon from "assets/svg/play.svg";
import PauseIcon from "assets/svg/pause.svg";
import { observer } from "mobx-react-lite";
import playerState from "../../../../store/playerState";

const CenterControls: FC = () => {
  const togglePlay = () => {
    const audio = document.getElementById("audio") as HTMLAudioElement;
    playerState.setPlaying(!playerState.playing);

    if (playerState.playing) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement;

    document.body.onkeyup = function (e) {
      if (e.code === "Space") {
        if (playerState.playing === true) {
          audio.pause();
          playerState.setPlaying(false);
        } else {
          audio.play();
          playerState.setPlaying(true);
        }

        console.log("Space pressed");
      }
    };
  }, []);

  return (
    <S.CenterControls>
      <S.PausePlay onClick={togglePlay}>
        {playerState.playing ? (
          <img draggable="false" src={PauseIcon} alt="" />
        ) : (
          <img draggable="false" src={PlayIcon} alt="" />
        )}
      </S.PausePlay>
    </S.CenterControls>
  );
};

export default observer(CenterControls);
