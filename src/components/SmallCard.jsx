import { useState, useEffect } from 'react'
import tmdbApi from '../api/tmdbApi'
import MovieModal from './MovieModal'
import Delay from '../utils/Delay'
import loadingGif from '../assets/img/loading.gif'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function SmallCard() {
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const baseImgUrl = import.meta.env.VITE_TMDB_BASEIMGURL

  const getTopRatedMovies = async () => {
    await Delay(0)
    const topRated = await tmdbApi.get('movie/top_rated')
    const combines = topRated.data.results.map(async (movie, index) => {
      const movieDatas = await tmdbApi.get(`movie/${movie.id}`, { params: { append_to_response: 'credits' } })
      const movieVideos = await tmdbApi.get(`movie/${movie.id}/videos`)
      movie = movieDatas.data
      movie.director = movieDatas.data.credits.crew.filter((crew) => crew.job === 'Director')[0].name
      movie.trailer = movieVideos.data.results.filter((video) => video.type === 'Trailer')[0]
      return movie
    })
    let results = await Promise.all(combines)
    setTopRatedMovies(results)
  }

  useEffect(() => {
    getTopRatedMovies()
  }, [])
  return (
    <>
      {topRatedMovies.length ? (
        <div className="genre">
          <div className="d-flex justify-content-between align-items-center p-4 pb-0 mb-0">
            <h5>
              <a className="card-header" href="/movies/">
                Top Rated Movies
              </a>
            </h5>
            <h5>
              <a className="card-header" href="/movies/">
                More
              </a>
            </h5>
          </div>
          <div className="cardWrapper d-flex justify-content-around align-items-center flex-wrap ms-3 me-3 gap-3">
            {topRatedMovies.slice(0, 18).map((movie, index) => {
              return (
                <div key={index}>
                  {/* Card */}
                  <div className="cardTest">
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={`${baseImgUrl}w185${movie.poster_path}`}
                      alt={movie.original_title}
                      title={movie.original_title}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null
                        currentTarget.src = 'https://plasticheal.dk/images/slider-placeholder380X412.png'
                      }}
                    />
                  </div>
                  {/* Modal */}
                  <MovieModal movie={movie} index={index} />
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <img src={loadingGif} style={{ width: 50, height: 50, margin: 60 }} />
        </div>
      )}
    </>
  )
}

export default SmallCard
