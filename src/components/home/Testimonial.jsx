import React, { useEffect } from 'react';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      desc:
        'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident des.',
      img: '/images/team8.jpg',
      name: 'Leroy Bell',
      meta: 'United States',
    },
    {
      id: 2,
      desc:
        'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident des.',
      img: '/images/team9.jpg',
      name: 'Richard Pam',
      meta: 'Canada',
    },
    {
      id: 3,
      desc:
        'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident des.',
      img: '/images/team10.jpg',
      name: 'Luke Jacobs',
      meta: 'Australia',
    },
    {
      id: 4,
      desc:
        'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident des.',
      img: '/images/team8.jpg',
      name: 'Chulbul Panday',
      meta: 'Italy',
    },
  ];

  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.testimonial-carousel').owlCarousel({
        loop: true,
        items: 2,
        nav: true,
        dots: true,
        smartSpeed: 700,
        autoplay: false,
        margin: 30,
        navText: [
          '<i class="la la-angle-left"></i>',
          '<i class="la la-angle-right"></i>'
        ],
        responsive: { 0: { items: 1 }, 900: { items: 2 } }
      });
    }
  }, []);

  return (
    <section className="testimonial-area section-bg section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-heading">
              <h2 className="sec__title line-height-50">
                What our customers are saying us?
              </h2>
              <p className="sec__desc padding-top-30px">
                Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum.
              </p>
              <div className="btn-box padding-top-35px">
                <a href="#" className="theme-btn">
                  Explore All
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="testimonial-carousel carousel-action">
              {testimonials.map((t) => (
                <div key={t.id} className="testimonial-card">
                  <div className="testi-desc-box">
                    <p className="testi__desc">{t.desc}</p>
                  </div>
                  <div className="author-content d-flex align-items-center">
                    <div className="author-img">
                      <img src={t.img} alt="testimonial image" />
                    </div>
                    <div className="author-bio">
                      <h4 className="author__title">{t.name}</h4>
                      <span className="author__meta">{t.meta}</span>
                      <span className="ratings d-flex align-items-center">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="la la-star"></i>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
