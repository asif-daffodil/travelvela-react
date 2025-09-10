import React, { useEffect } from 'react';

export default function PopularHotels() {
  // sample hotel data
  const hotels = [
    { id: 1, img: '/images/img1.jpg', badge: 'Bestseller', title: 'The Millennium Hilton New York', meta: '124 E Huron St, New york', price: 88 },
    { id: 2, img: '/images/img2.jpg', title: 'Best Western Grant Park Hotel', meta: '124 E Huron St, Chicago', price: 58 },
    { id: 3, img: '/images/img3.jpg', badge: 'Featured', title: 'Hyatt Regency Maui Resort & Spa', meta: '200 Nohea Kai Dr, Lahaina, HI', price: 88 },
    { id: 4, img: '/images/img4.jpg', badge: 'Popular', title: 'Four Seasons Resort Maui at Wailea', meta: '3900 Wailea Alanui Drive, Kihei, HI', price: 88 },
    { id: 5, img: '/images/img5.jpg', title: 'Ibis Styles London Heathrow', meta: '272 Bath Road, Harlington, England', price: 88 },
    { id: 6, img: '/images/img6.jpg', title: 'Hotel Europe Saint Severin Paris', meta: '38-40 Rue Saint Séverin, Paris, Paris', price: 88 }
  ];

  // initialize carousel
  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.hotel-card-carousel').owlCarousel({
        loop: true,
        items: 4,
        nav: true,
        dots: true,
        smartSpeed: 700,
        autoplay: false,
        active: true,
        margin: 24,
        navText: [
          '<i class="la la-angle-left"></i>',
          '<i class="la la-angle-right"></i>'
        ],
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1441: { items: 4 }
        }
      });
    }
  }, []);

  return (
    <section className="hotel-area home-hotel section-bg section-gap overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="theme-section-head text-center mb-0">
              <span> Popular Deals </span>
              <h3>
                Most Popular Hotel <br />
                Destinations
              </h3>
            </div>
            {/* end section-heading */}
          </div>
          {/* end col-lg-12 */}
        </div>
        {/* end row */}
        <div className="row padding-top-40px">
          <div className="col-lg-12">
            <div className="hotel-card-wrap">
              <div className="hotel-card-carousel carousel-action">
                {hotels.map(hotel => (
                  <div key={hotel.id} className="card-item">
                    <div className="card-img">
                      <a href="hotel-single.html" className="d-block">
                        <img src={hotel.img} alt="hotel-img" />
                      </a>
                      {hotel.badge && <span className="badge">{hotel.badge}</span>}
                      <div className="add-to-wishlist icon-element" title="Bookmark">
                        <i className="la la-heart-o"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="hotel-single.html">{hotel.title}</a>
                      </h3>
                      <p className="card-meta">{hotel.meta}</p>
                      <div className="card-rating">
                        <span className="badge text-white">4.4/5</span>
                        <span className="review__text">Average</span>
                        <span className="rating__text">(30 Reviews)</span>
                      </div>
                      <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">${hotel.price}.00</span>
                          <span className="price__text">Per night</span>
                        </p>
                        <a href="hotel-single.html" className="btn-text">
                          See details<i className="la la-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* end col-lg-12 */}
        </div>
        {/* end row */}
      </div>
      {/* end container-fluid */}
    </section>
  );
};