import React from 'react';
import { Outlet } from 'react-router-dom';
import Header2 from '../components/layout/Header2';
import Footer from '../components/layout/Footer';
import BackToTop from '../components/layout/BackToTop';
import ScrollToTop from '../components/layout/ScrollToTop';

// New layout using style-2 header
export default function Layout2() {
    return (
        <div>
            {/* Vendor CSS (served from public/css) */}
            <ScrollToTop />
            <link rel="stylesheet" href="/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/select2.min.css" />
            <link rel="stylesheet" href="/css/line-awesome.css" />
            <link rel="stylesheet" href="/css/owl.carousel.min.css" />
            <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
            <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />
            <link rel="stylesheet" href="/css/daterangepicker.css" />
            <link rel="stylesheet" href="/css/animate.min.css" />
            <link rel="stylesheet" href="/css/animated-headline.css" />
            <link rel="stylesheet" href="/css/jquery-ui.css" />
            <link rel="stylesheet" href="/css/flag-icon.min.css" />
            <link rel="stylesheet" href="/css/style.css" />

            {/* Style-2 Header */}
            <Header2 />

            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
            <BackToTop />

            {/* Modals for signup and login */}
            {/* Signup Modal */}
            <div className="modal-popup">
                <div className="modal fade" id="signupPopupForm" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div>
                                    <h5 className="modal-title title" id="exampleModalLongTitle">
                                        Sign Up
                                    </h5>
                                    <p className="font-size-14">Hello! Welcome Create a New Account</p>
                                </div>
                                <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="la la-close" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="contact-form-action">
                                    <form method="post">
                                        <div className="input-box">
                                            <label className="label-text">Username</label>
                                            <div className="form-group">
                                                <span className="la la-user form-icon" />
                                                <input className="form-control" type="text" name="text" placeholder="Type your username" />
                                            </div>
                                        </div>
                                        {/* end input-box */}
                                        <div className="input-box">
                                            <label className="label-text">Email Address</label>
                                            <div className="form-group">
                                                <span className="la la-envelope form-icon" />
                                                <input className="form-control" type="text" name="text" placeholder="Type your email" />
                                            </div>
                                        </div>
                                        {/* end input-box */}
                                        <div className="input-box">
                                            <label className="label-text">Password</label>
                                            <div className="form-group">
                                                <span className="la la-lock form-icon" />
                                                <input className="form-control" type="text" name="text" placeholder="Type password" />
                                            </div>
                                        </div>
                                        {/* end input-box */}
                                        <div className="input-box">
                                            <label className="label-text">Repeat Password</label>
                                            <div className="form-group">
                                                <span className="la la-lock form-icon" />
                                                <input className="form-control" type="text" name="text" placeholder="Type again password" />
                                            </div>
                                        </div>
                                        {/* end input-box */}
                                        <div className="btn-box pt-3 pb-4">
                                            <button type="button" className="theme-btn w-100">
                                                Register Account
                                            </button>
                                        </div>
                                        <div className="action-box text-center">
                                            <p className="font-size-14">Or Sign up Using</p>
                                            <ul className="social-profile py-3">
                                                <li>
                                                    <a href="#" className="bg-5 text-white"><i className="lab la-facebook-f" /></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="bg-6 text-white"><i className="lab la-twitter" /></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="bg-7 text-white"><i className="lab la-instagram" /></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="bg-5 text-white"><i className="lab la-linkedin-in" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                                {/* end contact-form-action */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Login Modal */}
            <div className="modal-popup">
                <div className="modal fade" id="loginPopupForm" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div>
                                    <h5 className="modal-title title" id="exampleModalLongTitle2">
                                        Login
                                    </h5>
                                    <p className="font-size-14">Hello! Welcome to your account</p>
                                </div>
                                <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="la la-close" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="contact-form-action">
                                    <form method="post">
                                        <div className="input-box">
                                            <label className="label-text">Username</label>
                                            <div className="form-group">
                                                <span className="la la-user form-icon" />
                                                <input className="form-control" type="text" name="text" placeholder="Type your username" />
                                            </div>
                                        </div>
                                        {/* end input-box */}
                                        <div className="input-box">
                                            <label className="label-text">Password</label>
                                            <div className="form-group mb-2">
                                                <span className="la la-lock form-icon" />
                                                <input className="form-control" type="text" name="text" placeholder="Type your password" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="custom-checkbox mb-0">
                                                    <input type="checkbox" className="form-check-input" id="rememberchb" />
                                                    <label htmlFor="rememberchb">Remember me</label>
                                                </div>
                                                <p className="forgot-password">
                                                    <a href="recover.html">Forgot Password?</a>
                                                </p>
                                            </div>
                                        </div>
                                        {/* end input-box */}
                                        <div className="btn-box pt-3 pb-4">
                                            <button type="button" className="theme-btn w-100">
                                                Login Account
                                            </button>
                                        </div>
                                        <div className="action-box text-center">
                                            <p className="font-size-14">Or Login Using</p>
                                            <ul className="social-profile py-3">
                                                <li>
                                                    <a href="#" className="bg-5 text-white"><i className="lab la-facebook-f" /></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="bg-6 text-white"><i className="lab la-twitter" /></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="bg-7 text-white"><i className="lab la-instagram" /></a>
                                                </li>
                                                <li>
                                                    <a href="#" className="bg-5 text-white"><i className="lab la-linkedin-in" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                                {/* end contact-form-action */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Vendor JS (loaded after footer) */}
            <script src="/js/jquery-3.7.1.min.js"></script>
            <script src="/js/jquery-ui.js"></script>
            <script src="/js/bootstrap.bundle.min.js"></script>
            <script src="/js/select2.min.js"></script>
            <script src="/js/moment.min.js"></script>
            <script src="/js/daterangepicker.js"></script>
            <script src="/js/owl.carousel.min.js"></script>
            <script src="/js/jquery.fancybox.min.js"></script>
            <script src="/js/wow.min.js"></script>
            <script src="/js/jquery.countTo.min.js"></script>
            <script src="/js/animated-headline.js"></script>
            <script src="/js/jquery.ripples-min.js"></script>
            <script src="/js/quantity-input.js"></script>
            <script src="/js/main.js"></script>
        </div>
    );
}
