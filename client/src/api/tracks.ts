import { API_URL } from "./../config";
import axios from "axios";

export const getAllTracks = async (count?: number, offset?: number) => {
  const tracks = await axios.get(`${API_URL}/tracks`);
  return tracks.data;
};
