const AboutPage = () => {
    return <>
     {/* ======= Hero Section ======= */}
     {/* <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Creating websites that make you stop &amp; stare</h1>
              <h2>
                Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at
                semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum.
              </h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section> */}
      {/* End Hero */}
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4" />
              </div>
              <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>
                  Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima
                  temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint
                  et id nulla tenetur. Suscipit aut voluptate.
                </p>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-fingerprint" />
                  </div>
                  <h4 className="title">
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident
                  </p>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-gift" />
                  </div>
                  <h4 className="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque
                  </p>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-atom" />
                  </div>
                  <h4 className="title">
                    <a href="">Dine Pad</a>
                  </h4>
                  <p className="description">
                    Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus
                    aut eligendi omnis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts">
          <div className="container">
            <div className="text-center title">
              <h3>What we have achieved so far</h3>
              <p>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
            </div>
            <div className="row counters position-relative">
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={232}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Clients</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Projects</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1463}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Hours Of Support</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={15}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>
        {/* End Counts Section */}
        {/* ======= Clients Section ======= */}
        <section id="clients" className="clients">
          <div className="container">
            <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
              <div className="col-lg-3 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/img/clients/client-7.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/img/clients/client-8.png" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Clients Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-cash-stack" style={{ color: "#ff689b" }} />
                  </div>
                  <h4 className="title">
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-calendar4-week" style={{ color: "#e9bf06" }} />
                  </div>
                  <h4 className="title">
                    <a href="">Dolor Sitema</a>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    tarad limino ata
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-wow-delay="0.1s">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-chat-text" style={{ color: "#3fcdc7" }} />
                  </div>
                  <h4 className="title">
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-wow-delay="0.1s">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-credit-card-2-front" style={{ color: "#41cf2e" }} />
                  </div>
                  <h4 className="title">
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-wow-delay="0.2s">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-globe" style={{ color: "#d6ff22" }} />
                  </div>
                  <h4 className="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-wow-delay="0.2s">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-clock" style={{ color: "#4680ff" }} />
                  </div>
                  <h4 className="title">
                    <a href="">Eiusmod Tempor</a>
                  </h4>
                  <p className="description">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>
            <div className="row portfolio-container">
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-3.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-5.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-6.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-9.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials">
          <div className="container position-relative">
            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                      Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram
                      malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                      tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                      minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim
                      culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
                      quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
                {/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
        {/* End Testimonials Section */}
        {/* ======= Team Section ======= */}
        <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Team</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}
        {/* ======= Gallery Section ======= */}
        <section id="gallery" className="gallery">
          <div className="container">
            <div className="section-title">
              <h2>Gallery</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-1.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                    <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-2.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                    <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-3.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                    <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-4.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                    <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-5.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                    <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-6.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                    <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-7.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                    <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-8.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                    <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Gallery Section */}

      </main>
      {/* End #main */}
     
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}

    </>
}

export default AboutPage