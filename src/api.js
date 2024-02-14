import axios from 'axios';

const API_KEY = '73a9abfcf83ce10ca8eb1559667b72a5';
const options = {
   params: {
      api_key: API_KEY,
   },
};

export const getImageUrl = posterPath => {
   return `https://image.tmdb.org/t/p/w300/${posterPath}`;
};

export const getPopular = async () => {
   const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

   const response = await axios.get(url, options);

   return response.data.results.map(movie => ({
      ...movie,
      poster_url: getImageUrl(movie.poster_path),
   }));
};

export const getSearch = async query => {
   const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`;

   const response = await axios.get(url, options);
   return response.data.results.map(movie => ({
      ...movie,
      poster_url: getImageUrl(movie.poster_path),
   }));
};

export const getDetalis = async movieId => {
   const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
   const response = await axios.get(url, options);
   const movie = response.data;
   const poster_url = getImageUrl(movie.poster_path);
   return {
      ...movie,
      poster_url: poster_url,
   };
};

export const getCredits = async movieId => {
   const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
   const response = await axios.get(url, options);
   return response.data.cast.map(actor => ({
      ...actor,
      poster_url: getImageUrl(actor.profile_path),
   }));
};

export const getReviews = async movieId => {
   const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`;
   const response = await axios.get(url, options);
   return response.data.results;
};
