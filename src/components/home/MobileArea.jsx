import React from 'react';

export default function MobileArea() {
  return (
    <section className="download-area section-gap pb-0">
      <div className="container">
        <div
          className="download-bg"
          style={{ backgroundImage: "url('/images/mobile-app/bg-img.jpeg')" }}
        >
          <div className="download-right-side">
            <div className="download-wrapper">
              <div className="download-content">
                <div className="section-title-wrapper">
                  <span className="section-subtitle">Download Now!</span>
                  <h2 className="section-title">
                    Get 20% off your Best App Tour booking
                  </h2>
                  <p className="white-text">
                    Booking better on the app. Use promo code Tourigo
                  </p>
                </div>
                <h6 className="download-btn-title">
                  Get a magic link sent to your email
                </h6>
                <div className="download-btn-wrap">
                  <div className="download-btn-single">
                    <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/">
                      <img src="/images/mobile-app/play-store.svg" alt="google-play" />
                    </a>
                  </div>
                  <div className="download-btn-single">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.apple.com/app-store/">
                      <img src="/images/mobile-app/app-store.svg" alt="app-store" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="download-left-side">
            <div className="download-thumb-wrap">
              <div className="download-thumb">
                <img src="/images/mobile-app/app-mockup.png" alt="app-mockup" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
