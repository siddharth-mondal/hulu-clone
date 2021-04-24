const api_key = 'c57ac0a133a738bc2c16f301b4142b18';

const requests = {
  fetchTrending: {
    link: `/trending/all/week?api_key=${api_key}&language=en-US`,
    name: 'trending',
  },
  fetchTopRated: {
    link: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    name: 'topRated',
  },
  fetchActionMovies: {
    link: `/discover/movie?api_key=${api_key}&with_genres=28`,
    name: 'action',
  },
  fetchComedyMovies: {
    link: `/discover/movie?api_key=${api_key}&with_genres=35`,
    name: 'comedy',
  },
  fetchHorrorMovies: {
    link: `/discover/movie?api_key=${api_key}&with_genres=27`,
    name: 'horror',
  },
  fetchRomanceMovies: {
    link: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    name: 'romance',
  },
  fetchMysteryMovies: {
    link: `/discover/movie?api_key=${api_key}&with_genres=9648`,
    name: 'mystery',
  },
  fetchSciFiMovies: {
    link: `/discover/movie?api_key=${api_key}&with_genres=878`,
    name: 'sciFi',
  },
  fetchWestern: {
    link: `/discover/movie?api_key=${api_key}&with_genres=37`,
    name: 'western',
  },
  fetchAnimation: {
    link: `/discover/movie?api_key=${api_key}&with_genres=16`,
    name: 'animation',
  },
  fetchTV: {
    link: `/discover/movie?api_key=${api_key}&with_genres=10770`,
    name: 'tv',
  },
};

export default requests;
