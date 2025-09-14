import UserDashboardFooter from '../user-dashboard/UserDashboardFooter';
import UserDashboardBreadcrumb from '../user-dashboard/UserDashboardBreadcrumb';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const UserDashboardBookingComponent = () => {


  return (
    <>
      <div className='dashboard-content-wrap'>
        <div className="dashboard-bread dashboard--bread">
          <div className="container-fluid">
            <UserDashboardBreadcrumb
              title="My Booking"
              items={[
                { label: 'Home', to: '/' },
                { label: 'User Dashboard', to: '/user-dashboard' },
                { label: 'My Booking', to: '/user-dashboard-booking', active: true }
              ]}
            />
            {/* end row */}
          </div>
        </div>
        {/* end dashboard-bread */}
        <div className="dashboard-main-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-box">
                  <div className="form-title-wrap">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h3 className="title">Booking Results</h3>
                        <p className="font-size-14">Showing 1 to 7 of 17 entries</p>
                      </div>
                      <span>Total Bookings
                        <strong className="color-text">(17)</strong></span>
                    </div>
                  </div>
                  <div className="form-content">
                    <div className="table-form table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Title</th>
                            <th scope="col">Location</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Execution Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <i className="la la-plane me-1 font-size-18" />Flight
                            </th>
                            <td>
                              <div className="table-content">
                                <h3 className="title">
                                  <Link to="/user-dashboard-booking/user-dashboard-flight-booking-details">Dhaka to Delhi</Link>
                                </h3>
                              </div>
                            </td>
                            <td>Hazrat Shahjalal Intl Arpt</td>
                            <td>30/6/2020</td>
                            <td>2/6/2020</td>
                            <td>৳11,301</td>
                            <td>
                              <span className="badge text-bg-info py-1 px-2">Pending</span>
                            </td>
                            <td>
                              <div className="table-content">
                                <button className="theme-btn theme-btn-small">
                                  Cancel
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <i className="la la-building me-1 font-size-18" />Hotel
                            </th>
                            <td>
                              <div className="table-content">
                                <h3 className="title">
                                  <Link to="/user-dashboard-booking/user-dashboard-hotel-booking-details">Jatra FlagShip Chattogram City Center
                                  </Link>
                                </h3>
                              </div>
                            </td>
                            <td>Dhaka, BANGLADESH</td>
                            <td>30/6/2020</td>
                            <td>2/6/2020</td>
                            <td>৳123,123</td>
                            <td>
                              <span className="badge text-bg-success py-1 px-2">Completed</span>
                            </td>
                            <td>
                              <div className="table-content">
                                <button className="theme-btn theme-btn-small">
                                  Cancel
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <i className="la la-tree me-1 font-size-18" />Tour
                            </th>
                            <td>
                              <div className="table-content">
                                <h3 className="title">
                                  <Link to="/user-dashboard-booking/user-dashboard-hotel-booking-details">Discover a Journey Through The Queen Of
                                    Hills Darjeeling (3 Days and 2 Nights)</Link>
                                </h3>
                              </div>
                            </td>
                            <td>Darjeeling, West Bengal</td>
                            <td>30/6/2020</td>
                            <td>2/6/2020</td>
                            <td>৳10,190</td>
                            <td>
                              <span className="badge text-bg-warning py-1 px-2">Delayed</span>
                            </td>
                            <td>
                              <div className="table-content">
                                <button className="theme-btn theme-btn-small">
                                  Cancel
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
            {/* end row */}
            <div className="border-top mt-5" />
            <UserDashboardFooter />
            {/* end row */}
          </div>
          {/* end container-fluid */}
        </div>
      </div>
    </>
  );
};

export default UserDashboardBookingComponent;