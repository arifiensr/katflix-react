import { useState, useEffect } from 'react'
import tmdbApi from '../api/tmdbApi'
import MovieModal from './MovieModal'

function Carousel() {
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
      {/* Carousel */}
      <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {popularMovies.slice(0, 3).map((movie, index) => {
            const style = {
              carouselImage: {
                backgroundImage: `linear-gradient(to bottom, rgba(255, 0, 0, 0) 50%, var(--color-black-) 100%), url('${baseImgUrl}w1280${movie.backdrop_path}')`,
              },
              modalImage: {
                backgroundImage: `linear-gradient(to bottom, rgba(255, 0, 0, 0) 50%, var(--color-grey-) 100%), url('${baseImgUrl}w1280${movie.backdrop_path}')`,
              },
            }
            return (
              <div key={index}>
                {index === 0 ? (
                  <div className="carousel-item active c-item" data-bs-toggle="modal" data-bs-target={`#modal${movie.id}`}>
                    <div className="c-img" style={style.carouselImage}></div>
                  </div>
                ) : (
                  <div className="carousel-item c-item" data-bs-toggle="modal" data-bs-target={`#modal${movie.id}`}>
                    <div className="c-img" style={style.carouselImage}></div>
                  </div>
                )}
                <MovieModal movie={movie} index={index} />
              </div>
            )
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel
