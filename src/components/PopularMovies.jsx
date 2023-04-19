import { useState, useEffect, useContext } from 'react'
import tmdbApi from '../api/tmdbApi'
import MovieModal from './MovieModal'
import { Swiper, SwiperSlide } from 'swiper/react'

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([])
  const baseImgUrl = import.meta.env.VITE_TMDB_BASEIMGURL

  const getPopularMovies = async () => {
    const popular = await tmdbApi.get('movie/popular')
    const combines = popular.data.results.map(async (movie, index) => {
      const config = {
        params: { append_to_response: 'credits' },
      }
      const movieDatas = await tmdbApi.get(`movie/${movie.id}`, config)
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
      {/* <Swiper spaceBetween={50} slidesPerView={5} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}> */}
        {popularMovies.slice(0, 5).map((movie, index) => {
          const ratingStars = [1, 2, 3, 4, 5]
          return (
            <div key={index}>
              {/* <SwiperSlide> */}
                <div className="card-lg-1">
                  <div className="card bg-dark" data-bs-toggle="modal" data-bs-target={`#modal${movie.id}`}>
                    <div className="poster">
                      <img
                        src={`${baseImgUrl}w500${movie.poster_path}`}
                        alt=""
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null
                          currentTarget.src = 'https://plasticheal.dk/images/slider-placeholder380X412.png'
                        }}
                      />
                    </div>
                    <div className="details">
                      <h2 className="title">{movie.title}</h2>
                      <h3>Directed by {movie.director}</h3>
                      <div className="rating">
                        {ratingStars.map((star, index) => {
                          if (star <= Math.round(movie.vote_average / 2)) return <i key={index} className="bx bxs-star"></i>
                          else return <i key={index} className="bx bx-star"></i>
                        })}
                        <span>{(movie.vote_average / 2).toFixed(1)}/5</span>
                      </div>
                      <div className="tags d-flex gap-1">
                        {movie.genres.slice(0, 2).map((genre, index) => {
                          return <span key={index}>{genre.name}</span>
                        })}
                      </div>
                      <div className="info">
                        <p>{movie.overview.length > 200 ? movie.overview.slice(0, 200) + '...' : movie.overview}</p>
                      </div>
                      <div className="cast">
                        <h5>Cast</h5>
                        <ul>
                          {movie.credits.cast.slice(0, 5).map((cast, index) => {
                            if (cast.profile_path !== null)
                              return (
                                <li key={index}>
                                  <img src={`${baseImgUrl}w45${cast.profile_path}`} alt={`${cast.name}`} title={`${cast.name}`} />
                                </li>
                              )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Modal --> */}
                  <MovieModal movie={movie} index={index} />
                </div>
              {/* </SwiperSlide> */}
            </div>
          )
        })}
      {/* </Swiper> */}
    </>
  )
}

export default PopularMovies
