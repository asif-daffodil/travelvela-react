import React from 'react';

const AboutComponent = () => (
  <>
    {/* Breadcrumb Area */}
    <section className="breadcrumb-area bread-bg-9">
      <div className="breadcrumb-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title line-height-50 text-white">
                    TravelVela.com is Your Trusted <br />
                    Travel Companion.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bread-svg-box">
        <svg
          className="bread-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
        </svg>
      </div>
    </section>

    {/* Info Area */}
    <section className="info-area padding-top-100px padding-bottom-70px">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 responsive-column">
            <div className="card-item">
              <div className="card-img">
                <img src="/images/img21.jpg" alt="about-img" />
              </div>
              <div className="card-body">
                <h3 className="card-title mb-2">Who We Are?</h3>
                <p className="card-text">
                  Duis cursus lectus sed dui imperdiet, id pharetra nunc ullamcorper donec luctus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 responsive-column">
            <div className="card-item">
              <div className="card-img">
                <img src="/images/img22.jpg" alt="about-img" />
              </div>
              <div className="card-body">
                <h3 className="card-title mb-2">What We Do?</h3>
                <p className="card-text">
                  Duis cursus lectus sed dui imperdiet, id pharetra nunc ullamcorper donec luctus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 responsive-column">
            <div className="card-item">
              <div className="card-img">
                <img src="/images/img23.jpg" alt="about-img" />
              </div>
              <div className="card-body">
                <h3 className="card-title mb-2">Our Mission</h3>
                <p className="card-text">
                  Duis cursus lectus sed dui imperdiet, id pharetra nunc ullamcorper donec luctus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About Area */}
    <section className="about-area padding-bottom-90px overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading margin-bottom-40px">
              <h2 className="sec__title">About Us</h2>
              <h4 className="title font-size-16 line-height-26 pt-4 pb-2">
                Since 2002, TravelVela has been revolutionising the travel industry. Metasearch for travel? No one was doing it. Until we did.
              </h4>
              <p className="sec__desc font-size-16 pb-3">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <p className="sec__desc font-size-16 pb-3">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>
              <p className="sec__desc font-size-16">
                Vivamus a mauris vel nunc tristique volutpat. Aenean eu faucibus enim. Aenean blandit arcu lectus, in cursus elit porttitor non.
              </p>
            </div>
          </div>
          <div className="col-lg-5 ms-auto">
            <div className="image-box about-img-box">
              <img src="/images/img24.jpg" alt="about-img" className="img__item img__item-1" />
              <img src="/images/img25.jpg" alt="about-img" className="img__item img__item-2" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Fun Fact Area */}
    <section className="funfact-area padding-bottom-70px">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading text-center">
              <h2 className="sec__title">Our Numbers Say Everything</h2>
            </div>
          </div>
        </div>
        <div className="counter-box counter-box-2 margin-top-60px mb-0">
          <div className="row">
            <div className="col-lg-3 responsive-column">
              <div className="counter-item counter-item-layout-2 d-flex">
                <div className="counter-icon flex-shrink-0">
                  <i className="la la-users"></i>
                </div>
                <div className="counter-content">
                  <div>
                    <span className="counter" data-from="0" data-to="200" data-refresh-interval="5">0</span><span className="count-symbol">+</span>
                  </div>
                  <p className="counter__title">Partners</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 responsive-column">
              <div className="counter-item counter-item-layout-2 d-flex">
                <div className="counter-icon flex-shrink-0">
                  <i className="la la-building"></i>
                </div>
                <div className="counter-content">
                  <div>
                    <span className="counter" data-from="0" data-to="3" data-refresh-interval="5">0</span><span className="count-symbol">k</span>
                  </div>
                  <p className="counter__title">Properties</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 responsive-column">
              <div className="counter-item counter-item-layout-2 d-flex">
                <div className="counter-icon flex-shrink-0">
                  <i className="la la-globe"></i>
                </div>
                <div className="counter-content">
                  <div>
                    <span className="counter" data-from="0" data-to="400" data-refresh-interval="5">0</span><span className="count-symbol">+</span>
                  </div>
                  <p className="counter__title">Destinations</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 responsive-column">
              <div className="counter-item counter-item-layout-2 d-flex">
                <div className="counter-icon flex-shrink-0">
                  <i className="la la-check-circle"></i>
                </div>
                <div className="counter-content">
                  <div>
                    <span className="counter" data-from="0" data-to="40" data-refresh-interval="5">0</span><span className="count-symbol">k</span>
                  </div>
                  <p className="counter__title">Booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonial Area */}
    <section className="testimonial-area section-bg section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="section-heading">
              <h2 className="sec__title line-height-50">What our customers are saying us?</h2>
              <p className="sec__desc padding-top-30px">Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="testimonial-carousel carousel-action">
              <div className="testimonial-card">
                <div className="testi-desc-box">
                  <p className="testi__desc">Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des.</p>
                </div>
                <div className="author-content d-flex align-items-center">
                  <div className="author-img"><img src="/images/team8.jpg" alt="testimonial image" /></div>
                  <div className="author-bio"><h4 className="author__title">Leroy Bell</h4><span className="author__meta">United States</span><span className="ratings d-flex align-items-center">{[...Array(5)].map((_,i)=><i key={i} className="la la-star" />)}</span></div>
                </div>
              </div>
              {/* Additional testimonial-cards omitted for brevity */}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Team Info Area */}
    <section className="info-area padding-top-100px padding-bottom-60px text-center">
      <div className="container">
        <div className="row"><div className="col-lg-12"><div className="section-heading"><h2 className="sec__title">Our Dedicated Team</h2></div></div></div>
        <div className="row padding-top-100px">
          {[
            { img: '/images/team1.jpg', name: 'David Roberts', role: 'Founder & Director' },
            { img: '/images/team2.jpg', name: 'Augusta Silva', role: 'Chief Operating Officer' },
            { img: '/images/team3.jpg', name: 'Bernice Lucas', role: 'Account Manager' },
            { img: '/images/team4.jpg', name: 'David Jackson', role: 'Sales Support' },
            { img: '/images/team5.jpg', name: 'Kyle Martin', role: 'Order Manager' },
            { img: '/images/team6.jpg', name: 'Evan Porter', role: 'Head of Design' },
          ].map((member, i) => (
            <div key={i} className="col-lg-4 responsive-column">
              <div className="card-item team-card">
                <div className="card-img">
                  <img src={member.img} alt="team-img" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{member.name}</h3>
                  <p className="card-meta">{member.role}</p>
                  <p className="card-text font-size-15 pt-2">
                    Ligula vehicula enenatis semper, magna lorem aliquet lacusin ante dapibus dictum fugats vitaes nemo minima.
                  </p>
                  <ul className="social-profile padding-top-20px pb-2">
                    <li><a href="#"><i className="lab la-facebook-f"></i></a></li>
                    <li><a href="#"><i className="lab la-twitter"></i></a></li>
                    <li><a href="#"><i className="lab la-instagram"></i></a></li>
                    <li><a href="#"><i className="lab la-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutComponent;
