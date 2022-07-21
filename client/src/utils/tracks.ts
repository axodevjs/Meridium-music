import { API_URL } from "./../config";
import axios from "axios";
import tracksState from "../store/tracksState";

export const getAllTracks = async (count?: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/tracks${count ? `?count=${count}` : ""}`
    );
    const data = await response.data;
    tracksState.setTracks(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    tracksState.setLoaded(true);
  }
};
