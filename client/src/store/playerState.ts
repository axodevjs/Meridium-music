import { makeAutoObservable } from "mobx";

class PlayerState {
  playing: boolean = false;
  currentTime: number = 0;
  duration: number = 0;
  clickedTime: number = 0;

  constructor() {
    makeAutoObservable(this);
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
