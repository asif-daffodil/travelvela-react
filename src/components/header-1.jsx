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
                            <li><a href="#">Flight Search Result</a></li>
                            <li><a href="#">Flight details</a></li>
                            <li><a href="#">Flight Booking</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Hotel <i className="la la-angle-down" /></a>
                          <ul className="dropdown-menu-item">
                            <li><a href="#">Hotel Search Result</a></li>
                            <li><a href="#">Hotel details</a></li>
                            <li><a href="#">Hotel Booking</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Tour <i className="la la-angle-down" /></a>
                          <ul className="dropdown-menu-item">
                            <li><a href="#">Tour Search Result</a></li>
                            <li><a href="#">Tour details</a></li>
                            <li><a href="#">Tour Booking</a></li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/about">about</Link>
                        </li>
                        <li>
                          <a href="#">Pages <i className="la la-angle-down" /></a>
                          <ul className="dropdown-menu-item">
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">pricing</a></li>
                            <li><a href="#">faq</a></li>
                            <li><a href="#">User Dashboard</a></li>
                            <li><a href="#">User profile</a></li>
                            <li><a href="#">recover password</a></li>
                            <li><a href="#">Checkout</a></li>
                            <li><a href="#">payment received</a></li>
                            <li><a href="#">payment complete</a></li>
                            <li><a href="#">404 page</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Blog <i className="la la-angle-down" /></a>
                          <ul className="dropdown-menu-item">
                            <li><Link to="/blog-sidebar">Blog Sidebar</Link></li>
                            <li><Link to="/blog-single">Blog Details</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/contact">contact</Link>
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
