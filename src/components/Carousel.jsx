import carouselTitle1 from '../assets/img/carousel/luther.png'
import carouselTitle2 from '../assets/img/carousel/last.png'
import carouselTitle3 from '../assets/img/carousel/dead.png'

function Carousel() {
  return (
    <>
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
    </>
  )
}

export default Carousel
