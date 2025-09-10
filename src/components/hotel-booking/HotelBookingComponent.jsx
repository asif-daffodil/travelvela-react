import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HotelBookingComponent = () => {
  const [activeTab, setActiveTab] = useState('nagad');
  const [formData, setFormData] = useState({
    firstName: 'Md Fahim',
    lastName: 'Hossain',
    email: 'alifhossain174@gmail.com',
    phone: '01969005035',
    address: 'Gulshan',
    country: 'Bangladesh',
    countryCode: 'Bangladesh (+880)',
    receiveOffers: false,
    agreeTnC: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* ================================
      START BREADCRUMB AREA
      ================================= */}
      <section className="breadcrumb-area bread-bg-7">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title text-white">Hotel Booking</h2>
                  </div>
                </div>
                {/* end breadcrumb-content */}
              </div>
              {/* end col-lg-6 */}
              <div className="col-lg-6">
                <div className="breadcrumb-list text-end">
                  <ul className="list-items">
                    <li><Link to="/">Home</Link></li>
                    <li>Hotel Booking</li>
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
          <svg
            className="bread-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
          </svg>
        </div>
        {/* end bread-svg */}
      </section>
      {/* end breadcrumb-area */}
      {/* ================================
      END BREADCRUMB AREA
      ================================= */}

      {/* ================================
      START BOOKING AREA
      ================================= */}
      <section className="booking-area padding-top-100px padding-bottom-70px">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-box">
                <div className="form-title-wrap">
                  <h3 className="title">Your Personal Information</h3>
                </div>
                {/* form-title-wrap */}
                <div className="form-content">
                  <div className="contact-form-action">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">First Name</label>
                            <div className="form-group">
                              <span className="la la-user form-icon"></span>
                              <input
                                className="form-control"
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">Last Name</label>
                            <div className="form-group">
                              <span className="la la-user form-icon"></span>
                              <input
                                className="form-control"
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">Your Email</label>
                            <div className="form-group">
                              <span className="la la-envelope-o form-icon"></span>
                              <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">Phone Number</label>
                            <div className="form-group">
                              <span className="la la-phone form-icon"></span>
                              <input
                                className="form-control"
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-12">
                          <div className="input-box">
                            <label className="label-text">Address Line</label>
                            <div className="form-group">
                              <span className="la la-map-marked form-icon"></span>
                              <input
                                className="form-control"
                                type="text"
                                name="address"
                                placeholder="Address line"
                                value={formData.address}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-12 */}
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">Country</label>
                            <div className="form-group select2-container-wrapper">
                              <div className="select-contain w-auto">
                                <select 
                                  className="select-contain-select"
                                  name="country"
                                  value={formData.country}
                                  onChange={handleInputChange}
                                >
                                  <option value="">Select country</option>
                                  <option value="Afghanistan">Afghanistan</option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Austria">Austria</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Brazil">Brazil</option>
                                  <option value="Canada">Canada</option>
                                  <option value="China">China</option>
                                  <option value="France">France</option>
                                  <option value="Germany">Germany</option>
                                  <option value="India">India</option>
                                  <option value="Japan">Japan</option>
                                  <option value="United Kingdom">United Kingdom</option>
                                  <option value="United States">United States</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">Country Code</label>
                            <div className="form-group select2-container-wrapper">
                              <div className="select-contain w-auto">
                                <select 
                                  className="select-contain-select"
                                  name="countryCode"
                                  value={formData.countryCode}
                                  onChange={handleInputChange}
                                >
                                  <option value="">Select country code</option>
                                  <option value="United Kingdom (+44)">United Kingdom (+44)</option>
                                  <option value="United States (+1)">United States (+1)</option>
                                  <option value="Bangladesh (+880)">Bangladesh (+880)</option>
                                  <option value="Brazil (+55)">Brazil (+55)</option>
                                  <option value="China (+86)">China (+86)</option>
                                  <option value="India (+91)">India (+91)</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-12">
                          <div className="input-box">
                            <div className="custom-checkbox mb-0">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="receiveChb"
                                name="receiveOffers"
                                checked={formData.receiveOffers}
                                onChange={handleInputChange}
                              />
                              <label htmlFor="receiveChb">
                                I want to receive TravelVela promotional offers in the future
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-12 */}
                      </div>
                    </form>
                  </div>
                  {/* end contact-form-action */}
                </div>
                {/* end form-content */}
              </div>
              {/* end form-box */}
              
              <div className="form-box">
                <div className="form-title-wrap">
                  <h3 className="title">Your Card Information</h3>
                </div>
                {/* form-title-wrap */}
                <div className="form-content">
                  <div className="section-tab check-mark-tab text-center pb-4">
                    <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeTab === 'credit-card' ? 'active' : ''}`}
                          id="credit-card-tab"
                          onClick={() => handleTabChange('credit-card')}
                          role="tab"
                          aria-controls="credit-card"
                          aria-selected={activeTab === 'credit-card'}
                        >
                          <i className="la la-check icon-element"></i>
                          <img src="images/payment-img.png" alt="Credit Card" />
                          <span className="d-block pt-2">Payment with credit card</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeTab === 'paypal' ? 'active' : ''}`}
                          id="paypal-tab"
                          onClick={() => handleTabChange('paypal')}
                          role="tab"
                          aria-controls="paypal"
                          aria-selected={activeTab === 'paypal'}
                        >
                          <i className="la la-check icon-element"></i>
                          <img src="images/paypal.png" alt="PayPal" />
                          <span className="d-block pt-2">Payment with PayPal</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${activeTab === 'nagad' ? 'active' : ''}`}
                          id="nagad-tab"
                          onClick={() => handleTabChange('nagad')}
                          role="tab"
                          aria-controls="nagad"
                          aria-selected={activeTab === 'nagad'}
                        >
                          <i className="la la-check icon-element"></i>
                          <img src="images/nagad.png" alt="Nagad" />
                          <span className="d-block pt-2">Payment with Nagad</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end section-tab */}
                  <div className="tab-content">
                    <div
                      className={`tab-pane fade ${activeTab === 'credit-card' ? 'show active' : ''}`}
                      id="credit-card"
                      role="tabpanel"
                      aria-labelledby="credit-card-tab"
                    >
                      <div className="contact-form-action">
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-lg-6 responsive-column">
                              <div className="input-box">
                                <label className="label-text">Card Holder Name</label>
                                <div className="form-group">
                                  <span className="la la-credit-card form-icon"></span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="cardHolderName"
                                    placeholder="Card holder name"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6 responsive-column">
                              <div className="input-box">
                                <label className="label-text">Card Number</label>
                                <div className="form-group">
                                  <span className="la la-credit-card form-icon"></span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Card number"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6">
                              <div className="row">
                                <div className="col-lg-6 responsive-column">
                                  <div className="input-box">
                                    <label className="label-text">Expiry Month</label>
                                    <div className="form-group">
                                      <span className="la la-credit-card form-icon"></span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="expiryMonth"
                                        placeholder="MM"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 responsive-column">
                                  <div className="input-box">
                                    <label className="label-text">Expiry Year</label>
                                    <div className="form-group">
                                      <span className="la la-credit-card form-icon"></span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="expiryYear"
                                        placeholder="YY"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">CVV</label>
                                <div className="form-group">
                                  <span className="la la-pencil form-icon"></span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="cvv"
                                    placeholder="CVV"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-12">
                              <div className="input-box">
                                <div className="form-group">
                                  <div className="custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="agreechb"
                                      name="agreeTnC"
                                      checked={formData.agreeTnC}
                                      onChange={handleInputChange}
                                    />
                                    <label htmlFor="agreechb">
                                      By continuing, you agree to the{' '}
                                      <a href="#">Terms and Conditions</a>.
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-12 */}
                            <div className="col-lg-12">
                              <div className="btn-box">
                                <button className="theme-btn" type="submit">
                                  Confirm Booking
                                </button>
                              </div>
                            </div>
                            {/* end col-lg-12 */}
                          </div>
                        </form>
                      </div>
                      {/* end contact-form-action */}
                    </div>
                    {/* end tab-pane*/}
                    <div
                      className={`tab-pane fade ${activeTab === 'paypal' ? 'show active' : ''}`}
                      id="paypal"
                      role="tabpanel"
                      aria-labelledby="paypal-tab"
                    >
                      <div className="contact-form-action">
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-lg-6 responsive-column">
                              <div className="input-box">
                                <label className="label-text">Email Address</label>
                                <div className="form-group">
                                  <span className="la la-envelope form-icon"></span>
                                  <input
                                    className="form-control"
                                    type="email"
                                    name="paypalEmail"
                                    placeholder="Enter email address"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6 responsive-column">
                              <div className="input-box">
                                <label className="label-text">Password</label>
                                <div className="form-group">
                                  <span className="la la-lock form-icon"></span>
                                  <input
                                    className="form-control"
                                    type="password"
                                    name="paypalPassword"
                                    placeholder="Enter password"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-12">
                              <div className="btn-box">
                                <button className="theme-btn" type="submit">
                                  Login Account
                                </button>
                              </div>
                            </div>
                            {/* end col-lg-12 */}
                          </div>
                        </form>
                      </div>
                      {/* end contact-form-action */}
                    </div>
                    {/* end tab-pane*/}
                    <div
                      className={`tab-pane fade ${activeTab === 'nagad' ? 'show active' : ''}`}
                      id="nagad"
                      role="tabpanel"
                      aria-labelledby="nagad-tab"
                    >
                      <div className="contact-form-action">
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-lg-6 responsive-column">
                              <div className="input-box">
                                <label className="label-text">Mobile Number</label>
                                <div className="form-group">
                                  <span className="la la-phone form-icon"></span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="nagadMobile"
                                    placeholder="Enter mobile number"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6 responsive-column">
                              <div className="input-box">
                                <label className="label-text">PIN</label>
                                <div className="form-group">
                                  <span className="la la-lock form-icon"></span>
                                  <input
                                    className="form-control"
                                    type="password"
                                    name="nagadPin"
                                    placeholder="Enter PIN"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-12">
                              <div className="btn-box">
                                <button className="theme-btn" type="submit">
                                  Pay with Nagad
                                </button>
                              </div>
                            </div>
                            {/* end col-lg-12 */}
                          </div>
                        </form>
                      </div>
                      {/* end contact-form-action */}
                    </div>
                    {/* end tab-pane*/}
                  </div>
                  {/* end tab-content */}
                </div>
                {/* end form-content */}
              </div>
              {/* end form-box */}
            </div>
            {/* end col-lg-8 */}
            <div className="col-lg-4">
              <div className="form-box booking-detail-form">
                <div className="form-title-wrap">
                  <h3 className="title">Booking Details</h3>
                  <p className="booking-number">Booking No: #1747998547</p>
                </div>
                {/* end form-title-wrap */}
                <div className="form-content">
                  <div className="card-item shadow-none radius-none mb-0">
                    <div className="card-img pb-4">
                      <a href="/hotel-single" className="d-block">
                        <img src="images/img1.jpg" alt="hotel-img" />
                      </a>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h3 className="card-title">
                            Jatra FlagShip Chattogram City Center
                          </h3>
                          <p className="card-meta">
                            Plot: 42, Road: 03, Nasirabad Properties, South Khulshi, 4225 Chittagong
                          </p>
                          <p className="card-meta">Dhaka, Bangladesh</p>
                          <p className="card-meta">Phone: +8809638-230230</p>
                          <p className="card-meta">Email: support@travelvela.com</p>
                        </div>
                        <div>
                          <a href="/hotel-single" className="btn ms-1">
                            <i
                              className="la la-edit"
                              data-bs-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            ></i>
                          </a>
                        </div>
                      </div>
                      <div className="card-rating">
                        <span className="badge text-white">4/5</span>
                        <span className="review__text">Good</span>
                      </div>
                      <div className="section-block"></div>
                      <ul className="list-items list-items-2 py-2">
                        <li><span>Check in:</span>03 May 2025</li>
                        <li><span>Check out:</span>05 May 2025</li>
                      </ul>
                      <div className="section-block"></div>
                      <h3 className="card-title pt-3 pb-2 font-size-15">
                        <a href="/hotel-single">Order Details</a>
                      </h3>
                      <div className="section-block"></div>
                      <ul className="list-items list-items-2 py-3">
                        <li><span>Room Type:</span>Deluxe Room</li>
                        <li><span>Room:</span>1 Room</li>
                        <li><span>Per Room Price:</span>৳4,285</li>
                        <li><span>Adults:</span>1</li>
                        <li><span>Children:</span>1</li>
                        <li><span>Stay:</span>2 Nights</li>
                        <li><span>Meal Info:</span>Room Only</li>
                        <li><span>Total Guests:</span>4</li>
                      </ul>
                      <div className="section-block"></div>
                      <ul className="list-items list-items-2 py-3">
                        <li><span>Traveller 1:</span>Mr testuser sdfsd (Adult)</li>
                        <li><span>Traveller 2:</span>Master testtwo sdfsd (Child)</li>
                      </ul>
                      <div className="section-block"></div>
                      <ul className="list-items list-items-2 py-3">
                        <li><span>Payment Method:</span>Nagad</li>
                        <li><span>Status:</span>Pending</li>
                        <li><span>Booking Date:</span>23 May 2025 at 17:09</li>
                      </ul>
                      <div className="section-block"></div>
                      <ul className="list-items list-items-2 pt-3">
                        <li><span>Sub Total:</span>৳4,285</li>
                        <li><span>Total Price:</span>৳123,123 BDT</li>
                      </ul>
                      <div className="section-block"></div>
                      <div className="pt-3">
                        <p><strong>Special Note:</strong> Test Booking</p>
                      </div>
                    </div>
                  </div>
                  {/* end card-item */}
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
      {/* end booking-area */}
      {/* ================================
      END BOOKING AREA
      ================================= */}

      <div className="section-block"></div>

      {/* ================================
      START INFO AREA
      ================================= */}
      <section className="info-area info-bg section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 responsive-column">
              <a href="#" className="icon-box icon-layout-2 d-flex">
                <div className="info-icon flex-shrink-0 bg-rgb text-color-2">
                  <i className="la la-phone"></i>
                </div>
                {/* end info-icon*/}
                <div className="info-content">
                  <h4 className="info__title">Need Help? Contact us</h4>
                  <p className="info__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
                {/* end info-content */}
              </a>
              {/* end icon-box */}
            </div>
            {/* end col-lg-4 */}
            <div className="col-lg-4 responsive-column">
              <a href="#" className="icon-box icon-layout-2 d-flex">
                <div className="info-icon flex-shrink-0 bg-rgb-2 text-color-3">
                  <i className="la la-money"></i>
                </div>
                {/* end info-icon*/}
                <div className="info-content">
                  <h4 className="info__title">Payments</h4>
                  <p className="info__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
                {/* end info-content */}
              </a>
              {/* end icon-box */}
            </div>
            {/* end col-lg-4 */}
            <div className="col-lg-4 responsive-column">
              <a href="#" className="icon-box icon-layout-2 d-flex">
                <div className="info-icon flex-shrink-0 bg-rgb-3 text-color-4">
                  <i className="la la-times"></i>
                </div>
                {/* end info-icon*/}
                <div className="info-content">
                  <h4 className="info__title">Cancel Policy</h4>
                  <p className="info__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
                {/* end info-content */}
              </a>
              {/* end icon-box */}
            </div>
            {/* end col-lg-4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end info-area */}
      {/* ================================
      END INFO AREA
      ================================= */}
    </>
  );
};

export default HotelBookingComponent;
