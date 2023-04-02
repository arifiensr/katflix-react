import carouselTitle1 from '../assets/img/carousel/luther.png'
import carouselTitle2 from '../assets/img/carousel/last.png'
import carouselTitle3 from '../assets/img/carousel/dead.png'

function Carousel() {
  return (
    <>
      {/* Carousel */}
      <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active c-item" data-bs-toggle="modal" data-bs-target="#firstCarouselModal">
            <div className="c-img c-img-1">
              <div className="c-title-1">
                <img src={carouselTitle1} alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item c-item" data-bs-toggle="modal" data-bs-target="#secondCarouselModal">
            <div className="c-img c-img-2">
              <div className="c-title-2">
                <img src={carouselTitle2} alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item c-item" data-bs-toggle="modal" data-bs-target="#thirdCarouselModal">
            <div className="c-img c-img-3">
              <div className="c-title-3">
                <img src={carouselTitle3} alt="" />
              </div>
            </div>
          </div>
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

      {/* <!-- * Carousel Modal --> */}
      <div className="modal fade z-14 modal-xl" id="firstCarouselModal" tabIndex="-1" aria-labelledby="firstCarouselModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header modal-header-img-6">
              <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                <i className="bx bx-x"></i>
              </div>
            </div>
            <div className="modal-body d-flex align-items-start">
              <div className="modal-poster">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKncaZfn8Bleq2rEkEK7tekR2JGXWMGGk8crgZa5BvdJOi4fvG1hFa9teGZU-elHi3KOS-AIdXdFIidTUmJGQbwUQI7nTgThZsWeK2i09eapkh-_hQgy7r5xEclZCN4qP8LDDungEiBNpnUAmxuMtoHWf-oRrBeJoVF_SADNuFQgNyn64LoQ/s1440/p23699949_v_v8_aa%20(1).jpg" alt="" />
              </div>
              <div className="modal-desc">
                <h2 className="title">Luther: The Fallen Sun (2023)</h2>
                <h3>Directed by Jamie Payne</h3>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <span>4.2/5</span>
                </div>
                <div className="tags">
                  <span>Crime</span>
                  <span>Drama</span>
                </div>
                <div className="info">
                  <p>In Luther: The Fallen Sun -- an epic continuation of the award-winning television saga reimagined for film -- a gruesome serial killer is terrorizing London while brilliant but disgraced detective John Luther (Idris Elba) sits behind bars. Haunted by his failure to capture the cyber psychopath who now taunts him, Luther decides to break out of prison to finish the job by any means necessary.</p>
                </div>
                <div className="cast-trailer">
                  <div className="cast">
                    <h5>Cast</h5>
                    <ul>
                      <li>
                        <img src="https://resizing.flixster.com/s935pncF3MRPdREVX1BrxyWZIRU=/100x120/v2/https://flxt.tmsimg.com/assets/178333_v9_bd.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/Al9MVxw4vyXTnjT56muKhUbBGTs=/100x120/v2/https://flxt.tmsimg.com/assets/85991_v9_bb.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/9oHubC9bBrM1K2J9M6yl-me__dw=/100x120/v2/https://flxt.tmsimg.com/assets/926604_v9_bc.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/14uaBgKT0ARwj_X7kVwtYVk7u8o=/100x120/v2/https://flxt.tmsimg.com/assets/152208_v9_bb.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/_0tlBojXmLKyeewgdID7us3JoDY=/100x120/v2/https://flxt.tmsimg.com/assets/1305232_v9_aa.jpg" alt="" />
                      </li>
                    </ul>
                  </div>
                  <div className="btn-modal">
                    <button type="button" className="modal-button modal-button-1" onClick={() => window.open('https://www.youtube.com/watch?v=EGK5qtXuc1Q')}>
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

      <div className="modal fade z-14 modal-xl" id="secondCarouselModal" tabIndex="-1" aria-labelledby="secondCarouselModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header modal-header-img-7">
              <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                <i className="bx bx-x"></i>
              </div>
            </div>
            <div className="modal-body d-flex align-items-start">
              <div className="modal-poster">
                <img src="https://assets-a1.kompasiana.com/items/album/2023/01/11/mv5bzguzyti3m2etzmm0yy00nguylwi4odetn2q3zgjlyzhhzju3xkeyxkfqcgdeqxvyntm0oty1oqatat-v1-63be3e8a4addee38a6278bd3.jpg" alt="" />
              </div>
              <div className="modal-desc">
                <h2 className="title">The Last of Us (2023)</h2>
                <h3>Directed by Neil Druckmann</h3>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <span>5/5</span>
                </div>
                <div className="tags">
                  <span>Post-apocalyptic</span>
                  <span>Drama</span>
                </div>
                <div className="info">
                  <p>Joel and Ellie, a pair connected through the harshness of the world they live in, are forced to endure brutal circumstances and ruthless killers on a trek across a post-outbreak America.</p>
                </div>
                <div className="cast-trailer">
                  <div className="cast">
                    <h5>Cast</h5>
                    <ul>
                      <li>
                        <img src="https://resizing.flixster.com/1SYCCdxSvYh4JUujU-aFDp_Ra-M=/100x120/v2/https://flxt.tmsimg.com/assets/494807_v9_bd.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/Zyf4WZcZFZmAjfqlUZOtI9iEeeA=/100x120/v2/https://flxt.tmsimg.com/assets/1027669_v9_ba.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/uLKV73UwJxwpJdcmbAMQ_Bbms7U=/100x120/v2/https://flxt.tmsimg.com/assets/1166199_v9_ba.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/mfPfXeQFe78DJwwD3xTd7TiHs7M=/100x120/v2/https://flxt.tmsimg.com/assets/71764_v9_bc.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/DN9vAhHQSObSjFWf_Cex74TPs_Y=/100x120/v2/https://flxt.tmsimg.com/assets/278136_v9_bb.jpg" alt="" />
                      </li>
                    </ul>
                  </div>
                  <div className="btn-modal">
                    <button type="button" className="modal-button modal-button-1" onClick={() => window.open('https://www.youtube.com/watch?v=uLtkt8BonwM')}>
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

      <div className="modal fade z-14 modal-xl" id="thirdCarouselModal" tabIndex="-1" aria-labelledby="thirdCarouselModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header modal-header-img-8">
              <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                <i className="bx bx-x"></i>
              </div>
            </div>
            <div className="modal-body d-flex align-items-start">
              <div className="modal-poster">
                <img src="https://www.themoviedb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg" alt="" />
              </div>
              <div className="modal-desc">
                <h2 className="title">All of Us Are Dead (2023)</h2>
                <h3>Directed by Lee Jae-kyoo</h3>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <span>4.3/5</span>
                </div>
                <div className="tags">
                  <span>Horror</span>
                  <span>Thriller</span>
                </div>
                <div className="info">
                  <p>Trapped students must escape their high school which has become ground zero for a zombie virus outbreak.</p>
                </div>
                <div className="cast-trailer">
                  <div className="cast">
                    <h5>Cast</h5>
                    <ul>
                      <li>
                        <img src="https://resizing.flixster.com/X1jCUQoMwp92u7urD0r9TnOchIk=/100x120/v2/https://flxt.tmsimg.com/assets/1252875_v9_aa.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/KyQqI3RAcZTBuc5V_OTTcUovcwQ=/100x120/v2/https://flxt.tmsimg.com/assets/1346603_v9_aa.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/6iY_MKGv4kHBqNikdU-wp9ckKYk=/100x120/v2/https://flxt.tmsimg.com/assets/680302_v9_aa.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/6d8fYljVSNss3o-f2VIVYUxF0fA=/100x120/v2/https://flxt.tmsimg.com/assets/1278595_v9_aa.jpg" alt="" />
                      </li>
                      <li>
                        <img src="https://resizing.flixster.com/8oLcx-rW1Xc6I2TRDkCNhwKCodY=/100x120/v2/https://flxt.tmsimg.com/assets/892864_v9_aa.jpg" alt="" />
                      </li>
                    </ul>
                  </div>
                  <div className="btn-modal">
                    <button type="button" className="modal-button modal-button-1" onClick={() => window.open('https://www.youtube.com/watch?v=IN5TD4VRcSM')}>
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

export default Carousel
