import React, { useEffect } from 'react';

const OfferBanner = () => {
  useEffect(() => {
    if (window.$ && window.$.fn && window.$.fn.owlCarousel) {
      window.$('.offer-banner-slider').owlCarousel({
        loop: true,
        items: 3,
        nav: true,
        dots: false,
        smartSpeed: 700,
        autoplay: false,
        margin: 24,
        navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1441: { items: 3 }
        }
      });
    }
  }, []);
  return (
    <div className="offer-banner-area section-gap">
      <div className="container">
        <div className="carousel-action offer-banner-slider">
          {/* Single Slider */}
          <a href="pricing.html" className="offer-banner-item">
            <img src="/images/offer-banner/1.avif" alt="offer-banner" />
          </a>

          {/* Single Slider */}
          <a href="pricing.html" className="offer-banner-item">
            <img src="/images/offer-banner/2.avif" alt="offer-banner" />
          </a>

          {/* Single Slider */}
          <a href="pricing.html" className="offer-banner-item">
            <img src="/images/offer-banner/3.avif" alt="offer-banner" />
          </a>

          {/* Single Slider */}
          <a href="pricing.html" className="offer-banner-item">
            <img src="/images/offer-banner/4.avif" alt="offer-banner" />
          </a>
        </div>
      </div>
    </div>
    );
};

export default OfferBanner;