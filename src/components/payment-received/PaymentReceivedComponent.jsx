import React from 'react';
import { Link } from 'react-router-dom';

const PaymentReceivedComponent = () => {
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
                                        <li className="step-bar flex-grow-1">
                                            <span className="icon-element">3</span>
                                            <p className="pt-2 color-text-2">Booking Completed!</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="payment-received-list">
                                            <h3 className="title font-size-24">EnVision Hotel Boston</h3>
                                            <div className="card-rating">
                                                <span className="badge text-bg-warning text-white">4.4/5</span>
                                                <span className="review__text text-warning">Average</span>
                                                <span className="rating__text">(30 Reviews)</span>
                                            </div>
                                            <ul className="list-items list-items-2 py-3">
                                                <li><span>Location:</span>Delaware, OH, USA</li>
                                                <li><span>Check-in:</span>Thu 30 Mar, 2020</li>
                                                <li><span>Check-out:</span>Sat 01 Jun, 2020</li>
                                                <li>
                                                    <span>Booking details:</span>2 Nights, 1 Room, Max 2
                                                    Adult(s)
                                                </li>
                                                <li><span>Room type:</span>Luxury View Suite</li>
                                                <li><span>Client:</span>David Martin</li>
                                            </ul>
                                        </div>
                                        {/* end card-item */}
                                    </div>
                                    {/* end col-lg-6 */}
                                    <div className="col-lg-6">
                                        <div className="card-item card-item-list payment-received-card">
                                            <div className="card-img">
                                                <img src="images/img1.jpg" alt="hotel-img" />
                                            </div>
                                            <div className="card-body">
                                                <h3 className="card-title">1 Room x 2 Nights</h3>
                                                <div className="card-price pb-3">
                                                    <span className="price__from">From</span>
                                                    <span className="price__num">$88.00</span>
                                                    <span className="price__text">Per night</span>
                                                </div>
                                                <div className="section-block" />
                                                <p className="card-text pt-3">
                                                    Hotel tax 7% not included, Service charge 10% not
                                                    included
                                                </p>
                                            </div>
                                        </div>
                                        {/* end card-item */}
                                    </div>
                                    {/* end col-lg-6 */}
                                </div>
                                {/* end row */}
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="payment-received-list">
                                            <h3 className="title">Received</h3>
                                            <p>Thank you. Your order has been received</p>
                                            <div className="table-form table-responsive pt-3 pb-3">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Order</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">#121</th>
                                                            <td>
                                                                <div className="table-content">
                                                                    <h3 className="title">Thu 30 Mar, 2020</h3>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="table-content">
                                                                    <h3 className="title">$88</h3>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p>
                                                Make your payment derectly into our bank account. Please
                                                ues your Order ID as the payment reference. Your order
                                                wont be shipped until the funds have cleared in our
                                                account
                                            </p>
                                        </div>
                                        {/* end card-item */}
                                    </div>
                                    {/* end col-lg-6 */}
                                    <div className="col-lg-6">
                                        <div className="payment-received-list">
                                            <h3 className="title">Payment Detail</h3>
                                            <div className="table-form table-layout-2 table-responsive pt-3">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Room</th>
                                                            <th scope="col" className="text-end">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="table-content">
                                                                    <p className="title pb-2">
                                                                        EnVision Hotel Boston
                                                                    </p>
                                                                    <p className="font-size-13 text-gray line-height-20 font-weight-medium">
                                                                        <span className="me-2 color-text-2">Start Date:</span>Thu 30 Mar, 2020
                                                                    </p>
                                                                    <p className="font-size-13 text-gray line-height-20 font-weight-medium">
                                                                        <span className="me-2 color-text-2">End Date:</span>Sat 01 Jun, 2020
                                                                    </p>
                                                                </div>
                                                            </th>
                                                            <td>
                                                                <div className="table-content text-end">
                                                                    <h3 className="title color-text">$88</h3>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="table-content">
                                                                    <p className="title">Subtotal</p>
                                                                </div>
                                                            </th>
                                                            <td>
                                                                <div className="table-content text-end">
                                                                    <h3 className="title color-text">$88</h3>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="table-content">
                                                                    <p className="title">Order Total</p>
                                                                </div>
                                                            </th>
                                                            <td>
                                                                <div className="table-content text-end">
                                                                    <h3 className="title color-text">$88</h3>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* end card-item */}
                                    </div>
                                    {/* end col-lg-6 */}
                                    <div className="col-lg-12">
                                        <div className="section-block mt-3" />
                                        <div className="btn-box text-center pt-4">
                                            <a href="payment-complete.html" className="theme-btn">Book Complete</a>
                                        </div>
                                    </div>
                                </div>
                                {/* end row */}
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

export default PaymentReceivedComponent;
