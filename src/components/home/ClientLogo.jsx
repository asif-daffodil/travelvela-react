import React, { useEffect } from 'react';

export default function ClientLogo() {
  const logos = [
    '/images/clients/company-img1.png',
    '/images/clients/company-img2.png',
    '/images/clients/company-img3.png',
    '/images/clients/company-img4.png',
    '/images/clients/company-img5.png',
    '/images/clients/company-img4.png'
  ];

  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.client-logo').owlCarousel({
        loop: true,
        items: 6,
        margin: 8,
        nav: false,
        dots: false,
        smartSpeed: 700,
        autoplay: true,
        responsive: {
          0: { items: 2 },
          425: { items: 2 },
          480: { items: 2 },
          767: { items: 4 },
          992: { items: 6 }
        }
      });
    }
  }, []);

  return (
    <section className="clientlogo-area section-gap text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="clientlogo-title">
              Trusted By 200+ Global Brands
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="client-logo">
              {logos.map((src, idx) => (
                <div key={idx} className="client-logo-item">
                  <img src={src} alt="brand image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
