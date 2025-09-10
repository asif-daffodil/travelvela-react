import React, { useState, useEffect } from 'react';
import '../../styles/dropdown.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.main-menu-content')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className="preloader"></div>

      {/* Header */}
      <header className="header-area home-header">
        <div className="header-menu-wrapper">
          <div className="container">
            <div className="header-main-inner">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu-wrapper">
                    <a href="#" className="down-button">
                      <i className="la la-angle-down"></i>
                    </a>
                    <div className="logo">
                      <a href="index.html">
                        <img src="/images/logo2.png" alt="logo" />
                      </a>
                      <div className="menu-toggler" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className="la la-bars"></i>
                        <i className="la la-times"></i>
                      </div>
                    </div>
                    
                    <div className={`main-menu-content ${isMenuOpen ? 'show' : ''}`}>
                      <nav>
                        <ul>
                          <li className="active">
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('flight'); }}>
                              Flight <i className="la la-angle-down"></i>
                            </a>
                            <ul className={`dropdown-menu-item ${activeDropdown === 'flight' ? 'show' : ''}`}>
                              <li>
                                <a href="flight-search-result.html">Flight Search Result</a>
                              </li>
                              <li>
                                <a href="flight-single.html">Flight details</a>
                              </li>
                              <li>
                                <a href="flight-booking.html">Flight Booking</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('hotel'); }}>
                              Hotel <i className="la la-angle-down"></i>
                            </a>
                            <ul className={`dropdown-menu-item ${activeDropdown === 'hotel' ? 'show' : ''}`}>
                              <li>
                                <a href="hotel-search-result.html">Hotel Search Result</a>
                              </li>
                              <li>
                                <a href="hotel-single.html">Hotel details</a>
                              </li>
                              <li>
                                <a href="hotel-booking.html">Hotel Booking</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('tour'); }}>
                              Tour <i className="la la-angle-down"></i>
                            </a>
                            <ul className={`dropdown-menu-item ${activeDropdown === 'tour' ? 'show' : ''}`}>
                              <li>
                                <a href="tour-search-result.html">Tour Search Result</a>
                              </li>
                              <li>
                                <a href="tour-details.html">Tour details</a>
                              </li>
                              <li>
                                <a href="tour-booking.html">Tour Booking</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="about.html">about</a>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('pages'); }}>
                              Pages <i className="la la-angle-down"></i>
                            </a>
                            <ul className={`dropdown-menu-item ${activeDropdown === 'pages' ? 'show' : ''}`}>
                              <li>
                                <a href="services.html">Our Services</a>
                              </li>
                              <li><a href="gallery.html">Gallery</a></li>
                              <li><a href="pricing.html">pricing</a></li>
                              <li><a href="faq.html">faq</a></li>
                              <li>
                                <a href="user-dashboard.html">User Dashboard</a>
                              </li>
                              <li>
                                <a href="user-profile.html">User profile</a>
                              </li>
                              <li>
                                <a href="recover.html">recover password</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="payment-received.html">payment received</a>
                              </li>
                              <li>
                                <a href="payment-complete.html">payment complete</a>
                              </li>
                              <li><a href="page-404.html">404 page</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('blog'); }}>
                              Blog <i className="la la-angle-down"></i>
                            </a>
                            <ul className={`dropdown-menu-item ${activeDropdown === 'blog' ? 'show' : ''}`}>
                              <li>
                                <a href="blog-sidebar.html">blog sidebar</a>
                              </li>
                              <li>
                                <a href="blog-single.html">blog details</a>
                              </li>
                            </ul>
                          </li>
                          <li><a href="contact.html">contact</a></li>
                        </ul>
                      </nav>
                    </div>

                    <div className="header-right-action main-header">
                      <a
                        href="#"
                        className="theme-btn theme-btn-small theme-btn-transparent"
                        data-bs-toggle="modal"
                        data-bs-target="#signupPopupForm"
                      >
                        Sign Up
                      </a>
                      <a
                        href="#"
                        className="theme-btn theme-btn-small"
                        data-bs-toggle="modal"
                        data-bs-target="#loginPopupForm"
                      >
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
