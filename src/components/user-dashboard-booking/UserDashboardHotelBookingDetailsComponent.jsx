import UserDashboardFooter from '../user-dashboard/UserDashboardFooter';
import UserDashboardBreadcrumb from '../user-dashboard/UserDashboardBreadcrumb';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const UserDashboardHotelBookingDetailsComponent = () => {


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
                        <h3 className="title">Hotel Booking Details</h3>
                        <p className="font-size-14">Showing 1 to 7 of 17 entries</p>
                      </div>
                      <span>Total Bookings
                        <strong className="color-text">(17)</strong></span>
                    </div>
                  </div>
                  <div className="form-content">
                    <div className="col-12">
                      <div className="booking-details">
                        {/* Booking Header with Status and Number */}
                        <div className="booking-header">
                          <div className="booking-number">
                            Booking No: 1747919864
                          </div>
                          <div className="booking-status">Status: Pending</div>
                          <div className="booking-date">
                            Booked on: 2025-05-22 19:17:44
                          </div>
                          <div className="booking-slug">
                            Reference: PzNhR1747919864
                          </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                          {/* Single Accordion  */}
                          <div className="accordion-item booking-details-widget">
                            <div className="accordion-header" id="headingOne">
                              <button className="accordion-button section-header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div className="section-icon">1</div>
                                <div className="section-title">Hotel Details</div>
                                <div className="section-reference">
                                  Hotel Reference: hsid7904160278-39611795
                                </div>
                              </button>
                            </div>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="section-content">
                                <div className="hotel-info">
                                  <div className="hotel-details">
                                    <div className="hotel-d-head">
                                      <div className="hotel-d-head-info">
                                        <h2 className="hotel-name">
                                          Jatra FlagShip Chattogram City Center
                                        </h2>
                                        <div className="hotel-rating">
                                          <span className="rating-stars">⭐ 4 Star Hotel</span>
                                        </div>
                                        <div className="location">
                                          <span className="location-icon">📍</span>
                                          <span>Dhaka, BANGLADESH</span>
                                        </div>
                                        <div className="hotel-address">
                                          Plot: 42, Road: 03, Nasirabad
                                          Properties, South Khulshi, 4225
                                          Chittagong
                                        </div>
                                        <div className="hotel-contact">
                                          <div className="hotel-phone">
                                            📞 +8809638-230230
                                          </div>
                                          <div className="hotel-email">
                                            ✉️ support@travelvela.com
                                          </div>
                                        </div>
                                      </div>
                                      <div className="hotel-d-head-img">
                                        <img src="https://placehold.co/120x90" alt="Jatra FlagShip Chattogram City Center" className="hotel-image" />
                                      </div>
                                    </div>
                                    <div className="dates-container">
                                      <div className="date-block">
                                        <div className="date-label">Check In</div>
                                        <div className="date-value">
                                          03 May, 2025
                                        </div>
                                        <div className="date-day">Saturday</div>
                                      </div>
                                      <div className="nights-badge">2 Nights</div>
                                      <div className="date-block text-right">
                                        <div className="date-label">Check Out</div>
                                        <div className="date-value">
                                          05 May, 2025
                                        </div>
                                        <div className="date-day">Monday</div>
                                      </div>
                                    </div>
                                    <div className="room-info">
                                      <span className="room-icon">🏠</span>
                                      <span className="room-type">Deluxe Room</span>
                                      <span className="room-details">Room Only • Refundable</span>
                                    </div>
                                    <div className="guest-count">
                                      <span className="guest-icon">👥</span>
                                      <span>Total Guests: 4</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Accordion  */}
                          <div className="accordion-item booking-details-widget">
                            <h2 className="accordion-header" id="headingTwo">
                              <button className="accordion-button section-header collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <div className="section-icon">2</div>
                                <div className="section-title">
                                  Guest Information
                                </div>
                              </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div className="section-content">
                                {/* Primary Guest Contact */}
                                <div className="primary-guest-info">
                                  <h4>Primary Contact Information</h4>
                                  <div className="guest-details-grid">
                                    <div className="guest-detail">
                                      <label>Name:</label>
                                      <span>Md Fahim Hossain</span>
                                    </div>
                                    <div className="guest-detail">
                                      <label>Email:</label>
                                      <span>alifhossain174@gmail.com</span>
                                    </div>
                                    <div className="guest-detail">
                                      <label>Contact:</label>
                                      <span>01969005035</span>
                                    </div>
                                    <div className="guest-detail">
                                      <label>Address:</label>
                                      <span>Gulshan, Dhaka - 1207, Bangladesh</span>
                                    </div>
                                  </div>
                                </div>
                                {/* Room Travellers */}
                                <div className="room-travellers">
                                  <h4>Room Travellers</h4>
                                  <div className="guest-row">
                                    <div className="guest-icon">🏨</div>
                                    <div className="guest-number">
                                      Deluxe Room (1 Adult, 1 Child)
                                    </div>
                                    <div className="guest-type" />
                                    <div className="guest-name" />
                                    <div className="guest-contact" />
                                  </div>
                                  <div className="guest-row">
                                    <div className="guest-icon">👤</div>
                                    <div className="guest-number">Guest 1</div>
                                    <div className="guest-type">Adult</div>
                                    <div className="guest-name">
                                      <span>Mr. testuser sdfsd</span>
                                      <span className="primary-badge">Adult</span>
                                    </div>
                                    <div className="guest-contact" />
                                  </div>
                                  <div className="guest-row">
                                    <div className="guest-icon">👤</div>
                                    <div className="guest-number">Guest 2</div>
                                    <div className="guest-type">Child</div>
                                    <div className="guest-name">
                                      Master. testtwo sdfsd
                                    </div>
                                    <div className="guest-contact">Child</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Accordion  */}
                          <div className="accordion-item booking-details-widget">
                            <h2 className="accordion-header" id="headingThree">
                              <button className="accordion-button section-header collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <div className="section-icon">3</div>
                                <div className="section-title">
                                  Payment Information
                                </div>
                              </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                              <div className="section-content">
                                <div className="payment-grid">
                                  <div>
                                    <div className="payment-item">
                                      <div className="payment-label">
                                        Fare Summary
                                      </div>
                                    </div>
                                    <div className="amount-row">
                                      <span>Room Price</span>
                                      <span>BDT 4,285</span>
                                    </div>
                                    <div className="amount-row">
                                      <span>Discount</span>
                                      <span>BDT 0</span>
                                    </div>
                                    <div className="amount-row">
                                      <span>Total Booking Amount</span>
                                      <span>BDT 123,123</span>
                                    </div>
                                    <div className="amount-row">
                                      <span>Convenience Charge</span>
                                      <span>BDT 0</span>
                                    </div>
                                    <div className="amount-row">
                                      <span>Add-ons</span>
                                      <span>BDT 0</span>
                                    </div>
                                    <div className="amount-row total-amount">
                                      <span>You Paid</span>
                                      <span>BDT 123,123</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="payment-item">
                                      <div className="payment-label">
                                        Payment Method
                                      </div>
                                      <div className="payment-value">Paid Via</div>
                                      <div>Mobile Banking</div>
                                    </div>
                                    <div className="payment-item">
                                      <div className="payment-label">Gateway</div>
                                      <div>Nagad</div>
                                    </div>
                                    <div className="payment-item">
                                      <div className="payment-label">
                                        Payment Status
                                      </div>
                                      <div>Pending</div>
                                    </div>
                                    <div className="payment-item">
                                      <div className="payment-label">
                                        Transaction ID
                                      </div>
                                      <div>Not Available</div>
                                    </div>
                                    <div className="payment-item">
                                      <div className="payment-label">
                                        Paid Amount
                                      </div>
                                      <div>Not Available</div>
                                    </div>
                                    <div className="payment-item">
                                      <div className="payment-label">Currency</div>
                                      <div>BDT</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Accordion  */}
                          <div className="accordion-item booking-details-widget">
                            <h2 className="accordion-header" id="headingFour">
                              <button className="accordion-button section-header collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <div className="section-icon">4</div>
                                <div className="section-title">Policies</div>
                              </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                              <div className="section-content">
                                <div className="payment-item">
                                  <div className="payment-label">
                                    Cancellation Policy
                                  </div>
                                  <div className="payment-value">Deluxe Room</div>
                                </div>
                                <ul className="policy-list">
                                  <li className="policy-item">
                                    Free Cancellation before 12:01 on 01 May
                                    2025
                                  </li>
                                  <li className="policy-item">
                                    No refund from 12:01 on 01 May 2025
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* Single Accordion  */}
                          <div className="accordion-item booking-details-widget">
                            <h2 className="accordion-header" id="headingFive">
                              <button className="accordion-button section-header collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <div className="section-icon">5</div>
                                <div className="section-title">Your Documents</div>
                              </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                              <div className="section-content">
                                <div className="document-grid">
                                  <a href="#" download className="document-item">
                                    <span className="document-icon">📥</span>
                                    <span>Download Voucher</span>
                                  </a>
                                  <a href="#" download className="document-item">
                                    <span className="document-icon">📥</span>
                                    <span>Download Invoice</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
            <UserDashboardFooter />
            {/* end row */}
          </div>
          {/* end container-fluid */}
        </div>
      </div>
    </>
  );
};

export default UserDashboardHotelBookingDetailsComponent;