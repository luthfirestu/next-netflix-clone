import axios from "axios";
const API_KEY = process.env.API_TOKEN;

// ambil data movie 
export const movieData = async (movieOption: string) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieOption}?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        }
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

// ambil data tv show
export const tvData = async (tvOption: string) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvOption}?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        }
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

// detail movie
export const detailMovie = async (movieId: string) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        }
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

// similar movie
export const similarMovie = async (id: string) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.tmdbToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

// trending today: movie, tv
export const trending = async (trendingOption: string) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/${trendingOption}/day?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        }
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};