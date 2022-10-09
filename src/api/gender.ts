import {httpApi} from "./httpApi";

export const getTvGenders = () => {
  return httpApi.get(`/genre/tv/list`);
}

export const getMovieGenders = () => {
  return httpApi.get(`/genre/movie/list`);
}