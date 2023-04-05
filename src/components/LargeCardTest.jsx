import PopularMovies from './PopularMovies'

function LargeCardTest() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-4 pb-0 mb-0">
        <h5>
          <a href="#">New Releases</a>
        </h5>
        <h5>
          <a href="#">More</a>
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

export default LargeCardTest
