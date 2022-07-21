import { makeAutoObservable } from "mobx";

class TracksState {
  tracks: [] = [];
  loaded: boolean = false;
  favorites: [] = [];

  constructor() {
    makeAutoObservable(this);

    if (localStorage.getItem("favoriteTracks")) {
      let favoriteTracks = JSON.parse(localStorage.getItem("favoriteTracks"));
      this.setFavorites(favoriteTracks || []);
      console.log(favoriteTracks);
    }
  }

  setTracks(tracks) {
    this.tracks = tracks;
  }

  setLoaded(loaded) {
    this.loaded = loaded;
  }

  setFavorites(favorites) {
    this.favorites = favorites;
  }
}

export default new TracksState();
