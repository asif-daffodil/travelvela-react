import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../assets/images/logo2.png'

export default function Header1() {
  return (
    <header className="header-area home-header">
      <div className="header-menu-wrapper">
        <div className="container">
          <div className="header-main-inner">
            <div className="row">
              <div className="col-lg-12">
                <div className="menu-wrapper">
                  <a href="#" className="down-button">
                    <i className="la la-angle-down" />
                  </a>
                  <div className="logo">
                    <Link to="/">
                      <img src={logo2} alt="logo" />
                    </Link>
                    <div className="menu-toggler">
                      <i className="la la-bars" />
                      <i className="la la-times" />
                    </div>
                    {/* end menu-toggler */}
                  </div>
                  {/* end logo */}
                  <div className="main-menu-content">
                    <nav>
                      <ul>
                        <li className="active">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <a href="#">Flight <i className="la la-angle-down" /></a>
                          <ul className="dropdown-menu-item">
                            <li><Link to="/flight-search-result">Flight Search Result</Link></li>
                            <li><Link to="/flight-single">Flight Details</Link></li>
                            <li><Link to="/flight-booking">Flight Booking</Link></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Hotel <i className="la la-angle-down" /></a>
                          <ul className="dropdown-menu-item">
                            <li><Link to="/hotel-search-result">Hotel Search Result</Link></li>
                            <li><Link to="/hotel-single">Hotel Details</Link></li>
                            <li><Link to="/hotel-booking">Hotel Booking</Link></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Tour <i className="la la-angle-down" /></a>
                          <ul className="dropdown-menu-item">
                            <li><Link to="/tour-search-result">Tour Search Result</Link></li>
                            <li><Link to="/tour-details">Tour details</Link></li>
                            <li><Link to="/tour-booking">Tour Booking</Link></li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <a href="#">Pages <i className="la la-angle-down" /></a>
                          <ul className="dropdown-menu-item">
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
                          <a href="#">Blog <i className="la la-angle-down" /></a>
                          <ul className="dropdown-menu-item">
                            <li><Link to="/blog-sidebar">Blog Sidebar</Link></li>
                            <li><Link to="/blog-single">Blog Details</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="header-right-action main-header">
                    <a href="#" className="theme-btn theme-btn-small theme-btn-transparent" data-bs-toggle="modal" data-bs-target="#signupPopupForm">Sign Up</a>
                    <a href="#" className="theme-btn theme-btn-small" data-bs-toggle="modal" data-bs-target="#loginPopupForm">Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
