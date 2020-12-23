import * as api from "./Api";
import { useQuery } from "react-query";

const useAllMusics = (page) => {
  return useQuery(["allMusics", page], api.getAllMusics);
};

const useAllArtists = (page) => {
  return useQuery(["allArtists", page], api.getAllArtists);
};

const useArtist = (id) => {
  return useQuery(["artist", id], api.getArtist);
};

const useArtistMusics = (id) => {
  return useQuery(["artistMusics", id], api.getArtistMusics);
};

export { useAllMusics, useAllArtists, useArtist, useArtistMusics };
