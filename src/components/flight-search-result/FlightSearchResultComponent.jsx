import React, { useState, useEffect } from 'react';
import HeroFilter from '../home/HeroFilter';

const FlightSearchResultComponent = () => {
    // State for filter collapse functionality
    const [filterCollapsed, setFilterCollapsed] = useState(false);

    // State for timer countdown
    const [minutes, setMinutes] = useState(40);
    const [seconds, setSeconds] = useState(0);

    // Search functionality will be added later - focusing on timer and filter collapse for now


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

    // Filter collapse functions
    const toggleFilterCollapse = () => {
        setFilterCollapsed(!filterCollapsed);
    };

    // Search functionality will be added later - for now we have basic timer and filter collapse

    return (
        <>
            {/* Start breadcrumb area */}
            <section className='breadcrumb-area bread-bg-6'>
                <HeroFilter />
            </section>


            {/* End breadcrumb area */}

            {/* Start Flight Filter AREA */}
            <section className="flight-filter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="f-filter-result">
                                <div className="f-filter-result-header">
                                    {/* Flight Filter Header Visible */}
                                    <div className="f-filter-result-header-visible" style={{ display: filterCollapsed ? 'none' : 'block' }}>
                                        <div className="f-filter-result-header-visible-inner">
                                            <div className="f-filter-result-header-visible-left">
                                                <div className="filter-title">
                                                    <i className="la la-filter" />
                                                    <span>Filters</span>
                                                </div>
                                                <div className="filter-stop-visible">
                                                    <span>Stops</span>
                                                    <div className="f-stop-visible-group">
                                                        <div className="single-visible-block">
                                                            <input type="checkbox" className="btn-check" name="options-base" id="btn-check-outlined" autoComplete="off" />
                                                            <label className="btn" htmlFor="btn-check-outlined">0</label>
                                                        </div>
                                                        <div className="single-visible-block">
                                                            <input type="checkbox" className="btn-check" name="options-base" id="btn-check-outlined1" autoComplete="off" />
                                                            <label className="btn" htmlFor="btn-check-outlined1">1</label>
                                                        </div>
                                                        <div className="single-visible-block">
                                                            <input type="checkbox" className="btn-check" name="options-base" id="btn-check-outlined2" autoComplete="off" />
                                                            <label className="btn" htmlFor="btn-check-outlined2">2</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="toggle-filter-switch form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitch" />
                                                    <label className="form-check-label" htmlFor="flexSwitch">
                                                        Partially Refundable
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="f-filter-result-header-visible-right">
                                                {/* Filter Results Collapse Show Button */}
                                                <div className="filter-result-collapse-btn">
                                                    <button type="button" onClick={toggleFilterCollapse}>
                                                        More Filters<i className="la la-angle-down" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Flight Filter Header Hidden */}
                                    <div className="f-result-collapse-header-hidden" style={{ display: filterCollapsed ? 'block' : 'none' }}>
                                        <div className="f-result-collapse-header-hidden-inner">
                                            <p>Showing <span>13</span> Flight Results</p>
                                            <div className="f-result-collapse-h-hidden-button">
                                                <button type="button" className="collapse-close-btn" onClick={toggleFilterCollapse}>
                                                    Close
                                                </button>
                                                <button type="button" className="collapse-reset-btn">
                                                    Reset All Filters
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Filter Results Collapse Show */}
                                <div className="f-filter-result-collapse-show" style={{ display: filterCollapsed ? 'block' : 'none' }}>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-12">
                                            <div className="filter-search-result-group">
                                                {/* Single Search Result Widget */}
                                                <div className="f-search-result-widget">
                                                    <h4>Stops</h4>
                                                    <div className="filter-stop-visible">
                                                        <div className="f-stop-visible-group">
                                                            <div className="single-visible-block">
                                                                <input type="checkbox" className="btn-check" name="options-base" id="btn-check-outlined3" autoComplete="off" />
                                                                <label className="btn" htmlFor="btn-check-outlined3">0</label>
                                                            </div>
                                                            <div className="single-visible-block">
                                                                <input type="checkbox" className="btn-check" name="options-base" id="btn-check-outlined4" autoComplete="off" />
                                                                <label className="btn" htmlFor="btn-check-outlined4">1</label>
                                                            </div>
                                                            <div className="single-visible-block">
                                                                <input type="checkbox" className="btn-check" name="options-base" id="btn-check-outlined5" autoComplete="off" />
                                                                <label className="btn" htmlFor="btn-check-outlined5">2</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Search Result Widget */}
                                                <div className="f-search-result-widget">
                                                    <h4>Fare Type:</h4>
                                                    <div className="toggle-filter-switch form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitch1" />
                                                        <label className="form-check-label" htmlFor="flexSwitch1">
                                                            Partially Refundable
                                                        </label>
                                                    </div>
                                                </div>
                                                {/* Single Search Result Widget */}
                                                <div className="f-search-result-widget">
                                                    <h4>Price Range</h4>
                                                    <div className="slider-range-wrap">
                                                        <div className="price-slider-amount padding-bottom-20px">
                                                            <input type="text" id="amount" className="amounts" />
                                                        </div>
                                                        {/* end price-slider-amount */}
                                                        <div id="slider-range" />
                                                        {/* end slider-range */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="filter-search-result-group">
                                                {/* Single Search Result Widget */}
                                                <div className="f-search-result-widget">
                                                    <h4>Schedule</h4>
                                                    <div className="f-search-result-schedule">
                                                        <p>Onward Depart Time</p>
                                                        <div className="f-search-result-schedule-group">
                                                            <div className="f-search-result-schedule-list">
                                                                <input type="checkbox" className="btn-check" id="btn-check-outlined6" autoComplete="off" />
                                                                <label className="btn btn-outline-primary" htmlFor="btn-check-outlined6">
                                                                    <i className="la la-sun" />00-06</label>
                                                            </div>
                                                            <div className="f-search-result-schedule-list">
                                                                <input type="checkbox" className="btn-check" id="btn-check-outlined7" autoComplete="off" />
                                                                <label className="btn btn-outline-primary" htmlFor="btn-check-outlined7"><i className="la la-sun" />06-12</label>
                                                            </div>
                                                            <div className="f-search-result-schedule-list">
                                                                <input type="checkbox" className="btn-check" id="btn-check-outlined8" autoComplete="off" />
                                                                <label className="btn btn-outline-primary" htmlFor="btn-check-outlined8"><i className="la la-sun" />12-18</label>
                                                            </div>
                                                            <div className="f-search-result-schedule-list">
                                                                <input type="checkbox" className="btn-check" id="btn-check-outlined9" autoComplete="off" />
                                                                <label className="btn btn-outline-primary" htmlFor="btn-check-outlined9"><i className="la la-sun" />18-00</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="f-search-result-schedule">
                                                        <p>Layover Time</p>
                                                        <div className="f-search-result-schedule-group">
                                                            <div className="f-search-result-schedule-list">
                                                                <input type="checkbox" className="btn-check" id="btn-check-outlined10" autoComplete="off" />
                                                                <label className="btn btn-outline-primary" htmlFor="btn-check-outlined10">0h - 5h</label>
                                                            </div>
                                                            <div className="f-search-result-schedule-list">
                                                                <input type="checkbox" className="btn-check" id="btn-check-outlined11" autoComplete="off" />
                                                                <label className="btn btn-outline-primary" htmlFor="btn-check-outlined11">5h - 10h</label>
                                                            </div>
                                                            <div className="f-search-result-schedule-list">
                                                                <input type="checkbox" className="btn-check" id="btn-check-outlined12" autoComplete="off" />
                                                                <label className="btn btn-outline-primary" htmlFor="btn-check-outlined12">10h - 15h</label>
                                                            </div>
                                                            <div className="f-search-result-schedule-list">
                                                                <input type="checkbox" className="btn-check" id="btn-check-outlined13" autoComplete="off" />
                                                                <label className="btn btn-outline-primary" htmlFor="btn-check-outlined13">15h+</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-12">
                                            <div className="f-search-result-widget">
                                                <h4>Airlines</h4>
                                                <div className="row y-gap-10 items-center justify-between">
                                                    <div className="col-auto">
                                                        <label className="d-flex items-center">
                                                            <div className="form-checkbox">
                                                                <input type="checkbox" />
                                                                <div className="form-checkbox__mark">
                                                                    <div className="form-checkbox__icon icon-check" />
                                                                </div>
                                                            </div>
                                                            <div className="text-15 ml-10" style={{ cursor: 'pointer' }}>
                                                                Delta
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row y-gap-10 items-center justify-between">
                                                    <div className="col-auto">
                                                        <label className="d-flex items-center">
                                                            <div className="form-checkbox">
                                                                <input type="checkbox" />
                                                                <div className="form-checkbox__mark">
                                                                    <div className="form-checkbox__icon icon-check" />
                                                                </div>
                                                            </div>
                                                            <div className="text-15 ml-10" style={{ cursor: 'pointer' }}>
                                                                Biman Bangladesh Airlines
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row y-gap-10 items-center justify-between">
                                                    <div className="col-auto">
                                                        <label className="d-flex items-center">
                                                            <div className="form-checkbox">
                                                                <input type="checkbox" />
                                                                <div className="form-checkbox__mark">
                                                                    <div className="form-checkbox__icon icon-check" />
                                                                </div>
                                                            </div>
                                                            <div className="text-15 ml-10" style={{ cursor: 'pointer' }}>
                                                                Delta
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row y-gap-10 items-center justify-between">
                                                    <div className="col-auto">
                                                        <label className="d-flex items-center">
                                                            <div className="form-checkbox">
                                                                <input type="checkbox" />
                                                                <div className="form-checkbox__mark">
                                                                    <div className="form-checkbox__icon icon-check" />
                                                                </div>
                                                            </div>
                                                            <div className="text-15 ml-10" style={{ cursor: 'pointer' }}>
                                                                NOVOAIR
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12">
                                            <div className="f-search-result-widget">
                                                <h4>Aircraft</h4>
                                                <div className="row y-gap-10 items-center justify-between">
                                                    <div className="col-auto">
                                                        <label className="d-flex items-center">
                                                            <div className="form-checkbox">
                                                                <input type="checkbox" />
                                                                <div className="form-checkbox__mark">
                                                                    <div className="form-checkbox__icon icon-check" />
                                                                </div>
                                                            </div>
                                                            <div className="text-15 ml-10" style={{ cursor: 'pointer' }}>
                                                                AT7
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row y-gap-10 items-center justify-between">
                                                    <div className="col-auto">
                                                        <label className="d-flex items-center">
                                                            <div className="form-checkbox">
                                                                <input type="checkbox" />
                                                                <div className="form-checkbox__mark">
                                                                    <div className="form-checkbox__icon icon-check" />
                                                                </div>
                                                            </div>
                                                            <div className="text-15 ml-10" style={{ cursor: 'pointer' }}>
                                                                ATR725
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row y-gap-10 items-center justify-between">
                                                    <div className="col-auto">
                                                        <label className="d-flex items-center">
                                                            <div className="form-checkbox">
                                                                <input type="checkbox" />
                                                                <div className="form-checkbox__mark">
                                                                    <div className="form-checkbox__icon icon-check" />
                                                                </div>
                                                            </div>
                                                            <div className="text-15 ml-10" style={{ cursor: 'pointer' }}>
                                                                DH8
                                                            </div>
                                                        </label>
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
            </section>
            {/* End Flight Filter AREA */}

            {/* Start Flight List AREA */}
            <section className="flight-list-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-xl-9 col-12">
                            <div className="flight-sorting">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="single-flight-sorting">
                                            <input type="radio" className="btn-check" name="options-base" id="btn-check-outlined14" autoComplete="off" />
                                            <label className="btn" htmlFor="btn-check-outlined14">Cheapest<span>
                                                Showing the cheapest flights in ascending order
                                            </span></label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="single-flight-sorting">
                                            <input type="radio" className="btn-check" name="options-base" id="btn-check-outlined15" autoComplete="off" />
                                            <label className="btn" htmlFor="btn-check-outlined15">Fastest<span>
                                                Showing the fastest flights in ascending order
                                            </span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {/* Single Airline - Flight 1: BS 325 */}
                                    <div className="flight-card">
                                        <div className="flight-airlines-wrapper">
                                            <div className="airline-info-container">
                                                <div className="flight-airlines-info">
                                                    <div className="airplane-info">
                                                        <div className="image-placeholder">
                                                            <img src="images/airline-img7.png" alt="#" />
                                                        </div>
                                                        <div className="airplane-info-text">
                                                            <span className="airplane-name">Bangladesh Biman</span>
                                                            {/* NEW: Carrier code */}
                                                            <span className="carrier-code">BS</span>
                                                        </div>
                                                    </div>
                                                    <div className="flight-time-widget">
                                                        <div className="start-time">
                                                            <span className="time-text">10:20 PM</span>
                                                            <span className="destination-text">DAC</span>
                                                            {/* NEW: Terminal info */}
                                                            <span className="terminal-info">Terminal 1</span>
                                                        </div>
                                                        <div className="stops-info">
                                                            <div className="stop-numbers">
                                                                <span>Non-stop</span>
                                                            </div>
                                                            <div className="arrow-pointer" />
                                                            <div className="flight-duration-text">
                                                                <span>3h 30m</span>
                                                                {/* NEW: Aircraft type */}
                                                                <span className="aircraft-type">738</span>
                                                            </div>
                                                        </div>
                                                        <div className="end-time">
                                                            <span className="time-text">03:50 AM</span>
                                                            <span className="destination-text">CAN</span>
                                                            {/* NEW: Terminal info */}
                                                            <span className="terminal-info">Terminal 1</span>
                                                            {/* NEW: Next day indicator */}
                                                            <span className="next-day">+1</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price-info-wrapper">
                                                <div className="price-texts">
                                                    {/* NEW: Source info */}
                                                    <span className="discount-info">GDS</span>
                                                    <div className="price-texts-group">
                                                        {/* NEW: Base fare */}
                                                        <span className="actual-price">BDT 26,131</span>
                                                        {/* NEW: Base fare breakdown */}
                                                        <span className="discount-price">Base: BDT 15,372</span>
                                                    </div>
                                                </div>
                                                <a href="flight-booking.html" className="selection-btn">
                                                    Select<i className="la la-arrow-right" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flight-details-wrapper accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading1">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                                        Flight Details
                                                    </button>
                                                </h2>
                                                <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                                    <div className="detail-accordion">
                                                        <div className="flight-detail-section">
                                                            <h4>Flight Details</h4>
                                                            <div className="flight-tab">
                                                                <ul className="flight-tab-wrapper">
                                                                    <li className="active">DAC - CAN</li>
                                                                </ul>
                                                            </div>
                                                            <div className="flight-airlines-info">
                                                                <div className="airplane-info-wrapper">
                                                                    <div className="airplane-info">
                                                                        <div className="image-placeholder">
                                                                            <img src="images/airline-img7.png" alt="#" />
                                                                        </div>
                                                                        <div className="airplane-info-text">
                                                                            <span className="airplane-name">Bangladesh Biman</span>
                                                                            <span className="airplane-model">
                                                                                BS 325 | 738
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="airplane-amenities">
                                                                        <span className="flight-type">(Economy)</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flight-time detail-time">
                                                                    <div className="start-time">
                                                                        <span className="time-text">10:20 PM</span>
                                                                        <span className="day-text">
                                                                            16th August 2025
                                                                        </span>
                                                                        <span className="destination-text">DAC - Hazrat Shahjalal Intl Airport</span>
                                                                        {/* NEW: Terminal detail */}
                                                                        <span className="terminal-detail">Terminal 1</span>
                                                                    </div>
                                                                    <div className="stops-info">
                                                                        <div className="arrow-pointer" />
                                                                        <div className="stop-names">
                                                                            <span className="duration-text">3h 30m</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="end-time">
                                                                        <span className="time-text">03:50 AM</span>
                                                                        <span className="day-text">
                                                                            17th August 2025
                                                                        </span>
                                                                        <span className="destination-text">CAN - Baiyun Airport</span>
                                                                        {/* NEW: Terminal detail */}
                                                                        <span className="terminal-detail">Terminal 1</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rules-section">
                                                            <div className="rules-section-tab">
                                                                {/* Tab Menu */}
                                                                <div className="tab-menu">
                                                                    <div className="list-group" id="list-tab" role="tablist">
                                                                        <a className="list-group-item active" data-bs-toggle="list" href="#flightTab1" role="tab">
                                                                            Baggage
                                                                        </a>
                                                                        <a className="list-group-item" data-bs-toggle="list" href="#flightTab2" role="tab">
                                                                            Fare
                                                                        </a>
                                                                        <a className="list-group-item" data-bs-toggle="list" href="#flightTab3" role="tab">
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
                                                                                                DAC - CAN
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
                                                                                                BDT 15,372
                                                                                            </span>
                                                                                            <span className="check-in-baggage">
                                                                                                BDT 11,881
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* NEW: Commission info */}
                                                                                    <div className="content-item">
                                                                                        <div className="content-item-text">
                                                                                            <span className="segment-loc">
                                                                                                Commission
                                                                                            </span>
                                                                                            <span className="baggage-weight">
                                                                                                BDT 1,122
                                                                                            </span>
                                                                                            <span className="check-in-baggage">
                                                                                                -
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
                                                                                    <h6>DAC-CAN</h6>
                                                                                </div>
                                                                                <div className="fare-rule-content">
                                                                                    <div className="item-header">
                                                                                        <span>Cancellation</span>
                                                                                    </div>
                                                                                    <div className="fee-content">
                                                                                        <span>
                                                                                            Cancellation Fee = Airline's Fee +
                                                                                            OTA PlatformFee </span><span>Refund Amount = Paid Amount -
                                                                                                Cancellation Fee</span>
                                                                                    </div>
                                                                                    <div className="item-header">
                                                                                        <span>Re-issue</span>
                                                                                    </div>
                                                                                    <div className="fee-content">
                                                                                        <span>
                                                                                            Re-issue Fee = Airline's Fee + Fare
                                                                                            Difference + OTA Platform Fee
                                                                                        </span>
                                                                                    </div>
                                                                                    <span className="cancellation-note">
                                                                                        *The airline's fee is indicative and
                                                                                        per person. Convenience fee is
                                                                                        non-refundable.
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="total-price">
                                                                <div className="price-wrapper">
                                                                    <div className="price-main">
                                                                        <span className="text-blue">Total</span>
                                                                        <span className="subtext-grey">
                                                                            (1 Traveler)
                                                                        </span>
                                                                    </div>
                                                                    <div className="price-main-right">
                                                                        <span>BDT 26,131</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Airline - Flight 2: TG 340 + TG 668 */}
                                    <div className="flight-card">
                                        <div className="flight-airlines-wrapper">
                                            <div className="airline-info-container">
                                                <div className="flight-airlines-info">
                                                    <div className="airplane-info">
                                                        <div className="image-placeholder">
                                                            <img src="images/airline-img7.png" alt="#" />
                                                        </div>
                                                        <div className="airplane-info-text">
                                                            <span className="airplane-name">Thai Airways</span>
                                                            {/* NEW: Carrier code */}
                                                            <span className="carrier-code">TG</span>
                                                        </div>
                                                    </div>
                                                    <div className="flight-time-widget">
                                                        <div className="start-time">
                                                            <span className="time-text">02:45 AM</span>
                                                            <span className="destination-text">DAC</span>
                                                            {/* NEW: Terminal info */}
                                                            <span className="terminal-info">Terminal 2</span>
                                                        </div>
                                                        <div className="stops-info">
                                                            <div className="stop-numbers">
                                                                <span>1 Stop</span>
                                                                {/* NEW: Layover info */}
                                                                <span className="layover-info">4h 25m BKK</span>
                                                            </div>
                                                            <div className="arrow-pointer" />
                                                            <div className="flight-duration-text">
                                                                <span>9h 45m</span>
                                                                {/* NEW: Aircraft types */}
                                                                <span className="aircraft-type">320+333</span>
                                                            </div>
                                                        </div>
                                                        <div className="end-time">
                                                            <span className="time-text">02:30 PM</span>
                                                            <span className="destination-text">CAN</span>
                                                            {/* NEW: Terminal info */}
                                                            <span className="terminal-info">Terminal 2</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price-info-wrapper">
                                                <div className="price-texts">
                                                    {/* NEW: Source info */}
                                                    <span className="discount-info">GDS</span>
                                                    <div className="price-texts-group">
                                                        <span className="actual-price">BDT 29,114</span>
                                                        {/* NEW: Base fare */}
                                                        <span className="discount-price">Base: BDT 16,836</span>
                                                    </div>
                                                </div>
                                                <a href="flight-booking.html" className="selection-btn">
                                                    Select<i className="la la-arrow-right" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flight-details-wrapper accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading2">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                        Flight Details
                                                    </button>
                                                </h2>
                                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                                    <div className="detail-accordion">
                                                        <div className="flight-detail-section">
                                                            <h4>Flight Details</h4>
                                                            <div className="flight-tab">
                                                                <ul className="flight-tab-wrapper">
                                                                    <li className="active">DAC - BKK - CAN</li>
                                                                </ul>
                                                            </div>
                                                            {/* NEW: First Segment */}
                                                            <div className="flight-airlines-info">
                                                                <div className="airplane-info-wrapper">
                                                                    <div className="airplane-info">
                                                                        <div className="image-placeholder">
                                                                            <img src="images/airline-img7.png" alt="#" />
                                                                        </div>
                                                                        <div className="airplane-info-text">
                                                                            <span className="airplane-name">Thai Airways</span>
                                                                            <span className="airplane-model">
                                                                                TG 340 | 320
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="airplane-amenities">
                                                                        <span className="flight-type">(Economy)</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flight-time detail-time">
                                                                    <div className="start-time">
                                                                        <span className="time-text">02:45 AM</span>
                                                                        <span className="day-text">
                                                                            16th August 2025
                                                                        </span>
                                                                        <span className="destination-text">DAC - Hazrat Shahjalal Intl Airport</span>
                                                                        <span className="terminal-detail">Terminal 2</span>
                                                                    </div>
                                                                    <div className="stops-info">
                                                                        <div className="arrow-pointer" />
                                                                        <div className="stop-names">
                                                                            <span className="duration-text">2h 30m</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="end-time">
                                                                        <span className="time-text">06:15 AM</span>
                                                                        <span className="day-text">
                                                                            16th August 2025
                                                                        </span>
                                                                        <span className="destination-text">BKK - Suvarnabhumi Intl Arpt</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* NEW: Second Segment */}
                                                            <div className="flight-airlines-info">
                                                                <div className="airplane-info-wrapper">
                                                                    <div className="airplane-info">
                                                                        <div className="image-placeholder">
                                                                            <img src="images/airline-img7.png" alt="#" />
                                                                        </div>
                                                                        <div className="airplane-info-text">
                                                                            <span className="airplane-name">Thai Airways</span>
                                                                            <span className="airplane-model">
                                                                                TG 668 | 333
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="airplane-amenities">
                                                                        <span className="flight-type">(Economy)</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flight-time detail-time">
                                                                    <div className="start-time">
                                                                        <span className="time-text">10:40 AM</span>
                                                                        <span className="day-text">
                                                                            16th August 2025
                                                                        </span>
                                                                        <span className="destination-text">BKK - Suvarnabhumi Intl Arpt</span>
                                                                    </div>
                                                                    <div className="stops-info">
                                                                        <div className="arrow-pointer" />
                                                                        <div className="stop-names">
                                                                            <span className="duration-text">2h 50m</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="end-time">
                                                                        <span className="time-text">02:30 PM</span>
                                                                        <span className="day-text">
                                                                            16th August 2025
                                                                        </span>
                                                                        <span className="destination-text">CAN - Baiyun Airport</span>
                                                                        <span className="terminal-detail">Terminal 2</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rules-section">
                                                            <div className="rules-section-tab">
                                                                {/* Tab Menu */}
                                                                <div className="tab-menu">
                                                                    <div className="list-group" id="list-tab" role="tablist">
                                                                        <a className="list-group-item active" data-bs-toggle="list" href="#flightTab1" role="tab">
                                                                            Baggage
                                                                        </a>
                                                                        <a className="list-group-item" data-bs-toggle="list" href="#flightTab2" role="tab">
                                                                            Fare
                                                                        </a>
                                                                        <a className="list-group-item" data-bs-toggle="list" href="#flightTab3" role="tab">
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
                                                                                                DAC - BKK
                                                                                            </span>
                                                                                            <span className="baggage-weight">
                                                                                                7 Kg
                                                                                            </span>
                                                                                            <span className="check-in-baggage">
                                                                                                20 Kg
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="content-item">
                                                                                        <div className="content-item-text">
                                                                                            <span className="segment-loc">
                                                                                                BKK - CAN
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
                                                                                                BDT 16,836
                                                                                            </span>
                                                                                            <span className="check-in-baggage">
                                                                                                BDT 13,288
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* NEW: Commission info */}
                                                                                    <div className="content-item">
                                                                                        <div className="content-item-text">
                                                                                            <span className="segment-loc">
                                                                                                Commission
                                                                                            </span>
                                                                                            <span className="baggage-weight">
                                                                                                BDT 1,010
                                                                                            </span>
                                                                                            <span className="check-in-baggage">
                                                                                                -
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
                                                                                    <h6>DAC-CAN</h6>
                                                                                </div>
                                                                                <div className="fare-rule-content">
                                                                                    <div className="item-header">
                                                                                        <span>Cancellation</span>
                                                                                    </div>
                                                                                    <div className="fee-content">
                                                                                        <span>
                                                                                            Cancellation Fee = Airline's Fee +
                                                                                            OTA PlatformFee </span><span>Refund Amount = Paid Amount -
                                                                                                Cancellation Fee</span>
                                                                                    </div>
                                                                                    <div className="item-header">
                                                                                        <span>Re-issue</span>
                                                                                    </div>
                                                                                    <div className="fee-content">
                                                                                        <span>
                                                                                            Re-issue Fee = Airline's Fee + Fare
                                                                                            Difference + OTA Platform Fee
                                                                                        </span>
                                                                                    </div>
                                                                                    <span className="cancellation-note">
                                                                                        *The airline's fee is indicative and
                                                                                        per person. Convenience fee is
                                                                                        non-refundable.
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="total-price">
                                                                <div className="price-wrapper">
                                                                    <div className="price-main">
                                                                        <span className="text-blue">Total</span>
                                                                        <span className="subtext-grey">
                                                                            (1 Traveler)
                                                                        </span>
                                                                    </div>
                                                                    <div className="price-main-right">
                                                                        <span>BDT 29,114</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Airline - Flight 3: CZ 392 */}
                                    <div className="flight-card">
                                        <div className="flight-airlines-wrapper">
                                            <div className="airline-info-container">
                                                <div className="flight-airlines-info">
                                                    <div className="airplane-info">
                                                        <div className="image-placeholder">
                                                            <img src="images/airline-img7.png" alt="#" />
                                                        </div>
                                                        <div className="airplane-info-text">
                                                            <span className="airplane-name">China Southern</span>
                                                            {/* NEW: Carrier code */}
                                                            <span className="carrier-code">CZ</span>
                                                        </div>
                                                    </div>
                                                    <div className="flight-time-widget">
                                                        <div className="start-time">
                                                            <span className="time-text">11:15 PM</span>
                                                            <span className="destination-text">DAC</span>
                                                            {/* NEW: Terminal info */}
                                                            <span className="terminal-info">Terminal 1</span>
                                                        </div>
                                                        <div className="stops-info">
                                                            <div className="stop-numbers">
                                                                <span>Non-stop</span>
                                                            </div>
                                                            <div className="arrow-pointer" />
                                                            <div className="flight-duration-text">
                                                                <span>3h 45m</span>
                                                                {/* NEW: Aircraft type */}
                                                                <span className="aircraft-type">32Q</span>
                                                            </div>
                                                        </div>
                                                        <div className="end-time">
                                                            <span className="time-text">05:00 AM</span>
                                                            <span className="destination-text">CAN</span>
                                                            {/* NEW: Terminal info */}
                                                            <span className="terminal-info">Terminal 2</span>
                                                            {/* NEW: Next day indicator */}
                                                            <span className="next-day">+1</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price-info-wrapper">
                                                <div className="price-texts">
                                                    {/* NEW: Source info */}
                                                    <span className="discount-info">GDS</span>
                                                    <div className="price-texts-group">
                                                        <span className="actual-price">BDT 30,681</span>
                                                        {/* NEW: Base fare */}
                                                        <span className="discount-price">Base: BDT 12,150</span>
                                                    </div>
                                                </div>
                                                <a href="flight-booking.html" className="selection-btn">
                                                    Select<i className="la la-arrow-right" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flight-details-wrapper accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading3">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                        Flight Details
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                                    <div className="detail-accordion">
                                                        <div className="flight-detail-section">
                                                            <h4>Flight Details</h4>
                                                            <div className="flight-tab">
                                                                <ul className="flight-tab-wrapper">
                                                                    <li className="active">DAC - CAN</li>
                                                                </ul>
                                                            </div>
                                                            <div className="flight-airlines-info">
                                                                <div className="airplane-info-wrapper">
                                                                    <div className="airplane-info">
                                                                        <div className="image-placeholder">
                                                                            <img src="images/airline-img7.png" alt="#" />
                                                                        </div>
                                                                        <div className="airplane-info-text">
                                                                            <span className="airplane-name">China Southern</span>
                                                                            <span className="airplane-model">
                                                                                CZ 392 | 32Q
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="airplane-amenities">
                                                                        <span className="flight-type">(Economy)</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flight-time detail-time">
                                                                    <div className="start-time">
                                                                        <span className="time-text">11:15 PM</span>
                                                                        <span className="day-text">
                                                                            16th August 2025
                                                                        </span>
                                                                        <span className="destination-text">DAC - Hazrat Shahjalal Intl Airport</span>
                                                                        <span className="terminal-detail">Terminal 1</span>
                                                                    </div>
                                                                    <div className="stops-info">
                                                                        <div className="arrow-pointer" />
                                                                        <div className="stop-names">
                                                                            <span className="duration-text">3h 45m</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="end-time">
                                                                        <span className="time-text">05:00 AM</span>
                                                                        <span className="day-text">
                                                                            17th August 2025
                                                                        </span>
                                                                        <span className="destination-text">CAN - Baiyun Airport</span>
                                                                        <span className="terminal-detail">Terminal 2</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rules-section">
                                                            <div className="rules-section-tab">
                                                                {/* Tab Menu */}
                                                                <div className="tab-menu">
                                                                    <div className="list-group" id="list-tab" role="tablist">
                                                                        <a className="list-group-item active" data-bs-toggle="list" href="#flightTab1" role="tab">
                                                                            Baggage
                                                                        </a>
                                                                        <a className="list-group-item" data-bs-toggle="list" href="#flightTab2" role="tab">
                                                                            Fare
                                                                        </a>
                                                                        <a className="list-group-item" data-bs-toggle="list" href="#flightTab3" role="tab">
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
                                                                                                DAC - CAN
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
                                                                                                BDT 12,150
                                                                                            </span>
                                                                                            <span className="check-in-baggage">
                                                                                                BDT 19,139
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* NEW: Commission info */}
                                                                                    <div className="content-item">
                                                                                        <div className="content-item-text">
                                                                                            <span className="segment-loc">
                                                                                                Commission
                                                                                            </span>
                                                                                            <span className="baggage-weight">
                                                                                                BDT 608
                                                                                            </span>
                                                                                            <span className="check-in-baggage">
                                                                                                -
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
                                                                                    <h6>DAC-CAN</h6>
                                                                                </div>
                                                                                <div className="fare-rule-content">
                                                                                    <div className="item-header">
                                                                                        <span>Cancellation</span>
                                                                                    </div>
                                                                                    <div className="fee-content">
                                                                                        <span>
                                                                                            Cancellation Fee = Airline's Fee +
                                                                                            OTA PlatformFee </span><span>Refund Amount = Paid Amount -
                                                                                                Cancellation Fee</span>
                                                                                    </div>
                                                                                    <div className="item-header">
                                                                                        <span>Re-issue</span>
                                                                                    </div>
                                                                                    <div className="fee-content">
                                                                                        <span>
                                                                                            Re-issue Fee = Airline's Fee + Fare
                                                                                            Difference + OTA Platform Fee
                                                                                        </span>
                                                                                    </div>
                                                                                    <span className="cancellation-note">
                                                                                        *The airline's fee is indicative and
                                                                                        per person. Convenience fee is
                                                                                        non-refundable.
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="total-price">
                                                                <div className="price-wrapper">
                                                                    <div className="price-main">
                                                                        <span className="text-blue">Total</span>
                                                                        <span className="subtext-grey">
                                                                            (1 Traveler)
                                                                        </span>
                                                                    </div>
                                                                    <div className="price-main-right">
                                                                        <span>BDT 30,681</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Airline - Flight 4: TG Long Layover */}
                                    <div className="flight-card">
                                        <div className="flight-airlines-wrapper">
                                            <div className="airline-info-container">
                                                <div className="flight-airlines-info">
                                                    <div className="airplane-info">
                                                        <div className="image-placeholder">
                                                            <img src="images/airline-img7.png" alt="#" />
                                                        </div>
                                                        <div className="airplane-info-text">
                                                            <span className="airplane-name">Thai Airways</span>
                                                            {/* NEW: Carrier code */}
                                                            <span className="carrier-code">TG</span>
                                                        </div>
                                                    </div>
                                                    <div className="flight-time-widget">
                                                        <div className="start-time">
                                                            <span className="time-text">01:35 PM</span>
                                                            <span className="destination-text">DAC</span>
                                                            {/* NEW: Terminal info */}
                                                            <span className="terminal-info">Terminal 2</span>
                                                        </div>
                                                        <div className="stops-info">
                                                            <div className="stop-numbers">
                                                                <span>1 Stop</span>
                                                                {/* NEW: Long layover warning */}
                                                                <span className="layover-info long-layover">17h 40m BKK</span>
                                                            </div>
                                                            <div className="arrow-pointer" />
                                                            <div className="flight-duration-text">
                                                                <span>22h 55m</span>
                                                                {/* NEW: Aircraft types */}
                                                                <span className="aircraft-type">333+333</span>
                                                            </div>
                                                        </div>
                                                        <div className="end-time">
                                                            <span className="time-text">02:30 PM</span>
                                                            <span className="destination-text">CAN</span>
                                                            {/* NEW: Terminal info */}
                                                            <span className="terminal-info">Terminal 2</span>
                                                            {/* NEW: Next day indicator */}
                                                            <span className="next-day">+1</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price-info-wrapper">
                                                <div className="price-texts">
                                                    {/* NEW: Source info */}
                                                    <span className="discount-info">GDS</span>
                                                    <div className="price-texts-group">
                                                        <span className="actual-price">BDT 31,967</span>
                                                        {/* NEW: Base fare */}
                                                        <span className="discount-price">Base: BDT 16,836</span>
                                                    </div>
                                                </div>
                                                <a href="flight-booking.html" className="selection-btn">
                                                    Select<i className="la la-arrow-right" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Airline - Flight 5: CZ 5016 */}
                                    <div className="flight-card">
                                        <div className="flight-airlines-wrapper">
                                            <div className="airline-info-container">
                                                <div className="flight-airlines-info">
                                                    <div className="airplane-info">
                                                        <div className="image-placeholder">
                                                            <img src="images/airline-img7.png" alt="#" />
                                                        </div>
                                                        <div className="airplane-info-text">
                                                            <span className="airplane-name">China Southern</span>
                                                            {/* NEW: Carrier code */}
                                                            <span className="carrier-code">CZ</span>
                                                        </div>
                                                    </div>
                                                    <div className="flight-time-widget">
                                                        <div className="start-time">
                                                            <span className="time-text">01:15 PM</span>
                                                            <span className="destination-text">DAC</span>
                                                            {/* NEW: Terminal info */}
                                                            <span className="terminal-info">Terminal 1</span>
                                                        </div>
                                                        <div className="stops-info">
                                                            <div className="stop-numbers">
                                                                <span>Non-stop</span>
                                                            </div>
                                                            <div className="arrow-pointer" />
                                                            <div className="flight-duration-text">
                                                                <span>3h 45m</span>
                                                                {/* NEW: Aircraft type */}
                                                                <span className="aircraft-type">32Q</span>
                                                            </div>
                                                        </div>
                                                        <div className="end-time">
                                                            <span className="time-text">07:00 PM</span>
                                                            <span className="destination-text">CAN</span>
                                                            {/* NEW: Terminal info */}
                                                            <span className="terminal-info">Terminal 2</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price-info-wrapper">
                                                <div className="price-texts">
                                                    {/* NEW: Source info */}
                                                    <span className="discount-info">GDS</span>
                                                    <div className="price-texts-group">
                                                        <span className="actual-price">BDT 32,420</span>
                                                        {/* NEW: Base fare */}
                                                        <span className="discount-price">Base: BDT 13,980</span>
                                                    </div>
                                                </div>
                                                <a href="flight-booking.html" className="selection-btn">
                                                    Select<i className="la la-arrow-right" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 col-md-6 col-12">
                            <div className="flight-list-sidebar">
                                <div className="flight-timer">
                                    <div className="timer-container">
                                        <div className="timer-text">
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
                                <div className="support-card-wrapper">
                                    <div className="support-header-text">
                                        <span>Need Help?</span>
                                    </div>
                                    <div className="support-card-body">
                                        <div className="support-content">
                                            <i className="la la-headphones" />
                                            <a href="tel: +88 09678 332211"> +88 09678 332211 </a>
                                        </div>
                                        <div className="support-content">
                                            <i className="la la-facebook" />
                                            <a href="#">fb/TravelVela</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Flight List AREA */}

            <div class="section-block"></div>

            {/* START INFO AREA */}
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
            {/* END INFO AREA */}

        </>
    );
};

export default FlightSearchResultComponent;