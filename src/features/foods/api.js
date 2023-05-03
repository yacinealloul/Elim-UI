import { apiKey, apiUrl } from "../../common/api";

export const getFoods = async () => {

  const response = await fetch('http://127.0.0.1:8000/fruits');

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getGenres = async ({ queryKey }) => {
  const [, { language }] = queryKey;

  const response = await fetch('http://127.0.0.1:8000/fruits');

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data.genres;
};

export const getMovieDetails = async ({ queryKey }) => {
  const [, { id, language }] = queryKey;

  const response = await fetch(
    `${apiUrl}movie/${id}?api_key=${apiKey}&language=${language}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getMovieCredits = async ({ queryKey }) => {
  const [, { id, language }] = queryKey;

  const response = await fetch(
    `${apiUrl}movie/${id}/credits?api_key=${apiKey}&language=${language}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
