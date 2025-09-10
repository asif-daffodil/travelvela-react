import React, { useEffect } from 'react';

const HotelSearchResultComponent = () => {
    useEffect(() => {
        // Initialize date range picker and Select2
        const script = document.createElement('script');
        script.innerHTML = `
            $(function() {
                if (typeof $.fn.daterangepicker !== 'undefined') {
                    $('.date-range').daterangepicker({
                        opens: 'left',
                        locale: {
                            format: 'YYYY-MM-DD'
                        }
                    });
                }
                
                // Initialize Select2 for remaining dropdowns
                if (typeof $.fn.select2 !== 'undefined') {
                    $('.select-contain-select').select2({
                        minimumResultsForSearch: -1,
                        width: '100%'
                    });
                }
                
                // Add hover styles for Room Type dropdown
                const style = document.createElement('style');
                style.innerHTML = \`
                    .dropdown-link {
                        color: #333 !important;
                        text-decoration: none !important;
                        padding: 8px 16px !important;
                        display: block !important;
                        transition: all 0.3s ease !important;
                    }
                    .dropdown-link:hover {
                        color: #007bff !important;
                        background-color: transparent !important;
                    }
                    .dropdown-item:hover {
                        background-color: transparent !important;
                    }
                \`;
                document.head.appendChild(style);
                
                // Handle Room Type dropdown selection
                $('.dropdown-link').off('click').on('click', function(e) {
                    e.preventDefault();
                    const selectedText = $(this).text();
                    const selectedValue = $(this).data('value');
                    
                    // Update the dropdown button text
                    $(this).closest('.dropdown').find('.room-type-selected').text(selectedText);
                    
                    // Close the dropdown
                    $(this).closest('.dropdown').removeClass('show');
                    $(this).closest('.dropdown-menu').removeClass('show');
                });
            });
        `;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            {/* start breadcrumbs */}
            <section className="breadcrumb-area bread-bg-7">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="search-result-content">
                                    <div className="section-heading">
                                        <h2 className="sec__title text-white">Hotel Search Result</h2>
                                    </div>
                                    <div className="search-fields-container margin-top-30px">
                                        <div className="contact-form-action">
                                            <form action="#" className="row">
                                                <div className="col-lg-3 col-sm-6 pe-0">
                                                    <div className="input-box">
                                                        <label className="label-text">Where would like to go?</label>
                                                        <div className="form-group">
                                                            <span className="la la-map-marker form-icon" />
                                                            <input className="form-control" type="text" placeholder="Destination" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end col-lg-3 */}
                                                <div className="col-lg-3 col-sm-6 pe-0">
                                                    <div className="input-box">
                                                        <label className="label-text">Check in - Check out</label>
                                                        <div className="form-group">
                                                            <span className="la la-calendar form-icon" />
                                                            <input className="date-range form-control" type="text" name="daterange" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end col-lg-3 */}
                                                <div className="col-lg-3 col-sm-6 pe-0">
                                                    <div className="input-box">
                                                        <label className="label-text">Room Type</label>
                                                        <div className="form-group">
                                                            <div className="dropdown dropdown-contain gty-container">
                                                                <a className="dropdown-toggle dropdown-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                                                    <span className="room-type-selected">Select Type</span>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-wrap">
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="0">Select Type</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="1">Single</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="2">Double</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="3">Triple</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="4">Quad</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="5">Queen</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="6">King</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="7">Twin</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="8">Double-double</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="9">Studio</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="10">Suite</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="11">Mini Suite</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="12">President Suite</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="13">Apartments</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="14">Connecting rooms</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="15">Murphy Room</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="16">Accessible Room</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="17">Cabana</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="18">Adjoining rooms</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="19">Adjacent rooms</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="20">Villa</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="21">Executive Floor</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="22">Smoking room</a>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <a href="#" className="dropdown-link" data-value="23">Non-Smoking Room</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end dropdown */}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end col-lg-3 */}
                                                <div className="col-lg-3 col-sm-6">
                                                    <div className="input-box">
                                                        <label className="label-text">Guests and Rooms</label>
                                                        <div className="form-group">
                                                            <div className="dropdown dropdown-contain gty-container">
                                                                <a className="dropdown-toggle dropdown-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                                                    <span className="adult" data-text="Adult" data-text-multi="Adults">0 Adult</span>
                                                                    -
                                                                    <span className="children" data-text="Child" data-text-multi="Children">0 Child</span>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-wrap">
                                                                    <div className="dropdown-item">
                                                                        <div className="qty-box d-flex align-items-center justify-content-between">
                                                                            <label>Rooms</label>
                                                                            <div className="qtyBtn d-flex align-items-center">
                                                                                <div className="qtyDec">
                                                                                    <i className="la la-minus" />
                                                                                </div>
                                                                                <input type="text" name="room_number" defaultValue={0} className="qty-input" />
                                                                                <div className="qtyInc">
                                                                                    <i className="la la-plus" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <div className="qty-box d-flex align-items-center justify-content-between">
                                                                            <label>Adults</label>
                                                                            <div className="qtyBtn d-flex align-items-center">
                                                                                <div className="qtyDec">
                                                                                    <i className="la la-minus" />
                                                                                </div>
                                                                                <input type="text" name="adult_number" defaultValue={0} />
                                                                                <div className="qtyInc">
                                                                                    <i className="la la-plus" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown-item">
                                                                        <div className="qty-box d-flex align-items-center justify-content-between">
                                                                            <label>Children</label>
                                                                            <div className="qtyBtn d-flex align-items-center">
                                                                                <div className="qtyDec">
                                                                                    <i className="la la-minus" />
                                                                                </div>
                                                                                <input type="text" name="child_number" defaultValue={0} />
                                                                                <div className="qtyInc">
                                                                                    <i className="la la-plus" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end dropdown */}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end col-lg-3 */}
                                            </form>
                                        </div>
                                        {/* end contact-form-action */}
                                        <div className="advanced-wrap">
                                            <a className="btn collapse-btn theme-btn-hover-gray font-size-15" data-bs-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                                                More option <i className="la la-angle-down ms-1" />
                                            </a>
                                            <div className="pt-3 collapse" id="collapseTwo">
                                                <div className="slider-range-wrap">
                                                    <div className="price-slider-amount padding-bottom-20px">
                                                        <label htmlFor="amount" className="filter__label">Price:</label>
                                                        <input type="text" id="amount" className="amounts" readOnly />
                                                    </div>
                                                    {/* end price-slider-amount */}
                                                    <div id="slider-range" />
                                                    {/* end slider-range */}
                                                </div>
                                                {/* end slider-range-wrap */}
                                                <div className="checkbox-wrap padding-top-30px">
                                                    <h3 className="title font-size-15 pb-3">
                                                        Hotel Facilities
                                                    </h3>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c1" />
                                                        <label htmlFor="c1">Air Conditioning</label>
                                                    </div>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c2" />
                                                        <label htmlFor="c2">Airport Transport</label>
                                                    </div>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c3" />
                                                        <label htmlFor="c3">Fitness Center</label>
                                                    </div>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c4" />
                                                        <label htmlFor="c4">Flat Tv</label>
                                                    </div>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c5" />
                                                        <label htmlFor="c5">Heater</label>
                                                    </div>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c6" />
                                                        <label htmlFor="c6">Internet - wi-fi</label>
                                                    </div>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c7" />
                                                        <label htmlFor="c7">Parking</label>
                                                    </div>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c8" />
                                                        <label htmlFor="c8">Pool</label>
                                                    </div>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c9" />
                                                        <label htmlFor="c9">Restaurant</label>
                                                    </div>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c10" />
                                                        <label htmlFor="c10">Smoking Room</label>
                                                    </div>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c11" />
                                                        <label htmlFor="c11">Spa &amp; Sauna</label>
                                                    </div>
                                                    <div className="custom-checkbox d-inline-block me-4">
                                                        <input type="checkbox" className="form-check-input" id="c12" />
                                                        <label htmlFor="c12">Washer &amp; Dryer</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hero-filter-search-btn">
                                            <a href="flight-search-result.html" className="theme-btn w-100 text-center margin-top-20px">Modify Search</a>
                                        </div>
                                    </div>
                                    {/* end search-fields-container */}
                                </div>
                                {/* end search-result-content */}
                            </div>
                            {/* end col-lg-12 */}
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
            {/* end breadcrumbs */}

            {/* start card area */}
            <section className="card-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="filter-wrap margin-bottom-30px">
                                <div className="filter-top d-flex align-items-center justify-content-between pb-4">
                                    <div>
                                        <h3 className="title font-size-24">5 Hotels found</h3>
                                        <p className="font-size-14">
                                            <span className="me-1 pt-1">Book with confidence:</span>No hotel
                                            booking fees
                                        </p>
                                    </div>
                                </div>
                                {/* end filter-top */}
                                <div className="filter-bar d-flex align-items-center justify-content-between">
                                    <div className="filter-bar-filter d-flex flex-wrap align-items-center">
                                        <div className="filter-option">
                                            <h3 className="title font-size-16">Filter by:</h3>
                                        </div>
                                        <div className="filter-option">
                                            <div className="dropdown dropdown-contain">
                                                <a className="dropdown-toggle dropdown-btn dropdown--btn" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    Filter Price
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-wrap">
                                                    <div className="dropdown-item">
                                                        <div className="slider-range-wrap">
                                                            <div className="price-slider-amount padding-bottom-20px">
                                                                <label htmlFor="amount" className="filter__label">Price:</label>
                                                                <input type="text" id="amount" className="amounts" />
                                                            </div>
                                                            {/* end price-slider-amount */}
                                                            <div id="slider-range" />
                                                            {/* end slider-range */}
                                                        </div>
                                                        {/* end slider-range-wrap */}
                                                        <div className="btn-box pt-4">
                                                            <button className="theme-btn theme-btn-small theme-btn-transparent" type="button">
                                                                Apply
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* end dropdown-item */}
                                                </div>
                                                {/* end dropdown-menu */}
                                            </div>
                                            {/* end dropdown */}
                                        </div>
                                        <div className="filter-option">
                                            <div className="dropdown dropdown-contain">
                                                <a className="dropdown-toggle dropdown-btn dropdown--btn" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    Review Score
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-wrap">
                                                    <div className="dropdown-item">
                                                        <div className="checkbox-wrap">
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="r1" />
                                                                <label htmlFor="r1">
                                                                    <span className="ratings d-flex align-items-center">
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star" />
                                                                        <span className="color-text-3 font-size-13 ms-1">(55.590)</span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="r2" />
                                                                <label htmlFor="r2">
                                                                    <span className="ratings d-flex align-items-center">
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star-o" />
                                                                        <span className="color-text-3 font-size-13 ms-1">(40.590)</span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="r3" />
                                                                <label htmlFor="r3">
                                                                    <span className="ratings d-flex align-items-center">
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star-o" />
                                                                        <i className="la la-star-o" />
                                                                        <span className="color-text-3 font-size-13 ms-1">(23.590)</span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="r4" />
                                                                <label htmlFor="r4">
                                                                    <span className="ratings d-flex align-items-center">
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star-o" />
                                                                        <i className="la la-star-o" />
                                                                        <i className="la la-star-o" />
                                                                        <span className="color-text-3 font-size-13 ms-1">(12.590)</span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="r5" />
                                                                <label htmlFor="r5">
                                                                    <span className="ratings d-flex align-items-center">
                                                                        <i className="la la-star" />
                                                                        <i className="la la-star-o" />
                                                                        <i className="la la-star-o" />
                                                                        <i className="la la-star-o" />
                                                                        <i className="la la-star-o" />
                                                                        <span className="color-text-3 font-size-13 ms-1">(590)</span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end dropdown-item */}
                                                </div>
                                                {/* end dropdown-menu */}
                                            </div>
                                            {/* end dropdown */}
                                        </div>
                                        <div className="filter-option">
                                            <div className="dropdown dropdown-contain">
                                                <a className="dropdown-toggle dropdown-btn dropdown--btn" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    Facilities
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-wrap">
                                                    <div className="dropdown-item">
                                                        <div className="checkbox-wrap">
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="catChb1" />
                                                                <label htmlFor="catChb1">Pet Allowed</label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="catChb2" />
                                                                <label htmlFor="catChb2">Groups Allowed</label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="catChb3" />
                                                                <label htmlFor="catChb3">Tour Guides</label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="catChb4" />
                                                                <label htmlFor="catChb4">Access for disabled</label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="catChb5" />
                                                                <label htmlFor="catChb5">Room Service</label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="catChb6" />
                                                                <label htmlFor="catChb6">Parking</label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="catChb7" />
                                                                <label htmlFor="catChb7">Restaurant</label>
                                                            </div>
                                                            <div className="custom-checkbox">
                                                                <input type="checkbox" className="form-check-input" id="catChb8" />
                                                                <label htmlFor="catChb8">Pet friendly</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end dropdown-item */}
                                                </div>
                                                {/* end dropdown-menu */}
                                            </div>
                                            {/* end dropdown */}
                                        </div>
                                    </div>
                                    {/* end filter-bar-filter */}
                                    <div className="select-contain select2-container-wrapper">
                                        <select className="select-contain-select">
                                            <option value={1}>Short by default</option>
                                            <option value={2}>Popular Hotel</option>
                                            <option value={3}>Price: low to high</option>
                                            <option value={4}>Price: high to low</option>
                                            <option value={5}>A to Z</option>
                                        </select>
                                    </div>
                                    {/* end select-contain */}
                                </div>
                                {/* end filter-bar */}
                            </div>
                            {/* end filter-wrap */}
                        </div>
                        {/* end col-lg-12 */}
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="sidebar mt-0">
                                <div className="sidebar-widget">
                                    <h3 className="title stroke-shape">Search Hotels</h3>
                                    <div className="sidebar-widget-item">
                                        <div className="contact-form-action">
                                            <form action="#">
                                                <div className="input-box">
                                                    <label className="label-text">Destination / hotel name</label>
                                                    <div className="form-group">
                                                        <span className="la la-map-marker form-icon" />
                                                        <input className="form-control" type="text" name="text" placeholder="Destination, hotel name" defaultValue="Dubai, United Arab Emirates" />
                                                    </div>
                                                </div>
                                                <div className="input-box">
                                                    <label className="label-text">Check in - Check out</label>
                                                    <div className="form-group">
                                                        <span className="la la-calendar form-icon" />
                                                        <input className="date-range form-control" type="text" name="daterange" defaultValue="2025-08-02 - 2025-08-04" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* end sidebar-widget-item */}
                                    <div className="sidebar-widget-item">
                                        <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                                            <label className="font-size-16">Rooms</label>
                                            <div className="qtyBtn d-flex align-items-center">
                                                <div className="qtyDec">
                                                    <i className="la la-minus" />
                                                </div>
                                                <input type="text" name="qtyInput" defaultValue={1} />
                                                <div className="qtyInc">
                                                    <i className="la la-plus" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* end qty-box */}
                                        <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                                            <label className="font-size-16">Adults <span>18+</span></label>
                                            <div className="qtyBtn d-flex align-items-center">
                                                <div className="qtyDec">
                                                    <i className="la la-minus" />
                                                </div>
                                                <input type="text" name="qtyInput" defaultValue={2} />
                                                <div className="qtyInc">
                                                    <i className="la la-plus" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* end qty-box */}
                                        <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                                            <label className="font-size-16">Children <span>2-12 years old</span></label>
                                            <div className="qtyBtn d-flex align-items-center">
                                                <div className="qtyDec">
                                                    <i className="la la-minus" />
                                                </div>
                                                <input type="text" name="qtyInput" defaultValue={2} />
                                                <div className="qtyInc">
                                                    <i className="la la-plus" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* end qty-box */}
                                    </div>
                                    {/* end sidebar-widget-item */}
                                    <div className="btn-box pt-2">
                                        <a href="hotel-search-result.html" className="theme-btn">Search Now</a>
                                    </div>
                                </div>
                                {/* end sidebar-widget */}
                                <div className="sidebar-widget">
                                    <h3 className="title stroke-shape">Filter by Price</h3>
                                    <div className="sidebar-price-range">
                                        <div className="main-search-input-item">
                                            <div className="price-slider-amount padding-bottom-20px">
                                                <label htmlFor="amount2" className="filter__label">Price:</label>
                                                <input type="text" id="amount2" className="amounts" />
                                            </div>
                                            {/* end price-slider-amount */}
                                            <div id="slider-range2" />
                                            {/* end slider-range */}
                                        </div>
                                        {/* end main-search-input-item */}
                                        <div className="btn-box pt-4">
                                            <button className="theme-btn theme-btn-small theme-btn-transparent" type="button">
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* end sidebar-widget */}
                                <div className="sidebar-widget">
                                    <h3 className="title stroke-shape">Review Score</h3>
                                    <div className="sidebar-category">
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="r6" />
                                            <label htmlFor="r6">Excellent</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="r7" />
                                            <label htmlFor="r7">Very Good</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="r8" />
                                            <label htmlFor="r8">Average</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="r9" />
                                            <label htmlFor="r9">Poor</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="r10" />
                                            <label htmlFor="r10">Terrible</label>
                                        </div>
                                    </div>
                                </div>
                                {/* end sidebar-widget */}
                                <div className="sidebar-widget">
                                    <h3 className="title stroke-shape">Filter by Rating</h3>
                                    <div className="sidebar-review">
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="s1" />
                                            <label htmlFor="s1">
                                                <span className="ratings d-flex align-items-center">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <span className="color-text-3 font-size-13 ms-1">(55.590)</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="s2" />
                                            <label htmlFor="s2">
                                                <span className="ratings d-flex align-items-center">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star-o" />
                                                    <span className="color-text-3 font-size-13 ms-1">(40.590)</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="s3" />
                                            <label htmlFor="s3">
                                                <span className="ratings d-flex align-items-center">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star-o" />
                                                    <i className="la la-star-o" />
                                                    <span className="color-text-3 font-size-13 ms-1">(23.590)</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="s4" />
                                            <label htmlFor="s4">
                                                <span className="ratings d-flex align-items-center">
                                                    <i className="la la-star" />
                                                    <i className="la la-star" />
                                                    <i className="la la-star-o" />
                                                    <i className="la la-star-o" />
                                                    <i className="la la-star-o" />
                                                    <span className="color-text-3 font-size-13 ms-1">(12.590)</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="custom-checkbox mb-0">
                                            <input type="checkbox" className="form-check-input" id="s5" />
                                            <label htmlFor="s5">
                                                <span className="ratings d-flex align-items-center">
                                                    <i className="la la-star" />
                                                    <i className="la la-star-o" />
                                                    <i className="la la-star-o" />
                                                    <i className="la la-star-o" />
                                                    <i className="la la-star-o" />
                                                    <span className="color-text-3 font-size-13 ms-1">(590)</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* end sidebar-widget */}
                                <div className="sidebar-widget">
                                    <h3 className="title stroke-shape">Facilities</h3>
                                    <div className="sidebar-category">
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="f1" />
                                            <label htmlFor="f1">Air Conditioning</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="chb12" />
                                            <label htmlFor="chb12">Airport Transport</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="f2" />
                                            <label htmlFor="f2">Fitness Center</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="f3" />
                                            <label htmlFor="f3">Flat Tv</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="f4" />
                                            <label htmlFor="f4">Heater</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="f5" />
                                            <label htmlFor="f5">Internet – Wifi</label>
                                        </div>
                                        <div className="collapse" id="facilitiesMenu">
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="f6" />
                                                <label htmlFor="f6">Parking</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="f7" />
                                                <label htmlFor="f7">Pool</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="f8" />
                                                <label htmlFor="f8">Restaurant</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="f9" />
                                                <label htmlFor="f9">Smoking Room</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="f10" />
                                                <label htmlFor="f10">Spa &amp; Sauna</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="f11" />
                                                <label htmlFor="f11">Washer &amp; Dryer</label>
                                            </div>
                                        </div>
                                        <a className="btn-text" data-bs-toggle="collapse" href="#facilitiesMenu" role="button" aria-expanded="false" aria-controls="facilitiesMenu">
                                            <span className="show-more">Show More <i className="la la-angle-down" /></span>
                                            <span className="show-less">Show Less <i className="la la-angle-up" /></span>
                                        </a>
                                    </div>
                                </div>
                                {/* end sidebar-widget */}
                                <div className="sidebar-widget">
                                    <h3 className="title stroke-shape">Hotel Theme</h3>
                                    <div className="sidebar-category">
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="ht1" />
                                            <label htmlFor="ht1">Best value</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="ht2" />
                                            <label htmlFor="ht2">Boutique</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="ht3" />
                                            <label htmlFor="ht3">Budget</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="ht4" />
                                            <label htmlFor="ht4">Business</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="ht5" />
                                            <label htmlFor="ht5">Charming</label>
                                        </div>
                                        <div className="custom-checkbox">
                                            <input type="checkbox" className="form-check-input" id="ht6" />
                                            <label htmlFor="ht6">Classic</label>
                                        </div>
                                        <div className="collapse" id="hotelThemeMenu">
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="ht7" />
                                                <label htmlFor="ht7">Green</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="ht8" />
                                                <label htmlFor="ht8">Luxury</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="ht9" />
                                                <label htmlFor="ht9">Mid-range</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="ht10" />
                                                <label htmlFor="ht10">Party</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="ht11" />
                                                <label htmlFor="ht11">Quaint</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="ht12" />
                                                <label htmlFor="ht12">Quite</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="ht14" />
                                                <label htmlFor="ht14">Romantic</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="ht15" />
                                                <label htmlFor="ht15">Standard</label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" className="form-check-input" id="ht16" />
                                                <label htmlFor="ht16">Trendy</label>
                                            </div>
                                        </div>
                                        <a className="btn-text" data-bs-toggle="collapse" href="#hotelThemeMenu" role="button" aria-expanded="false" aria-controls="hotelThemeMenu">
                                            <span className="show-more">Show More <i className="la la-angle-down" /></span>
                                            <span className="show-less">Show Less <i className="la la-angle-up" /></span>
                                        </a>
                                    </div>
                                </div>
                                {/* end sidebar-widget */}
                            </div>
                            {/* end sidebar */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-8">
                            {/* Hotel 1: Sun & Sands Seaview Hotel */}
                            <div className="card-item card-item-list">
                                <div className="card-img">
                                    <a href="hotel-single.html" className="d-block">
                                        <img src="https://www.dotwconnect.com/poze_hotel/19/1930015/lwooggNh_2529b2b3d5853a9df6c21d63327f14b5.JPG" alt="hotel-img" />
                                    </a>
                                    <span className="badge">Bestseller</span>
                                    <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Bookmark">
                                        <i className="la la-heart-o" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="hotel-single.html">Sun &amp; Sands Seaview Hotel</a>
                                    </h3>
                                    <p className="card-meta">
                                        <i className="la la-map-marker" /> Al Khaleej Road, Al Baraha,
                                        Dubai, United Arab Emirates
                                    </p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">৳5,000</span>
                                            <span className="price__text">2 night</span>
                                        </p>
                                        <a href="hotel-single.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                            {/* Hotel 2: Premier Inn Dubai Al Jaddaf */}
                            <div className="card-item card-item-list">
                                <div className="card-img">
                                    <a href="hotel-single.html" className="d-block">
                                        <img src="https://static-images.webbeds.com/0/image/14a2b37e-8995-4a2c-bf4c-5c2ebd14ed2f.jpg" alt="hotel-img" />
                                    </a>
                                    <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Bookmark">
                                        <i className="la la-heart-o" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="hotel-single.html">Premier Inn Dubai Al Jaddaf</a>
                                    </h3>
                                    <p className="card-meta">
                                        <i className="la la-map-marker" /> Culture Village, Al Jaddaf,
                                        Dubai, United Arab Emirates
                                    </p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">৳6,000</span>
                                            <span className="price__text">2 night</span>
                                        </p>
                                        <a href="hotel-single.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                            {/* Hotel 3: Premier Inn Dubai International Airport */}
                            <div className="card-item card-item-list">
                                <div className="card-img">
                                    <a href="hotel-single.html" className="d-block">
                                        <img src="https://static-images.webbeds.com/0/image/ad885c44-fdf2-43ee-aa00-285ddf4e9c2c.jpg" alt="hotel-img" />
                                    </a>
                                    <span className="badge">Featured</span>
                                    <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Bookmark">
                                        <i className="la la-heart-o" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="hotel-single.html">Premier Inn Dubai International Airport</a>
                                    </h3>
                                    <p className="card-meta">
                                        <i className="la la-map-marker" /> Opposite Terminal 3, via
                                        Street 52b, Dubai, United Arab Emirates
                                    </p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">৳7,500</span>
                                            <span className="price__text">2 night</span>
                                        </p>
                                        <a href="hotel-single.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                            {/* Hotel 4: Hafez Hotel Apartments */}
                            <div className="card-item card-item-list">
                                <div className="card-img">
                                    <a href="hotel-single.html" className="d-block">
                                        <img src="https://i.travelapi.com/lodging/11000000/10260000/10257700/10257665/404f22b3_b.jpg" alt="hotel-img" />
                                    </a>
                                    <span className="badge">Popular</span>
                                    <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Bookmark">
                                        <i className="la la-heart-o" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="hotel-single.html">Hafez Hotel Apartments</a>
                                    </h3>
                                    <p className="card-meta">
                                        <i className="la la-map-marker" /> Next to E NBD Bank Bldg, Al
                                        Ras, Dubai, United Arab Emirates
                                    </p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">৳9,500</span>
                                            <span className="price__text">2 night</span>
                                        </p>
                                        <a href="hotel-single.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                            {/* Hotel 5: Novotel World Trade Centre */}
                            <div className="card-item card-item-list">
                                <div className="card-img">
                                    <a href="hotel-single.html" className="d-block">
                                        <img src="https://i.travelapi.com/lodging/1000000/920000/911600/911528/811bccf8_b.jpg" alt="hotel-img" />
                                    </a>
                                    <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Bookmark">
                                        <i className="la la-heart-o" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="hotel-single.html">Novotel World Trade Centre</a>
                                    </h3>
                                    <p className="card-meta">
                                        <i className="la la-map-marker" /> Al Mustaqbal Street, Dubai,
                                        United Arab Emirates
                                    </p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">৳11,500</span>
                                            <span className="price__text">2 night</span>
                                        </p>
                                        <a href="hotel-single.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-8 */}
                    </div>
                </div>
                {/* end container */}
            </section>
            {/* end card area */}

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
        </>
    );
};

export default HotelSearchResultComponent;