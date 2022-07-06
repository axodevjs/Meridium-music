import * as S from "./Styled";
import Bar from "./Bar/Bar";
import Details from "./Details/Details";
import { useEffect } from "react";
import playerState from "../../store/playerState";
import { observer } from "mobx-react-lite";

const Player = () => {
  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement;

    // state setters wrappers
    const setAudioData = () => {
      playerState.setDuration(audio.duration);
      playerState.setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => playerState.setCurrentTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    // React state listeners: update DOM on React state changes
    playerState.playing ? audio.play() : audio.pause();

    if (
      playerState.clickedTime &&
      playerState.clickedTime !== playerState.currentTime
    ) {
      audio.currentTime = playerState.clickedTime;
      playerState.setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  });

  return (
    <S.Player>
      <audio id="audio">
        <source src="http://localhost:5000/audio/f47ae7e2-aa3b-4597-a4a4-e5d24c714c77.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Bar />
      <Details />
    </S.Player>
  );
};

export default observer(Player);
