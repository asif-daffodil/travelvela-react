import React from 'react'
import { Link } from 'react-router-dom'

const PricingComponent = () => {
    return (
        <>
            {/* breadcrumb area start */}
            <section className="breadcrumb-area bread-bg-9">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="breadcrumb-content">
                                    <div className="section-heading">
                                        <h2 className="sec__title text-white">Pricing Plan</h2>
                                    </div>
                                </div>
                                {/* end breadcrumb-content */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6">
                                <div className="breadcrumb-list text-end">
                                    <ul className="list-items">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Pages</li>
                                        <li>Pricing Plan</li>
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
                    <svg className="bread-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <polygon points="100 0 50 10 0 0 0 10 100 10" />
                    </svg>
                </div>
                {/* end bread-svg */}
            </section>
            {/* breadcrumb area end */}

            {/* start package area */}
            <section className="package-area section-padding text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2 className="sec__title line-height-50">
                                    Select Pricing Plan That <br />
                                    Suits Your Needs
                                </h2>
                            </div>
                            {/* end section-heading */}
                        </div>
                        {/* end col-lg-12 */}
                    </div>
                    {/* end row */}
                    <div className="row padding-top-80px">
                        <div className="col-lg-4 p-0">
                            <div className="package-card">
                                <div className="package-title">
                                    <h2 className="package__title">Normal</h2>
                                    <h3 className="package__price"><span>$</span>13.99</h3>
                                    <h5 className="package__month">Per month</h5>
                                    <svg className="hero-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z" />
                                    </svg>
                                </div>
                                {/* end package-title */}
                                <ul className="list-items">
                                    <li>Disk space 250Gb</li>
                                    <li>Bandwidth 25Gb</li>
                                    <li>Databases 1</li>
                                    <li className="text-disabled">Email accounts NO</li>
                                    <li className="text-disabled">24h support NO</li>
                                    <li className="text-disabled">Email support NO</li>
                                </ul>
                                <div className="btn-box">
                                    <a href="#" className="theme-btn theme-btn-transparent">Select Plan</a>
                                </div>
                            </div>
                            {/* end package-card */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 p-0">
                            <div className="package-card package-card-active">
                                <div className="package-title">
                                    <h2 className="package__title">Standard</h2>
                                    <h3 className="package__price"><span>$</span>95.99</h3>
                                    <h5 className="package__month">Per month</h5>
                                    <svg className="hero-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z" />
                                    </svg>
                                </div>
                                {/* end package-title */}
                                <ul className="list-items">
                                    <li>Disk space 350Gb</li>
                                    <li>Bandwidth 45Gb</li>
                                    <li>Databases 1</li>
                                    <li>Email accounts YES</li>
                                    <li className="text-disabled">24h support NO</li>
                                    <li className="text-disabled">Email support NO</li>
                                </ul>
                                <div className="btn-box">
                                    <a href="#" className="theme-btn">Select Plan</a>
                                </div>
                            </div>
                            {/* end package-card */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 p-0">
                            <div className="package-card">
                                <div className="package-title">
                                    <h2 className="package__title">Premium</h2>
                                    <h3 className="package__price"><span>$</span>155.99</h3>
                                    <h5 className="package__month">Per month</h5>
                                    <svg className="hero-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z" />
                                    </svg>
                                </div>
                                {/* end package-title */}
                                <ul className="list-items">
                                    <li>Disk space 500Gb</li>
                                    <li>Bandwidth 125Gb</li>
                                    <li>Databases 1</li>
                                    <li>Email accounts YES</li>
                                    <li>24h support YES</li>
                                    <li>Email support YES</li>
                                </ul>
                                <div className="btn-box">
                                    <a href="#" className="theme-btn theme-btn-transparent">Select Plan</a>
                                </div>
                            </div>
                            {/* end package-card */}
                        </div>
                        {/* end col-lg-4 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* end package area */}

        </>
    )
}

export default PricingComponent
