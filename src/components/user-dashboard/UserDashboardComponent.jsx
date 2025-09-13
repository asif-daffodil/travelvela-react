import React, { useEffect, useRef } from 'react';
import UserDashboardFooter from './UserDashboardFooter';
import UserDashboardBreadcrumb from './UserDashboardBreadcrumb';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const UserDashboardComponent = () => {
    const barChartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (barChartRef.current) {
            const ctx = barChartRef.current.getContext('2d');
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [
                        {
                            label: 'Bookings',
                            data: [5, 9, 7, 11, 15, 10, 14],
                            backgroundColor: 'rgba(78, 115, 223, 0.6)',
                            borderColor: 'rgba(78, 115, 223, 1)',
                            borderWidth: 1,
                            borderRadius: 4,
                        },
                        {
                            label: 'Trips',
                            data: [3, 6, 5, 8, 9, 7, 11],
                            backgroundColor: 'rgba(28, 200, 138, 0.6)',
                            borderColor: 'rgba(28, 200, 138, 1)',
                            borderWidth: 1,
                            borderRadius: 4,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { boxWidth: 14 }
                        },
                        tooltip: { mode: 'index', intersect: false }
                    },
                    interaction: { mode: 'nearest', axis: 'x', intersect: false },
                    scales: {
                        x: {
                            grid: { display: false }
                        },
                        y: {
                            beginAtZero: true,
                            ticks: { stepSize: 5 },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        }
                    }
                }
            });
        }
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <div>
                <div className="dashboard-bread">
                    <div className="container-fluid">
                                                <UserDashboardBreadcrumb
                                                    title="Hi, Ali Welcome Back!"
                                                    items={[
                                                        { label: 'Home', to: '/' },
                                                        { label: 'User Dashboard', to: '/user-dashboard', active: true }
                                                    ]}
                                                />
                        <div className="row mt-4">
                            <div className="col-lg-3 responsive-column-m">
                                <div className="icon-box icon-layout-2 dashboard-icon-box">
                                    <div className="d-flex">
                                        <div className="info-icon icon-element flex-shrink-0">
                                            <i className="la la-shopping-cart" />
                                        </div>
                                        {/* end info-icon*/}
                                        <div className="info-content">
                                            <p className="info__desc">Total Booking</p>
                                            <h4 className="info__title">44</h4>
                                        </div>
                                        {/* end info-content */}
                                    </div>
                                </div>
                            </div>
                            {/* end col-lg-3 */}
                            <div className="col-lg-3 responsive-column-m">
                                <div className="icon-box icon-layout-2 dashboard-icon-box">
                                    <div className="d-flex">
                                        <div className="info-icon icon-element bg-2 flex-shrink-0">
                                            <i className="la la-bookmark" />
                                        </div>
                                        {/* end info-icon*/}
                                        <div className="info-content">
                                            <p className="info__desc">Wishlist</p>
                                            <h4 className="info__title">15</h4>
                                        </div>
                                        {/* end info-content */}
                                    </div>
                                </div>
                            </div>
                            {/* end col-lg-3 */}
                            <div className="col-lg-3 responsive-column-m">
                                <div className="icon-box icon-layout-2 dashboard-icon-box">
                                    <div className="d-flex">
                                        <div className="info-icon icon-element bg-3 flex-shrink-0">
                                            <i className="la la-plane" />
                                        </div>
                                        {/* end info-icon*/}
                                        <div className="info-content">
                                            <p className="info__desc">Total Travel</p>
                                            <h4 className="info__title">25</h4>
                                        </div>
                                        {/* end info-content */}
                                    </div>
                                </div>
                            </div>
                            {/* end col-lg-3 */}
                            <div className="col-lg-3 responsive-column-m">
                                <div className="icon-box icon-layout-2 dashboard-icon-box">
                                    <div className="d-flex">
                                        <div className="info-icon icon-element bg-4 flex-shrink-0">
                                            <i className="la la-star" />
                                        </div>
                                        {/* end info-icon*/}
                                        <div className="info-content">
                                            <p className="info__desc">Reviews</p>
                                            <h4 className="info__title">20</h4>
                                        </div>
                                        {/* end info-content */}
                                    </div>
                                </div>
                            </div>
                            {/* end col-lg-3 */}
                        </div>
                        {/* end row */}
                    </div>
                </div>
                {/* end dashboard-bread */}
                <div className="dashboard-main-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 responsive-column--m">
                                <div className="form-box" style={{ height: 400 }}>
                                    <div className="form-title-wrap">
                                        <h3 className="title">Statics Results</h3>
                                    </div>
                                    <div className="form-content" style={{ height: 'calc(100% - 56px)' }}>
                                        <canvas ref={barChartRef} />
                                    </div>
                                </div>
                                {/* end form-box */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6 responsive-column--m">
                                <div className="form-box dashboard-card">
                                    <div className="form-title-wrap">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h3 className="title">Notifications</h3>
                                            <button type="button" className="icon-element mark-as-read-btn ms-auto me-0" data-bs-toggle="tooltip" data-placement="left" title="Mark all as read">
                                                <i className="la la-check-square" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-content p-0">
                                        <div className="list-group drop-reveal-list">
                                            <a href="#" className="list-group-item list-group-item-action border-top-0">
                                                <div className="msg-body d-flex align-items-center">
                                                    <div className="icon-element flex-shrink-0 me-3 ms-0">
                                                        <i className="la la-bell" />
                                                    </div>
                                                    <div className="msg-content w-100">
                                                        <h3 className="title pb-1">Group Trip - Available</h3>
                                                        <p className="msg-text">2 min ago</p>
                                                    </div>
                                                    <span className="icon-element mark-as-read-btn flex-shrink-0 ms-auto me-0" data-bs-toggle="tooltip" data-placement="left" title="Mark as read">
                                                        <i className="la la-check-square" />
                                                    </span>
                                                </div>
                                                {/* end msg-body */}
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <div className="msg-body d-flex align-items-center">
                                                    <div className="icon-element bg-1 flex-shrink-0 me-3 ms-0">
                                                        <i className="la la-bell" />
                                                    </div>
                                                    <div className="msg-content w-100">
                                                        <h3 className="title pb-1">50% Discount Offer</h3>
                                                        <p className="msg-text">2 min ago</p>
                                                    </div>
                                                    <span className="icon-element mark-as-read-btn flex-shrink-0 ms-auto me-0" data-bs-toggle="tooltip" data-placement="left" title="Mark as read">
                                                        <i className="la la-check-square" />
                                                    </span>
                                                </div>
                                                {/* end msg-body */}
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <div className="msg-body d-flex align-items-center">
                                                    <div className="icon-element bg-2 flex-shrink-0 me-3 ms-0">
                                                        <i className="la la-check" />
                                                    </div>
                                                    <div className="msg-content w-100">
                                                        <h3 className="title pb-1">
                                                            Your account has been created
                                                        </h3>
                                                        <p className="msg-text">1 day ago</p>
                                                    </div>
                                                    <span className="icon-element mark-as-read-btn flex-shrink-0 ms-auto me-0" data-bs-toggle="tooltip" data-placement="left" title="Mark as read">
                                                        <i className="la la-check-square" />
                                                    </span>
                                                </div>
                                                {/* end msg-body */}
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <div className="msg-body d-flex align-items-center">
                                                    <div className="icon-element bg-3 flex-shrink-0 me-3 ms-0">
                                                        <i className="la la-user" />
                                                    </div>
                                                    <div className="msg-content w-100">
                                                        <h3 className="title pb-1">Your account updated</h3>
                                                        <p className="msg-text">2 hrs ago</p>
                                                    </div>
                                                    <span className="icon-element mark-as-read-btn flex-shrink-0 ms-auto me-0" data-bs-toggle="tooltip" data-placement="left" title="Mark as read">
                                                        <i className="la la-check-square" />
                                                    </span>
                                                </div>
                                                {/* end msg-body */}
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action">
                                                <div className="msg-body d-flex align-items-center">
                                                    <div className="icon-element bg-4 flex-shrink-0 me-3 ms-0">
                                                        <i className="la la-lock" />
                                                    </div>
                                                    <div className="msg-content w-100">
                                                        <h3 className="title pb-1">Your password changed</h3>
                                                        <p className="msg-text">Yesterday</p>
                                                    </div>
                                                    <span className="icon-element mark-as-read-btn flex-shrink-0 ms-auto me-0" data-bs-toggle="tooltip" data-placement="left" title="Mark as read">
                                                        <i className="la la-check-square" />
                                                    </span>
                                                </div>
                                                {/* end msg-body */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* end form-box */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6 responsive-column--m">
                                <div className="form-box dashboard-card">
                                    <div className="form-title-wrap">
                                        <h3 className="title">Tasks</h3>
                                    </div>
                                    <div className="form-content">
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            <i className="la la-check me-2" />Your booking
                                            <a href="#" className="alert-link">Shimla to Goa</a> has been
                                            done!
                                            <button type="button" className="btn-close close" data-bs-dismiss="alert" aria-label="Close" />
                                        </div>
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            <i className="la la-check me-2" />Sent Email to
                                            <strong>dev@gmail.com</strong>
                                            <button type="button" className="btn-close close" data-bs-dismiss="alert" aria-label="Close" />
                                        </div>
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            <i className="la la-check me-2" />Received Email from
                                            <strong>tripstar@yahoo.com</strong>
                                            <button type="button" className="btn-close close" data-bs-dismiss="alert" aria-label="Close" />
                                        </div>
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            <i className="la la-check me-2" />your payment is pending
                                            for <a href="#" className="alert-link">Manali</a> Trip tour!
                                            <button type="button" className="btn-close close" data-bs-dismiss="alert" aria-label="Close" />
                                        </div>
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            <i className="la la-check me-2" />Someone reply on your
                                            comment on
                                            <a href="#" className="alert-link">London Trip</a> Tour!
                                            <button type="button" className="btn-close close" data-bs-dismiss="alert" aria-label="Close" />
                                        </div>
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            <i className="la la-check me-2" />You have canceled
                                            <a href="#" className="alert-link">Dubai to london Trip</a>
                                            <button type="button" className="btn-close close" data-bs-dismiss="alert" aria-label="Close" />
                                        </div>
                                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                                            <i className="la la-check me-2" />You have give a review on
                                            <span className="badge text-bg-warning text-white">4.5</span>
                                            <a href="#" className="alert-link">EnVision Hotel Boston</a>
                                            <button type="button" className="btn-close close" data-bs-dismiss="alert" aria-label="Close" />
                                        </div>
                                    </div>
                                </div>
                                {/* end form-box */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6 responsive-column--m">
                                <div className="form-box dashboard-card order-card border-0">
                                    <div className="form-title-wrap">
                                        <h3 className="title">Orders</h3>
                                    </div>
                                    <div className="form-content p-0">
                                        <div className="list-group drop-reveal-list">
                                            <div className="list-group-item list-group-item-action border-top-0">
                                                <div className="msg-body d-flex align-items-center justify-content-between">
                                                    <div className="msg-content">
                                                        <h3 className="title pb-2">
                                                            3 - Night Bahamas - Miami Round-Trip
                                                        </h3>
                                                        <ul className="list-items d-flex align-items-center">
                                                            <li className="font-size-14 me-2">
                                                                <span className="badge text-bg-success py-1 px-2 font-size-13 font-weight-medium">Paid</span>
                                                            </li>
                                                            <li className="font-size-14 me-2">Order: #232</li>
                                                            <li className="font-size-14">Date: 11/05/2019</li>
                                                        </ul>
                                                    </div>
                                                    <a href="#" className="theme-btn theme-btn-small theme-btn-transparent font-size-13">
                                                        View Invoice
                                                    </a>
                                                </div>
                                                {/* end msg-body */}
                                            </div>
                                            <div className="list-group-item list-group-item-action">
                                                <div className="msg-body d-flex align-items-center justify-content-between">
                                                    <div className="msg-content">
                                                        <h3 className="title pb-2">California To Newyork</h3>
                                                        <ul className="list-items d-flex align-items-center">
                                                            <li className="font-size-14 me-2">
                                                                <span className="badge text-bg-danger py-1 px-2 font-size-13 font-weight-medium">UnPaid</span>
                                                            </li>
                                                            <li className="font-size-14 me-2">Order: #232</li>
                                                            <li className="font-size-14">Date: 11/05/2019</li>
                                                        </ul>
                                                    </div>
                                                    <a href="#" className="theme-btn theme-btn-small theme-btn-transparent font-size-13">
                                                        Finish Payment
                                                    </a>
                                                </div>
                                                {/* end msg-body */}
                                            </div>
                                            <div className="list-group-item list-group-item-action">
                                                <div className="msg-body d-flex align-items-center justify-content-between">
                                                    <div className="msg-content">
                                                        <h3 className="title pb-2">
                                                            Two Hour Walking Tour of Manhattan
                                                        </h3>
                                                        <ul className="list-items d-flex align-items-center">
                                                            <li className="font-size-14 me-2">
                                                                <span className="badge text-bg-success py-1 px-2 font-size-13 font-weight-medium">Paid</span>
                                                            </li>
                                                            <li className="font-size-14 me-2">Order: #232</li>
                                                            <li className="font-size-14">Date: 11/05/2019</li>
                                                        </ul>
                                                    </div>
                                                    <a href="#" className="theme-btn theme-btn-small theme-btn-transparent font-size-13">
                                                        View Invoice
                                                    </a>
                                                </div>
                                                {/* end msg-body */}
                                            </div>
                                            <div className="list-group-item list-group-item-action">
                                                <div className="msg-body d-flex align-items-center justify-content-between">
                                                    <div className="msg-content">
                                                        <h3 className="title pb-2">Dubai to Spain</h3>
                                                        <ul className="list-items d-flex align-items-center">
                                                            <li className="font-size-14 me-2">
                                                                <span className="badge text-bg-success py-1 px-2 font-size-13 font-weight-medium">Paid</span>
                                                            </li>
                                                            <li className="font-size-14 me-2">Order: #232</li>
                                                            <li className="font-size-14">Date: 11/05/2019</li>
                                                        </ul>
                                                    </div>
                                                    <a href="#" className="theme-btn theme-btn-small theme-btn-transparent font-size-13">
                                                        View Invoice
                                                    </a>
                                                </div>
                                                {/* end msg-body */}
                                            </div>
                                            <div className="list-group-item list-group-item-action">
                                                <div className="msg-body d-flex align-items-center justify-content-between">
                                                    <div className="msg-content">
                                                        <h3 className="title pb-2">Parian Holiday Villas</h3>
                                                        <ul className="list-items d-flex align-items-center">
                                                            <li className="font-size-14 me-2">
                                                                <span className="badge text-bg-success py-1 px-2 font-size-13 font-weight-medium">Paid</span>
                                                            </li>
                                                            <li className="font-size-14 me-2">Order: #232</li>
                                                            <li className="font-size-14">Date: 11/05/2019</li>
                                                        </ul>
                                                    </div>
                                                    <a href="#" className="theme-btn theme-btn-small theme-btn-transparent font-size-13">
                                                        View Invoice
                                                    </a>
                                                </div>
                                                {/* end msg-body */}
                                            </div>
                                            <div className="list-group-item list-group-item-action">
                                                <div className="msg-body d-flex align-items-center justify-content-between">
                                                    <div className="msg-content">
                                                        <h3 className="title pb-2">Lake Palace Hotel</h3>
                                                        <ul className="list-items d-flex align-items-center">
                                                            <li className="font-size-14 me-2">
                                                                <span className="badge text-bg-success py-1 px-2 font-size-13 font-weight-medium">Paid</span>
                                                            </li>
                                                            <li className="font-size-14 me-2">Order: #232</li>
                                                            <li className="font-size-14">Date: 11/05/2019</li>
                                                        </ul>
                                                    </div>
                                                    <a href="#" className="theme-btn theme-btn-small theme-btn-transparent font-size-13">
                                                        View Invoice
                                                    </a>
                                                </div>
                                                {/* end msg-body */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end form-box */}
                            </div>
                            {/* end col-lg-6 */}
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

export default UserDashboardComponent;