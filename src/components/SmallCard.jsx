import { useState, useEffect } from 'react'
import tmdbApi from '../api/tmdbApi'
import MovieModal from './MovieModal'

function SmallCard() {
  const [popularMovies, setPopularMovies] = useState([])
  const baseImgUrl = import.meta.env.VITE_TMDB_BASEIMGURL

  const getPopularMovies = async () => {
    const popular = await tmdbApi.get('movie/popular')
    const combines = popular.data.results.map(async (movie, index) => {
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
      <div className="genre">
        <div className="d-flex justify-content-between align-items-center p-4 pb-0 mb-0">
          <h5>
            <a href="#">Trending Now</a>
          </h5>
          <h5>
            <a href="#">More</a>
          </h5>
        </div>
        <div className="cardWrapper d-flex justify-content-around align-items-center flex-wrap ms-3 me-3 gap-3">
          {popularMovies.slice(0, 18).map((movie, index) => {
            return (
              <div key={index}>
                {/* Card */}
                <div className="cardTest" data-bs-toggle="modal" data-bs-target={`#movieModal${index}`}>
                  <img className="w-100 h-100 object-fit-cover" src={`${baseImgUrl}w185${movie.poster_path}`} alt={movie.original_title} title={movie.original_title} />
                </div>
                {/* Modal */}
                <MovieModal movie={movie} index={index} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
    </>
  )
}

export default SmallCard
