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
                                { label: 'My Reviews', to: '/user-dashboard-reviews', active: true }
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
                                            <h3 className="title">Reviews</h3>
                                            <p className="font-size-14">Showing 1 - 4 of 18 results</p>
                                        </div>
                                        <div className="form-content">
                                            <div className="comments-list">
                                                <div className="comment">
                                                    <div className="comment-avatar">
                                                        <img className="avatar__img" alt src="images/team8.jpg" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <div className="meta-data">
                                                            <h3 className="comment__author">
                                                                Grand Plaza Serviced Apartments
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
                                                        <p className="comment-content mb-0">
                                                            Our stay was pleasant and welcoming. We stayed in an
                                                            apartment meant for 3 adults with kitchen
                                                            facilities. The cleaning services were superp. We
                                                            liked the laundry and kitchen cleaning services on
                                                            top of the regular cleaning services.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* end comments */}
                                                <div className="comment">
                                                    <div className="comment-avatar">
                                                        <img className="avatar__img" alt src="images/team8.jpg" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <div className="meta-data">
                                                            <h3 className="comment__author">
                                                                Three-Hour South Beach Lunch Tour
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
                                                        <p className="comment-content mb-0">
                                                            Our stay was pleasant and welcoming. We stayed in an
                                                            apartment meant for 3 adults with kitchen
                                                            facilities. The cleaning services were superp. We
                                                            liked the laundry and kitchen cleaning services on
                                                            top of the regular cleaning services.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* end comments */}
                                                <div className="comment">
                                                    <div className="comment-avatar">
                                                        <img className="avatar__img" alt src="images/team8.jpg" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <div className="meta-data">
                                                            <h3 className="comment__author">
                                                                7 Night Western Caribbean Cruise
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
                                                        <p className="comment-content mb-0">
                                                            Our stay was pleasant and welcoming. We stayed in an
                                                            apartment meant for 3 adults with kitchen
                                                            facilities. The cleaning services were superp. We
                                                            liked the laundry and kitchen cleaning services on
                                                            top of the regular cleaning services.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* end comments */}
                                                <div className="comment mb-0 pb-0 border-bottom-0">
                                                    <div className="comment-avatar">
                                                        <img className="avatar__img" alt src="images/team8.jpg" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <div className="meta-data">
                                                            <h3 className="comment__author">
                                                                Two Hour Walking Tour of Manhattan
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
                                                        <p className="comment-content mb-0">
                                                            Our stay was pleasant and welcoming. We stayed in an
                                                            apartment meant for 3 adults with kitchen
                                                            facilities. The cleaning services were superp. We
                                                            liked the laundry and kitchen cleaning services on
                                                            top of the regular cleaning services.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* end comments */}
                                            </div>
                                            {/* end comments-list */}
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