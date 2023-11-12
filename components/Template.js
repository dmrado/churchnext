const Template = () => {
  return (
    <>
      <section className="d-flex slyder align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pt-4">
              <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/assets/img/gallery/gallery-5.jpg"
                      className="d-block w-100"
                      alt="/assets/img/gallery/gallery-5.jpg"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Миссионерский центр МИССИЯ</h3>
                      <h5>
                        Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus
                        at semper. Proin iaculis purus consequat sem cure digni ssi Accusantium quam, aliquam ultricies
                        eget tempor
                      </h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/img/gallery/gallery-7.jpg"
                      className="d-block w-100"
                      alt="/assets/img/gallery/gallery-7jpg"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Second slide label</h3>
                      <h5>
                        Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus
                        at semper. Proin iaculis purus consequat sem cure digni ssi Accusantium quam, aliquam ultricies
                        eget tempor
                      </h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/img/gallery/gallery-3.jpg"
                      className="d-block w-100"
                      alt="/assets/img/gallery/gallery-3.jpg"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Third slide label</h3>
                      <h5>
                        Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus
                        at semper. Proin iaculis purus consequat sem cure digni ssi Accusantium quam, aliquam ultricies
                        eget tempor
                      </h5>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Template
