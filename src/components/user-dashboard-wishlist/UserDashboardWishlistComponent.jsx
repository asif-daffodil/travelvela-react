import UserDashboardFooter from '../user-dashboard/UserDashboardFooter';
import UserDashboardBreadcrumb from '../user-dashboard/UserDashboardBreadcrumb';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const UserDashboardReviewsComponent = () => {


    return (
        <>
            <div className='dashboard-content-wrap'>
                <div className="dashboard-bread dashboard--bread">
                    <div className="container-fluid">
                        <UserDashboardBreadcrumb
                            title="My Reviews"
                            items={[
                                { label: 'Home', to: '/' },
                                { label: 'User Dashboard', to: '/user-dashboard' },
                                { label: 'My Wishlist', to: '/user-dashboard-wishlist', active: true }
                            ]}
                        />
                        {/* end row */}
                    </div>
                </div>
                {/* end dashboard-bread */}
                <div className="dashboard-main-content">
                    <div className="container-fluid">
                        <div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-box">
                                        <div className="form-title-wrap">
                                            <h3 className="title">Wishlist</h3>
                                            <p className="font-size-14">Showing 1 - 6 of 28 results</p>
                                        </div>
                                        <div className="form-content pt-5 pb-0">
                                            <div className="row">
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="card-item">
                                                        <div className="card-img">
                                                            <a href="hotel-single.html" className="d-block">
                                                                <img src="images/img1.jpg" alt="hotel-img" />
                                                            </a>
                                                            <span className="badge">Bestseller</span>
                                                            <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Remove">
                                                                <i className="la la-heart" />
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h3 className="card-title">
                                                                <a href="hotel-single.html">The Millennium Hilton New York</a>
                                                            </h3>
                                                            <p className="card-meta">124 E Huron St, New york</p>
                                                            <div className="card-rating">
                                                                <span className="badge text-white">4.4/5</span>
                                                                <span className="review__text">Average</span>
                                                                <span className="rating__text">(30 Reviews)</span>
                                                            </div>
                                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                                <p>
                                                                    <span className="price__from">From</span>
                                                                    <span className="price__num">$88.00</span>
                                                                    <span className="price__text">Per night</span>
                                                                </p>
                                                                <a href="hotel-single.html" className="btn-text">See details<i className="la la-angle-right" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end card-item */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="card-item car-card">
                                                        <div className="card-img">
                                                            <a href="car-single.html" className="d-block">
                                                                <img src="images/car-img.png" alt="car-img" />
                                                            </a>
                                                            <span className="badge">Bestseller</span>
                                                            <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Remove">
                                                                <i className="la la-heart" />
                                                            </div>
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
                                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Passenger">
                                                                        <i className="la la-users" /><span>4</span>
                                                                    </li>
                                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Luggage">
                                                                        <i className="la la-suitcase" /><span>1</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                                <p>
                                                                    <span className="price__from">From</span>
                                                                    <span className="price__num">$23.00</span>
                                                                    <span className="price__text">Per day</span>
                                                                </p>
                                                                <a href="car-single.html" className="btn-text">See details<i className="la la-angle-right" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end card-item */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="card-item">
                                                        <div className="card-img">
                                                            <a href="tour-details.html" className="d-block">
                                                                <img src="images/img9.jpg" alt="Destination-img" />
                                                            </a>
                                                            <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Remove">
                                                                <i className="la la-heart" />
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h3 className="card-title">
                                                                <a href="tour-details.html">Empire State Building Admission</a>
                                                            </h3>
                                                            <p className="card-meta">124 E Huron St, New york</p>
                                                            <div className="card-rating">
                                                                <span className="badge text-white">4.4/5</span>
                                                                <span className="review__text">Average</span>
                                                                <span className="rating__text">(30 Reviews)</span>
                                                            </div>
                                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                                <p>
                                                                    <span className="price__from">From</span>
                                                                    <span className="price__num">$124.00</span>
                                                                </p>
                                                                <span className="tour-hour"><i className="la la-clock-o me-1" />Full
                                                                    day</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end card-item */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="card-item">
                                                        <div className="card-img">
                                                            <a href="hotel-single.html" className="d-block">
                                                                <img src="images/img1.jpg" alt="hotel-img" />
                                                            </a>
                                                            <span className="badge">Bestseller</span>
                                                            <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Remove">
                                                                <i className="la la-heart" />
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h3 className="card-title">
                                                                <a href="hotel-single.html">The Millennium Hilton New York</a>
                                                            </h3>
                                                            <p className="card-meta">124 E Huron St, New york</p>
                                                            <div className="card-rating">
                                                                <span className="badge text-white">4.4/5</span>
                                                                <span className="review__text">Average</span>
                                                                <span className="rating__text">(30 Reviews)</span>
                                                            </div>
                                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                                <p>
                                                                    <span className="price__from">From</span>
                                                                    <span className="price__num">$88.00</span>
                                                                    <span className="price__text">Per night</span>
                                                                </p>
                                                                <a href="hotel-single.html" className="btn-text">See details<i className="la la-angle-right" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end card-item */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="card-item car-card">
                                                        <div className="card-img">
                                                            <a href="car-single.html" className="d-block">
                                                                <img src="images/car-img.png" alt="car-img" />
                                                            </a>
                                                            <span className="badge">Bestseller</span>
                                                            <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Remove">
                                                                <i className="la la-heart" />
                                                            </div>
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
                                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Passenger">
                                                                        <i className="la la-users" /><span>4</span>
                                                                    </li>
                                                                    <li className="d-flex align-items-center" data-bs-toggle="tooltip" data-placement="top" title="Luggage">
                                                                        <i className="la la-suitcase" /><span>1</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                                <p>
                                                                    <span className="price__from">From</span>
                                                                    <span className="price__num">$23.00</span>
                                                                    <span className="price__text">Per day</span>
                                                                </p>
                                                                <a href="car-single.html" className="btn-text">See details<i className="la la-angle-right" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end card-item */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="card-item">
                                                        <div className="card-img">
                                                            <a href="tour-details.html" className="d-block">
                                                                <img src="images/img9.jpg" alt="Destination-img" />
                                                            </a>
                                                            <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Remove">
                                                                <i className="la la-heart" />
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h3 className="card-title">
                                                                <a href="tour-details.html">Empire State Building Admission</a>
                                                            </h3>
                                                            <p className="card-meta">124 E Huron St, New york</p>
                                                            <div className="card-rating">
                                                                <span className="badge text-white">4.4/5</span>
                                                                <span className="review__text">Average</span>
                                                                <span className="rating__text">(30 Reviews)</span>
                                                            </div>
                                                            <div className="card-price d-flex align-items-center justify-content-between">
                                                                <p>
                                                                    <span className="price__from">From</span>
                                                                    <span className="price__num">$124.00</span>
                                                                </p>
                                                                <span className="tour-hour"><i className="la la-clock-o me-1" />Full
                                                                    day</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end card-item */}
                                                </div>
                                                {/* end col-lg-4 */}
                                            </div>
                                            {/* end row */}
                                        </div>
                                    </div>
                                    {/* end form-box */}
                                </div>
                                {/* end col-lg-12 */}
                            </div>
                            {/* end row */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <nav aria-label="Page navigation example">
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
                                {/* end col-lg-12 */}
                            </div>
                        </div>

                        {/* end row */}
                        <UserDashboardFooter />
                        {/* end row */}
                    </div>
                    {/* end container-fluid */}
                </div>
            </div>
        </>
    );
};

export default UserDashboardReviewsComponent;