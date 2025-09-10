import React from 'react';

const PopularDestinations = () => {
  const destinations = [
    { id: 1, img: '/images/destination-img2.jpg', badge: 'new york', title: 'Main Street Park', link: 'tour-details.html', rating: 3, reviews: '70694 Reviews', tours: '50 Tours', price: 58 },
    { id: 2, img: '/images/destination-img3.jpg', badge: 'chicago', title: 'Chicago Cultural Center', link: 'tour-details.html', rating: 4, reviews: '70694 Reviews', tours: '50 Tours', price: 68 },
    { id: 3, img: '/images/destination-img4.jpg', badge: 'Hong Kong', title: 'Lugard Road Lookout', link: 'tour-details.html', rating: 3, reviews: '70694 Reviews', tours: '150 Tours', price: 79, oldPrice: 89 },
    { id: 4, img: '/images/destination-img5.jpg', badge: 'Las Vegas', title: 'Planet Hollywood Resort', link: 'tour-details.html', rating: 4, reviews: '70694 Reviews', tours: '50 Tours', price: 88 },
    { id: 5, img: '/images/destination-img.jpg', badge: 'Shanghai', title: 'Oriental Pearl TV Tower', link: 'tour-details.html', rating: 5, reviews: '70694 Reviews', tours: '50 Tours', price: 58 }
  ];

  // group cards into columns: two in first, two in second, remaining in third
  const grouped = [
    destinations.slice(0, 2),
    destinations.slice(2, 4),
    destinations.slice(4)
  ];

  return (
    <section className="destination-area section-gap">
      <div className="container">
        {/* header row */}
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="section-heading">
              <h2 className="sec__title">Top Visited Places</h2>
              <p className="sec__desc pt-3">
                Morbi convallis bibendum urna ut viverra Maecenas quis
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="btn-box btn--box text-end">
              <a href="destinations.html" className="theme-btn">Discover More</a>
            </div>
          </div>
        </div>
        {/* cards grouped into columns */}
        <div className="row padding-top-50px">
          {grouped.map((group, colIdx) => (
            <div key={colIdx} className="col-lg-4">
              {group.map(dest => (
                <div key={dest.id} className="card-item destination-card">
                  <div className="card-img">
                    <img src={dest.img} alt="destination-img" />
                    <span className="badge">{dest.badge}</span>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">
                      <a href={dest.link}>{dest.title}</a>
                    </h3>
                    <div className="card-rating d-flex align-items-center">
                      <span className="ratings d-flex align-items-center me-1">
                        {Array.from({ length: dest.rating }).map((_, i) => (
                          <i key={i} className="la la-star"></i>
                        ))}
                        {Array.from({ length: 5 - dest.rating }).map((_, i) => (
                          <i key={i} className="la la-star-o"></i>
                        ))}
                      </span>
                      <span className="rating__text">({dest.reviews})</span>
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                      <p className="tour__text">{dest.tours}</p>
                      <p>
                        <span className="price__from">Price</span>
                        <span className="price__num">${dest.price}.00</span>
                        {dest.oldPrice && <span className="price__num before-price">${dest.oldPrice}.00</span>}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;