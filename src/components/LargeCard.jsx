import PopularMovies from './PopularMovies'

function LargeCard() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-4 pb-0 mb-0">
        <h5>
          <a className="card-header" href="/movies/">
            Popular Movies
          </a>
        </h5>
        <h5>
          <a className="card-header" href="/movies/">
            More
          </a>
        </h5>
      </div>
      {/* <!-- * Cards Start --> */}
      <div className="cards-lg">
        {/* <!-- * 1st Large Card --> */}
        <PopularMovies />
      </div>
    </>
  )
}

export default LargeCard
