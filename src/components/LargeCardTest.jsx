import { useEffect, useState } from 'react'
import tmdb from '../api/tmdb'

function LargeCardTest() {
  const [movie, setMovies] = useState([])

  useEffect(() => {
    // fetching action
    const fetchMovies = async () => {
      const { data } = await tmdb.get('movie/popular')
      setMovies(data.results)
    }

    fetchMovies()
  }, [])

  console.log(movie)
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
        {movie.map((movie, index) => {
          return (
            <>
              <div key={index} className="card-lg-1">
                <div className="card bg-dark" data-bs-toggle="modal" data-bs-target="#firstCardModal">
                  <div className="poster">
                    <img src="https://resizing.flixster.com/SKYj-nTZxPCuA0S2CYE-SrlHhhw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y5MjdmYjM4LWM0MjItNDI1OC04ODY0LTU1NDc4NmRlMzdhNi5qcGc=" alt="" />
                  </div>
                  <div className="details">
                    <h2 className="title">Emily (2023)</h2>
                    <h3>Directed by Frances O'Connor</h3>
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bx-star"></i>
                      <span>4.4/5</span>
                    </div>
                    <div className="tags">
                      <span>Biography</span>
                      <span>History</span>
                    </div>
                    <div className="info">
                      <p>EMILY imagines Emily Brontë's own Gothic story that inspired her seminal novel, "Wuthering Heights." Haunted by the death of her mother...</p>
                    </div>
                    <div className="cast">
                      <h5>Cast</h5>
                      <ul>
                        <li>
                          <img src="https://resizing.flixster.com/CMGjyD6T4AKWQS0xRvDVRFDLgKw=/100x120/v2/https://flxt.tmsimg.com/assets/1209177_v9_ba.jpg" alt="" />
                        </li>
                        <li>
                          <img src="https://resizing.flixster.com/7CpysI8tPX8_KRX7gcUw4lUJ1Ww=/100x120/v2/https://flxt.tmsimg.com/assets/990775_v9_ba.jpg" alt="" />
                        </li>
                        <li>
                          <img src="https://resizing.flixster.com/ezusSZefDi6BBrFB3c-_EpcvZfA=/100x120/v2/https://flxt.tmsimg.com/assets/578793_v9_bc.jpg" alt="" />
                        </li>
                        <li>
                          <img src="https://resizing.flixster.com/aY7Den7anAtS88cMH_4NtQMZfx8=/100x120/v2/https://flxt.tmsimg.com/assets/707096_v9_bb.jpg" alt="" />
                        </li>
                        <li>
                          <img src="https://resizing.flixster.com/x5nBcfsxNQHi0oGDJmtQaiBmcmo=/100x120/v2/https://flxt.tmsimg.com/assets/72287_v9_bb.jpg" alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- Modal --> */}
                <div className="modal fade z-14 modal-xl" id="firstCardModal" tabIndex="-1" aria-labelledby="firstCardModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header modal-header-img-1">
                        <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                          <i className="bx bx-x"></i>
                        </div>
                      </div>
                      <div className="modal-body d-flex align-items-start">
                        <div className="modal-poster">
                          <img src="https://resizing.flixster.com/SKYj-nTZxPCuA0S2CYE-SrlHhhw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y5MjdmYjM4LWM0MjItNDI1OC04ODY0LTU1NDc4NmRlMzdhNi5qcGc=" alt="" />
                        </div>
                        <div className="modal-desc">
                          <h2 className="title">Emily (2023)</h2>
                          <h3>Directed by Frances O'Connor</h3>
                          <div className="rating">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bx-star"></i>
                            <span>4.4/5</span>
                          </div>
                          <div className="tags">
                            <span>Biography</span>
                            <span>History</span>
                          </div>
                          <div className="info">
                            <p>EMILY imagines Emily Brontë's own Gothic story that inspired her seminal novel, "Wuthering Heights." Haunted by the death of her mother, Emily struggles within the confines of her family life and yearns for artistic and personal freedom, and so begins a journey to channel her creative potential into one of the greatest novels of all time.</p>
                          </div>
                          <div className="cast-trailer">
                            <div className="cast">
                              <h5>Cast</h5>
                              <ul>
                                <li>
                                  <img src="https://resizing.flixster.com/CMGjyD6T4AKWQS0xRvDVRFDLgKw=/100x120/v2/https://flxt.tmsimg.com/assets/1209177_v9_ba.jpg" alt="" />
                                </li>
                                <li>
                                  <img src="https://resizing.flixster.com/7CpysI8tPX8_KRX7gcUw4lUJ1Ww=/100x120/v2/https://flxt.tmsimg.com/assets/990775_v9_ba.jpg" alt="" />
                                </li>
                                <li>
                                  <img src="https://resizing.flixster.com/ezusSZefDi6BBrFB3c-_EpcvZfA=/100x120/v2/https://flxt.tmsimg.com/assets/578793_v9_bc.jpg" alt="" />
                                </li>
                                <li>
                                  <img src="https://resizing.flixster.com/aY7Den7anAtS88cMH_4NtQMZfx8=/100x120/v2/https://flxt.tmsimg.com/assets/707096_v9_bb.jpg" alt="" />
                                </li>
                                <li>
                                  <img src="https://resizing.flixster.com/x5nBcfsxNQHi0oGDJmtQaiBmcmo=/100x120/v2/https://flxt.tmsimg.com/assets/72287_v9_bb.jpg" alt="" />
                                </li>
                              </ul>
                            </div>
                            <div className="btn-modal">
                              <button type="button" className="modal-button modal-button-1" onClick={() => window.open('https://www.youtube.com/watch?v=xaL90sMAzbY')}>
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
            </>
          )
        })}
      </div>
    </>
  )
}

export default LargeCardTest
