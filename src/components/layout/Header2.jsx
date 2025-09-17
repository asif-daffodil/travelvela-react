import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../store/slices/authSlice';
import '../../styles/dropdown.css';

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dispatch = useDispatch();
  const { isAuthenticated, name } = useSelector((state) => state.auth || {});
  const displayName = (name && String(name).split(' ')[0]) || 'Account';

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.main-menu-content')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <header className="header-area style-2">
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
                    <Link to="/">
                      <img src="/images/logo.png" alt="logo" />
                    </Link>
                    <div className="menu-toggler" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                      <i className="la la-bars"></i>
                      <i className="la la-times"></i>
                    </div>
                  </div>
                  <div className={`main-menu-content ${isMenuOpen ? 'show' : ''}`}> 
                    <nav>
                      <ul>
                        <li className="active">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('flight'); }}>
                            Flight <i className="la la-angle-down"></i>
                          </a>
                          <ul className={`dropdown-menu-item ${activeDropdown === 'flight' ? 'show' : ''}`}>
                            <li><Link to="/flight-search-result">Flight Search Result</Link></li>
                            <li><Link to="/flight-single">Flight Details</Link></li>
                            <li><Link to="/flight-booking">Flight Booking</Link></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('hotel'); }}>
                            Hotel <i className="la la-angle-down"></i>
                          </a>
                          <ul className={`dropdown-menu-item ${activeDropdown === 'hotel' ? 'show' : ''}`}>
                            <li><Link to="/hotel-search-result">Hotel Search Result</Link></li>
                            <li><Link to="/hotel-single">Hotel Details</Link></li>
                            <li><Link to="/hotel-booking">Hotel Booking</Link></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('tour'); }}>
                            Tour <i className="la la-angle-down"></i>
                          </a>
                          <ul className={`dropdown-menu-item ${activeDropdown === 'tour' ? 'show' : ''}`}>
                            <li><Link to="/tour-search-result">Tour Search Result</Link></li>
                            <li><Link to="/tour-details">Tour details</Link></li>
                            <li><Link to="/tour-booking">Tour Booking</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('pages'); }}>
                            Pages <i className="la la-angle-down"></i>
                          </a>
                          <ul className={`dropdown-menu-item ${activeDropdown === 'pages' ? 'show' : ''}`}>
                            <li><Link to="/services">Our Services</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><a href="/user-dashboard">User Dashboard</a></li>
                            <li><Link to="/user-dashboard/booking">My Booking</Link></li>
                            <li><a href="/user-profile">User Profile</a></li>
                            <li><Link to="/recover">Recover Password</Link></li>
                            <li><a href="/checkout">Checkout</a></li>
                            <li><Link to="/payment-received">Payment Received</Link></li>
                            <li><Link to="/payment-complete">Payment Complete</Link></li>
                            <li><Link to="/404">404 Page</Link></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown('blog'); }}>
                            Blog <i className="la la-angle-down"></i>
                          </a>
                          <ul className={`dropdown-menu-item ${activeDropdown === 'blog' ? 'show' : ''}`}>
                            <li><Link to="/blog-sidebar">Blog Sidebar</Link></li>
                            <li><Link to="/blog-single">Blog Details</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right-action main-header">
                    {isAuthenticated ? (
                      <div className="dropdown">
                        <button
                          className="theme-btn theme-btn-small dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {displayName}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link className="dropdown-item" to="/user-dashboard">Dashboard</Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/user-profile">Profile</Link>
                          </li>
                          <li><hr className="dropdown-divider" /></li>
                          <li>
                            <button className="dropdown-item" onClick={() => dispatch(clearUser())}>Logout</button>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <>
                        <a href="#" className="theme-btn theme-btn-small theme-btn-transparent" data-bs-toggle="modal" data-bs-target="#signupPopupForm">Sign Up</a>
                        <a href="#" className="theme-btn theme-btn-small" data-bs-toggle="modal" data-bs-target="#loginPopupForm">Login</a>
                      </>
                    )}
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
