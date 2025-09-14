import React from 'react';

const UserProfileComponent = () => {
    return (
        <section className="user-area padding-top-100px padding-bottom-60px">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="title font-size-24">Partner Information</h3>
                        <div className="card-item user-card card-item-list mt-4 mb-0">
                            <div className="card-img">
                                <img src="images/team7.jpg" alt="user image" className="h-auto" />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Example</h3>
                                <p className="card-meta">Member since April 2016</p>
                                <div className="d-flex justify-content-between pt-3">
                                    <ul className="list-items list-items-2 flex-grow-1">
                                        <li><span>Email:</span>contact@Example.com</li>
                                        <li><span>Phone:</span>+22 12345678</li>
                                        <li><span>Paypal Email:</span>contact@Example.com</li>
                                        <li><span>Home Airport:</span>Knoxville, TN 37920, USA</li>
                                        <li><span>Address:</span>2701 Spence Pl, Knoxville, USA</li>
                                        <li><span>Website:</span><a href="#">Example.com</a></li>
                                    </ul>
                                    <ul className="list-items flex-grow-1">
                                        <li><h3 className="title">Verifications</h3></li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="color-text-2 font-weight-medium me-2">Phone</span><span className="theme-btn theme-btn-small theme-btn-rgb theme-btn-danger-rgb">Not verified</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="color-text-2 font-weight-medium me-2">Email</span><span className="theme-btn theme-btn-small theme-btn-rgb">Verified</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="color-text-2 font-weight-medium me-2">ID Card</span><span className="theme-btn theme-btn-small theme-btn-rgb">Verified</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="color-text-2 font-weight-medium me-2">Travel Certificate</span><span className="theme-btn theme-btn-small theme-btn-rgb">Verified</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* end card-item */}
                    </div>
                    {/* end col-lg-12 */}
                </div>
                {/* end row */}
                <div className="row padding-top-70px">
                    <div className="col-lg-9">
                        <h3 className="title font-size-24">Partner's Service</h3>
                        <div className="section-tab section-tab-3 pt-4 pb-5">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="my-hotel-tab" data-bs-toggle="tab" href="#my-hotel" role="tab" aria-controls="my-hotel" aria-selected="true">
                                        Hotel
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="my-tour-tab" data-bs-toggle="tab" href="#my-tour" role="tab" aria-controls="my-tour" aria-selected="false">
                                        Tour
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="my-activity-tab" data-bs-toggle="tab" href="#my-activity" role="tab" aria-controls="my-activity" aria-selected="false">
                                        Activity
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="my-car-tab" data-bs-toggle="tab" href="#my-car" role="tab" aria-controls="my-car" aria-selected="false">
                                        Car
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="my-flight-tab" data-bs-toggle="tab" href="#my-flight" role="tab" aria-controls="my-flight" aria-selected="false">
                                        Flight
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="my-review-tab" data-bs-toggle="tab" href="#my-review" role="tab" aria-controls="my-review" aria-selected="false">
                                        Reviews
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* end section-tab */}
                        <div className="tab-content margin-bottom-40px" id="myTabcontent">
                            <div className="tab-pane fade show active" id="my-hotel" role="tabpanel" aria-labelledby="my-hotel-tab">
                                <div className="my-service-list">
                                    <div className="card-item card-item-list">
                                        <div className="card-img">
                                            <a href="hotel-single.html" className="d-block">
                                                <img src="images/img1.jpg" alt="hotel-img" />
                                            </a>
                                            <span className="badge">Featured</span>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="hotel-single.html">The Millennium Hilton New York</a>
                                            </h3>
                                            <p className="card-meta">124 E Huron St, New york</p>
                                            <div className="card-rating d-flex align-items-center pt-1">
                                                <span className="rating__text">Hotel star</span>
                                                <span className="ratings d-flex align-items-center mx-2">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                </span>
                                                <span className="rating__text">5 of 5</span>
                                            </div>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$00.00</span>
                                                </p>
                                                <a href="hotel-single.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item card-item-list">
                                        <div className="card-img">
                                            <a href="hotel-single.html" className="d-block">
                                                <img src="images/img2.jpg" alt="hotel-img" />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="hotel-single.html">Hyatt Centric Times Square New York</a>
                                            </h3>
                                            <p className="card-meta">
                                                6782 Sarasea Circle, Siesta Key, Paris
                                            </p>
                                            <div className="card-rating d-flex align-items-center pt-1">
                                                <span className="rating__text">Hotel star</span>
                                                <span className="ratings d-flex align-items-center mx-2">
                                                    <i className="la la-star-o" />
                                                    <i className="la la-star-o" />
                                                    <i className="la la-star-o" />
                                                    <i className="la la-star-o" />
                                                    <i className="la la-star-o" />
                                                </span>
                                                <span className="rating__text">0 of 5</span>
                                            </div>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$00.00</span>
                                                </p>
                                                <a href="hotel-single.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item card-item-list">
                                        <div className="card-img">
                                            <a href="hotel-single.html" className="d-block">
                                                <img src="images/img3.jpg" alt="hotel-img" />
                                            </a>
                                            <span className="badge">Featured</span>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="hotel-single.html">Hotel WBF Kitasemba WEST</a>
                                            </h3>
                                            <p className="card-meta">
                                                6782 Sarasea Circle, Siesta Key, Paris
                                            </p>
                                            <div className="card-rating d-flex align-items-center pt-1">
                                                <span className="rating__text">Hotel star</span>
                                                <span className="ratings d-flex align-items-center mx-2">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                </span>
                                                <span className="rating__text">5 of 5</span>
                                            </div>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$00.00</span>
                                                </p>
                                                <a href="hotel-single.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item card-item-list">
                                        <div className="card-img">
                                            <a href="hotel-single.html" className="d-block">
                                                <img src="images/img4.jpg" alt="hotel-img" />
                                            </a>
                                            <span className="badge">Featured</span>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="hotel-single.html">Hotel Monterey Le Frere Osaka</a>
                                            </h3>
                                            <p className="card-meta">124 E Huron St, New york</p>
                                            <div className="card-rating d-flex align-items-center pt-1">
                                                <span className="rating__text">Hotel star</span>
                                                <span className="ratings d-flex align-items-center mx-2">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                </span>
                                                <span className="rating__text">5 of 5</span>
                                            </div>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$00.00</span>
                                                </p>
                                                <a href="hotel-single.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                </div>
                                {/* end my-service-list */}
                                <nav aria-label="Page navigation example" className="pt-4">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#" aria-label="Previous">
                                                <span aria-hidden="true"><i className="la la-angle-left" /></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link page-link-nav" href="#">2 <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#" aria-label="Next">
                                                <span aria-hidden="true"><i className="la la-angle-right" /></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* end tab-pane */}
                            <div className="tab-pane fade" id="my-tour" role="tabpanel" aria-labelledby="my-tour-tab">
                                <div className="my-service-list">
                                    <div className="card-item card-item-list card-item--list">
                                        <div className="card-img">
                                            <a href="tour-details.html" className="d-block">
                                                <img src="images/img9.jpg" alt="Destination-img" />
                                            </a>
                                            <span className="badge">Featured</span>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="tour-details.html">A Paris walk to Remember</a>
                                            </h3>
                                            <p className="card-meta">124 E Huron St, New york</p>
                                            <div className="card-rating d-flex align-items-center pt-0">
                                                <span className="ratings d-flex align-items-center me-2">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                </span>
                                                <span className="rating__text me-2">4.5 of 5</span>
                                                <span className="rating__text">(3 Comments)</span>
                                            </div>
                                            <ul className="list-items list-items-2">
                                                <li><span>Travellers:</span>30 people</li>
                                                <li><span>Date:</span>12 Jun 2020</li>
                                                <li><span>Booking details:</span> 0 user booked</li>
                                            </ul>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$989.00</span>
                                                </p>
                                                <a href="tour-details.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item card-item-list card-item--list">
                                        <div className="card-img">
                                            <a href="tour-details.html" className="d-block">
                                                <img src="images/img10.jpg" alt="Destination-img" />
                                            </a>
                                            <span className="badge badge-ribbon">Save 39%</span>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="tour-details.html">London to Florence in 10 Days</a>
                                            </h3>
                                            <p className="card-meta">124 E Huron St, New york</p>
                                            <div className="card-rating d-flex align-items-center pt-0">
                                                <span className="ratings d-flex align-items-center me-2">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                </span>
                                                <span className="rating__text me-2">4.5 of 5</span>
                                                <span className="rating__text">(3 Comments)</span>
                                            </div>
                                            <ul className="list-items list-items-2">
                                                <li><span>Travellers:</span>10 people</li>
                                                <li><span>Booking details:</span> 0 user booked</li>
                                            </ul>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$950.00</span>
                                                    <span className="price__num before-price color-text-3">$989.00</span>
                                                </p>
                                                <a href="tour-details.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item card-item-list card-item--list">
                                        <div className="card-img">
                                            <a href="tour-details.html" className="d-block">
                                                <img src="images/img11.jpg" alt="Destination-img" />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="tour-details.html">River Cruise Tour on the Seine</a>
                                            </h3>
                                            <p className="card-meta">124 E Huron St, New york</p>
                                            <div className="card-rating d-flex align-items-center pt-0">
                                                <span className="ratings d-flex align-items-center me-2">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                </span>
                                                <span className="rating__text me-2">4.5 of 5</span>
                                                <span className="rating__text">(3 Comments)</span>
                                            </div>
                                            <ul className="list-items list-items-2">
                                                <li><span>Travellers:</span>30 people</li>
                                                <li><span>Date:</span>12 Jun 2020</li>
                                                <li><span>Booking details:</span> 0 user booked</li>
                                            </ul>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$989.00</span>
                                                </p>
                                                <a href="tour-details.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item card-item-list card-item--list">
                                        <div className="card-img">
                                            <a href="tour-details.html" className="d-block">
                                                <img src="images/img12.jpg" alt="Destination-img" />
                                            </a>
                                            <span className="badge">Featured</span>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="tour-details.html">3-Day Loire Mer Extraordinaire</a>
                                            </h3>
                                            <p className="card-meta">
                                                Champs-Elysées, 8ème 5 rue de Berri
                                            </p>
                                            <div className="card-rating d-flex align-items-center pt-0">
                                                <span className="ratings d-flex align-items-center me-2">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                </span>
                                                <span className="rating__text me-2">4.5 of 5</span>
                                                <span className="rating__text">(1 Comments)</span>
                                            </div>
                                            <ul className="list-items list-items-2">
                                                <li><span>Travellers:</span>30 people</li>
                                                <li><span>Date:</span>12 Jun 2020</li>
                                                <li><span>Booking details:</span> 0 user booked</li>
                                            </ul>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$989.00</span>
                                                </p>
                                                <a href="tour-details.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                </div>
                                {/* end my-service-list */}
                                <nav aria-label="Page navigation example" className="pt-4">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#" aria-label="Previous">
                                                <span aria-hidden="true"><i className="la la-angle-left" /></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link page-link-nav" href="#">2 <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#" aria-label="Next">
                                                <span aria-hidden="true"><i className="la la-angle-right" /></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* end tab-pane */}
                            <div className="tab-pane fade" id="my-activity" role="tabpanel" aria-labelledby="my-activity-tab">
                                <div className="my-service-list">
                                    <div className="card-item card-item-list card-item--list">
                                        <div className="card-img">
                                            <a href="tour-details.html" className="d-block">
                                                <img src="images/img13.jpg" alt="Destination-img" />
                                            </a>
                                            <span className="badge">Featured</span>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="tour-details.html">Manhattan Skyline</a>
                                            </h3>
                                            <p className="card-meta">Avenue of the Americas, New York</p>
                                            <div className="card-rating d-flex align-items-center pt-0">
                                                <span className="ratings d-flex align-items-center me-2">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                </span>
                                                <span className="rating__text me-2">4.5 of 5</span>
                                                <span className="rating__text">(3 Reviews)</span>
                                            </div>
                                            <ul className="list-items list-items-2">
                                                <li><span>Activity Type:</span>Specific Date</li>
                                            </ul>
                                            <p className="card-meta">
                                                Follow the coming-of-age tale of lion cub Simba in this
                                                vibrant and colorful family-friendly ...
                                            </p>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$989.00</span>
                                                </p>
                                                <a href="tour-details.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item card-item-list card-item--list">
                                        <div className="card-img">
                                            <a href="tour-details.html" className="d-block">
                                                <img src="images/img14.jpg" alt="Destination-img" />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="tour-details.html">Best Day for Hiking</a>
                                            </h3>
                                            <p className="card-meta">Des Beaux Arts, Paris France</p>
                                            <div className="card-rating d-flex align-items-center pt-0">
                                                <span className="ratings d-flex align-items-center me-2">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                </span>
                                                <span className="rating__text me-2">4.5 of 5</span>
                                                <span className="rating__text">(3 Reviews)</span>
                                            </div>
                                            <ul className="list-items list-items-2">
                                                <li><span>Activity Type:</span>Daily Activity</li>
                                            </ul>
                                            <p className="card-meta">
                                                Follow the coming-of-age tale of lion cub Simba in this
                                                vibrant and colorful family-friendly ...
                                            </p>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$989.00</span>
                                                </p>
                                                <a href="tour-details.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item card-item-list card-item--list">
                                        <div className="card-img">
                                            <a href="tour-details.html" className="d-block">
                                                <img src="images/img15.jpg" alt="Destination-img" />
                                            </a>
                                            <span className="badge">Featured</span>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="tour-details.html">Splendous Skyline View</a>
                                            </h3>
                                            <p className="card-meta">Avenue of the Americas, New York</p>
                                            <div className="card-rating d-flex align-items-center pt-0">
                                                <span className="ratings d-flex align-items-center me-2">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                </span>
                                                <span className="rating__text me-2">4.5 of 5</span>
                                                <span className="rating__text">(3 Reviews)</span>
                                            </div>
                                            <ul className="list-items list-items-2">
                                                <li><span>Activity Type:</span>Specific Date</li>
                                            </ul>
                                            <p className="card-meta">
                                                Follow the coming-of-age tale of lion cub Simba in this
                                                vibrant and colorful family-friendly ...
                                            </p>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$989.00</span>
                                                </p>
                                                <a href="tour-details.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item card-item-list card-item--list">
                                        <div className="card-img">
                                            <a href="tour-details.html" className="d-block">
                                                <img src="images/img16.jpg" alt="Destination-img" />
                                            </a>
                                            <span className="badge badge-ribbon">Save 39%</span>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a href="tour-details.html">A Walk into the Old Little Town</a>
                                            </h3>
                                            <p className="card-meta">Avenue of the Americas, New York</p>
                                            <div className="card-rating d-flex align-items-center pt-0">
                                                <span className="ratings d-flex align-items-center me-2">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                </span>
                                                <span className="rating__text me-2">4.5 of 5</span>
                                                <span className="rating__text">(3 Reviews)</span>
                                            </div>
                                            <ul className="list-items list-items-2">
                                                <li><span>Activity Type:</span>Specific Date</li>
                                            </ul>
                                            <p className="card-meta">
                                                Follow the coming-of-age tale of lion cub Simba in this
                                                vibrant and colorful family-friendly ...
                                            </p>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$950.00</span>
                                                    <span className="price__num before-price color-text-3">$989.00</span>
                                                </p>
                                                <a href="tour-details.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                </div>
                                {/* end my-service-list */}
                                <nav aria-label="Page navigation example" className="pt-4">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#" aria-label="Previous">
                                                <span aria-hidden="true"><i className="la la-angle-left" /></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link page-link-nav" href="#">2 <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#" aria-label="Next">
                                                <span aria-hidden="true"><i className="la la-angle-right" /></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* end tab-pane */}
                            <div className="tab-pane fade" id="my-car" role="tabpanel" aria-labelledby="my-car-tab">
                                <div className="my-service-list">
                                    <div className="card-item car-card card-item-list">
                                        <div className="card-img padding-top-40px">
                                            <a href="car-single.html" className="d-block">
                                                <img src="images/car-img.png" alt="car-img" className="h-auto" />
                                            </a>
                                            <span className="badge">Bestseller</span>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-meta">Compact SUV</p>
                                            <h3 className="card-title">
                                                <a href="car-single.html">Toyota Corolla or Similar</a>
                                            </h3>
                                            <div className="card-rating">
                                                <span className="badge text-white">4.4/5</span>
                                                <span className="review__text">Average</span>
                                                <span className="rating__text">(30 Reviews)</span>
                                            </div>
                                            <div className="card-attributes">
                                                <ul className="d-flex align-items-center">
                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Passengers">
                                                        <i className="la la-users" /><span>4</span>
                                                    </li>
                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Luggage">
                                                        <i className="la la-suitcase" /><span>2</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$23.00</span>
                                                    <span className="price__text">Per day</span>
                                                </p>
                                                <a href="car-single.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item car-card card-item-list">
                                        <div className="card-img padding-top-40px">
                                            <a href="car-single.html" className="d-block">
                                                <img src="images/car-img2.png" alt="car-img" className="h-auto" />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-meta">BelCharles Car</p>
                                            <h3 className="card-title">
                                                <a href="car-single.html">Volkswagen Jetta 2 Doors or Similar</a>
                                            </h3>
                                            <div className="card-rating">
                                                <span className="badge text-white">4.4/5</span>
                                                <span className="review__text">Average</span>
                                                <span className="rating__text">(30 Reviews)</span>
                                            </div>
                                            <div className="card-attributes">
                                                <ul className="d-flex align-items-center">
                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Passengers">
                                                        <i className="la la-users" /><span>4</span>
                                                    </li>
                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Luggage">
                                                        <i className="la la-suitcase" /><span>2</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$23.00</span>
                                                    <span className="price__text">Per day</span>
                                                </p>
                                                <a href="car-single.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item car-card card-item-list">
                                        <div className="card-img padding-top-40px">
                                            <a href="car-single.html" className="d-block">
                                                <img src="images/car-img3.png" alt="car-img" className="h-auto" />
                                            </a>
                                            <span className="badge">Bestseller</span>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-meta">Lamborghini</p>
                                            <h3 className="card-title">
                                                <a href="car-single.html">Mercedes E Class or Similar</a>
                                            </h3>
                                            <div className="card-rating">
                                                <span className="badge text-white">4.4/5</span>
                                                <span className="review__text">Average</span>
                                                <span className="rating__text">(30 Reviews)</span>
                                            </div>
                                            <div className="card-attributes">
                                                <ul className="d-flex align-items-center">
                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Passengers">
                                                        <i className="la la-users" /><span>4</span>
                                                    </li>
                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Luggage">
                                                        <i className="la la-suitcase" /><span>2</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$23.00</span>
                                                    <span className="price__text">Per day</span>
                                                </p>
                                                <a href="car-single.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item car-card card-item-list">
                                        <div className="card-img padding-top-40px">
                                            <a href="car-single.html" className="d-block">
                                                <img src="images/car-img4.png" alt="car-img" className="h-auto" />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-meta">BelChar Car</p>
                                            <h3 className="card-title">
                                                <a href="car-single.html">Fiat Fiesta 2 Doors or Similar</a>
                                            </h3>
                                            <div className="card-rating">
                                                <span className="badge text-white">4.4/5</span>
                                                <span className="review__text">Average</span>
                                                <span className="rating__text">(30 Reviews)</span>
                                            </div>
                                            <div className="card-attributes">
                                                <ul className="d-flex align-items-center">
                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Passengers">
                                                        <i className="la la-users" /><span>4</span>
                                                    </li>
                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Luggage">
                                                        <i className="la la-suitcase" /><span>2</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                <p>
                                                    <span className="price__from">Price from</span>
                                                    <span className="price__num">$23.00</span>
                                                    <span className="price__text">Per day</span>
                                                </p>
                                                <a href="car-single.html" className="theme-btn theme-btn-small">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-item */}
                                </div>
                                {/* end my-service-list */}
                                <nav aria-label="Page navigation example" className="pt-4">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#" aria-label="Previous">
                                                <span aria-hidden="true"><i className="la la-angle-left" /></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link page-link-nav" href="#">2 <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#" aria-label="Next">
                                                <span aria-hidden="true"><i className="la la-angle-right" /></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* end tab-pane */}
                            <div className="tab-pane fade" id="my-flight" role="tabpanel" aria-labelledby="my-flight-tab">
                                <div className="my-service-list">
                                    <div className="card-item flight-card flight--card card-item-list card-item-list-2">
                                        <div className="card-img">
                                            <img src="images/airline-img7.png" alt="flight-logo-img" />
                                        </div>
                                        <div className="card-body">
                                            <div className="card-top-title d-flex justify-content-between">
                                                <div>
                                                    <h3 className="card-title font-size-17">
                                                        San Francisco (SFO) - Sydney (SYD)
                                                    </h3>
                                                    <p className="card-meta font-size-14">One way flight</p>
                                                </div>
                                                <div>
                                                    <div className="text-end">
                                                        <span className="font-weight-regular font-size-14 d-block">avg/person</span>
                                                        <h6 className="font-weight-bold text-black">$350.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card-top-title */}
                                            <ul className="list-items list-items-2 py-2">
                                                <li><span>Flight Type:</span>Direct</li>
                                                <li><span>Departure Time:</span>12:00 PM</li>
                                                <li><span>Total Time:</span> 2 hrs 30 min</li>
                                            </ul>
                                            <div className="btn-box text-center">
                                                <a href="flight-single.html" className="theme-btn theme-btn-small w-100">Book Now</a>
                                            </div>
                                        </div>
                                        {/* end card-body */}
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item flight-card flight--card card-item-list card-item-list-2">
                                        <div className="card-img">
                                            <img src="images/airline-img8.png" alt="flight-logo-img" />
                                        </div>
                                        <div className="card-body">
                                            <div className="card-top-title d-flex justify-content-between">
                                                <div>
                                                    <h3 className="card-title font-size-17">
                                                        San Francisco (SFO) - Berlin (BER)
                                                    </h3>
                                                    <p className="card-meta font-size-14">One way flight</p>
                                                </div>
                                                <div>
                                                    <div className="text-end">
                                                        <span className="font-weight-regular font-size-14 d-block">avg/person</span>
                                                        <h6 className="font-weight-bold text-black">$299.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card-top-title */}
                                            <ul className="list-items list-items-2 py-2">
                                                <li><span>Flight Type:</span>Direct</li>
                                                <li><span>Departure Time:</span>12:00 PM</li>
                                                <li><span>Total Time:</span> 2 hrs 30 min</li>
                                            </ul>
                                            <div className="btn-box text-center">
                                                <a href="flight-single.html" className="theme-btn theme-btn-small w-100">Book Now</a>
                                            </div>
                                        </div>
                                        {/* end card-body */}
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item flight-card flight--card card-item-list card-item-list-2">
                                        <div className="card-img">
                                            <img src="images/airline-img9.png" alt="flight-logo-img" />
                                        </div>
                                        <div className="card-body">
                                            <div className="card-top-title d-flex justify-content-between">
                                                <div>
                                                    <h3 className="card-title font-size-17">
                                                        Ha Noi (HAN) - Paris (CDG)
                                                    </h3>
                                                    <p className="card-meta font-size-14">One way flight</p>
                                                </div>
                                                <div>
                                                    <div className="text-end">
                                                        <span className="font-weight-regular font-size-14 d-block">avg/person</span>
                                                        <h6 className="font-weight-bold text-black">$399.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card-top-title */}
                                            <ul className="list-items list-items-2 py-2">
                                                <li><span>Flight Type:</span>Direct</li>
                                                <li><span>Departure Time:</span>12:00 PM</li>
                                                <li><span>Total Time:</span> 12 hrs 30 min</li>
                                            </ul>
                                            <div className="btn-box text-center">
                                                <a href="flight-single.html" className="theme-btn theme-btn-small w-100">Book Now</a>
                                            </div>
                                        </div>
                                        {/* end card-body */}
                                    </div>
                                    {/* end card-item */}
                                    <div className="card-item flight-card flight--card card-item-list card-item-list-2">
                                        <div className="card-img">
                                            <img src="images/airline-img10.png" alt="flight-logo-img" />
                                        </div>
                                        <div className="card-body">
                                            <div className="card-top-title d-flex justify-content-between">
                                                <div>
                                                    <h3 className="card-title font-size-17">
                                                        New York City (JFK) - Paris (CDG)
                                                    </h3>
                                                    <p className="card-meta font-size-14">Roundtrip flight</p>
                                                </div>
                                                <div>
                                                    <div className="text-end">
                                                        <span className="font-weight-regular font-size-14 d-block">avg/person</span>
                                                        <h6 className="font-weight-bold text-black">$750.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card-top-title */}
                                            <ul className="list-items list-items-2 py-2">
                                                <li><span>Flight Type:</span>2 stop</li>
                                                <li><span>Departure Time:</span>12:00 PM</li>
                                                <li><span>Total Time:</span> 4 hrs 30 min</li>
                                            </ul>
                                            <div className="btn-box text-center">
                                                <a href="flight-single.html" className="theme-btn theme-btn-small w-100">Book Now</a>
                                            </div>
                                        </div>
                                        {/* end card-body */}
                                    </div>
                                    {/* end card-item */}
                                </div>
                                {/* end my-service-list */}
                                <nav aria-label="Page navigation example" className="pt-4">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#" aria-label="Previous">
                                                <span aria-hidden="true"><i className="la la-angle-left" /></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link page-link-nav" href="#">2 <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-nav" href="#" aria-label="Next">
                                                <span aria-hidden="true"><i className="la la-angle-right" /></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* end tab-pane */}
                            <div className="tab-pane fade" id="my-review" role="tabpanel" aria-labelledby="my-review-tab">
                                <div className="my-service-list">
                                    <div className="review-bars padding-bottom-30px">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="progress-item">
                                                    <h3 className="progressbar-title">Service</h3>
                                                    <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                                        <div className="progressbar-box flex-shrink-0">
                                                            <div className="progressbar-line" data-percent="70%">
                                                                <div className="progressbar-line-item bar-bg-1" />
                                                            </div>
                                                            {/* End Skill Bar */}
                                                        </div>
                                                        <div className="bar-percent">4.6</div>
                                                    </div>
                                                </div>
                                                {/* end progress-item */}
                                            </div>
                                            {/* end col-lg-6 */}
                                            <div className="col-lg-6">
                                                <div className="progress-item">
                                                    <h3 className="progressbar-title">Location</h3>
                                                    <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                                        <div className="progressbar-box flex-shrink-0">
                                                            <div className="progressbar-line" data-percent="55%">
                                                                <div className="progressbar-line-item bar-bg-2" />
                                                            </div>
                                                            {/* End Skill Bar */}
                                                        </div>
                                                        <div className="bar-percent">4.7</div>
                                                    </div>
                                                </div>
                                                {/* end progress-item */}
                                            </div>
                                            {/* end col-lg-6 */}
                                            <div className="col-lg-6">
                                                <div className="progress-item">
                                                    <h3 className="progressbar-title">Value for Money</h3>
                                                    <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                                        <div className="progressbar-box flex-shrink-0">
                                                            <div className="progressbar-line" data-percent="40%">
                                                                <div className="progressbar-line-item bar-bg-3" />
                                                            </div>
                                                            {/* End Skill Bar */}
                                                        </div>
                                                        <div className="bar-percent">2.6</div>
                                                    </div>
                                                </div>
                                                {/* end progress-item */}
                                            </div>
                                            {/* end col-lg-6 */}
                                            <div className="col-lg-6">
                                                <div className="progress-item">
                                                    <h3 className="progressbar-title">Cleanliness</h3>
                                                    <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                                        <div className="progressbar-box flex-shrink-0">
                                                            <div className="progressbar-line" data-percent="60%">
                                                                <div className="progressbar-line-item bar-bg-4" />
                                                            </div>
                                                            {/* End Skill Bar */}
                                                        </div>
                                                        <div className="bar-percent">3.6</div>
                                                    </div>
                                                </div>
                                                {/* end progress-item */}
                                            </div>
                                            {/* end col-lg-6 */}
                                            <div className="col-lg-6">
                                                <div className="progress-item">
                                                    <h3 className="progressbar-title">Facilities</h3>
                                                    <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                                        <div className="progressbar-box flex-shrink-0">
                                                            <div className="progressbar-line" data-percent="50%">
                                                                <div className="progressbar-line-item bar-bg-5" />
                                                            </div>
                                                            {/* End Skill Bar */}
                                                        </div>
                                                        <div className="bar-percent">2.6</div>
                                                    </div>
                                                </div>
                                                {/* end progress-item */}
                                            </div>
                                            {/* end col-lg-6 */}
                                        </div>
                                        {/* end row */}
                                    </div>
                                    <div className="section-block" />
                                    <div className="review-box padding-top-45px">
                                        <h3 className="title font-size-20">List of Reviews</h3>
                                        <div className="comments-list padding-top-40px">
                                            <div className="comment">
                                                <div className="comment-avatar">
                                                    <a href="#" className="d-block">
                                                        <img className="avatar__img" alt src="images/team8.jpg" />
                                                    </a>
                                                    <h3 className="title font-size-16 pt-3">Bob Marly</h3>
                                                    <a href="#" className="color-text font-size-14">30 Reviews</a>
                                                </div>
                                                <div className="comment-body">
                                                    <div className="meta-data">
                                                        <h3 className="comment__meta font-size-18 pb-2">
                                                            "Very good"
                                                        </h3>
                                                        <h3 className="comment__author font-size-15 font-weight-medium">
                                                            Review for
                                                            <a href="#" className="color-text">Grand Plaza Apartments</a>
                                                        </h3>
                                                        <div className="meta-data-inner d-flex">
                                                            <span className="ratings d-flex align-items-center me-1">
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                            </span>
                                                            <p className="comment__date">April 5, 2019</p>
                                                        </div>
                                                    </div>
                                                    <p className="comment-content font-size-15 line-height-24">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit. Alias corporis eveniet exercitationem fuga id
                                                        laborum nostrum numquam quo repellendus similique.
                                                    </p>
                                                    <div className="comment-reply">
                                                        <div className="reviews-reaction">
                                                            <span className="font-size-15 me-1">Was this review helpful?</span>
                                                            <a href="#" className="comment-like"><i className="la la-thumbs-up" /> 13</a>
                                                            <a href="#" className="comment-dislike"><i className="la la-thumbs-down" /> 2</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment">
                                                <div className="comment-avatar">
                                                    <a href="#" className="d-block">
                                                        <img className="avatar__img" alt src="images/team9.jpg" />
                                                    </a>
                                                    <h3 className="title font-size-16 pt-3">Josh Purdial</h3>
                                                    <a href="#" className="color-text font-size-14">44 Reviews</a>
                                                </div>
                                                <div className="comment-body">
                                                    <div className="meta-data">
                                                        <h3 className="comment__meta font-size-18 pb-2">
                                                            "Excellent"
                                                        </h3>
                                                        <h3 className="comment__author font-size-15 font-weight-medium">
                                                            Review for
                                                            <a href="#" className="color-text">Park Hyatt Paris-Vendome</a>
                                                        </h3>
                                                        <div className="meta-data-inner d-flex">
                                                            <span className="ratings d-flex align-items-center me-1">
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                            </span>
                                                            <p className="comment__date">April 5, 2019</p>
                                                        </div>
                                                    </div>
                                                    <p className="comment-content font-size-15 line-height-24">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit. Alias corporis eveniet exercitationem fuga id
                                                        laborum nostrum numquam quo repellendus similique.
                                                    </p>
                                                    <div className="comment-reply">
                                                        <div className="reviews-reaction">
                                                            <span className="font-size-15 me-1">Was this review helpful?</span>
                                                            <a href="#" className="comment-like"><i className="la la-thumbs-up" /> 13</a>
                                                            <a href="#" className="comment-dislike"><i className="la la-thumbs-down" /> 2</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment">
                                                <div className="comment-avatar">
                                                    <a href="#" className="d-block">
                                                        <img className="avatar__img" alt src="images/team10.jpg" />
                                                    </a>
                                                    <h3 className="title font-size-16 pt-3">Adi Purdila</h3>
                                                    <a href="#" className="color-text font-size-14">12 Reviews</a>
                                                </div>
                                                <div className="comment-body">
                                                    <div className="meta-data">
                                                        <h3 className="comment__meta font-size-18 pb-2">
                                                            "Amazing"
                                                        </h3>
                                                        <h3 className="comment__author font-size-15 font-weight-medium">
                                                            Review for
                                                            <a href="#" className="color-text">Wellington Hotel</a>
                                                        </h3>
                                                        <div className="meta-data-inner d-flex">
                                                            <span className="ratings d-flex align-items-center me-1">
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                            </span>
                                                            <p className="comment__date">April 5, 2019</p>
                                                        </div>
                                                    </div>
                                                    <p className="comment-content font-size-15 line-height-24">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit. Alias corporis eveniet exercitationem fuga id
                                                        laborum nostrum numquam quo repellendus similique.
                                                    </p>
                                                    <div className="comment-reply">
                                                        <div className="reviews-reaction">
                                                            <span className="font-size-15 me-1">Was this review helpful?</span>
                                                            <a href="#" className="comment-like"><i className="la la-thumbs-up" /> 13</a>
                                                            <a href="#" className="comment-dislike"><i className="la la-thumbs-down" /> 2</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment">
                                                <div className="comment-avatar">
                                                    <a href="#" className="d-block">
                                                        <img className="avatar__img" alt src="images/team11.jpg" />
                                                    </a>
                                                    <h3 className="title font-size-16 pt-3">Markus nai</h3>
                                                    <a href="#" className="color-text font-size-14">23 Reviews</a>
                                                </div>
                                                <div className="comment-body">
                                                    <div className="meta-data">
                                                        <h3 className="comment__meta font-size-18 pb-2">
                                                            "Good"
                                                        </h3>
                                                        <h3 className="comment__author font-size-15 font-weight-medium">
                                                            Review for
                                                            <a href="#" className="color-text">The Pearl Hotel NewYork City</a>
                                                        </h3>
                                                        <div className="meta-data-inner d-flex">
                                                            <span className="ratings d-flex align-items-center me-1">
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                                <i className="la la-star" />
                                                            </span>
                                                            <p className="comment__date">April 5, 2019</p>
                                                        </div>
                                                    </div>
                                                    <p className="comment-content font-size-15 line-height-24">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit. Alias corporis eveniet exercitationem fuga id
                                                        laborum nostrum numquam quo repellendus similique.
                                                    </p>
                                                    <div className="comment-reply">
                                                        <div className="reviews-reaction">
                                                            <span className="font-size-15 me-1">Was this review helpful?</span>
                                                            <a href="#" className="comment-like"><i className="la la-thumbs-up" /> 13</a>
                                                            <a href="#" className="comment-dislike"><i className="la la-thumbs-down" /> 2</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end comments-list */}
                                    </div>
                                    <nav aria-label="Page navigation example" className="pt-4">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link page-link-nav" href="#" aria-label="Previous">
                                                    <span aria-hidden="true"><i className="la la-angle-left" /></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link page-link-nav" href="#">1</a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link page-link-nav" href="#">2 <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link page-link-nav" href="#">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link page-link-nav" href="#" aria-label="Next">
                                                    <span aria-hidden="true"><i className="la la-angle-right" /></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* end tab-pane */}
                        </div>
                    </div>
                    {/* end col-lg-9 */}
                    <div className="col-lg-3">
                        <div className="review-summary mt-2 section-bg">
                            <p>Average Rating</p>
                            <h2>4.5<span>/5</span></h2>
                            <span className="ratings d-flex justify-content-center align-items-center font-size-17">
                                <i className="la la-star" />
                                <i className="la la-star" />
                                <i className="la la-star" />
                                <i className="la la-star" />
                                <i className="la la-star-half-alt" />
                            </span>
                            <span className="font-size-14">(Based on 199 reviews)</span>
                        </div>
                        {/* end review-summary */}
                        <div className="form-box margin-top-30px mb-0">
                            <div className="form-title-wrap">
                                <h3 className="title">Contact Partner</h3>
                            </div>
                            <div className="form-content">
                                <div className="contact-form-action">
                                    <form method="post">
                                        <div className="input-box">
                                            <label className="label-text">Your Name</label>
                                            <div className="form-group">
                                                <span className="la la-user form-icon" />
                                                <input className="form-control" type="text" name="text" placeholder="Enter name" />
                                            </div>
                                        </div>
                                        <div className="input-box">
                                            <label className="label-text">Your Email</label>
                                            <div className="form-group">
                                                <span className="la la-envelope-o form-icon" />
                                                <input className="form-control" type="email" name="email" placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <div className="input-box">
                                            <label className="label-text">Message</label>
                                            <div className="form-group">
                                                <span className="la la-pencil form-icon" />
                                                <textarea className="message-control form-control" name="message" placeholder="Write message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <button type="submit" className="theme-btn">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                {/* end contact-form-action */}
                            </div>
                            {/* end form-content */}
                        </div>
                        {/* end form-box */}
                    </div>
                    {/* end col-lg-3 */}
                </div>
                {/* end row */}
            </div>
            {/* end container */}
        </section>
    );
};

export default UserProfileComponent;