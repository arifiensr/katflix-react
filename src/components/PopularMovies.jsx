import { useState, useEffect } from 'react'
import tmdb from '../api/tmdb'

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([])
  const baseImgUrl = import.meta.env.VITE_TMDB_BASEIMGURL
  const baseImgUrlHd = import.meta.env.VITE_TMDB_BASEIMGURLHD

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
      {popularMovies.slice(0, 5).map((movie, i) => {
        const ratingStars = [1, 2, 3, 4, 5]
        const headerStyle = {
          backgroundImage: `linear-gradient(to bottom, rgba(255, 0, 0, 0) 50%, var(--color-grey-) 100%), url('${baseImgUrlHd}${movie.backdrop_path}')`
        }
        return (
          <div key={i}>
            <div className="card-lg-1">
              <div className="card bg-dark" data-bs-toggle="modal" data-bs-target={`#cardModal${i}`}>
                <div className="poster">
                  <img src={`${baseImgUrl}${movie.poster_path}`} alt="" />
                </div>
                <div className="details">
                  <h2 className="title">{movie.original_title}</h2>
                  <h3>Directed by {movie.director}</h3>
                  <div className="rating">
                    {ratingStars.map((star) => {
                      if (star <= Math.round(movie.vote_average / 2)) return <i className="bx bxs-star"></i>
                      else return <i className="bx bx-star"></i>
                    })}
                    <span>{(movie.vote_average / 2).toFixed(1)}/5</span>
                  </div>
                  <div className="tags d-flex gap-1">
                    {movie.genres.slice(0, 2).map((genre, i) => {
                      return <span key={i}>{genre.name}</span>
                    })}
                  </div>
                  <div className="info">
                    <p>{movie.overview.length > 200 ? movie.overview.slice(0, 200) + '...' : movie.overview}</p>
                  </div>
                  <div className="cast">
                    <h5>Cast</h5>
                    <ul>
                      {movie.credits.cast.slice(0, 5).map((cast, i) => {
                        if (cast.profile_path !== null)
                          return (
                            <li key={i}>
                              <img src={`${baseImgUrl}${cast.profile_path}`} alt="" />
                            </li>
                          )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Modal --> */}
              <div className="modal fade z-14 modal-xl" id={`cardModal${i}`} tabIndex="-1" aria-labelledby={`cardModalLabel${i}`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header" style={headerStyle}>
                      <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                        <i className="bx bx-x"></i>
                      </div>
                    </div>
                    <div className="modal-body d-flex align-items-start">
                      <div className="modal-poster">
                        <img src={`${baseImgUrl}${movie.poster_path}`} alt="" />
                      </div>
                      <div className="modal-desc">
                        <h2 className="title">{movie.original_title}</h2>
                        <h3>Directed by {movie.director}</h3>
                        <div className="rating">
                          {ratingStars.map((star) => {
                            if (star <= Math.round(movie.vote_average / 2)) return <i className="bx bxs-star"></i>
                            else return <i className="bx bx-star"></i>
                          })}
                          <span>{(movie.vote_average / 2).toFixed(1)}/5</span>
                        </div>
                        <div className="tags d-flex gap-1">
                          {movie.genres.slice(0, 2).map((genre, i) => {
                            return <span key={i}>{genre.name}</span>
                          })}
                        </div>
                        <div className="info">
                          <p>{movie.overview}</p>
                        </div>
                        <div className="cast-trailer">
                          <div className="cast">
                            <h5>Cast</h5>
                            <ul>
                              {movie.credits.cast.slice(0, 5).map((cast, i) => {
                                if (cast.profile_path !== null)
                                  return (
                                    <li key={i}>
                                      <img src={`${baseImgUrl}${cast.profile_path}`} alt="" />
                                    </li>
                                  )
                              })}
                            </ul>
                          </div>
                          <div className="btn-modal">
                            <button type="button" className="modal-button modal-button-1" onClick={() => window.open(`https://www.youtube.com/watch?v=${movie.trailer.key}`)}>
                              Watch Trailer
                            </button>
                            <button type="button" className="modal-button modal-button-2">
                              Watch Now!
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default PopularMovies
