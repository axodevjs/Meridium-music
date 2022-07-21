import * as S from "./Styled";
import Bar from "./Bar/Bar";
import Details from "./Details/Details";
import { useEffect } from "react";
import playerState from "../../store/playerState";
import { observer } from "mobx-react-lite";
import axios from "axios";
import { API_URL } from "config.ts";

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

    audio.addEventListener("ended", async function () {
      await axios.post(`${API_URL}/tracks/listen/${playerState.id}`);
    });

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
    <S.Player show={playerState.audio === "" ? false : true}>
      <audio id="audio">
        <source src={playerState.audio} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Bar />
      <Details />
    </S.Player>
  );
};

export default observer(Player);
