import React from 'react';

export default function ContactComponent() {
    return (
        <div>
            {/* Start Breadcrumb Area */}
            <section className="breadcrumb-area bread-bg-5">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="breadcrumb-content">
                                    <div className="section-heading">
                                        <h2 className="sec__title text-white">Contact us</h2>
                                    </div>
                                </div>
                                {/* end breadcrumb-content */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6">
                                <div className="breadcrumb-list text-end">
                                    <ul className="list-items">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Pages</li>
                                        <li>Contact us</li>
                                    </ul>
                                </div>
                                {/* end breadcrumb-list */}
                            </div>
                            {/* end col-lg-6 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end breadcrumb-wrap */}
                <div className="bread-svg-box">
                    <svg className="bread-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <polygon points="100 0 50 10 0 0 0 10 100 10" />
                    </svg>
                </div>
                {/* end bread-svg */}
            </section>
            {/* end breadcrumb-area */}
            {/* Start Contact Area */}
            <section className="contact-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="form-box">
                                <div className="form-title-wrap">
                                    <h3 className="title">We'd love to hear from you</h3>
                                    <p className="font-size-15">
                                        Send us a message, and we'll respond as soon as possible
                                    </p>
                                </div>
                                {/* form-title-wrap */}
                                <div className="form-content">
                                    <div className="contact-form-action">
                                        <div id="contact-success-message" className="alert alert-success" role="alert">
                                            Thank You! Your message has been sent.
                                        </div>
                                        <form id="contact-form" method="post" action="php/contact.php" className="row">
                                            <div className="col-lg-6 responsive-column">
                                                <div className="input-box">
                                                    <label className="label-text">Your Name</label>
                                                    <div className="form-group">
                                                        <span className="la la-user form-icon" />
                                                        <input className="form-control" type="text" name="name" placeholder="Your name" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end col-lg-6 */}
                                            <div className="col-lg-6 responsive-column">
                                                <div className="input-box">
                                                    <label className="label-text">Your Email</label>
                                                    <div className="form-group">
                                                        <span className="la la-envelope-o form-icon" />
                                                        <input className="form-control" type="email" name="email" placeholder="Email address" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end col-lg-6 */}
                                            <div className="col-lg-12">
                                                <div className="input-box">
                                                    <label className="label-text">Message</label>
                                                    <div className="form-group">
                                                        <span className="la la-pencil form-icon" />
                                                        <textarea className="message-control form-control" name="message" placeholder="Write message" defaultValue={""} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end col-lg-12 */}
                                            <div className="col-lg-12">
                                                <div className="btn-box">
                                                    <button id="send-message-btn" type="submit" className="theme-btn">
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                            {/* end col-lg-12 */}
                                        </form>
                                    </div>
                                    {/* end contact-form-action */}
                                </div>
                                {/* end form-content */}
                            </div>
                            {/* end form-box */}
                        </div>
                        {/* end col-lg-8 */}
                        <div className="col-lg-4">
                            <div className="form-box">
                                <div className="form-title-wrap">
                                    <h3 className="title">Contact Us</h3>
                                </div>
                                {/* form-title-wrap */}
                                <div className="form-content">
                                    <div className="address-book">
                                        <ul className="list-items contact-address">
                                            <li>
                                                <i className="la la-map-marker icon-element" />
                                                <h5 className="title font-size-16 pb-1">Address</h5>
                                                <p className="map__desc">
                                                    Melbourne, Australia, 105 South Park Avenue
                                                </p>
                                            </li>
                                            <li>
                                                <i className="la la-phone icon-element" />
                                                <h5 className="title font-size-16 pb-1">Phone</h5>
                                                <p className="map__desc">Telephone: 2800 256 508</p>
                                                <p className="map__desc">Mobile: 666 777 888</p>
                                            </li>
                                            <li>
                                                <i className="la la-envelope-o icon-element" />
                                                <h5 className="title font-size-16 pb-1">Email</h5>
                                                <p className="map__desc">needhelp@TravelVela.com</p>
                                                <p className="map__desc">inquiry@TravelVela.com</p>
                                            </li>
                                        </ul>
                                        <ul className="social-profile text-center">
                                            <li>
                                                <a href="#"><i className="lab la-facebook-f" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="lab la-twitter" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="lab la-instagram" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="lab la-linkedin-in" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="lab la-youtube" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* end form-content */}
                            </div>
                            {/* end form-box */}
                        </div>
                        {/* end col-lg-4 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* end contact-area */}
        </div>
    );
}
