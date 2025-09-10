import React from 'react';

export default function DestinationsComponent() {
    return (
        <div>
            {/* start breadcrumb area */}
            <section className="breadcrumb-area bread-bg">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content text-center">
                                    <div className="section-heading">
                                        <h2 className="sec__title text-white">
                                            Explore Tours By Destinations
                                        </h2>
                                    </div>
                                    <span className="arrow-blink">
                                        <i className="la la-arrow-down" />
                                    </span>
                                </div>
                                {/* end breadcrumb-content */}
                            </div>
                            {/* end col-lg-12 */}
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

            {/* start destination area */}
            <section className="destination-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item destination-card">
                                <div className="card-img">
                                    <img src="images/destination-img2.jpg" alt="destination-img" />
                                    <span className="badge">new york</span>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="tour-details.html">Main Street Park</a>
                                    </h3>
                                    <div className="card-rating d-flex align-items-center">
                                        <span className="ratings d-flex align-items-center me-1">
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star-o" />
                                            <i className="la la-star-o" />
                                        </span>
                                        <span className="rating__text">(70694 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p className="tour__text">50 Tours</p>
                                        <p>
                                            <span className="price__from">Price</span>
                                            <span className="price__num">$58.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                            <div className="card-item destination-card">
                                <div className="card-img">
                                    <img src="images/destination-img3.jpg" alt="destination-img" />
                                    <span className="badge">chicago</span>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="tour-details.html">Chicago Cultural Center</a>
                                    </h3>
                                    <div className="card-rating d-flex align-items-center">
                                        <span className="ratings d-flex align-items-center me-1">
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star-o" />
                                        </span>
                                        <span className="rating__text">(70694 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p className="tour__text">50 Tours</p>
                                        <p>
                                            <span className="price__from">Price</span>
                                            <span className="price__num">$68.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item destination-card">
                                <div className="card-img">
                                    <img src="images/destination-img4.jpg" alt="destination-img" />
                                    <span className="badge">Hong Kong</span>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="tour-details.html">Lugard Road Lookout</a>
                                    </h3>
                                    <div className="card-rating d-flex align-items-center">
                                        <span className="ratings d-flex align-items-center me-1">
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star-o" />
                                            <i className="la la-star-o" />
                                        </span>
                                        <span className="rating__text">(70694 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p className="tour__text">150 Tours</p>
                                        <p>
                                            <span className="price__from">Price</span>
                                            <span className="price__num">$79.00</span>
                                            <span className="price__num before-price">$89.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                            <div className="card-item destination-card">
                                <div className="card-img">
                                    <img src="images/destination-img5.jpg" alt="destination-img" />
                                    <span className="badge">Las Vegas</span>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="tour-details.html">Planet Hollywood Resort</a>
                                    </h3>
                                    <div className="card-rating d-flex align-items-center">
                                        <span className="ratings d-flex align-items-center me-1">
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star-o" />
                                        </span>
                                        <span className="rating__text">(70694 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p className="tour__text">50 Tours</p>
                                        <p>
                                            <span className="price__from">Price</span>
                                            <span className="price__num">$88.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item destination-card">
                                <div className="card-img">
                                    <img src="images/destination-img.jpg" alt="destination-img" />
                                    <span className="badge">Shanghai</span>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="tour-details.html">Oriental Pearl TV Tower</a>
                                    </h3>
                                    <div className="card-rating d-flex align-items-center">
                                        <span className="ratings d-flex align-items-center me-1">
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                            <i className="la la-star" />
                                        </span>
                                        <span className="rating__text">(70694 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p className="tour__text">50 Tours</p>
                                        <p>
                                            <span className="price__from">Price</span>
                                            <span className="price__num">$58.00</span>
                                        </p>
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
            {/* end destination-area */}
        </div>
    );
}
