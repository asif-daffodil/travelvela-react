import React, { useState, useEffect } from 'react';

export default function FlightBookingComponent() {
    const [minutes, setMinutes] = useState(40);
    const [seconds, setSeconds] = useState(0);
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        nationality: '',
        frequentFlyer: '',
        email: '',
        phone: '',
        cardHolderName: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: ''
    });

    // Timer countdown effect
    useEffect(() => {
        const countdown = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(countdown);
                return;
            }
            
            if (seconds === 0) {
                if (minutes > 0) {
                    setMinutes(prev => prev - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds(prev => prev - 1);
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    // Initialize country selector and phone input when component mounts
    useEffect(() => {
        // Initialize country selector if the library is available
        if (window.$ && window.$.fn.countrySelect) {
            window.$("#nationality").countrySelect({
                defaultCountry: "bd",
                responsiveDropdown: true,
                preferredCountries: ['ca', 'gb', 'us']
            });
        }

        // Initialize international phone input if the library is available
        if (window.intlTelInput) {
            const phoneInput = document.querySelector("#phone");
            if (phoneInput) {
                window.intlTelInput(phoneInput, {
                    initialCountry: "bd",
                    preferredCountries: ['bd', 'ca', 'gb', 'us']
                });
            }
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const requiredFields = ['firstName', 'lastName', 'nationality', 'email', 'phone', 'cardHolderName', 'cardNumber', 'expiryMonth', 'expiryYear', 'cvv'];
        
        for (let field of requiredFields) {
            if (!formData[field] || !formData[field].trim()) {
                alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
                return false;
            }
        }
        return true;
    };

    const handleCompleteBooking = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            alert('Booking completed successfully! (This is a demo)');
            // Here you would typically send the data to your backend
            console.log('Booking data:', formData);
        }
    };
    return (
        <div>
            {/* start breadcrumb area */}
            <section className="breadcrumb-area bread-bg-6">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="breadcrumb-content">
                                    <div className="section-heading">
                                        <h2 className="sec__title text-white">Flight Booking</h2>
                                    </div>
                                </div>
                                {/* end breadcrumb-content */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6">
                                <div className="breadcrumb-list text-end">
                                    <ul className="list-items">
                                        <li><a href="/">Home</a></li>
                                        <li>Flight Booking</li>
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

            {/* start booking area */}
            <section className="flight-booking-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-12 col-xl-8 col-12">
                                    <div className="flight-booking-main">
                                        <div className="flight-booking-main-accordion">
                                            <div className="accordion" id="accordionExample">
                                                {/* Single Flight Details Item */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            DAC-CXB
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="flight-detail-section accordion-body" style={{ border: 'none' }}>
                                                            <div className="flight-airlines-info">
                                                                <div className="airplane-info-wrapper">
                                                                    <div className="airplane-info">
                                                                        <div className="image-placeholder">
                                                                            <img src="images/airline-img7.png" alt="#" />
                                                                        </div>
                                                                        <div className="airplane-info-text">
                                                                            <span className="airplane-name">
                                                                                US Bangla
                                                                            </span>
                                                                            <span className="airplane-model">
                                                                                2A 443 | AT7
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="airplane-amenities">
                                                                        <span className="flight-type">(Economy)</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flight-time detail-time">
                                                                    <div className="start-time">
                                                                        <span className="time-text"> 11:15 </span>
                                                                        <span className="day-text">
                                                                            Mon, 29 Jan, 2024
                                                                        </span>
                                                                        <span className="destination-text"> DAC </span>
                                                                    </div>
                                                                    <div className="stops-info">
                                                                        <div className="arrow-pointer" />
                                                                        <div className="stop-names">
                                                                            <span className="duration-text" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="end-time">
                                                                        <span className="time-text"> 12:20 </span>
                                                                        <span className="day-text">
                                                                            Mon, 29 Jan, 2024
                                                                        </span>
                                                                        <span className="destination-text">CXB</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Single Flight Details Item */}
                                                            <div className="rules-section-item">
                                                                <h2 className="rules-section-header">
                                                                    Flight Details
                                                                </h2>
                                                                <div className="rules-section-inner">
                                                                    <div className="rules-section-tab">
                                                                        {/* Tab Menu */}
                                                                        <div className="tab-menu">
                                                                            <div className="list-group" id="list-tab" role="tablist">
                                                                                <a className="list-group-item active" data-bs-toggle="list" href="#flightTab1" role="tab" aria-selected="true">
                                                                                    Baggage
                                                                                </a>
                                                                                <a className="list-group-item" data-bs-toggle="list" href="#flightTab2" role="tab" aria-selected="false" tabIndex={-1}>
                                                                                    Fare
                                                                                </a>
                                                                                <a className="list-group-item" data-bs-toggle="list" href="#flightTab3" role="tab" aria-selected="false" tabIndex={-1}>
                                                                                    Policy
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        {/* Tab Details */}
                                                                        <div className="tab-details">
                                                                            <div className="tab-content" id="nav-tabContent">
                                                                                {/* Tab One */}
                                                                                <div className="tab-pane fade show active" id="flightTab1" role="tabpanel">
                                                                                    <div className="rules-content">
                                                                                        <div className="baggage-info">
                                                                                            <div className="baggage-header-info">
                                                                                                <span className="header-text">Flight</span>
                                                                                                <span className="header-text text-center">Cabin</span>
                                                                                                <span className="header-text text-end">Check-in</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="info-content">
                                                                                            <div className="content-item">
                                                                                                <div className="content-item-text">
                                                                                                    <span className="segment-loc">
                                                                                                        DAC - CXB
                                                                                                    </span>
                                                                                                    <span className="baggage-weight">
                                                                                                        7 Kg
                                                                                                    </span>
                                                                                                    <span className="check-in-baggage">
                                                                                                        20 Kg
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                {/* Tab Two */}
                                                                                <div className="tab-pane fade" id="flightTab2" role="tabpanel">
                                                                                    <div className="rules-content">
                                                                                        <div className="baggage-info">
                                                                                            <div className="baggage-header-info">
                                                                                                <span className="header-text">Fare Summary</span>
                                                                                                <span className="header-text text-center">Base Fare</span>
                                                                                                <span className="header-text text-end">Tax</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="info-content">
                                                                                            <div className="content-item">
                                                                                                <div className="content-item-text">
                                                                                                    <span className="segment-loc">
                                                                                                        Adult x 1
                                                                                                    </span>
                                                                                                    <span className="baggage-weight">
                                                                                                        BDT 4,724
                                                                                                    </span>
                                                                                                    <span className="check-in-baggage">
                                                                                                        BDT 975
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                {/* Tab Three */}
                                                                                <div className="tab-pane fade" id="flightTab3" role="tabpanel">
                                                                                    <div className="rules-content">
                                                                                        <div className="fare-rule-header">
                                                                                            <h6>DAC-CXB</h6>
                                                                                        </div>
                                                                                        <div className="fare-rule-content">
                                                                                            <div className="item-header">
                                                                                                <span>Cancellation</span>
                                                                                            </div>
                                                                                            <div className="fee-content">
                                                                                                <span>
                                                                                                    Cancellation Fee = Airline's Fee
                                                                                                    + OTA PlatformFee </span><span>Refund Amount = Paid Amount -
                                                                                                        Cancellation Fee</span>
                                                                                            </div>
                                                                                            <div className="item-header">
                                                                                                <span>Re-issue</span>
                                                                                            </div>
                                                                                            <div className="fee-content">
                                                                                                <span>
                                                                                                    Re-issue Fee = Airline's Fee +
                                                                                                    Fare Difference + OTA Platform
                                                                                                    Fee
                                                                                                </span>
                                                                                            </div>
                                                                                            <span className="cancellation-note">
                                                                                                *The airline's fee is indicative
                                                                                                and per person. Convenience fee is
                                                                                                non-refundable.
                                                                                            </span>
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
                                                </div>
                                                {/* Single Flight Details Item */}
                                                <div className="accordion-item">
                                                    <h4 className="accordion-item-title">
                                                        Enter Traveller Details
                                                    </h4>
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                            Passenger 1
                                                            <strong>Adult</strong>
                                                            <span>Primary Contact </span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="flight-personal-details accordion-body">
                                                            <form action="#" method="post" id="bookingForm">
                                                                <div className="flight-p-details-widget">
                                                                    <h4>Personal Details</h4>
                                                                    <span>
                                                                        <i className="icofont-info-circle" />
                                                                        As mentioned on your passport or government
                                                                        approved IDs
                                                                    </span>
                                                                    <div className="flight-p-details-head-gender">
                                                                        <span>Select Title</span>
                                                                        <div className="personal-gender-group">
                                                                            <div className="single-personal-gender">
                                                                                <input type="radio" className="btn-check" name="title" id="btn-check-mr" value="Mr." 
                                                                                    checked={formData.title === 'Mr.'} onChange={handleInputChange} autoComplete="off" />
                                                                                <label className="btn" htmlFor="btn-check-mr">MR.</label>
                                                                            </div>
                                                                            <div className="single-personal-gender">
                                                                                <input type="radio" className="btn-check" name="title" id="btn-check-ms" value="Ms." 
                                                                                    checked={formData.title === 'Ms.'} onChange={handleInputChange} autoComplete="off" />
                                                                                <label className="btn" htmlFor="btn-check-ms">MS.</label>
                                                                            </div>
                                                                            <div className="single-personal-gender">
                                                                                <input type="radio" className="btn-check" name="title" id="btn-check-mrs" value="Mrs." 
                                                                                    checked={formData.title === 'Mrs.'} onChange={handleInputChange} autoComplete="off" />
                                                                                <label className="btn" htmlFor="btn-check-mrs">MRS.</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flight-personal-details-form">
                                                                        <div className="row">
                                                                            <div className="col-lg-6 col-md-6 col-12">
                                                                                <div className="form-group">
                                                                                    <label>Given Name / First Name</label>
                                                                                    <input type="text" name="firstName" placeholder="John" value={formData.firstName} 
                                                                                        onChange={handleInputChange} required />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-6 col-12">
                                                                                <div className="form-group">
                                                                                    <label>Last Name</label>
                                                                                    <input type="text" name="lastName" placeholder="Due" value={formData.lastName} 
                                                                                        onChange={handleInputChange} required />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-6 col-12">
                                                                                <div className="form-group">
                                                                                    <label>Nationality </label>
                                                                                    <input id="nationality" name="nationality" type="text" placeholder="Bangladesh" 
                                                                                        value={formData.nationality} onChange={handleInputChange} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-6 col-12">
                                                                                <div className="form-group">
                                                                                    <label>Frequent Flyer Number (Optional)
                                                                                    </label>
                                                                                    <input type="text" name="frequentFlyer" placeholder="e.g., 1234 5678 9012" 
                                                                                        value={formData.frequentFlyer} onChange={handleInputChange} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flight-p-details-widget">
                                                                    <h4>Contact Details</h4>
                                                                    <span>
                                                                        <i className="icofont-info-circle" />
                                                                        Receive booking confirmation &amp; updates
                                                                    </span>
                                                                    <div className="flight-personal-details-form">
                                                                        <div className="row">
                                                                            <div className="col-lg-6 col-md-6 col-12">
                                                                                <div className="form-group">
                                                                                    <label>Email</label>
                                                                                    <input type="email" name="email" placeholder="johndue@gmail.com" 
                                                                                        value={formData.email} onChange={handleInputChange} required />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-6 col-12">
                                                                                <div className="form-group">
                                                                                    <label>Phone Number</label>
                                                                                    <input id="phone" name="phone" type="tel" placeholder="+8801XXXXXXXXX" 
                                                                                        value={formData.phone} onChange={handleInputChange} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end form-box */}
                                    <div className="form-box" style={{ marginTop: 40 }}>
                                        <div className="form-title-wrap">
                                            <h3 className="title">Select Payment Method</h3>
                                        </div>
                                        {/* form-title-wrap */}
                                        <div className="form-content">
                                            <div className="section-tab check-mark-tab text-center pb-4">
                                                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link active" id="credit-card-tab" data-bs-toggle="tab" href="#credit-card" role="tab" aria-controls="credit-card" aria-selected="true">
                                                            <i className="la la-check icon-element" />
                                                            <img src="images/payment-img.png" alt />
                                                            <span className="d-block pt-2">Payment with credit card</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link" id="paypal-tab" data-bs-toggle="tab" href="#paypal" role="tab" aria-controls="paypal" aria-selected="false" tabIndex={-1}>
                                                            <i className="la la-check icon-element" />
                                                            <img src="images/paypal.png" alt />
                                                            <span className="d-block pt-2">Payment with PayPal</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link" id="payoneer-tab" data-bs-toggle="tab" href="#payoneer" role="tab" aria-controls="payoneer" aria-selected="false" tabIndex={-1}>
                                                            <i className="la la-check icon-element" />
                                                            <img src="images/payoneer.png" alt />
                                                            <span className="d-block pt-2">Payment with payoneer</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* end section-tab */}
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="credit-card" role="tabpanel" aria-labelledby="credit-card-tab">
                                                    <div className="contact-form-action">
                                                        <form method="post" id="paymentForm">
                                                            <div className="row">
                                                                <div className="col-lg-6 responsive-column">
                                                                    <div className="input-box">
                                                                        <label className="label-text">Card Holder Name</label>
                                                                        <div className="form-group">
                                                                            <span className="la la-credit-card form-icon" />
                                                                            <input className="form-control" type="text" name="cardHolderName" placeholder="Card holder name" 
                                                                                value={formData.cardHolderName} onChange={handleInputChange} required />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* end col-lg-6 */}
                                                                <div className="col-lg-6 responsive-column">
                                                                    <div className="input-box">
                                                                        <label className="label-text">Card Number</label>
                                                                        <div className="form-group">
                                                                            <span className="la la-credit-card form-icon" />
                                                                            <input className="form-control" type="text" name="cardNumber" placeholder="Card number" 
                                                                                value={formData.cardNumber} onChange={handleInputChange} required />
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
                                                                                    <span className="la la-credit-card form-icon" />
                                                                                    <input className="form-control" type="text" name="expiryMonth" placeholder="MM" 
                                                                                        value={formData.expiryMonth} onChange={handleInputChange} required />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 responsive-column">
                                                                            <div className="input-box">
                                                                                <label className="label-text">Expiry Year</label>
                                                                                <div className="form-group">
                                                                                    <span className="la la-credit-card form-icon" />
                                                                                    <input className="form-control" type="text" name="expiryYear" placeholder="YY" 
                                                                                        value={formData.expiryYear} onChange={handleInputChange} required />
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
                                                                            <span className="la la-pencil form-icon" />
                                                                            <input className="form-control" type="text" name="cvv" placeholder="CVV" 
                                                                                value={formData.cvv} onChange={handleInputChange} required />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* end col-lg-6 */}
                                                                <div className="col-lg-12">
                                                                    <div className="input-box">
                                                                        <div className="form-group">
                                                                            <div className="custom-checkbox">
                                                                                <input type="checkbox" className="form-check-input" id="agreechb" required />
                                                                                <label htmlFor="agreechb">By continuing, you agree to the
                                                                                    <a href="#">Terms and Conditions</a>.</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* end col-lg-12 */}
                                                                <div className="col-lg-12">
                                                                    <div className="btn-box">
                                                                        <button className="theme-btn" type="button" id="confirmBookingBtn" 
                                                                            onClick={handleCompleteBooking}>
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
                                                <div className="tab-pane fade" id="paypal" role="tabpanel" aria-labelledby="paypal-tab">
                                                    <div className="contact-form-action">
                                                        <form method="post">
                                                            <div className="row">
                                                                <div className="col-lg-6 responsive-column">
                                                                    <div className="input-box">
                                                                        <label className="label-text">Email Address</label>
                                                                        <div className="form-group">
                                                                            <span className="la la-envelope form-icon" />
                                                                            <input className="form-control" type="email" name="email" placeholder="Enter email address" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* end col-lg-6 */}
                                                                <div className="col-lg-6 responsive-column">
                                                                    <div className="input-box">
                                                                        <label className="label-text">Password</label>
                                                                        <div className="form-group">
                                                                            <span className="la la-lock form-icon" />
                                                                            <input className="form-control" type="text" name="text" placeholder="Enter password" />
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
                                                <div className="tab-pane fade" id="payoneer" role="tabpanel" aria-labelledby="payoneer-tab">
                                                    <div className="contact-form-action">
                                                        <form method="post">
                                                            <div className="row">
                                                                <div className="col-lg-6 responsive-column">
                                                                    <div className="input-box">
                                                                        <label className="label-text">Email Address</label>
                                                                        <div className="form-group">
                                                                            <span className="la la-envelope form-icon" />
                                                                            <input className="form-control" type="email" name="email" placeholder="Enter email address" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* end col-lg-6 */}
                                                                <div className="col-lg-6 responsive-column">
                                                                    <div className="input-box">
                                                                        <label className="label-text">Password</label>
                                                                        <div className="form-group">
                                                                            <span className="la la-lock form-icon" />
                                                                            <input className="form-control" type="text" name="text" placeholder="Enter password" />
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
                                            </div>
                                            {/* end tab-content */}
                                        </div>
                                        {/* end form-content */}
                                    </div>
                                    {/* end form-box */}
                                </div>
                                <div className="col-lg-6 col-xl-4 col-md-6 col-12">
                                    <div className="flight-booking-sidebar">
                                        <div className="flight-timer">
                                            <div className="timer-container">
                                                <div className="timer-text">
                                                    <span> Book now before tickets run out! </span>
                                                    <div className="timer-number">
                                                        <i className="la la-clock" />
                                                        <div className="timer-value">
                                                            <div>
                                                                <p>{minutes.toString().padStart(2, '0')}</p>
                                                                <span>min</span>
                                                            </div>
                                                            <div>
                                                                <p>{seconds.toString().padStart(2, '0')}</p>
                                                                <span>sec</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fare-wrapper">
                                            <div className="fare-box">
                                                <div className="fare-header">
                                                    <div className="wrapper">
                                                        <div className="img-placeholder">
                                                            <img src="images/airline-img7.png" alt="#" />
                                                        </div>
                                                        <div className="header-summary">
                                                            <div className="fare-type">
                                                                <i className="icofont-airplane-alt" />
                                                                <span>Flight</span>
                                                            </div>
                                                            <span className="name"> DAC - CXB </span>
                                                            <span className="subtitle">One Way</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fare-info">
                                                    <div className="fare-info-header">Fare Summary</div>
                                                    <div className="fare-content">
                                                        <div className="fare-info-content">
                                                            <div className="passenger-items">
                                                                <span className="passenger-type">
                                                                    Adult (1 traveler)
                                                                </span>
                                                            </div>
                                                            <div className="fare-item">
                                                                <span className="fare">Base Fare</span>
                                                                <span className="fare-price">
                                                                    <span className="sm-text">BDT</span>
                                                                    <span className="lg-text"> 4,724 </span>
                                                                </span>
                                                            </div>
                                                            <div className="fare-item">
                                                                <span className="fare">Tax</span>
                                                                <span className="fare-price">
                                                                    <span className="sm-text">BDT</span>
                                                                    <span className="lg-text"> 975 </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fare-breakdown">
                                                    <div className="fare-content">
                                                        <div className="fare-info-content">
                                                            <div className="fare-item">
                                                                <span className="fare">Sub-Total</span>
                                                                <span className="fare-price">
                                                                    <span className="sm-text">BDT</span>
                                                                    <span className="lg-text"> 5,699 </span>
                                                                </span>
                                                            </div>
                                                            <div className="fare-item">
                                                                <span className="fare">
                                                                    <span>Hot Deals</span>
                                                                    <span className="promo-code">DOMB0124</span>
                                                                </span>
                                                                <span className="fare-price discount">
                                                                    <span className="material-icons">
                                                                        <i className="icofont-minus-circle" />
                                                                    </span>
                                                                    <span className="sm-text">BDT</span>
                                                                    <span className="lg-text"> 330 </span>
                                                                </span>
                                                            </div>
                                                            <div className="fare-item">
                                                                <span className="fare"> Convenience Charge </span>
                                                                <span className="fare-price">
                                                                    <span className="material-icons">
                                                                        <i className="icofont-plus-circle" />
                                                                    </span>
                                                                    <span className="sm-text">BDT</span>
                                                                    <span className="lg-text"> 113 </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="total-price">
                                                <div className="price-wrapper">
                                                    <div>
                                                        <span className="text-blue">You Pay</span><span className="subtext-grey"> (for 1 Traveler) </span>
                                                    </div>
                                                    <span className="text-blue price"><span className="sm-text">BDT</span><span className="lg-text"> 5,482 </span></span>
                                                </div>
                                                <div className="price-wrapper savings">
                                                    <div><span className="text-green">You Save</span></div>
                                                    <span className="text-green"><span className="sm-text">BDT</span><span className="lg-text"> 330 </span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* end booking area */}

            <div className="section-block"></div>

            {/* start info area */}
            <section className="info-area info-bg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 responsive-column">
                            <a href="#" className="icon-box icon-layout-2 d-flex">
                                <div className="info-icon flex-shrink-0 bg-rgb text-color-2">
                                    <i className="la la-phone" />
                                </div>
                                {/* end info-icon*/}
                                <div className="info-content">
                                    <h4 className="info__title">Need Help? Contact us</h4>
                                    <p className="info__desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                    </p>
                                </div>
                                {/* end info-content */} </a>{/* end icon-box */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <a href="#" className="icon-box icon-layout-2 d-flex">
                                <div className="info-icon flex-shrink-0 bg-rgb-2 text-color-3">
                                    <i className="la la-money" />
                                </div>
                                {/* end info-icon*/}
                                <div className="info-content">
                                    <h4 className="info__title">Payments</h4>
                                    <p className="info__desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                    </p>
                                </div>
                                {/* end info-content */} </a>{/* end icon-box */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <a href="#" className="icon-box icon-layout-2 d-flex">
                                <div className="info-icon flex-shrink-0 bg-rgb-3 text-color-4">
                                    <i className="la la-times" />
                                </div>
                                {/* end info-icon*/}
                                <div className="info-content">
                                    <h4 className="info__title">Cancel Policy</h4>
                                    <p className="info__desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                    </p>
                                </div>
                                {/* end info-content */} </a>{/* end icon-box */}
                        </div>
                        {/* end col-lg-4 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>

            {/* end info area */}
        </div>
    );
}
