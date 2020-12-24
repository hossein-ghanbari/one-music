import axios from "axios";
import { urls } from "../utility/config";

axios.defaults.baseURL = urls.baseUrl;

const getAllMusics = async ({ queryKey }) => {
  const page = queryKey[1];
  const { data } = await axios.get(`/musics/all?page=${page}`);
  return data;
};

const getAllArtists = async ({ queryKey }) => {
  const page = queryKey[1];
  const { data } = await axios.get(`/artists/all?page=${page}`);
  return data;
};

const getArtistMusics = async ({ queryKey }) => {
  const id = queryKey[1];
  const { data } = await axios.get(`/artists/${id}/musics`);
  return data;
};

export { getAllMusics, getAllArtists, getArtistMusics };
