function MovieModal({movie, index}) {
  const baseImgUrl = import.meta.env.VITE_TMDB_BASEIMGURL

  const ratingStars = [1, 2, 3, 4, 5]
  const headerStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(255, 0, 0, 0) 50%, var(--color-grey-) 100%), url('${baseImgUrl}w1280${movie.backdrop_path}')`,
  }
  return (
    <>
      <div className="modal fade z-14 modal-xl" id={`modal${movie.id}`} tabIndex="-1" aria-labelledby={`modalLabel${movie.id}`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header" style={headerStyle}>
              <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                <i className="bx bx-x"></i>
              </div>
            </div>
            <div className="modal-body d-flex align-items-start">
              <div className="modal-poster">
                <img src={`${baseImgUrl}w342${movie.poster_path}`} alt="" />
              </div>
              <div className="modal-desc">
                <h2 className="title">{movie.title === undefined ? movie.name : movie.title} <sup><em>(ID: {movie.id})</em></sup></h2>
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
                  <p>{movie.overview}</p>
                </div>
                <div className="cast-trailer">
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
    </>
  )
}

export default MovieModal
