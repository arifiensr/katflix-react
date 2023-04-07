import { useState, useEffect } from 'react'
import tmdb from '../api/tmdb'

function TestApi() {
  const [popularMovies, setPopularMovies] = useState([])
  const baseImgUrl = import.meta.env.VITE_TMDB_BASEIMGURL

  const getPopularMovies = async () => {
    const popular = await tmdb.get('movie/popular')
    const combines = popular.data.results.map(async (movie, i) => {
      const movieDatas = await tmdb.get(`movie/${movie.id}`, { params: { append_to_response: 'credits' } })
      const movieVideos = await tmdb.get(`movie/${movie.id}/videos`)
      movie = movieDatas.data
      movie.director = movieDatas.data.credits.crew.filter((crew) => crew.job === 'Director')[0].name
      movie.trailer = movieVideos.data.results.filter((video) => video.type === 'Trailer')[0]
      return movie
    })
    let results = await Promise.all(combines)
    setPopularMovies(results)
  }

  useEffect(() => {
    getPopularMovies()
  }, [])
  return (
    <>
      {popularMovies.map((movie, i) => {
        return (
          <div key={i}>
            <div className="movie">
              <img src={`${baseImgUrl}w185${movie.poster_path}`} alt="" />
              <p>Judul: {movie.original_title}</p>
              <p>Movie ID: {movie.id}</p>
              <p>Popularity: {movie.popularity}</p>
              <p>Overview: {movie.overview}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default TestApi