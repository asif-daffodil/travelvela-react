import React from 'react';
import { Link } from 'react-router-dom';

const PaymentCompleteComponent = () => {
    return (
        <section className="payment-area section-bg section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-box payment-received-wrap mb-0">
                            <div className="form-title-wrap">
                                <div className="step-bar-wrap text-center">
                                    <ul className="step-bar-list d-flex align-items-center justify-content-around">
                                        <li className="step-bar flex-grow-1 step-bar-active">
                                            <span className="icon-element">1</span>
                                            <p className="pt-2 color-text-2">Choose Your Room</p>
                                        </li>
                                        <li className="step-bar flex-grow-1 step-bar-active">
                                            <span className="icon-element">2</span>
                                            <p className="pt-2 color-text-2">
                                                Your Booking &amp; Payment Details
                                            </p>
                                        </li>
                                        <li className="step-bar flex-grow-1 step-bar-active">
                                            <span className="icon-element">3</span>
                                            <p className="pt-2 color-text-2">Booking Completed!</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-content">
                                <div className="payment-received-list">
                                    <div className="d-flex align-items-center">
                                        <i className="la la-check icon-element flex-shrink-0 me-3 ms-0" />
                                        <div>
                                            <h3 className="title pb-1">Thanks Alex!</h3>
                                            <h3 className="title">
                                                Your booking in EnVision Hotel Boston is confirmed.
                                            </h3>
                                        </div>
                                    </div>
                                    <ul className="list-items py-4">
                                        <li>
                                            <i className="la la-check text-success me-2" /><strong className="text-black">EnVision Hotel Boston</strong>
                                            is Expecting you on
                                            <strong className="text-black">01 june</strong>
                                        </li>
                                        <li>
                                            <i className="la la-check text-success me-2" />Your
                                            <strong className="text-black">payment</strong> will be
                                            handled by EnVision Hotel Boston, the
                                            <strong className="color-text-2">'Payment'</strong> section
                                            below has more details
                                        </li>
                                        <li>
                                            <i className="la la-check text-success me-2" />Make changes
                                            to your booking or ask the properly a question in just a
                                            few clicks
                                        </li>
                                    </ul>
                                    <div className="btn-box pb-4">
                                        <a href="#" className="theme-btn mb-2 me-2">Make changes to your booking</a>
                                        <a href="#" className="theme-btn mb-2 theme-btn-transparent">Make your booking in the app</a>
                                    </div>
                                    <h3 className="title">
                                        <a href="#" className="text-black">EnVision Hotel Boston</a>
                                    </h3>
                                    <p>New York City, NY, USA</p>
                                    <p className="py-1">
                                        <a href="#" className="text-color">Click for directions on Google maps
                                            <i className="la la-arrow-right" /></a>
                                    </p>
                                    <p>
                                        <strong className="text-black me-1">Phone:</strong>+ 00 222 44
                                        5678
                                    </p>
                                    <ul className="list-items list-items-3 list-items-4 py-4">
                                        <li>
                                            <span className="text-black font-weight-bold">Your reservation</span>2 Nights, 1 Room
                                        </li>
                                        <li>
                                            <span className="text-black font-weight-bold">Check-in</span>Thu 30 Mar, 2020
                                        </li>
                                        <li>
                                            <span className="text-black font-weight-bold">Check-out</span>Sat 01 Jun, 2020
                                        </li>
                                        <li>
                                            <span className="text-black font-weight-bold">Prepayment</span>You will be charged a prepayment of the total price at
                                            any time.
                                        </li>
                                        <li>
                                            <span className="text-black font-weight-bold">Cancellation cost</span>From now on: USD 34
                                        </li>
                                    </ul>
                                    <div className="btn-box">
                                        <a href="#" className="theme-btn border-0 text-white bg-7">Cancel your booking</a>
                                    </div>
                                </div>
                                {/* end card-item */}
                            </div>
                        </div>
                        {/* end payment-card */}
                    </div>
                    {/* end col-lg-12 */}
                </div>
                {/* end row */}
            </div>
            {/* end container */}
        </section>

    );
};

export default PaymentCompleteComponent;
