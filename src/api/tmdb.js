import axios from 'axios'

const baseUrl = import.meta.env.VITE_TMDB_BASEURL
const apiKey = import.meta.env.VITE_TMDB_APIKEY

// export const getMovieList = async () => {
//   const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
//   return movie.data.results
// }

// export const getCredits = async (movieId) => {
//   const credits = await axios.get(`${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`)
//   return credits.data
// }

// export const searchMovie = async (q) => {
//   const search = await axios.get(q)
//   return
// }

export default axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json"
  },
  params: {
    api_key: apiKey,
  }
})
