import { apiKey, apiUrl } from "../../common/api";

export const getGroceries = async ({ queryKey }) => {
  const [, { page, query, language }] = queryKey;

  const params = new URLSearchParams({
    language,
    page: page || 1,
    ...(query && { query }),
  });



  const response = await fetch('http://127.0.0.1:8000/fruits');

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getPersonDetails = async ({ queryKey }) => {
  const [, { id, language }] = queryKey;

  const params = new URLSearchParams({
    language,
  });

  const url = `${apiUrl}person/${id}?api_key=${apiKey}&${params}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getPersonMovieCredits = async ({ queryKey }) => {
  const [, { id, language }] = queryKey;

  const params = new URLSearchParams({
    language,
  });

  const response = await fetch(
    `${apiUrl}person/${id}/movie_credits?api_key=${apiKey}&${params}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
