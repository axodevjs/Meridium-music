import { makeAutoObservable } from "mobx";

class PlayerState {
  id: string = "";
  audio: string = "";
  name: string = "";
  artist: string = "";
  picture: string = "";
  playing: boolean = false;
  currentTime: number = 0;
  duration: number = 0;
  clickedTime: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setId(id) {
    this.id = id;
  }

  setAudio(audio) {
    this.audio = audio;
  }

  setName(name) {
    this.name = name;
  }

  setPicture(picture) {
    this.picture = picture;
  }

  setArtist(artist) {
    this.artist = artist;
  }

  setPlaying(playing) {
    this.playing = playing;
  }

  setDuration(duration) {
    this.duration = duration;
  }

  setCurrentTime(time) {
    this.currentTime = time;
  }

  setClickedTime(time) {
    this.clickedTime = time;
  }
}

export default new PlayerState();
