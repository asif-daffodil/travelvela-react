import React from 'react'
import { Link } from 'react-router-dom'

const ServicesComponent = () => {
    return (
        <>
            {/* START BREADCRUMB AREA */}
            <section className="breadcrumb-area bread-bg-9">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="breadcrumb-content">
                                    <div className="section-heading">
                                        <h2 className="sec__title text-white">Our Services</h2>
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
                                        <li>Our Services</li>
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
            {/* END BREADCRUMB AREA */}

            {/* START SERVICE AREA */}
            <section className="service-area section-gap text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">Services We Provide</h2>
                            </div>
                            {/* end section-heading */}
                        </div>
                        {/* end col-lg-12 */}
                    </div>
                    {/* end row */}
                    <div className="row padding-top-80px">
                        <div className="col-lg-3 responsive-column">
                            <div className="icon-box icon-layout-4">
                                <div className="info-icon">
                                    <i className="la la-plane" />
                                </div>
                                {/* end info-icon*/}
                                <div className="info-content">
                                    <h4 className="info__title"><a href="#">Flight Deals</a></h4>
                                    <p className="info__desc">
                                        Pellentesque ac turpis egestas, varius justo et, condimentum
                                        augue nerrowe.
                                    </p>
                                </div>
                                {/* end info-content */}
                            </div>
                            {/* end icon-box */}
                        </div>
                        {/* end col-lg-3 */}
                        <div className="col-lg-3 responsive-column">
                            <div className="icon-box icon-layout-4">
                                <div className="info-icon">
                                    <i className="la la-anchor" />
                                </div>
                                {/* end info-icon*/}
                                <div className="info-content">
                                    <h4 className="info__title"><a href="#">Amazing Tour</a></h4>
                                    <p className="info__desc">
                                        Pellentesque ac turpis egestas, varius justo et, condimentum
                                        augue nerrowe.
                                    </p>
                                </div>
                                {/* end info-content */}
                            </div>
                            {/* end icon-box */}
                        </div>
                        {/* end col-lg-3 */}
                        <div className="col-lg-3 responsive-column">
                            <div className="icon-box icon-layout-4">
                                <div className="info-icon">
                                    <i className="la la-support" />
                                </div>
                                {/* end info-icon*/}
                                <div className="info-content">
                                    <h4 className="info__title"><a href="#">Support Cases</a></h4>
                                    <p className="info__desc">
                                        Pellentesque ac turpis egestas, varius justo et, condimentum
                                        augue nerrowe.
                                    </p>
                                </div>
                                {/* end info-content */}
                            </div>
                            {/* end icon-box */}
                        </div>
                        {/* end col-lg-3 */}
                        <div className="col-lg-3 responsive-column">
                            <div className="icon-box icon-layout-4">
                                <div className="info-icon">
                                    <i className="la la-briefcase" />
                                </div>
                                {/* end info-icon*/}
                                <div className="info-content">
                                    <h4 className="info__title"><a href="#">In Business</a></h4>
                                    <p className="info__desc">
                                        Pellentesque ac turpis egestas, varius justo et, condimentum
                                        augue nerrowe.
                                    </p>
                                </div>
                                {/* end info-content */}
                            </div>
                            {/* end icon-box */}
                        </div>
                        {/* end col-lg-3 */}
                        <div className="col-lg-3 responsive-column">
                            <div className="icon-box icon-layout-4">
                                <div className="info-icon">
                                    <i className="la la-hotel" />
                                </div>
                                {/* end info-icon*/}
                                <div className="info-content">
                                    <h4 className="info__title"><a href="#">Handpicked Hotels</a></h4>
                                    <p className="info__desc">
                                        Pellentesque ac turpis egestas, varius justo et, condimentum
                                        augue nerrowe.
                                    </p>
                                </div>
                                {/* end info-content */}
                            </div>
                            {/* end icon-box */}
                        </div>
                        {/* end col-lg-3 */}
                        <div className="col-lg-3 responsive-column">
                            <div className="icon-box icon-layout-4">
                                <div className="info-icon">
                                    <i className="la la-user-secret" />
                                </div>
                                {/* end info-icon*/}
                                <div className="info-content">
                                    <h4 className="info__title"><a href="#">Private Guide</a></h4>
                                    <p className="info__desc">
                                        Pellentesque ac turpis egestas, varius justo et, condimentum
                                        augue nerrowe.
                                    </p>
                                </div>
                                {/* end info-content */}
                            </div>
                            {/* end icon-box */}
                        </div>
                        {/* end col-lg-3 */}
                        <div className="col-lg-3 responsive-column">
                            <div className="icon-box icon-layout-4">
                                <div className="info-icon">
                                    <i className="la la-map" />
                                </div>
                                {/* end info-icon*/}
                                <div className="info-content">
                                    <h4 className="info__title"><a href="#">Location Manager</a></h4>
                                    <p className="info__desc">
                                        Pellentesque ac turpis egestas, varius justo et, condimentum
                                        augue nerrowe.
                                    </p>
                                </div>
                                {/* end info-content */}
                            </div>
                            {/* end icon-box */}
                        </div>
                        {/* end col-lg-3 */}
                        <div className="col-lg-3 responsive-column">
                            <div className="icon-box icon-layout-4">
                                <div className="info-icon">
                                    <i className="la la-thumbs-up" />
                                </div>
                                {/* end info-icon*/}
                                <div className="info-content">
                                    <h4 className="info__title"><a href="#">Best Travel Agent</a></h4>
                                    <p className="info__desc">
                                        Pellentesque ac turpis egestas, varius justo et, condimentum
                                        augue nerrowe.
                                    </p>
                                </div>
                                {/* end info-content */}
                            </div>
                            {/* end icon-box */}
                        </div>
                        {/* end col-lg-3 */}
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content-info mt-n4 d-flex justify-content-between align-items-center">
                                <p className="font-size-15">
                                    Do not hesitate to contact us for better help and service.
                                </p>
                                <a href="contact.html" className="btn-text font-size-15">Contact us <i className="la la-arrow-right ms-1" /></a>
                            </div>
                            {/* end tab-content-info */}
                        </div>
                    </div>
                </div>
                {/* end container */}
            </section>
            {/* END SERVICE AREA */}

            {/* START SERVICE AREA */}
            <section className="service-area section-bg section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">Services Also We Offer</h2>
                            </div>
                            {/* end section-heading */}
                        </div>
                        {/* end col-lg-12 */}
                    </div>
                    {/* end row */}
                    <div className="row padding-top-50px">
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="images/img9.jpg" alt="about-img" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title mb-2">Mountains Tours</h3>
                                    <p className="card-meta">
                                        Duis cursus lectus sed dui imperdiet, id pharetra nunc
                                        ullamcorper.
                                    </p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">$100.00</span>
                                        </p>
                                        <span className="tour-hour"><i className="la la-clock-o me-1" />7 days</span>
                                    </div>
                                    <div className="btn-box pt-3">
                                        <a href="#" className="theme-btn theme-btn-small">I want this</a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="images/img10.jpg" alt="about-img" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title mb-2">Honeymoons Tours</h3>
                                    <p className="card-meta">
                                        Duis cursus lectus sed dui imperdiet, id pharetra nunc
                                        ullamcorper.
                                    </p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">$100.00</span>
                                            <span className="price__num before-price color-text-3">$124.00</span>
                                        </p>
                                        <span className="tour-hour"><i className="la la-clock-o me-1" />7 days</span>
                                    </div>
                                    <div className="btn-box pt-3">
                                        <a href="#" className="theme-btn theme-btn-small">I want this</a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="images/img11.jpg" alt="about-img" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title mb-2">Sea Tours</h3>
                                    <p className="card-meta">
                                        Duis cursus lectus sed dui imperdiet, id pharetra nunc
                                        ullamcorper.
                                    </p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">$100.00</span>
                                        </p>
                                        <span className="tour-hour"><i className="la la-clock-o me-1" />7 days</span>
                                    </div>
                                    <div className="btn-box pt-3">
                                        <a href="#" className="theme-btn theme-btn-small">I want this</a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="images/img12.jpg" alt="about-img" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title mb-2">Cruises Tours</h3>
                                    <p className="card-meta">
                                        Duis cursus lectus sed dui imperdiet, id pharetra nunc
                                        ullamcorper.
                                    </p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">$100.00</span>
                                        </p>
                                        <span className="tour-hour"><i className="la la-clock-o me-1" />7 days</span>
                                    </div>
                                    <div className="btn-box pt-3">
                                        <a href="#" className="theme-btn theme-btn-small">I want this</a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="images/img13.jpg" alt="about-img" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title mb-2">Safari Tours</h3>
                                    <p className="card-meta">
                                        Duis cursus lectus sed dui imperdiet, id pharetra nunc
                                        ullamcorper.
                                    </p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">$100.00</span>
                                            <span className="price__num before-price color-text-3">$124.00</span>
                                        </p>
                                        <span className="tour-hour"><i className="la la-clock-o me-1" />7 days</span>
                                    </div>
                                    <div className="btn-box pt-3">
                                        <a href="#" className="theme-btn theme-btn-small">I want this</a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="images/img14.jpg" alt="about-img" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title mb-2">Jungle Tours</h3>
                                    <p className="card-meta">
                                        Duis cursus lectus sed dui imperdiet, id pharetra nunc
                                        ullamcorper.
                                    </p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">$100.00</span>
                                        </p>
                                        <span className="tour-hour"><i className="la la-clock-o me-1" />7 days</span>
                                    </div>
                                    <div className="btn-box pt-3">
                                        <a href="#" className="theme-btn theme-btn-small">I want this</a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* END SERVICE AREA */}
        </>
    )
}

export default ServicesComponent
