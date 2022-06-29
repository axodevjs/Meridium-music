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
        <source src="https://cdn3.sefon.pro/prev/evaeTtEHM59t4kEZUBxKnw/1656563648/296/ANNA%20ASTI%20feat.%20%D0%A4%D0%B8%D0%BB%D0%B8%D0%BF%D0%BF%20%D0%9A%D0%B8%D1%80%D0%BA%D0%BE%D1%80%D0%BE%D0%B2%20-%20%D0%A5%D0%BE%D0%B1%D0%B1%D0%B8%20%28192kbps%29.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Bar />
      <Details />
    </S.Player>
  );
};

export default observer(Player);
