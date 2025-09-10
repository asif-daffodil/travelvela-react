import React, { useEffect } from 'react';

const HotelSingleComponent = () => {
    useEffect(() => {
        // Initialize date pickers and other functionality
        const script = document.createElement('script');
        script.innerHTML = `
            $(function() {
                // Initialize date pickers
                if (typeof $.fn.daterangepicker !== 'undefined') {
                    $('.date-picker-single').daterangepicker({
                        singleDatePicker: true,
                        showDropdowns: true,
                        minYear: 2024,
                        maxYear: parseInt(moment().format('YYYY'),10) + 1,
                        opens: 'left'
                    });
                }
                
                // Initialize fancybox for gallery
                if (typeof $.fn.fancybox !== 'undefined') {
                    $('[data-fancybox="gallery"]').fancybox({
                        buttons: ["zoom", "share", "slideShow", "fullScreen", "download", "thumbs", "close"],
                        loop: false,
                        protect: true
                    });
                }

                // Initialize tooltips
                if (typeof $.fn.tooltip !== 'undefined') {
                    $('[data-bs-toggle="tooltip"]').tooltip();
                }

                // Guest quantity handlers
                $('.qtyInc').on('click', function() {
                    var $input = $(this).siblings('input');
                    var currentVal = parseInt($input.val()) || 0;
                    $input.val(currentVal + 1);
                    updateGuestDisplay();
                });

                $('.qtyDec').on('click', function() {
                    var $input = $(this).siblings('input');
                    var currentVal = parseInt($input.val()) || 0;
                    if (currentVal > 0) {
                        $input.val(currentVal - 1);
                        updateGuestDisplay();
                    }
                });

                function updateGuestDisplay() {
                    var adults = parseInt($('input[name="adult_number"]').val()) || 0;
                    var children = parseInt($('input[name="child_number"]').val()) || 0;
                    $('.adult').text(adults + ' Adult' + (adults !== 1 ? 's' : ''));
                    $('.children').text(children + ' Child' + (children !== 1 ? 'ren' : ''));
                }

                // Accordion functionality
                $('.ac-q').on('click', function() {
                    var $this = $(this);
                    var $answer = $this.next('.ac-a');
                    
                    // Close all other accordions
                    $('.ac-q').not($this).removeClass('is-active');
                    $('.ac-a').not($answer).slideUp();
                    
                    // Toggle current accordion
                    $this.toggleClass('is-active');
                    $answer.slideToggle();
                });

                // Initialize Owl Carousel for gallery
                if (typeof $.fn.owlCarousel !== 'undefined') {
                    $('.gallery-carousel').owlCarousel({
                        loop: true,
                        margin: 10,
                        nav: true,
                        dots: false,
                        responsive: {
                            0: { items: 1 },
                            600: { items: 2 },
                            1000: { items: 3 }
                        }
                    });
                }

                // Smooth scrolling for navigation links
                $('.scroll-link').on('click', function(e) {
                    e.preventDefault();
                    var target = $(this).attr('href');
                    if ($(target).length) {
                        $('html, body').animate({
                            scrollTop: $(target).offset().top - 100
                        }, 800);
                    }
                });

                // Sticky navigation
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();
                    if (scroll >= 300) {
                        $('#single-content-navbar').addClass('sticky-nav');
                    } else {
                        $('#single-content-navbar').removeClass('sticky-nav');
                    }
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
            {/* START BREADCRUMB TOP BAR */}
            <section className="breadcrumb-top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-list breadcrumb-top-list">
                                <ul className="list-items bg-transparent radius-none p-0">
                                    <li><a href="index.html">Home</a></li>
                                    <li>France</li>
                                    <li>Hilton Hotel and Resorts</li>
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
            {/* END BREADCRUMB TOP BAR */}


            {/* START BREADCRUMB AREA */}
            <section className="breadcrumb-area bread-bg-7 py-0">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-btn">
                                    <div className="btn-box">
                                        <a className="theme-btn" data-fancybox="video" data-src="https://www.youtube.com/watch?v=5u1WISBbo5I" data-speed={700}>
                                            <i className="la la-video-camera me-2" />Video
                                        </a>
                                        <a className="theme-btn" data-src="images/img1.jpg" data-fancybox="gallery" data-caption="Showing image - 01" data-speed={700}>
                                            <i className="la la-photo me-2" />More Photos
                                        </a>
                                    </div>
                                    <a className="d-none" data-fancybox="gallery" data-src="images/img2.jpg" data-caption="Showing image - 02" data-speed={700} />
                                    <a className="d-none" data-fancybox="gallery" data-src="images/img3.jpg" data-caption="Showing image - 03" data-speed={700} />
                                    <a className="d-none" data-fancybox="gallery" data-src="images/img4.jpg" data-caption="Showing image - 04" data-speed={700} />
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

            {/* START TOUR DETAIL AREA */}
            <section className="tour-detail-area padding-bottom-90px">
                <div className="single-content-navbar-wrap menu section-bg" id="single-content-navbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single-content-nav" id="single-content-nav">
                                    <ul>
                                        <li>
                                            <a data-scroll="description" href="#description" className="scroll-link active">Hotel Details</a>
                                        </li>
                                        <li>
                                            <a data-scroll="availability" href="#availability" className="scroll-link">Availability</a>
                                        </li>
                                        <li>
                                            <a data-scroll="amenities" href="#amenities" className="scroll-link">Amenities</a>
                                        </li>
                                        <li>
                                            <a data-scroll="faq" href="#faq" className="scroll-link">Faq</a>
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
                                            <h3 className="title font-size-26">Hilton Hotel and Resorts</h3>
                                            <div className="d-flex align-items-center pt-2">
                                                <p className="me-2">Boston, MA, USA</p>
                                                <p>
                                                    <span className="badge text-bg-warning text-white font-size-16">4.7</span>
                                                    <span>(4,209 Reviews)</span>
                                                </p>
                                            </div>
                                        </div>
                                        {/* end single-content-item */}
                                        <div className="section-block" />
                                        <div className="single-content-item py-4">
                                            <div className="row">
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-hotel" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                Hotel Type
                                                            </h3>
                                                            <span className="font-size-13">4 Star</span>
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
                                                                Extra People
                                                            </h3>
                                                            <span className="font-size-13">No Charge</span>
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
                                                                Minimum Stay
                                                            </h3>
                                                            <span className="font-size-13">2 Nights</span>
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
                                                                Security Deposit
                                                            </h3>
                                                            <span className="font-size-13">$279</span>
                                                        </div>
                                                    </div>
                                                    {/* end single-tour-feature */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-globe" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                Country
                                                            </h3>
                                                            <span className="font-size-13">France</span>
                                                        </div>
                                                    </div>
                                                    {/* end single-tour-feature */}
                                                </div>
                                                {/* end col-lg-4 */}
                                                <div className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                            <i className="la la-map" />
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">
                                                                City
                                                            </h3>
                                                            <span className="font-size-13">Paris</span>
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
                                                                Neighborhood
                                                            </h3>
                                                            <span className="font-size-13">République</span>
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
                                                            <span className="font-size-13">Strict</span>
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
                                            <h3 className="title font-size-20">
                                                About Hilton Hotel and Resorts
                                            </h3>
                                            <p className="py-3">
                                                Per consequat adolescens ex, cu nibh commune temporibus
                                                vim, ad sumo viris eloquentiam sed. Mea appareat
                                                omittantur eloquentiam ad, nam ei quas oportere
                                                democritum. Prima causae admodum id est, ei timeam
                                                inimicus sed. Sit an meis aliquam, cetero inermis vel ut.
                                                An sit illum euismod facilisis, tamquam vulputate
                                                pertinacia eum at.
                                            </p>
                                            <p>
                                                Cum et probo menandri. Officiis consulatu pro et, ne sea
                                                sale invidunt, sed ut sint blandit efficiendi. Atomorum
                                                explicari eu qui, est enim quaerendum te. Quo harum viris
                                                id. Per ne quando dolore evertitur, pro ad cibo commune.
                                            </p>
                                        </div>
                                        {/* end single-content-item */}
                                        <div className="section-block" />
                                    </div>
                                    {/* end description */}
                                    <div id="availability" className="page-scroll">
                                        <div className="single-content-item padding-top-40px padding-bottom-30px">
                                            <h3 className="title font-size-20">Availability</h3>
                                            <div className="contact-form-action padding-bottom-35px">
                                                <form method="post">
                                                    <div className="row">
                                                        <div className="col-lg-6 responsive-column">
                                                            <div className="input-box">
                                                                <label className="label-text">Check in - Check out</label>
                                                                <div className="form-group">
                                                                    <span className="la la-calendar form-icon" />
                                                                    <input className="date-range form-control" type="text" name="daterange" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 responsive-column">
                                                            <div className="input-box">
                                                                <label className="label-text">Rooms</label>
                                                                <div className="form-group select2-container-wrapper">
                                                                    <div className="select-contain w-auto">
                                                                        <select className="select-contain-select">
                                                                            <option value={0}>Select Rooms</option>
                                                                            <option value={1}>1 Room</option>
                                                                            <option value={2}>2 Rooms</option>
                                                                            <option value={3}>3 Rooms</option>
                                                                            <option value={4}>4 Rooms</option>
                                                                            <option value={5}>5 Rooms</option>
                                                                            <option value={6}>6 Rooms</option>
                                                                            <option value={7}>7 Rooms</option>
                                                                            <option value={8}>8 Rooms</option>
                                                                            <option value={9}>9 Rooms</option>
                                                                            <option value={10}>10 Rooms</option>
                                                                            <option value={11}>11 Rooms</option>
                                                                            <option value={12}>12 Rooms</option>
                                                                            <option value={13}>13 Rooms</option>
                                                                            <option value={14}>14 Rooms</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 responsive-column">
                                                            <div className="input-box">
                                                                <label className="label-text">Adults (18+)</label>
                                                                <div className="form-group select2-container-wrapper">
                                                                    <div className="select-contain w-auto">
                                                                        <select className="select-contain-select">
                                                                            <option value={0}>Select Adults</option>
                                                                            <option value={1}>1 Adults</option>
                                                                            <option value={2}>2 Adults</option>
                                                                            <option value={3}>3 Adults</option>
                                                                            <option value={4}>4 Adults</option>
                                                                            <option value={5}>5 Adults</option>
                                                                            <option value={6}>6 Adults</option>
                                                                            <option value={7}>7 Adults</option>
                                                                            <option value={8}>8 Adults</option>
                                                                            <option value={9}>9 Adults</option>
                                                                            <option value={10}>10 Adults</option>
                                                                            <option value={11}>11 Adults</option>
                                                                            <option value={12}>12 Adults</option>
                                                                            <option value={13}>13 Adults</option>
                                                                            <option value={14}>14 Adults</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 responsive-column">
                                                            <div className="input-box">
                                                                <label className="label-text">Children (0-17)</label>
                                                                <div className="form-group select2-container-wrapper">
                                                                    <div className="select-contain w-auto">
                                                                        <select className="select-contain-select">
                                                                            <option value={0}>Select Children</option>
                                                                            <option value={1}>1 Children</option>
                                                                            <option value={2}>2 Children</option>
                                                                            <option value={3}>3 Children</option>
                                                                            <option value={4}>4 Children</option>
                                                                            <option value={5}>5 Children</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="btn-box">
                                                                <button type="button" className="theme-btn">
                                                                    Search Now
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* end contact-form-action */}
                                            <h3 className="title font-size-20">Available Rooms</h3>
                                            <div className="cabin-type padding-top-30px">
                                                <div className="cabin-type-item seat-selection-item d-flex">
                                                    <div className="cabin-type-img flex-shrink-0">
                                                        <img src="images/inside-cabin.jpg" alt />
                                                    </div>
                                                    <div className="cabin-type-detail">
                                                        <h3 className="title">Standard Family Room</h3>
                                                        <div className="row padding-top-20px">
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-wifi" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            Free Wi-Fi
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-bed" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            2 Single beds
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-building" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            15 m²
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-hotel" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            Shower and bathtub
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                        </div>
                                                        {/* end row */}
                                                        <div className="room-photos">
                                                            <a className="btn theme-btn-hover-gray" data-src="images/img1.jpg" data-fancybox="gallery" data-caption="Showing image - 01" data-speed={700}>
                                                                <i className="la la-photo me-2" />Room Photos
                                                            </a>
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img2.jpg" data-caption="Showing image - 02" data-speed={700} />
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img3.jpg" data-caption="Showing image - 03" data-speed={700} />
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img4.jpg" data-caption="Showing image - 04" data-speed={700} />
                                                        </div>
                                                    </div>
                                                    <div className="cabin-price">
                                                        <p className="text-uppercase font-size-14">
                                                            Per/night<strong className="mt-n1 text-black font-size-18 font-weight-black d-block">$121</strong>
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
                                                        <img src="images/oceanview-cabin.jpg" alt />
                                                    </div>
                                                    <div className="cabin-type-detail">
                                                        <h3 className="title">Superior Double Room</h3>
                                                        <div className="row padding-top-20px">
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-wifi" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            Free Wi-Fi
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-bed" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            2 Single beds
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-building" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            15 m²
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-hotel" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            Shower and bathtub
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                        </div>
                                                        {/* end row */}
                                                        <div className="room-photos">
                                                            <a className="btn theme-btn-hover-gray" data-src="images/img1.jpg" data-fancybox="gallery" data-caption="Showing image - 01" data-speed={700}>
                                                                <i className="la la-photo me-2" />Room Photos
                                                            </a>
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img2.jpg" data-caption="Showing image - 02" data-speed={700} />
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img3.jpg" data-caption="Showing image - 03" data-speed={700} />
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img4.jpg" data-caption="Showing image - 04" data-speed={700} />
                                                        </div>
                                                    </div>
                                                    <div className="cabin-price">
                                                        <p className="text-uppercase font-size-14">
                                                            Per/night<strong className="mt-n1 text-black font-size-18 font-weight-black d-block">$121</strong>
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
                                                        <img src="images/balcony-cabin.jpg" alt />
                                                    </div>
                                                    <div className="cabin-type-detail">
                                                        <h3 className="title">Deluxe Single Room</h3>
                                                        <div className="row padding-top-20px">
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-wifi" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            Free Wi-Fi
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-bed" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            2 Single beds
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-building" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            15 m²
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-hotel" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            Shower and bathtub
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                        </div>
                                                        {/* end row */}
                                                        <div className="room-photos">
                                                            <a className="btn theme-btn-hover-gray" data-src="images/img1.jpg" data-fancybox="gallery" data-caption="Showing image - 01" data-speed={700}>
                                                                <i className="la la-photo me-2" />Room Photos
                                                            </a>
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img2.jpg" data-caption="Showing image - 02" data-speed={700} />
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img3.jpg" data-caption="Showing image - 03" data-speed={700} />
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img4.jpg" data-caption="Showing image - 04" data-speed={700} />
                                                        </div>
                                                    </div>
                                                    <div className="cabin-price">
                                                        <p className="text-uppercase font-size-14">
                                                            Per/night<strong className="mt-n1 text-black font-size-18 font-weight-black d-block">$121</strong>
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
                                                        <img src="images/suite-cabin.jpg" alt />
                                                    </div>
                                                    <div className="cabin-type-detail">
                                                        <h3 className="title">Single Bed Room</h3>
                                                        <div className="row padding-top-20px">
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-wifi" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            Free Wi-Fi
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-bed" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            1 Single beds
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-building" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            15 m²
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                            <div className="col-lg-6 responsive-column">
                                                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                                                    <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-2">
                                                                        <i className="la la-hotel" />
                                                                    </div>
                                                                    <div className="single-feature-titles">
                                                                        <h3 className="title font-size-15 font-weight-medium">
                                                                            Shower and bathtub
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* end col-lg-6 */}
                                                        </div>
                                                        {/* end row */}
                                                        <div className="room-photos">
                                                            <a className="btn theme-btn-hover-gray" data-src="images/img1.jpg" data-fancybox="gallery" data-caption="Showing image - 01" data-speed={700}>
                                                                <i className="la la-photo me-2" />Room Photos
                                                            </a>
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img2.jpg" data-caption="Showing image - 02" data-speed={700} />
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img3.jpg" data-caption="Showing image - 03" data-speed={700} />
                                                            <a className="d-none" data-fancybox="gallery" data-src="images/img4.jpg" data-caption="Showing image - 04" data-speed={700} />
                                                        </div>
                                                    </div>
                                                    <div className="cabin-price">
                                                        <p className="text-uppercase font-size-14">
                                                            Per/night<strong className="mt-n1 text-black font-size-18 font-weight-black d-block">$121</strong>
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
                                    {/* end location-map */}
                                    <div id="amenities" className="page-scroll">
                                        <div className="single-content-item padding-top-40px padding-bottom-20px">
                                            <h3 className="title font-size-20">Amenities</h3>
                                            <div className="amenities-feature-item pt-4">
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
                                                                <i className="la la-check" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Swimming Pool
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
                                                                <i className="la la-gear" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Fitness Facility
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-check" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Fridge
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
                                                                    Wine Bar
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
                                                                <i className="la la-lock" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Secure Vault
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-car" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Pick And Drop
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-check" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Room Service
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-check-circle" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Pets Allowed
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
                                                                    Breakfast
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-car" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Free Parking
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-fire" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Fire Place
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-wheelchair" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Handicap Accessible
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                    <div className="col-lg-4 responsive-column">
                                                        <div className="single-tour-feature d-flex align-items-center mb-3">
                                                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                                                                <i className="la la-user-secret" />
                                                            </div>
                                                            <div className="single-feature-titles">
                                                                <h3 className="title font-size-15 font-weight-medium">
                                                                    Doorman
                                                                </h3>
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
                                                                    Elevator In Building
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
                                                                    Suitable For Events
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
                                                                    Play Place
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        {/* end single-tour-feature */}
                                                    </div>
                                                    {/* end col-lg-4 */}
                                                </div>
                                                {/* end row */}
                                            </div>
                                        </div>
                                        {/* end single-content-item */}
                                        <div className="section-block" />
                                    </div>
                                    {/* end faq */}
                                    <div id="faq" className="page-scroll">
                                        <div className="single-content-item padding-top-40px padding-bottom-40px">
                                            <h3 className="title font-size-20">FAQs</h3>
                                            <div className="accordion accordion-item padding-top-30px" id="accordionExample2">
                                                <div className="card">
                                                    <div className="card-header" id="faqHeadingFour">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseFour" aria-expanded="true" aria-controls="faqCollapseFour">
                                                                <span className="ms-3">How do I know a reservation is accepted or
                                                                    confirmed?</span>
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
                                                                <span className="ms-3">Am I allowed to decline reservation
                                                                    requests?</span>
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
                                                                <span className="ms-3">What happens if I let a reservation request
                                                                    expire?</span>
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
                                                                <span className="ms-3">How do I set reservation requirements?</span>
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
                                                                    <div className="col-lg-6 responsive-column">
                                                                        <div className="input-box">
                                                                            <label className="label-text">Name</label>
                                                                            <div className="form-group">
                                                                                <span className="la la-user form-icon" />
                                                                                <input className="form-control" type="text" name="text" placeholder="Your name" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 responsive-column">
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
                                                        <label className="label-text">Check in - Check out</label>
                                                        <div className="form-group">
                                                            <span className="la la-calendar form-icon" />
                                                            <input className="date-range form-control" type="text" name="daterange" />
                                                        </div>
                                                    </div>
                                                    <div className="input-box">
                                                        <label className="label-text">Rooms</label>
                                                        <div className="form-group select2-container-wrapper">
                                                            <div className="select-contain w-auto">
                                                                <select className="select-contain-select">
                                                                    <option value={0}>Select Rooms</option>
                                                                    <option value={1}>1 Room</option>
                                                                    <option value={2}>2 Rooms</option>
                                                                    <option value={3}>3 Rooms</option>
                                                                    <option value={4}>4 Rooms</option>
                                                                    <option value={5}>5 Rooms</option>
                                                                    <option value={6}>6 Rooms</option>
                                                                    <option value={7}>7 Rooms</option>
                                                                    <option value={8}>8 Rooms</option>
                                                                    <option value={9}>9 Rooms</option>
                                                                    <option value={10}>10 Rooms</option>
                                                                    <option value={11}>11 Rooms</option>
                                                                    <option value={12}>12 Rooms</option>
                                                                    <option value={13}>13 Rooms</option>
                                                                    <option value={14}>14 Rooms</option>
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
                                            <a href="hotel-booking.html" className="theme-btn text-center w-100 mb-2"><i className="la la-shopping-cart me-2 font-size-18" />Book
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
                                                                        <input type="checkbox" className="form-check-input" id="agreeChb" />
                                                                        <label htmlFor="agreeChb">I agree with
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
            {/* end single-content-area */}


            <div className="section-block" />

            {/* Related Hotels Section */}
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
                            <div className="card-item">
                                <div className="card-img">
                                    <a href="hotel-single.html" className="d-block">
                                        <img src="images/img1.jpg" alt="hotel-img" />
                                    </a>
                                    <span className="badge">Bestseller</span>
                                    <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Bookmark">
                                        <i className="la la-heart-o" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="hotel-single.html">The Millennium Hilton New York</a>
                                    </h3>
                                    <p className="card-meta">124 E Huron St, New york</p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">$88.00</span>
                                            <span className="price__text">Per night</span>
                                        </p>
                                        <a href="hotel-single.html" className="btn-text">See details<i className="la la-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item">
                                <div className="card-img">
                                    <a href="hotel-single.html" className="d-block">
                                        <img src="images/img2.jpg" alt="hotel-img" />
                                    </a>
                                    <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Bookmark">
                                        <i className="la la-heart-o" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="hotel-single.html">Best Western Grant Park Hotel</a>
                                    </h3>
                                    <p className="card-meta">124 E Huron St, Chicago</p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">$58.00</span>
                                            <span className="price__text">Per night</span>
                                        </p>
                                        <a href="hotel-single.html" className="btn-text">See details<i className="la la-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item">
                                <div className="card-img">
                                    <a href="hotel-single.html" className="d-block">
                                        <img src="images/img3.jpg" alt="hotel-img" />
                                    </a>
                                    <span className="badge">Featured</span>
                                    <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Bookmark">
                                        <i className="la la-heart-o" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        <a href="hotel-single.html">Hyatt Regency Maui Resort &amp; Spa</a>
                                    </h3>
                                    <p className="card-meta">200 Nohea Kai Dr, Lahaina, HI</p>
                                    <div className="card-rating">
                                        <span className="badge text-white">4.4/5</span>
                                        <span className="review__text">Average</span>
                                        <span className="rating__text">(30 Reviews)</span>
                                    </div>
                                    <div className="card-price d-flex align-items-center justify-content-between">
                                        <p>
                                            <span className="price__from">From</span>
                                            <span className="price__num">$88.00</span>
                                            <span className="price__text">Per night</span>
                                        </p>
                                        <a href="hotel-single.html" className="btn-text">See details<i className="la la-angle-right" /></a>
                                    </div>
                                </div>
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


            {/* replayPopupForm Modal */}
            <div className="modal-popup">
                <div className="modal fade" id="replayPopupForm" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title title" id="exampleModalLongTitle3">
                                    Replay to review
                                </h5>
                                <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="la la-close" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="contact-form-action">
                                    <form method="post">
                                        <div className="input-box">
                                            <div className="form-group mb-0">
                                                <i className="la la-pencil form-icon" />
                                                <textarea className="message-control form-control" name="message" placeholder="Write message here..." defaultValue={""} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* end contact-form-action */}
                            </div>
                            <div className="modal-footer border-top-0 pt-0">
                                <button type="button" className="btn font-weight-bold font-size-15 color-text-2 me-2" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" className="theme-btn theme-btn-small">
                                    Replay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end replayPopupForm Modal */}

            {/* Share Modal */}
            <div className="modal-popup">
                <div className="modal fade" id="sharePopupForm" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title title" id="exampleModalLongTitle4">
                                    Share this tour
                                </h5>
                                <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="la la-close" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="copy-to-clipboard-wrap">
                                    <div className="copy-to-clipboard">
                                        <div className="contact-form-action d-flex align-items-center">
                                            <span className="text-success-message">Copied!</span>
                                            <input type="text" className="form-control copy-input" defaultValue="https://www.TravelVela.com/share/101WxMB0oac1hVQQ==/" />
                                            <div className="btn-box">
                                                <button className="theme-btn theme-btn-light copy-text">
                                                    Copy
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end copy-to-clipboard */}
                                    <ul className="social-profile text-center">
                                        <li>
                                            <a href="#"><i className="lab la-facebook-f" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="lab la-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="lab la-instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="lab la-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end Share Modal */}
        </>
    );
};

export default HotelSingleComponent;
