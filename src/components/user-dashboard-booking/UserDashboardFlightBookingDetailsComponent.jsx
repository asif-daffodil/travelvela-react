import UserDashboardFooter from '../user-dashboard/UserDashboardFooter';
import UserDashboardBreadcrumb from '../user-dashboard/UserDashboardBreadcrumb';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const UserDashboardFlightBookingDetailsComponent = () => {


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
                        <h3 className="title">Flight Booking Details</h3>
                        <p className="font-size-14">Showing 1 to 7 of 17 entries</p>
                      </div>
                      <span>Total Bookings
                        <strong className="color-text">(17)</strong></span>
                    </div>
                  </div>
                  <div className="form-content">
                    <div className="row">
                      <div className="col-12">
                        <div className="booking-details">
                          <div className="accordion" id="accordionExample">
                            {/* Single Accordion  */}
                            <div className="accordion-item booking-details-widget">
                              <div className="accordion-header" id="headingOne">
                                <button className="accordion-button section-header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  <div className="section-icon">1</div>
                                  <div className="section-title">
                                    Flight Details
                                  </div>
                                  <div className="section-reference">
                                    Booking Reference: 1747905264ulUAk
                                  </div>
                                </button>
                              </div>
                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="section-content">
                                  {/* ADDED: Booking Status and Contact Info */}
                                  <div className="booking-info-grid">
                                    <div className="booking-info-item">
                                      <div className="info-label">Booking Date</div>
                                      <div className="info-value">22 May, 2025</div>
                                    </div>
                                    <div className="booking-info-item">
                                      <div className="info-label">
                                        Contact Email
                                      </div>
                                      <div className="info-value">
                                        test@gmail.com
                                      </div>
                                    </div>
                                    <div className="booking-info-item">
                                      <div className="info-label">
                                        Contact Phone
                                      </div>
                                      <div className="info-value">01755441100</div>
                                    </div>
                                    <div className="booking-info-item">
                                      <div className="info-label">Trip Type</div>
                                      <div className="info-value">One Way</div>
                                    </div>
                                  </div>
                                  <div className="flight-info">
                                    <div className="flight-info-head">
                                      <div className="flight-info-head-content">
                                        <h2 className="airline-name">Air India</h2>
                                        <div className="flight-number">
                                          Flight: AI238
                                        </div>
                                        {/* ADDED: Aircraft Type */}
                                        <div className="aircraft-type">
                                          Aircraft: 32A
                                        </div>
                                      </div>
                                      <img src="https://placehold.co/120x90" alt="Air India" className="airline-image" />
                                    </div>
                                    <div className="flight-details">
                                      <div className="flight-route">
                                        <div className="route-point">
                                          <div className="airport-code">DAC</div>
                                          <div className="airport-city">Dhaka</div>
                                          {/* ADDED: Full Airport Name and Terminal */}
                                          <div className="airport-name">
                                            Hazrat Shahjalal Intl Arpt
                                          </div>
                                          <div className="terminal-info">
                                            Terminal 2
                                          </div>
                                        </div>
                                        <div className="route-arrow">→</div>
                                        <div className="route-point">
                                          <div className="airport-code">DEL</div>
                                          <div className="airport-city">Delhi</div>
                                          {/* ADDED: Full Airport Name and Terminal */}
                                          <div className="airport-name">
                                            Delhi Indira Gandhi Intl
                                          </div>
                                          <div className="terminal-info">
                                            Terminal 3
                                          </div>
                                        </div>
                                      </div>
                                      <div className="dates-container">
                                        <div className="date-block">
                                          <div className="date-label">
                                            Departure
                                          </div>
                                          <div className="date-value">
                                            30 Oct, 2024
                                          </div>
                                          <div className="date-day">
                                            Wednesday, 09:00 PM
                                          </div>
                                        </div>
                                        <div className="flight-duration">
                                          2h 50m
                                        </div>
                                        <div className="date-block text-right">
                                          <div className="date-label">Arrival</div>
                                          <div className="date-value">
                                            30 Oct, 2024
                                          </div>
                                          <div className="date-day">
                                            Wednesday, 11:20 PM
                                          </div>
                                        </div>
                                      </div>
                                      <div className="class-info">
                                        <span className="class-icon">✈️</span>
                                        <span className="class-type">Economy Class</span>
                                        <span className="fare-type">• Partially Refundable</span>
                                      </div>
                                      <div className="baggage-info">
                                        <div className="baggage-item">
                                          <span className="baggage-icon">💼</span>
                                          <span>Cabin: 7 kg</span>
                                        </div>
                                        <div className="baggage-item">
                                          <span className="baggage-icon">🧳</span>
                                          {/* UPDATED: Baggage allowance from API */}
                                          <span>Check-in: 30 kg</span>
                                        </div>
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
                                    Passenger Information
                                  </div>
                                </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="section-content">
                                  <div className="guest-row">
                                    <div className="guest-icon">👤</div>
                                    <div className="guest-number">Passenger 1</div>
                                    <div className="guest-type">Adult</div>
                                    <div className="guest-name">
                                      <span>Mr. Fahim Hossain</span>
                                      <span className="primary-badge">Primary Contact</span>
                                    </div>
                                    <div className="guest-contact">
                                      <span>Seat: 12A</span>
                                    </div>
                                    {/* ADDED: Passport and Personal Details */}
                                    <div className="passenger-details">
                                      <div className="detail-item">
                                        <span className="detail-label">Birth Date:</span>
                                        <span>01 Dec, 2022</span>
                                      </div>
                                      <div className="detail-item">
                                        <span className="detail-label">Passport:</span>
                                        <span>A1234567</span>
                                      </div>
                                      <div className="detail-item">
                                        <span className="detail-label">Passport Expiry:</span>
                                        <span>01 Dec, 2030</span>
                                      </div>
                                      <div className="detail-item">
                                        <span className="detail-label">Gender:</span>
                                        <span>Male</span>
                                      </div>
                                      <div className="detail-item">
                                        <span className="detail-label">Frequent Flyer:</span>
                                        <span>FF12345</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="guest-row">
                                    <div className="guest-icon">👤</div>
                                    <div className="guest-number">Passenger 2</div>
                                    <div className="guest-type">Adult</div>
                                    <div className="guest-name">
                                      Mrs. Sara Ahmed
                                    </div>
                                    <div className="guest-contact">Seat: 12B</div>
                                    {/* ADDED: Passport and Personal Details */}
                                    <div className="passenger-details">
                                      <div className="detail-item">
                                        <span className="detail-label">Birth Date:</span>
                                        <span>15 Jun, 1995</span>
                                      </div>
                                      <div className="detail-item">
                                        <span className="detail-label">Passport:</span>
                                        <span>B7654321</span>
                                      </div>
                                      <div className="detail-item">
                                        <span className="detail-label">Passport Expiry:</span>
                                        <span>20 May, 2029</span>
                                      </div>
                                      <div className="detail-item">
                                        <span className="detail-label">Gender:</span>
                                        <span>Female</span>
                                      </div>
                                      <div className="detail-item">
                                        <span className="detail-label">Frequent Flyer:</span>
                                        <span>FF67890</span>
                                      </div>
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
                                      {/* UPDATED: Fare breakdown from API */}
                                      <div className="amount-row">
                                        <span>Base Fare</span>
                                        <span>BDT 7,895</span>
                                      </div>
                                      <div className="amount-row">
                                        <span>Adult x 1</span>
                                        <span>BDT 7,895</span>
                                      </div>
                                      <div className="amount-row">
                                        <span>Child x 1</span>
                                        <span>BDT 3,406</span>
                                      </div>
                                      <div className="amount-row total-amount">
                                        <span>Total Paid</span>
                                        <span>BDT 11,301</span>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="payment-item">
                                        <div className="payment-label">
                                          Payment Method
                                        </div>
                                        <div className="payment-value">
                                          Credit Card
                                        </div>
                                        <div>VISA ****1234</div>
                                      </div>
                                      <div className="payment-item">
                                        <div className="payment-label">
                                          Transaction ID
                                        </div>
                                        {/* UPDATED: Transaction ID from API */}
                                        <div>682eeaf0aec2b</div>
                                      </div>
                                      <div className="payment-item">
                                        <div className="payment-label">
                                          Payment Date
                                        </div>
                                        <div>22 May, 2025 3:14 PM</div>
                                      </div>
                                      {/* ADDED: Payment Status */}
                                      <div className="payment-item">
                                        <div className="payment-label">
                                          Payment Status
                                        </div>
                                        <div className="payment-status-paid">
                                          Paid
                                        </div>
                                      </div>
                                      {/* ADDED: Booking Status */}
                                      <div className="payment-item">
                                        <div className="payment-label">
                                          Booking Status
                                        </div>
                                        <div className="booking-status-confirmed">
                                          Confirmed
                                        </div>
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
                                    <div className="payment-value">
                                      Economy Partially Refundable
                                    </div>
                                  </div>
                                  <ul className="policy-list">
                                    <li className="policy-item">
                                      Cancellation fee of BDT 2,000 per
                                      passenger before 24 hours of departure
                                    </li>
                                    <li className="policy-item">
                                      Cancellation fee of BDT 4,000 per
                                      passenger within 24 hours of departure
                                    </li>
                                    <li className="policy-item">
                                      No-show will result in forfeiture of the
                                      entire fare
                                    </li>
                                  </ul>
                                  <div className="payment-item">
                                    <div className="payment-label">
                                      Baggage Policy
                                    </div>
                                  </div>
                                  <ul className="policy-list">
                                    <li className="policy-item">
                                      Cabin baggage: 1 piece up to 7 kg
                                    </li>
                                    {/* UPDATED: Check-in baggage from API */}
                                    <li className="policy-item">
                                      Check-in baggage: 30 kg for Economy Class
                                    </li>
                                    <li className="policy-item">
                                      Additional baggage charges apply for
                                      excess weight
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
                                  <div className="section-title">
                                    Your Documents
                                  </div>
                                </button>
                              </h2>
                              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="section-content">
                                  <div className="document-grid">
                                    <a href="#" download className="document-item">
                                      <span className="document-icon">📥</span>
                                      <span>Download E-Ticket</span>
                                    </a>
                                    <a href="#" download className="document-item">
                                      <span className="document-icon">📥</span>
                                      <span>Download Invoice</span>
                                    </a>
                                    <a href="#" download className="document-item">
                                      <span className="document-icon">📥</span>
                                      <span>Download Itinerary</span>
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

export default UserDashboardFlightBookingDetailsComponent;