import React, { FC, useEffect, useState } from "react";
import LikeSong from "../LikeSong/LikeSong";
import * as S from "./Styled";
import { API_URL } from "config.ts";
import PlayingIcon from "assets/svg/playing.svg";
import ListensIcon from "assets/svg/listens.svg";
import playerState from "../../store/playerState";
import tracksState from "../../store/tracksState";
import { observer } from "mobx-react-lite";

interface SongProps {
  listNumber: number;
  details: any;
}

const Song: FC<SongProps> = ({ listNumber, details }) => {
  const [hover, setHover] = useState(false);
  const [player] = useState(() => playerState);

  const audio = document.getElementById("audio") as HTMLAudioElement;

  const onClickPlay = () => {
    // if this song already is playing
    if (player.audio === API_URL + "/" + details.audio) {
      if (player.playing) {
        audio.pause();
        player.setPlaying(false);
      } else {
        audio.play();
        player.setPlaying(true);
      }
    } else {
      player.setAudio(API_URL + "/" + details?.audio);
      audio.load();
      audio.play();
      player.setId(details._id);
      player.setPlaying(true);
      player.setArtist(details.artist);
      player.setName(details.name);
      player.setPicture(API_URL + "/" + details.picture);
    }
  };

  const onClickFavorite = () => {
    let favoritesCopy = tracksState.favorites;
    // tracksState.setFavorites(favoritesCopy.push(details));
    console.log(favoritesCopy);
  };

  useEffect(() => {
    console.log(tracksState.favorites);
  }, [tracksState.favorites]);

  return (
    <S.Song
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      playing={player.audio === API_URL + "/" + details.audio}
    >
      <S.Left>
        {player.audio === API_URL + "/" + details.audio ? (
          <img onClick={onClickPlay} src={PlayingIcon} alt="" />
        ) : (
          <>
            {hover ? (
              <img onClick={onClickPlay} src={PlayingIcon} alt="" />
            ) : (
              <S.Number>{listNumber}</S.Number>
            )}
          </>
        )}

        <S.Cover src={API_URL + "/" + details?.picture} alt="" />
        <S.Name>{details.name}</S.Name>
      </S.Left>
      <S.Right>
        <S.Listens>
          <img src={ListensIcon} alt="" />
          <S.ListensNumber>{details.listens}</S.ListensNumber>
        </S.Listens>
        <LikeSong
          onClick={onClickFavorite}
          active={false}
          margin="0 0 0 62px"
        />
      </S.Right>
    </S.Song>
  );
};

export default observer(Song);
