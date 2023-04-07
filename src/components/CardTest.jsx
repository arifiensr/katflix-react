import { useState, useEffect } from 'react'
import tmdbApi from '../api/tmdbApi'

function CardTest() {
  const [popularMovies, setPopularMovies] = useState([])
  const baseImgUrl = import.meta.env.VITE_TMDB_BASEIMGURL

  const getPopularMovies = async () => {
    const popular = await tmdbApi.get('movie/popular')
    const combines = popular.data.results.map(async (movie, i) => {
      const movieDatas = await tmdbApi.get(`movie/${movie.id}`, { params: { append_to_response: 'credits' } })
      const movieVideos = await tmdbApi.get(`movie/${movie.id}/videos`)
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
      <div className="cardWrapper d-flex justify-content-around align-items-center flex-wrap ms-3 me-3 gap-3">
        {popularMovies.slice(0, 8).map((movie, id) => {
          return (
            <div key={id} className="cardTest">
              <img className="w-100 h-100 object-fit-cover" src={`${baseImgUrl}w185${movie.poster_path}`} alt={movie.original_title} title={movie.original_title} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CardTest
