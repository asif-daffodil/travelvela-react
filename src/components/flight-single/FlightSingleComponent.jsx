import React from 'react';
import { Link } from 'react-router-dom';

const FlightSingleComponent = () => {
    return (
        <>
            {/* Start breadcrumb top bar */}
            <section className="breadcrumb-top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-list breadcrumb-top-list">
                                <ul className="list-items bg-transparent radius-none p-0">
                                    <li><a href="index.html">Home</a></li>
                                    <li>France</li>
                                    <li>New york to paris</li>
                                </ul>
                            </div>
                            {/* end breadcrumb-list */}
                        </div>
                        {/* end col-lg-12 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>

            {/* end breadcrumb-top-bar */}

            {/* Start breadcrumb area */}
            <section className="breadcrumb-area bread-bg-6 py-0">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-btn">
                                    <div className="btn-box">
                                        <a className="theme-btn" data-fancybox="video" data-src="https://www.youtube.com/watch?v=IpVmKLpo-Sk" data-speed={700}>
                                            <i className="la la-video-camera me-2" />Video
                                        </a>
                                        <a className="theme-btn" data-src="images/destination-img.jpg" data-fancybox="gallery" data-caption="Showing image - 01" data-speed={700}>
                                            <i className="la la-photo me-2" />More Photos
                                        </a>
                                    </div>
                                    <a className="d-none" data-fancybox="gallery" data-src="images/destination-img2.jpg" data-caption="Showing image - 02" data-speed={700} />
                                    <a className="d-none" data-fancybox="gallery" data-src="images/destination-img3.jpg" data-caption="Showing image - 03" data-speed={700} />
                                    <a className="d-none" data-fancybox="gallery" data-src="images/destination-img4.jpg" data-caption="Showing image - 04" data-speed={700} />
                                </div>
                                {/* end breadcrumb-btn */}
                            </div>
                            {/* end col-lg-12 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end breadcrumb-wrap */}
            </section>
            {/* end breadcrumb-area */}

            {/* Start tour detail area */}
            <section className="tour-detail-area padding-bottom-90px">
                <div className="single-content-navbar-wrap menu section-bg" id="single-content-navbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single-content-nav" id="single-content-nav">
                                    <ul>
                                        <li>
                                            <a data-scroll="description" href="#description" className="scroll-link active">Flight Details</a>
                                        </li>
                                        <li>
                                            <a data-scroll="inflight-features" href="#inflight-features" className="scroll-link">Inflight Features</a>
                                        </li>
                                        <li>
                                            <a data-scroll="seat-selection" href="#seat-selection" className="scroll-link">Seat Selection</a>
                                        </li>
                                        <li>
                                            <a data-scroll="baggage" href="#baggage" className="scroll-link">Baggage</a>
                                        </li>
                                        <li>
                                            <a data-scroll="fare-rules" href="#fare-rules" className="scroll-link">Fare Rules</a>
                                        </li>
                                        <li>
                                            <a data-scroll="reviews" href="#reviews" className="scroll-link">Reviews</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end single-content-navbar-wrap */}
                <div className="single-content-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="single-content-wrap padding-top-60px">
                                    <div id="description" className="page-scroll">
                                        <div className="single-content-item pb-4">
                                            <h3 className="title font-size-26">New York to Paris</h3>
                                            <div className="d-flex align-items-center pt-2">
                                                <p className="me-2">One way flight</p>
                                                <p>
                                                    <span className="badge text-bg-warning text-white font-weight-medium font-size-16">1 Stop</span>
                                                </p>
                                            </div>
                                        </div>
                                        {/* end single-content-item */}
                                        <div className="section-block" />
                                        <div className="single-content-item py-4">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="single-feature-titles text-center mb-3">
                                                        <h3 className="title font-size-15 font-weight-medium">
                                                            Flight Take off
                                                        </h3>
                                                        <span className="font-size-13">12 Jun 2020, 7:50 am</span>
                                                    </div>
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="single-feature-titles text-center mb-3">
                                                        <i className="la la-clock-o text-color font-size-22" />
                                                        <span className="font-size-13 mt-n2">1H 40M</span>
                                                    </div>
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="single-feature-titles text-center mb-3">
                                                        <h3 className="title font-size-15 font-weight-medium">
                                                            Flight Landing
                                                        </h3>
                                                        <span className="font-size-13">13 Jun 2020, 5:50 am</span>
                                                    </div>
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-12">
                                                    <div className="single-feature-titles text-center border-top border-bottom py-3 mb-4">
                                                        <h3 className="title font-size-15 font-weight-medium">
                                                            Total flight time:<span className="font-size-13 d-inline-block ms-1 text-gray">13 Hours 40 min</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                                {/* end col-lg-12 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-plane" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                Airline
                                                            </h3>
                                                            <span className="font-size-13">Delta</span>
                                                        </div>
                                                    </div>
                                                    {/* end single-tour-feature */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-user" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                Flight Type
                                                            </h3>
                                                            <span className="font-size-13">Economy</span>
                                                        </div>
                                                    </div>
                                                    {/* end single-tour-feature */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-refresh" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                Fare Type
                                                            </h3>
                                                            <span className="font-size-13">Refundable</span>
                                                        </div>
                                                    </div>
                                                    {/* end single-tour-feature */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-times" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                Cancellation
                                                            </h3>
                                                            <span className="font-size-13">$78 / Person</span>
                                                        </div>
                                                    </div>
                                                    {/* end single-tour-feature */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-exchange" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                Flight Change
                                                            </h3>
                                                            <span className="font-size-13">$53 / Person</span>
                                                        </div>
                                                    </div>
                                                    {/* end single-tour-feature */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-shopping-cart" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                Seats &amp; Baggage
                                                            </h3>
                                                            <span className="font-size-13">Extra Charge</span>
                                                        </div>
                                                    </div>
                                                    {/* end single-tour-feature */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-gear" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                Inflight Features
                                                            </h3>
                                                            <span className="font-size-13">Available</span>
                                                        </div>
                                                    </div>
                                                    {/* end single-tour-feature */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-building" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                Base Fare
                                                            </h3>
                                                            <span className="font-size-13">$320.00</span>
                                                        </div>
                                                    </div>
                                                    {/* end single-tour-feature */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-money" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                Taxes &amp; Fees
                                                            </h3>
                                                            <span className="font-size-13">$300.00</span>
                                                        </div>
                                                    </div>
                                                    {/* end single-tour-feature */}
                                                </div>
                                                {/* end col-lg-4 */}
                                            </div>
                                            {/* end row */}
                                        </div>
                                        {/* end single-content-item */}
                                        <div className="section-block" />
                                        <div className="single-content-item padding-top-40px padding-bottom-40px">
                                            <h3 className="title font-size-20">About Delta Airlines</h3>
                                            <p className="py-3">
                                                Per consequat adolescens ex, cu nibh commune temporibus
                                                vim, ad sumo viris eloquentiam sed. Mea appareat
                                                omittantur eloquentiam ad, nam ei quas oportere
                                                democritum. Prima causae admodum id est, ei timeam
                                                inimicus sed. Sit an meis aliquam, cetero inermis vel ut.
                                                An sit illum euismod facilisis, tamquam vulputate
                                                pertinacia eum at.
                                            </p>
                                            <p className="pb-3">
                                                Cum et probo menandri. Officiis consulatu pro et, ne sea
                                                sale invidunt, sed ut sint blandit efficiendi. Atomorum
                                                explicari eu qui, est enim quaerendum te. Quo harum viris
                                                id. Per ne quando dolore evertitur, pro ad cibo commune.
                                            </p>
                                            <p>
                                                Sed scelerisque lectus sit amet faucibus sodales. Proin ut
                                                risus tortor. Etiam fermentum tellus auctor, fringilla
                                                sapien et, congue quam. In a luctus tortor. Suspendisse
                                                eget tempor libero, ut sollicitudin ligula. Nulla
                                                vulputate tincidunt est non congue. Class aptent taciti
                                                sociosqu ad litora torquent per conubia nostra, per
                                                inceptos himenaeos. Phasellus at est imperdiet, dapibus
                                                ipsum vel, lacinia nulla.
                                            </p>
                                        </div>
                                        {/* end single-content-item */}
                                        <div className="section-block" />
                                    </div>
                                    {/* end description */}
                                    <div id="inflight-features" className="page-scroll">
                                        <div className="single-content-item padding-top-40px padding-bottom-30px">
                                            <h3 className="title font-size-20">Inflight Features</h3>
                                            <p className="pt-3">
                                                Maecenas vitae turpis condimentum metus tincidunt semper
                                                bibendum ut orci. Donec eget accumsan est. Duis laoreet
                                                sagittis elit et vehicula. Cras viverra posuere
                                                condimentum. Donec urna arcu, venenatis quis augue sit
                                                amet, mattis gravida nunc.
                                            </p>
                                            <div className="inflight-content-item pt-4">
                                                <div className="row">
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-wifi" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    WI-FI
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-music" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Entertainment
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-television" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Television
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-tree" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Air Conditioning
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-glass" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Drink
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-gamepad" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Games
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-coffee" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Coffee
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-glass" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Wines
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-shopping-cart" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Shopping
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-cutlery" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Food
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-bed" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Comfort
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-photo" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Magazines
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                </div>
                                                {/* end row */}
                                            </div>
                                            {/* end inflight-content-item */}
                                        </div>
                                        {/* end single-content-item */}
                                        <div className="section-block" />
                                    </div>
                                    {/* end inflight-features */}
                                    <div id="seat-selection" className="page-scroll">
                                        <div className="single-content-item padding-top-40px padding-bottom-40px">
                                            <h3 className="title font-size-20">Select your Seats</h3>
                                            <p className="pt-3">
                                                Maecenas vitae turpis condimentum metus tincidunt semper
                                                bibendum ut orci. Donec eget accumsan est. Duis laoreet
                                                sagittis elit et vehicula.
                                            </p>
                                            <div className="cabin-type padding-top-30px">
                                                <div className="cabin-type-item seat-selection-item d-flex">
                                                    <div className="cabin-type-img flex-shrink-0">
                                                        <img src="images/seat1.png" alt />
                                                    </div>
                                                    <div className="cabin-type-detail">
                                                        <h3 className="title">Standard advance seat selection</h3>
                                                        <p className="font-size-15 pt-2">
                                                            Donec urna arcu, venenatis quis augue sit amet,
                                                            mattis gravida nunc. Integer faucibus, tortor a
                                                            tristique adipiscing, arcu metus luctus libero, nec
                                                            vulputate risus elit id nibh.
                                                        </p>
                                                    </div>
                                                    <div className="cabin-price text-center">
                                                        <p className="text-uppercase font-size-14">
                                                            Starting at<strong className="mt-n1 text-black font-size-18 d-block">$15</strong>
                                                        </p>
                                                        <div className="custom-checkbox mb-0">
                                                            <input type="checkbox" className="form-check-input form-check-two" id="selectChb1" />
                                                            <label htmlFor="selectChb1" className="theme-btn theme-btn-small">Select</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end cabin-type-item */}
                                            </div>
                                            {/* end cabin-type */}
                                            <div className="cabin-type padding-top-30px">
                                                <div className="cabin-type-item seat-selection-item d-flex">
                                                    <div className="cabin-type-img flex-shrink-0">
                                                        <img src="images/seat2.png" alt />
                                                    </div>
                                                    <div className="cabin-type-detail">
                                                        <h3 className="title">Standard advance seat selection</h3>
                                                        <p className="font-size-15 pt-2">
                                                            Donec urna arcu, venenatis quis augue sit amet,
                                                            mattis gravida nunc. Integer faucibus, tortor a
                                                            tristique adipiscing, arcu metus luctus libero, nec
                                                            vulputate risus elit id nibh.
                                                        </p>
                                                    </div>
                                                    <div className="cabin-price text-center">
                                                        <p className="text-uppercase font-size-14">
                                                            Starting at<strong className="mt-n1 text-black font-size-18 d-block">$15</strong>
                                                        </p>
                                                        <div className="custom-checkbox mb-0">
                                                            <input type="checkbox" className="form-check-input form-check-two" id="selectChb2" />
                                                            <label htmlFor="selectChb2" className="theme-btn theme-btn-small">Select</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end cabin-type-item */}
                                            </div>
                                            {/* end cabin-type */}
                                            <div className="cabin-type padding-top-30px">
                                                <div className="cabin-type-item seat-selection-item d-flex">
                                                    <div className="cabin-type-img flex-shrink-0">
                                                        <img src="images/seat3.png" alt />
                                                    </div>
                                                    <div className="cabin-type-detail">
                                                        <h3 className="title">Standard advance seat selection</h3>
                                                        <p className="font-size-15 pt-2">
                                                            Donec urna arcu, venenatis quis augue sit amet,
                                                            mattis gravida nunc. Integer faucibus, tortor a
                                                            tristique adipiscing, arcu metus luctus libero, nec
                                                            vulputate risus elit id nibh.
                                                        </p>
                                                    </div>
                                                    <div className="cabin-price text-center">
                                                        <p className="text-uppercase font-size-14">
                                                            Starting at<strong className="mt-n1 text-black font-size-18 d-block">$15</strong>
                                                        </p>
                                                        <div className="custom-checkbox mb-0">
                                                            <input type="checkbox" className="form-check-input form-check-two" id="selectChb3" />
                                                            <label htmlFor="selectChb3" className="theme-btn theme-btn-small">Select</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end cabin-type-item */}
                                            </div>
                                            {/* end cabin-type */}
                                            <div className="cabin-type padding-top-30px">
                                                <div className="cabin-type-item seat-selection-item d-flex">
                                                    <div className="cabin-type-img flex-shrink-0">
                                                        <img src="images/seat4.png" alt />
                                                    </div>
                                                    <div className="cabin-type-detail">
                                                        <h3 className="title">Standard advance seat selection</h3>
                                                        <p className="font-size-15 pt-2">
                                                            Donec urna arcu, venenatis quis augue sit amet,
                                                            mattis gravida nunc. Integer faucibus, tortor a
                                                            tristique adipiscing, arcu metus luctus libero, nec
                                                            vulputate risus elit id nibh.
                                                        </p>
                                                    </div>
                                                    <div className="cabin-price text-center">
                                                        <p className="text-uppercase font-size-14">
                                                            Starting at<strong className="mt-n1 text-black font-size-18 d-block">$15</strong>
                                                        </p>
                                                        <div className="custom-checkbox mb-0">
                                                            <input type="checkbox" className="form-check-input form-check-two" id="selectChb4" />
                                                            <label htmlFor="selectChb4" className="theme-btn theme-btn-small">Select</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end cabin-type-item */}
                                            </div>
                                            {/* end cabin-type */}
                                        </div>
                                        {/* end single-content-item */}
                                        <div className="section-block" />
                                    </div>
                                    {/* end seat-selection */}
                                    <div id="baggage" className="page-scroll">
                                        <div className="single-content-item padding-top-40px padding-bottom-40px">
                                            <h3 className="title font-size-20">Baggage</h3>
                                            <div className="contact-form-action padding-top-30px">
                                                <form method="post">
                                                    <div className="row">
                                                        <div className="col-lg-6 responsive-column">
                                                            <div className="input-box">
                                                                <label className="label-text">From</label>
                                                                <div className="form-group">
                                                                    <span className="la la-map-marker form-icon" />
                                                                    <input className="form-control" type="text" name="text" placeholder="City, airport or country name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 responsive-column">
                                                            <div className="input-box">
                                                                <label className="label-text">To</label>
                                                                <div className="form-group">
                                                                    <span className="la la-map-marker form-icon" />
                                                                    <input className="form-control" type="text" name="text" placeholder="City, airport or country name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 responsive-column">
                                                            <div className="input-box">
                                                                <label className="label-text">Top Tier Status</label>
                                                                <div className="form-group select2-container-wrapper">
                                                                    <div className="select-contain w-auto">
                                                                        <select className="select-contain-select">
                                                                            <option value={1} selected="selected">
                                                                                Super elite 50k
                                                                            </option>
                                                                            <option value={2}>Super elite 60k</option>
                                                                            <option value={3}>Super elite 80k</option>
                                                                            <option value={4}>Super elite 100k</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 responsive-column">
                                                            <div className="input-box">
                                                                <label className="label-text">Bag weight</label>
                                                                <div className="form-group select2-container-wrapper">
                                                                    <div className="select-contain w-auto">
                                                                        <select className="select-contain-select">
                                                                            <option value={1} selected="selected">
                                                                                20kgs (40lbs)
                                                                            </option>
                                                                            <option value={2}>30kgs (60lbs)</option>
                                                                            <option value={3}>40kgs (80lbs)</option>
                                                                            <option value={4}>50kgs (100lbs)</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-box">
                                                                <label className="label-text">Class of service</label>
                                                                <div className="form-group">
                                                                    <span className="la la-briefcase form-icon" />
                                                                    <input className="form-control" type="text" name="text" placeholder="Economy class" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="input-box">
                                                                <div className="form-group">
                                                                    <div className="custom-checkbox">
                                                                        <input type="checkbox" className="form-check-input" id="chbocupying" />
                                                                        <label htmlFor="chbocupying">Infant/child (0 to 11 years) occupying a
                                                                            seat (with own ticket)</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="btn-box">
                                                                <button type="button" className="theme-btn">
                                                                    View Baggage Allowance
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* end contact-form-action */}
                                            <div className="baggage-feature-item py-4">
                                                <p className="pb-3">
                                                    In this section you'll find information on baggage
                                                    allowances, special equipment and sports items as well
                                                    as restricted items. We've also included some tips to
                                                    make your trip more enjoyable.
                                                </p>
                                                <div className="row">
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-shopping-cart" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Carry-on Allowance
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-briefcase" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Baggage Allowance
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-briefcase" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Delayed Baggage
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-briefcase" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Damaged Baggage
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-briefcase" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Baggage Status
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-briefcase" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Baggage Services
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-briefcase" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Baggage Tips
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-user-times" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Restricted Items
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-file" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Liability Limitations
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-gift" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Lost and Found
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                </div>
                                                {/* end row */}
                                            </div>
                                            <h3 className="title font-size-20">Basic Information</h3>
                                            <p className="pt-3">
                                                Vestibulum ut iaculis justo, auctor sodales lectus. Donec
                                                et tellus tempus, dignissim maurornare, consequat lacus.
                                                Integer dui neque, scelerisque nec sollicitudin sit amet,
                                                sodales a erat. Duis vitae condimentum ligula. Integer eu
                                                mi nisl. Donec massa dui, commodo id arcu quis, venenatis
                                                scelerisque velit.
                                            </p>
                                        </div>
                                        {/* end single-content-item */}
                                        <div className="section-block" />
                                    </div>
                                    {/* end faq */}
                                    <div id="fare-rules" className="page-scroll">
                                        <div className="single-content-item padding-top-40px padding-bottom-40px">
                                            <h3 className="title font-size-20">
                                                Fare Rules for your Flight
                                            </h3>
                                            <div className="fare-feature-item padding-top-30px pb-2">
                                                <div className="row">
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                <i className="la la-check" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Rules And Policies
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                <i className="la la-check" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Flight Changes
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                <i className="la la-check" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Refunds
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                <i className="la la-check" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Airline Penalties
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                <i className="la la-check" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Flight Cancellation
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                <i className="la la-check" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Airline Terms Of Use
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                </div>
                                                {/* end row */}
                                            </div>
                                            <p>
                                                Maecenas vitae turpis condimentum metus tincidunt semper
                                                bibendum ut orci. Donec eget accumsan est. Duis laoreet
                                                sagittis elit et vehicula. Cras viverra posuere
                                                condimentum. Donec urna arcu, venenatis quis augue sit
                                                amet, mattis gravida nunc. Integer faucibus, tortor a
                                                tristique adipiscing, arcu metus luctus libero, nec
                                                vulputate risus elit id nibh.
                                            </p>
                                            <div className="accordion accordion-item padding-top-30px" id="accordionExample2">
                                                <div className="card">
                                                    <div className="card-header" id="faqHeadingFour">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseFour" aria-expanded="true" aria-controls="faqCollapseFour">
                                                                <span className="ms-3">Flight cancellation charges</span>
                                                                <i className="la la-minus" />
                                                                <i className="la la-plus" />
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="faqCollapseFour" className="collapse show" aria-labelledby="faqHeadingFour" data-bs-parent="#accordionExample2">
                                                        <div className="card-body d-flex">
                                                            <p>
                                                                Mea appareat omittantur eloquentiam ad, nam ei
                                                                quas oportere democritum. Prima causae admodum id
                                                                est, ei timeam inimicus sed. Sit an meis aliquam,
                                                                cetero inermis vel ut. An sit illum euismod
                                                                facilisis Nullam id dolor id nibh ultricies
                                                                vehicula ut id elit.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end card */}
                                                <div className="card">
                                                    <div className="card-header" id="faqHeadingFive">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseFive" aria-expanded="false" aria-controls="faqCollapseFive">
                                                                <span className="ms-3">WAmendment in higher class charges</span>
                                                                <i className="la la-minus" />
                                                                <i className="la la-plus" />
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="faqCollapseFive" className="collapse" aria-labelledby="faqHeadingFive" data-bs-parent="#accordionExample2">
                                                        <div className="card-body d-flex">
                                                            <p>
                                                                Mea appareat omittantur eloquentiam ad, nam ei
                                                                quas oportere democritum. Prima causae admodum id
                                                                est, ei timeam inimicus sed. Sit an meis aliquam,
                                                                cetero inermis vel ut. An sit illum euismod
                                                                facilisis Nullam id dolor id nibh ultricies
                                                                vehicula ut id elit.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end card */}
                                                <div className="card">
                                                    <div className="card-header" id="faqHeadingSix">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseSix" aria-expanded="false" aria-controls="faqCollapseSix">
                                                                <span className="ms-3">Amendment in same class charges</span>
                                                                <i className="la la-minus" />
                                                                <i className="la la-plus" />
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="faqCollapseSix" className="collapse" aria-labelledby="faqHeadingSix" data-bs-parent="#accordionExample2">
                                                        <div className="card-body d-flex">
                                                            <p>
                                                                Mea appareat omittantur eloquentiam ad, nam ei
                                                                quas oportere democritum. Prima causae admodum id
                                                                est, ei timeam inimicus sed. Sit an meis aliquam,
                                                                cetero inermis vel ut. An sit illum euismod
                                                                facilisis Nullam id dolor id nibh ultricies
                                                                vehicula ut id elit.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end card */}
                                                <div className="card">
                                                    <div className="card-header" id="faqHeadingSeven">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseSeven" aria-expanded="false" aria-controls="faqCollapseSeven">
                                                                <span className="ms-3">Rebooking/cancellation charges</span>
                                                                <i className="la la-minus" />
                                                                <i className="la la-plus" />
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="faqCollapseSeven" className="collapse" aria-labelledby="faqHeadingSeven" data-bs-parent="#accordionExample2">
                                                        <div className="card-body d-flex">
                                                            <p>
                                                                Mea appareat omittantur eloquentiam ad, nam ei
                                                                quas oportere democritum. Prima causae admodum id
                                                                est, ei timeam inimicus sed. Sit an meis aliquam,
                                                                cetero inermis vel ut. An sit illum euismod
                                                                facilisis Nullam id dolor id nibh ultricies
                                                                vehicula ut id elit.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end card */}
                                            </div>
                                        </div>
                                        {/* end single-content-item */}
                                        <div className="section-block" />
                                    </div>
                                    {/* end faq */}
                                    <div id="reviews" className="page-scroll">
                                        <div className="single-content-item padding-top-40px padding-bottom-40px">
                                            <h3 className="title font-size-20">Reviews</h3>
                                            <div className="review-container padding-top-30px">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4">
                                                        <div className="review-summary">
                                                            <h2>4.5<span>/5</span></h2>
                                                            <p>Excellent</p>
                                                            <span>Based on 4 reviews</span>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-8">
                                                        <div className="review-bars">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="progress-item">
                                                                        <h3 className="progressbar-title">Service</h3>
                                                                        <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                                                            <div className="progressbar-box flex-shrink-0">
                                                                                <div className="progressbar-line" data-percent="70%">
                                                                                    <div className="progressbar-line-item bar-bg-1" />
                                                                                </div>
                                                                                {/* End Skill Bar */}
                                                                            </div>
                                                                            <div className="bar-percent">4.6</div>
                                                                        </div>
                                                                    </div>
                                                                    {/* end progress-item */}
                                                                </div>
                                                                {/* end col-lg-6 */}
                                                                <div className="col-lg-6">
                                                                    <div className="progress-item">
                                                                        <h3 className="progressbar-title">Location</h3>
                                                                        <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                                                            <div className="progressbar-box flex-shrink-0">
                                                                                <div className="progressbar-line" data-percent="55%">
                                                                                    <div className="progressbar-line-item bar-bg-2" />
                                                                                </div>
                                                                                {/* End Skill Bar */}
                                                                            </div>
                                                                            <div className="bar-percent">4.7</div>
                                                                        </div>
                                                                    </div>
                                                                    {/* end progress-item */}
                                                                </div>
                                                                {/* end col-lg-6 */}
                                                                <div className="col-lg-6">
                                                                    <div className="progress-item">
                                                                        <h3 className="progressbar-title">
                                                                            Value for Money
                                                                        </h3>
                                                                        <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                                                            <div className="progressbar-box flex-shrink-0">
                                                                                <div className="progressbar-line" data-percent="40%">
                                                                                    <div className="progressbar-line-item bar-bg-3" />
                                                                                </div>
                                                                                {/* End Skill Bar */}
                                                                            </div>
                                                                            <div className="bar-percent">2.6</div>
                                                                        </div>
                                                                    </div>
                                                                    {/* end progress-item */}
                                                                </div>
                                                                {/* end col-lg-6 */}
                                                                <div className="col-lg-6">
                                                                    <div className="progress-item">
                                                                        <h3 className="progressbar-title">Cleanliness</h3>
                                                                        <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                                                            <div className="progressbar-box flex-shrink-0">
                                                                                <div className="progressbar-line" data-percent="60%">
                                                                                    <div className="progressbar-line-item bar-bg-4" />
                                                                                </div>
                                                                                {/* End Skill Bar */}
                                                                            </div>
                                                                            <div className="bar-percent">3.6</div>
                                                                        </div>
                                                                    </div>
                                                                    {/* end progress-item */}
                                                                </div>
                                                                {/* end col-lg-6 */}
                                                                <div className="col-lg-6">
                                                                    <div className="progress-item">
                                                                        <h3 className="progressbar-title">Facilities</h3>
                                                                        <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                                                            <div className="progressbar-box flex-shrink-0">
                                                                                <div className="progressbar-line" data-percent="50%">
                                                                                    <div className="progressbar-line-item bar-bg-5" />
                                                                                </div>
                                                                                {/* End Skill Bar */}
                                                                            </div>
                                                                            <div className="bar-percent">2.6</div>
                                                                        </div>
                                                                    </div>
                                                                    {/* end progress-item */}
                                                                </div>
                                                                {/* end col-lg-6 */}
                                                            </div>
                                                            {/* end row */}
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-8 */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* end single-content-item */}
                                        <div className="section-block" />
                                    </div>
                                    {/* end reviews */}
                                    <div className="review-box">
                                        <div className="single-content-item padding-top-40px">
                                            <h3 className="title font-size-20">Showing 3 guest reviews</h3>
                                            <div className="comments-list padding-top-50px">
                                                <div className="comment">
                                                    <div className="comment-avatar">
                                                        <img className="avatar__img" alt src="images/team8.jpg" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <div className="meta-data">
                                                            <h3 className="comment__author">Jenny Doe</h3>
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
                                                        <p className="comment-content">
                                                            Lorem ipsum dolor sit amet, dolores mandamus
                                                            moderatius ea ius, sed civibus vivendum imperdiet
                                                            ei, amet tritani sea id. Ut veri diceret fierent
                                                            mei, qui facilisi suavitate euripidis
                                                        </p>
                                                        <div className="comment-reply d-flex align-items-center justify-content-between">
                                                            <a className="theme-btn" href="#" data-bs-toggle="modal" data-bs-target="#replayPopupForm">
                                                                <span className="la la-mail-reply me-1" />Reply
                                                            </a>
                                                            <div className="reviews-reaction">
                                                                <a href="#" className="comment-like"><i className="la la-thumbs-up" /> 13</a>
                                                                <a href="#" className="comment-dislike"><i className="la la-thumbs-down" /> 2</a>
                                                                <a href="#" className="comment-love"><i className="la la-heart-o" /> 5</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end comments */}
                                                <div className="comment comment-reply-item">
                                                    <div className="comment-avatar">
                                                        <img className="avatar__img" alt src="images/team9.jpg" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <div className="meta-data">
                                                            <h3 className="comment__author">Jenny Doe</h3>
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
                                                        <p className="comment-content">
                                                            Lorem ipsum dolor sit amet, dolores mandamus
                                                            moderatius ea ius, sed civibus vivendum imperdiet
                                                            ei, amet tritani sea id. Ut veri diceret fierent
                                                            mei, qui facilisi suavitate euripidis
                                                        </p>
                                                        <div className="comment-reply d-flex align-items-center justify-content-between">
                                                            <a className="theme-btn" href="#" data-bs-toggle="modal" data-bs-target="#replayPopupForm">
                                                                <span className="la la-mail-reply me-1" />Reply
                                                            </a>
                                                            <div className="reviews-reaction">
                                                                <a href="#" className="comment-like"><i className="la la-thumbs-up" /> 13</a>
                                                                <a href="#" className="comment-dislike"><i className="la la-thumbs-down" /> 2</a>
                                                                <a href="#" className="comment-love"><i className="la la-heart-o" /> 5</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end comments */}
                                                <div className="comment">
                                                    <div className="comment-avatar">
                                                        <img className="avatar__img" alt src="images/team10.jpg" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <div className="meta-data">
                                                            <h3 className="comment__author">Jenny Doe</h3>
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
                                                        <p className="comment-content">
                                                            Lorem ipsum dolor sit amet, dolores mandamus
                                                            moderatius ea ius, sed civibus vivendum imperdiet
                                                            ei, amet tritani sea id. Ut veri diceret fierent
                                                            mei, qui facilisi suavitate euripidis
                                                        </p>
                                                        <div className="comment-reply d-flex align-items-center justify-content-between">
                                                            <a className="theme-btn" href="#" data-bs-toggle="modal" data-bs-target="#replayPopupForm">
                                                                <span className="la la-mail-reply me-1" />Reply
                                                            </a>
                                                            <div className="reviews-reaction">
                                                                <a href="#" className="comment-like"><i className="la la-thumbs-up" /> 13</a>
                                                                <a href="#" className="comment-dislike"><i className="la la-thumbs-down" /> 2</a>
                                                                <a href="#" className="comment-love"><i className="la la-heart-o" /> 5</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end comments */}
                                                <div className="btn-box load-more text-center">
                                                    <button className="theme-btn theme-btn-small theme-btn-transparent" type="button">
                                                        Load More Review
                                                    </button>
                                                </div>
                                            </div>
                                            {/* end comments-list */}
                                            <div className="comment-forum padding-top-40px">
                                                <div className="form-box">
                                                    <div className="form-title-wrap">
                                                        <h3 className="title">Write a Review</h3>
                                                    </div>
                                                    {/* form-title-wrap */}
                                                    <div className="form-content">
                                                        <div className="rate-option p-2">
                                                            <div className="row">
                                                                <div className="col-lg-4 responsive-column">
                                                                    <div className="rate-option-item">
                                                                        <label>Service</label>
                                                                        <div className="rate-stars-option">
                                                                            <input type="checkbox" className="form-check-input" id="lst1" defaultValue={1} />
                                                                            <label htmlFor="lst1" />
                                                                            <input type="checkbox" className="form-check-input" id="lst2" defaultValue={2} />
                                                                            <label htmlFor="lst2" />
                                                                            <input type="checkbox" className="form-check-input" id="lst3" defaultValue={3} />
                                                                            <label htmlFor="lst3" />
                                                                            <input type="checkbox" className="form-check-input" id="lst4" defaultValue={4} />
                                                                            <label htmlFor="lst4" />
                                                                            <input type="checkbox" className="form-check-input" id="lst5" defaultValue={5} />
                                                                            <label htmlFor="lst5" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* col-lg-4 */}
                                                                <div className="col-lg-4 responsive-column">
                                                                    <div className="rate-option-item">
                                                                        <label>Location</label>
                                                                        <div className="rate-stars-option">
                                                                            <input type="checkbox" className="form-check-input" id="l1" defaultValue={1} />
                                                                            <label htmlFor="l1" />
                                                                            <input type="checkbox" className="form-check-input" id="l2" defaultValue={2} />
                                                                            <label htmlFor="l2" />
                                                                            <input type="checkbox" className="form-check-input" id="l3" defaultValue={3} />
                                                                            <label htmlFor="l3" />
                                                                            <input type="checkbox" className="form-check-input" id="l4" defaultValue={4} />
                                                                            <label htmlFor="l4" />
                                                                            <input type="checkbox" className="form-check-input" id="l5" defaultValue={5} />
                                                                            <label htmlFor="l5" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* col-lg-4 */}
                                                                <div className="col-lg-4 responsive-column">
                                                                    <div className="rate-option-item">
                                                                        <label>Value for Money</label>
                                                                        <div className="rate-stars-option">
                                                                            <input type="checkbox" className="form-check-input" id="vm1" defaultValue={1} />
                                                                            <label htmlFor="vm1" />
                                                                            <input type="checkbox" className="form-check-input" id="vm2" defaultValue={2} />
                                                                            <label htmlFor="vm2" />
                                                                            <input type="checkbox" className="form-check-input" id="vm3" defaultValue={3} />
                                                                            <label htmlFor="vm3" />
                                                                            <input type="checkbox" className="form-check-input" id="vm4" defaultValue={4} />
                                                                            <label htmlFor="vm4" />
                                                                            <input type="checkbox" className="form-check-input" id="vm5" defaultValue={5} />
                                                                            <label htmlFor="vm5" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* col-lg-4 */}
                                                                <div className="col-lg-4 responsive-column">
                                                                    <div className="rate-option-item">
                                                                        <label>Cleanliness</label>
                                                                        <div className="rate-stars-option">
                                                                            <input type="checkbox" className="form-check-input" id="cln1" defaultValue={1} />
                                                                            <label htmlFor="cln1" />
                                                                            <input type="checkbox" className="form-check-input" id="cln2" defaultValue={2} />
                                                                            <label htmlFor="cln2" />
                                                                            <input type="checkbox" className="form-check-input" id="cln3" defaultValue={3} />
                                                                            <label htmlFor="cln3" />
                                                                            <input type="checkbox" className="form-check-input" id="cln4" defaultValue={4} />
                                                                            <label htmlFor="cln4" />
                                                                            <input type="checkbox" className="form-check-input" id="cln5" defaultValue={5} />
                                                                            <label htmlFor="cln5" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* col-lg-4 */}
                                                                <div className="col-lg-4 responsive-column">
                                                                    <div className="rate-option-item">
                                                                        <label>Facilities</label>
                                                                        <div className="rate-stars-option">
                                                                            <input type="checkbox" className="form-check-input" id="f1" defaultValue={1} />
                                                                            <label htmlFor="f1" />
                                                                            <input type="checkbox" className="form-check-input" id="f2" defaultValue={2} />
                                                                            <label htmlFor="f2" />
                                                                            <input type="checkbox" className="form-check-input" id="f3" defaultValue={3} />
                                                                            <label htmlFor="f3" />
                                                                            <input type="checkbox" className="form-check-input" id="f4" defaultValue={4} />
                                                                            <label htmlFor="f4" />
                                                                            <input type="checkbox" className="form-check-input" id="f5" defaultValue={5} />
                                                                            <label htmlFor="f5" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* col-lg-4 */}
                                                            </div>
                                                            {/* end row */}
                                                        </div>
                                                        {/* end rate-option */}
                                                        <div className="contact-form-action">
                                                            <form method="post">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="input-box">
                                                                            <label className="label-text">Name</label>
                                                                            <div className="form-group">
                                                                                <span className="la la-user form-icon" />
                                                                                <input className="form-control" type="text" name="text" placeholder="Your name" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="input-box">
                                                                            <label className="label-text">Email</label>
                                                                            <div className="form-group">
                                                                                <span className="la la-envelope-o form-icon" />
                                                                                <input className="form-control" type="email" name="email" placeholder="Email address" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="input-box">
                                                                            <label className="label-text">Message</label>
                                                                            <div className="form-group">
                                                                                <span className="la la-pencil form-icon" />
                                                                                <textarea className="message-control form-control" name="message" placeholder="Write message" defaultValue={""} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="btn-box">
                                                                            <button type="button" className="theme-btn">
                                                                                Leave a Review
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        {/* end contact-form-action */}
                                                    </div>
                                                    {/* end form-content */}
                                                </div>
                                                {/* end form-box */}
                                            </div>
                                            {/* end comment-forum */}
                                        </div>
                                        {/* end single-content-item */}
                                    </div>
                                    {/* end review-box */}
                                </div>
                                {/* end single-content-wrap */}
                            </div>
                            {/* end col-lg-8 */}
                            <div className="col-lg-4">
                                <div className="sidebar single-content-sidebar mb-0">
                                    <div className="sidebar-widget single-content-widget">
                                        <div className="sidebar-widget-item">
                                            <div className="sidebar-book-title-wrap mb-3">
                                                <h3>Popular</h3>
                                                <p>
                                                    <span className="text-form">From</span><span className="text-value ms-2 me-1">$399.00</span>
                                                    <span className="before-price">$412.00</span>
                                                </p>
                                            </div>
                                        </div>
                                        {/* end sidebar-widget-item */}
                                        <div className="sidebar-widget-item">
                                            <div className="contact-form-action">
                                                <form action="#">
                                                    <div className="input-box">
                                                        <label className="label-text">Date</label>
                                                        <div className="form-group">
                                                            <span className="la la-calendar form-icon" />
                                                            <input className="date-range form-control" type="text" name="daterange-single" />
                                                        </div>
                                                    </div>
                                                    <div className="input-box">
                                                        <label className="label-text">Preferred class</label>
                                                        <div className="form-group select2-container-wrapper">
                                                            <div className="select-contain w-auto">
                                                                <select className="select-contain-select">
                                                                    <option value="first">First class</option>
                                                                    <option value="business">Business</option>
                                                                    <option value="premium">Premium economy</option>
                                                                    <option value>Economy/Coach</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* end sidebar-widget-item */}
                                        <div className="sidebar-widget-item">
                                            <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                                                <label className="font-size-16">Adults <span>Age 18+</span></label>
                                                <div className="qtyBtn d-flex align-items-center">
                                                    <div className="qtyDec"><i className="la la-minus" /></div>
                                                    <input type="text" name="qtyInput" defaultValue={0} />
                                                    <div className="qtyInc"><i className="la la-plus" /></div>
                                                </div>
                                            </div>
                                            {/* end qty-box */}
                                            <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                                                <label className="font-size-16">Children <span>2-12 years old</span></label>
                                                <div className="qtyBtn d-flex align-items-center">
                                                    <div className="qtyDec"><i className="la la-minus" /></div>
                                                    <input type="text" name="qtyInput" defaultValue={0} />
                                                    <div className="qtyInc"><i className="la la-plus" /></div>
                                                </div>
                                            </div>
                                            {/* end qty-box */}
                                            <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                                                <label className="font-size-16">Infants <span>0-2 years old</span></label>
                                                <div className="qtyBtn d-flex align-items-center">
                                                    <div className="qtyDec"><i className="la la-minus" /></div>
                                                    <input type="text" name="qtyInput" defaultValue={0} />
                                                    <div className="qtyInc"><i className="la la-plus" /></div>
                                                </div>
                                            </div>
                                            {/* end qty-box */}
                                        </div>
                                        {/* end sidebar-widget-item */}
                                        <div className="btn-box pt-2">
                                            <a href="flight-booking.html" className="theme-btn text-center w-100 mb-2"><i className="la la-shopping-cart me-2 font-size-18" />Book
                                                Now</a>
                                            <a href="#" className="theme-btn text-center w-100 theme-btn-transparent"><i className="la la-heart-o me-2" />Add to Wishlist</a>
                                            <div className="d-flex align-items-center justify-content-between pt-2">
                                                <a href="#" className="btn theme-btn-hover-gray font-size-15" data-bs-toggle="modal" data-bs-target="#sharePopupForm"><i className="la la-share me-1" />Share</a>
                                                <p>
                                                    <i className="la la-eye me-1 font-size-15 color-text-2" />3456
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end sidebar-widget */}
                                    <div className="sidebar-widget single-content-widget">
                                        <h3 className="title stroke-shape">Enquiry Form</h3>
                                        <div className="enquiry-forum">
                                            <div className="form-box">
                                                <div className="form-content">
                                                    <div className="contact-form-action">
                                                        <form method="post">
                                                            <div className="input-box">
                                                                <label className="label-text">Your Name</label>
                                                                <div className="form-group">
                                                                    <span className="la la-user form-icon" />
                                                                    <input className="form-control" type="text" name="text" placeholder="Your name" />
                                                                </div>
                                                            </div>
                                                            <div className="input-box">
                                                                <label className="label-text">Your Email</label>
                                                                <div className="form-group">
                                                                    <span className="la la-envelope-o form-icon" />
                                                                    <input className="form-control" type="email" name="email" placeholder="Email address" />
                                                                </div>
                                                            </div>
                                                            <div className="input-box">
                                                                <label className="label-text">Message</label>
                                                                <div className="form-group">
                                                                    <span className="la la-pencil form-icon" />
                                                                    <textarea className="message-control form-control" name="message" placeholder="Write message" defaultValue={""} />
                                                                </div>
                                                            </div>
                                                            <div className="input-box">
                                                                <div className="form-group">
                                                                    <div className="custom-checkbox mb-0">
                                                                        <input type="checkbox" className="form-check-input" id="agreechb" />
                                                                        <label htmlFor="agreechb">I agree with
                                                                            <a href="#">Terms of Service</a> and
                                                                            <a href="#">Privacy Statement</a></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="btn-box">
                                                                <button type="button" className="theme-btn">
                                                                    Submit Enquiry
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    {/* end contact-form-action */}
                                                </div>
                                                {/* end form-content */}
                                            </div>
                                            {/* end form-box */}
                                        </div>
                                        {/* end enquiry-forum */}
                                    </div>
                                    {/* end sidebar-widget */}
                                    <div className="sidebar-widget single-content-widget">
                                        <h3 className="title stroke-shape">Why Book With Us?</h3>
                                        <div className="sidebar-list">
                                            <ul className="list-items">
                                                <li>
                                                    <i className="la la-dollar icon-element me-2" />No-hassle
                                                    best price guarantee
                                                </li>
                                                <li>
                                                    <i className="la la-microphone icon-element me-2" />Customer care available 24/7
                                                </li>
                                                <li>
                                                    <i className="la la-thumbs-up icon-element me-2" />Hand-picked Tours &amp; Activities
                                                </li>
                                                <li>
                                                    <i className="la la-file-text icon-element me-2" />Free
                                                    Travel Insureance
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end sidebar-list */}
                                    </div>
                                    {/* end sidebar-widget */}
                                    <div className="sidebar-widget single-content-widget">
                                        <h3 className="title stroke-shape">Get a Question?</h3>
                                        <p className="font-size-14 line-height-24">
                                            Do not hesitate to give us a call. We are an expert team and
                                            we are happy to talk to you.
                                        </p>
                                        <div className="sidebar-list pt-3">
                                            <ul className="list-items">
                                                <li>
                                                    <i className="la la-phone icon-element me-2" /><a href="#">+ 61 23 8093 3400</a>
                                                </li>
                                                <li>
                                                    <i className="la la-envelope icon-element me-2" /><a href="mailto:info@TravelVela.com">info@TravelVela.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end sidebar-list */}
                                    </div>
                                    {/* end sidebar-widget */}
                                    <div className="sidebar-widget single-content-widget">
                                        <h3 className="title stroke-shape">Organized by</h3>
                                        <div className="author-content">
                                            <div className="d-flex">
                                                <div className="author-img">
                                                    <a href="#"><img src="images/team8.jpg" alt="testimonial image" /></a>
                                                </div>
                                                <div className="author-bio">
                                                    <h4 className="author__title">
                                                        <a href="#">royaltravelagency</a>
                                                    </h4>
                                                    <span className="author__meta">Member Since 2017</span>
                                                    <span className="ratings d-flex align-items-center">
                                                        <i className="la la-star" />
                                                        <i className="la la-star" />
                                                        <i className="la la-star" />
                                                        <i className="la la-star" />
                                                        <i className="la la-star-o" />
                                                        <span className="ms-2">305 Reviews</span>
                                                    </span>
                                                    <div className="btn-box pt-3">
                                                        <a href="#" className="theme-btn theme-btn-small theme-btn-transparent">Ask a Question</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end sidebar-widget */}
                                </div>
                                {/* end sidebar */}
                            </div>
                            {/* end col-lg-4 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end single-content-box */}
            </section>
            {/* end tour-detail-area */}

            <div className="section-block" />

            {/* Start related tour area */}
            <section className="related-tour-area section-gap pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">You might also like</h2>
                            </div>
                            {/* end section-heading */}
                        </div>
                        {/* end col-lg-12 */}
                    </div>
                    {/* end row */}
                    <div className="row padding-top-50px">
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item flight-card flight--card">
                                <div className="card-img">
                                    <img src="images/airline-img7.png" alt="flight-logo-img" />
                                </div>
                                <div className="card-body">
                                    <div className="card-top-title d-flex justify-content-between">
                                        <div>
                                            <h3 className="card-title font-size-17">Beijing</h3>
                                            <p className="card-meta font-size-14">One way flight</p>
                                        </div>
                                        <div>
                                            <div className="text-end">
                                                <span className="font-weight-regular font-size-14 d-block">avg/person</span>
                                                <h6 className="font-weight-bold color-text">$350.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-top-title */}
                                    <div className="flight-details py-3">
                                        <div className="flight-time pb-3">
                                            <div className="flight-time-item take-off d-flex">
                                                <div className="flex-shrink-0 me-2">
                                                    <i className="la la-plane" />
                                                </div>
                                                <div>
                                                    <h3 className="card-title font-size-15 font-weight-medium mb-0">
                                                        Take off
                                                    </h3>
                                                    <p className="card-meta font-size-14">Wed Nov 12 6:50 AM</p>
                                                </div>
                                            </div>
                                            <div className="flight-time-item landing d-flex">
                                                <div className="flex-shrink-0 me-2">
                                                    <i className="la la-plane" />
                                                </div>
                                                <div>
                                                    <h3 className="card-title font-size-15 font-weight-medium mb-0">
                                                        Landing
                                                    </h3>
                                                    <p className="card-meta font-size-14">Thu Nov 13 8:50 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end flight-time */}
                                        <p className="font-size-14 text-center">
                                            <span className="color-text-2 me-1">Total Time:</span>12 Hours
                                            30 Minutes
                                        </p>
                                    </div>
                                    {/* end flight-details */}
                                    <div className="btn-box text-center">
                                        <a href="flight-single.html" className="theme-btn theme-btn-small w-100">View Details</a>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item flight-card flight--card">
                                <div className="card-img">
                                    <img src="images/airline-img8.png" alt="flight-logo-img" />
                                </div>
                                <div className="card-body">
                                    <div className="card-top-title d-flex justify-content-between">
                                        <div>
                                            <h3 className="card-title font-size-17">Paris</h3>
                                            <p className="card-meta font-size-14">Round flight</p>
                                        </div>
                                        <div>
                                            <div className="text-end">
                                                <span className="font-weight-regular font-size-14 d-block">avg/person</span>
                                                <h6 className="font-weight-bold color-text">$650.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-top-title */}
                                    <div className="flight-details py-3">
                                        <div className="flight-time pb-3">
                                            <div className="flight-time-item take-off d-flex">
                                                <div className="flex-shrink-0 me-2">
                                                    <i className="la la-plane" />
                                                </div>
                                                <div>
                                                    <h3 className="card-title font-size-15 font-weight-medium mb-0">
                                                        Take off
                                                    </h3>
                                                    <p className="card-meta font-size-14">Wed Nov 12 6:50 AM</p>
                                                </div>
                                            </div>
                                            <div className="flight-time-item landing d-flex">
                                                <div className="flex-shrink-0 me-2">
                                                    <i className="la la-plane" />
                                                </div>
                                                <div>
                                                    <h3 className="card-title font-size-15 font-weight-medium mb-0">
                                                        Landing
                                                    </h3>
                                                    <p className="card-meta font-size-14">Thu Nov 13 8:50 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end flight-time */}
                                        <p className="font-size-14 text-center">
                                            <span className="color-text-2 me-1">Total Time:</span>12 Hours
                                            30 Minutes
                                        </p>
                                    </div>
                                    {/* end flight-details */}
                                    <div className="btn-box text-center">
                                        <a href="flight-single.html" className="theme-btn theme-btn-small w-100">View Details</a>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item flight-card flight--card">
                                <div className="card-img">
                                    <img src="images/airline-img9.png" alt="flight-logo-img" />
                                </div>
                                <div className="card-body">
                                    <div className="card-top-title d-flex justify-content-between">
                                        <div>
                                            <h3 className="card-title font-size-17">Dubai</h3>
                                            <p className="card-meta font-size-14">One way flight</p>
                                        </div>
                                        <div>
                                            <div className="text-end">
                                                <span className="font-weight-regular font-size-14 d-block">avg/person</span>
                                                <h6 className="font-weight-bold color-text">$350.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end card-top-title */}
                                    <div className="flight-details py-3">
                                        <div className="flight-time pb-3">
                                            <div className="flight-time-item take-off d-flex">
                                                <div className="flex-shrink-0 me-2">
                                                    <i className="la la-plane" />
                                                </div>
                                                <div>
                                                    <h3 className="card-title font-size-15 font-weight-medium mb-0">
                                                        Take off
                                                    </h3>
                                                    <p className="card-meta font-size-14">Wed Nov 12 6:50 AM</p>
                                                </div>
                                            </div>
                                            <div className="flight-time-item landing d-flex">
                                                <div className="flex-shrink-0 me-2">
                                                    <i className="la la-plane" />
                                                </div>
                                                <div>
                                                    <h3 className="card-title font-size-15 font-weight-medium mb-0">
                                                        Landing
                                                    </h3>
                                                    <p className="card-meta font-size-14">Thu Nov 13 8:50 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end flight-time */}
                                        <p className="font-size-14 text-center">
                                            <span className="color-text-2 me-1">Total Time:</span>12 Hours
                                            30 Minutes
                                        </p>
                                    </div>
                                    {/* end flight-details */}
                                    <div className="btn-box text-center">
                                        <a href="flight-single.html" className="theme-btn theme-btn-small w-100">View Details</a>
                                    </div>
                                </div>
                                {/* end card-body */}
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* end related-tour-area */}
        </>
    );
};

export default FlightSingleComponent;
