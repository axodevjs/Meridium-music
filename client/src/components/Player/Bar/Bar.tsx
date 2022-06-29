import React, { FC, useEffect } from "react";
import * as S from "./Styled";
import { observer } from "mobx-react-lite";
import playerState from "../../../store/playerState";

const Bar: FC = () => {
  const audio = document.getElementById("audio") as HTMLAudioElement;

  const setCurrentTime = (time) => {
    playerState.setCurrentTime(time);
    audio.currentTime = time;
  };

  const currentPercentage =
    (playerState.currentTime / playerState.duration) * 100;

  useEffect(() => {
    console.log(currentPercentage);
  }, [playerState.currentTime]);

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar__progress") as HTMLElement;
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = playerState.duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  const handleTimeDrag = (e) => {
    setCurrentTime(calcClickedTime(e));
    console.log();

    const updateTimeOnMove = (eMove) => {
      setCurrentTime(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  };

  return (
    <S.BarProgress
      onMouseDown={(e) => handleTimeDrag(e)}
      className="bar__progress"
      percentage={currentPercentage}
    />
  );
};

export default observer(Bar);
