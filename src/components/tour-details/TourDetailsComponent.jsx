import React from 'react'
import { Link } from 'react-router-dom'

const TourDetailsComponent = () => {
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
                  <li>China</li>
                  <li>Great Wall of China, Tour</li>
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
      <section className="breadcrumb-area bread-bg-2 py-0">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-btn">
                  <div className="btn-box">
                    <a className="theme-btn" data-fancybox="video" data-src="https://www.youtube.com/watch?v=0GZSfBuhf6Y" data-speed={700}>
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
      {/* END BREADCRUMB AREA */}

      {/* START TOUR DETAIL AREA */}
      <section className="tour-detail-area padding-bottom-90px">
        <div className="single-content-navbar-wrap menu section-bg" id="single-content-navbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="single-content-nav" id="single-content-nav">
                  <ul>
                    <li>
                      <a data-scroll="description" href="#description" className="scroll-link active">Description</a>
                    </li>
                    <li>
                      <a data-scroll="itinerary" href="#itinerary" className="scroll-link">Itinerary</a>
                    </li>
                    <li>
                      <a data-scroll="photo" href="#photo" className="scroll-link">Photo</a>
                    </li>
                    <li>
                      <a data-scroll="faq" href="#faq" className="scroll-link">FAQ</a>
                    </li>
                    <li>
                      <a data-scroll="location-map" href="#location-map" className="scroll-link">Map</a>
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
                      <h3 className="title font-size-26">
                        3 Days Tour: the Great Wall of China
                      </h3>
                      <div className="d-flex flex-wrap align-items-center pt-2">
                        <p className="me-2">Huairou District, China</p>
                        <p>
                          <span className="badge text-bg-warning text-white font-size-16">4.6</span>
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
                              <i className="la la-clock-o" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">
                                Duration
                              </h3>
                              <span className="font-size-13">3 Days</span>
                            </div>
                          </div>
                          {/* end single-tour-feature */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                              <i className="la la-users" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">
                                Group Size
                              </h3>
                              <span className="font-size-13">30 People</span>
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
                                Tour Type
                              </h3>
                              <span className="font-size-13">Adventures Tour</span>
                            </div>
                          </div>
                          {/* end single-tour-feature */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                              <i className="la la-calendar" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">
                                Date
                              </h3>
                              <span className="font-size-13">Jan 19' - Dec 21'</span>
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
                                Min Age
                              </h3>
                              <span className="font-size-13">10+</span>
                            </div>
                          </div>
                          {/* end single-tour-feature */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ms-0 flex-shrink-0 me-3">
                              <i className="la la-plane" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">
                                Pickup From
                              </h3>
                              <span className="font-size-13">Airport</span>
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
                      <h3 className="title font-size-20">Description</h3>
                      <p className="py-3">
                        Per consequat adolescens ex, cu nibh commune temporibus
                        vim, ad sumo viris eloquentiam sed. Mea appareat
                        omittantur eloquentiam ad, nam ei quas oportere
                        democritum. Prima causae admodum id est, ei timeam
                        inimicus sed. Sit an meis aliquam, cetero inermis vel ut.
                        An sit illum euismod facilisis, tamquam vulputate
                        pertinacia eum at.
                      </p>
                      <p className="pb-4">
                        Cum et probo menandri. Officiis consulatu pro et, ne sea
                        sale invidunt, sed ut sint blandit efficiendi. Atomorum
                        explicari eu qui, est enim quaerendum te. Quo harum viris
                        id. Per ne quando dolore evertitur, pro ad cibo commune.
                      </p>
                      <h3 className="title font-size-15 font-weight-medium pb-3">
                        Highlights
                      </h3>
                      <div className="row">
                        <div className="col-lg-6 responsive-column">
                          <ul className="list-items pb-3">
                            <li>
                              <i className="la la-dot-circle text-color me-2" />Dolorem mediocritatem
                            </li>
                            <li>
                              <i className="la la-dot-circle text-color me-2" />Mea
                              appareat
                            </li>
                            <li>
                              <i className="la la-dot-circle text-color me-2" />Prima causae
                            </li>
                            <li>
                              <i className="la la-dot-circle text-color me-2" />Singulis indoctum
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 responsive-column">
                          <ul className="list-items pb-3">
                            <li>
                              <i className="la la-dot-circle text-color me-2" />Timeam inimicus
                            </li>
                            <li>
                              <i className="la la-dot-circle text-color me-2" />Oportere democritum
                            </li>
                            <li>
                              <i className="la la-dot-circle text-color me-2" />Cetero inermis
                            </li>
                            <li>
                              <i className="la la-dot-circle text-color me-2" />Pertinacia eum
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* end row */}
                      <div className="row">
                        <div className="col-lg-6 responsive-column">
                          <h3 className="title font-size-15 font-weight-medium pb-3">
                            Included
                          </h3>
                          <ul className="list-items">
                            <li>
                              <i className="la la-check text-success me-2" />Airfare
                            </li>
                            <li>
                              <i className="la la-check text-success me-2" />Local
                              Transportation
                            </li>
                            <li>
                              <i className="la la-check text-success me-2" />Accommodation
                            </li>
                            <li>
                              <i className="la la-check text-success me-2" />Tour
                              Guide
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 responsive-column">
                          <h3 className="title font-size-15 font-weight-medium pb-3">
                            Not Included
                          </h3>
                          <ul className="list-items">
                            <li>
                              <i className="la la-times text-danger me-2" />Entrance
                              Fees
                            </li>
                            <li>
                              <i className="la la-times text-danger me-2" />Guide
                              Gratuity
                            </li>
                            <li>
                              <i className="la la-times text-danger me-2" />Lunch
                            </li>
                            <li>
                              <i className="la la-times text-danger me-2" />Dinner
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* end row */}
                    </div>
                    {/* end single-content-item */}
                    <div className="section-block" />
                  </div>
                  {/* end description */}
                  <div id="itinerary" className="page-scroll">
                    <div className="single-content-item padding-top-40px padding-bottom-40px">
                      <h3 className="title font-size-20">Itinerary</h3>
                      <div className="accordion accordion-item padding-top-30px" id="accordionExample">
                        <div className="card">
                          <div className="card-header" id="faqHeadingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-link d-flex align-items-center justify-content-between font-size-16" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseOne" aria-expanded="true" aria-controls="faqCollapseOne">
                                <span>Day 01 - Linfen – Historical place in
                                  Beijing</span>
                              </button>
                            </h2>
                          </div>
                          <div id="faqCollapseOne" className="collapse show" aria-labelledby="faqHeadingOne" data-bs-parent="#accordionExample">
                            <div className="card-body d-flex align-items-center">
                              <div className="flex-shrink-0 mt-2 me-4">
                                <img src="images/small-img.jpg" alt="destination-img" />
                              </div>
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
                          <div className="card-header" id="faqHeadingTwo">
                            <h2 className="mb-0">
                              <button className="btn btn-link d-flex align-items-center justify-content-between font-size-16" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseTwo" aria-expanded="true" aria-controls="faqCollapseTwo">
                                <span>Day 02 - Beijing - Temple of Heaven</span>
                              </button>
                            </h2>
                          </div>
                          <div id="faqCollapseTwo" className="collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#accordionExample">
                            <div className="card-body d-flex align-items-center">
                              <div className="flex-shrink-0 mt-2 me-4">
                                <img src="images/small-img2.jpg" alt="destination-img" />
                              </div>
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
                          <div className="card-header" id="faqHeadingThree">
                            <h2 className="mb-0">
                              <button className="btn btn-link d-flex align-items-center justify-content-between font-size-16" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseThree" aria-expanded="true" aria-controls="faqCollapseThree">
                                <span>Day 03 - Jinan to New york</span>
                              </button>
                            </h2>
                          </div>
                          <div id="faqCollapseThree" className="collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#accordionExample">
                            <div className="card-body d-flex align-items-center">
                              <div className="flex-shrink-0 mt-2 me-4">
                                <img src="images/small-img3.jpg" alt="destination-img" />
                              </div>
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
                  {/* end itinerary */}
                  <div id="photo" className="page-scroll">
                    <div className="single-content-item padding-top-40px padding-bottom-40px">
                      <h3 className="title font-size-20">Photo</h3>
                      <div className="gallery-carousel carousel-action padding-top-30px">
                        <div className="card-item mb-0">
                          <div className="card-img">
                            <img src="images/destination-img2.jpg" alt="Destination-img" />
                          </div>
                        </div>
                        {/* end card-item */}
                        <div className="card-item mb-0">
                          <div className="card-img">
                            <img src="images/destination-img3.jpg" alt="Destination-img" />
                          </div>
                        </div>
                        {/* end card-item */}
                        <div className="card-item mb-0">
                          <div className="card-img">
                            <img src="images/destination-img4.jpg" alt="Destination-img" />
                          </div>
                        </div>
                        {/* end card-item */}
                      </div>
                      {/* end gallery-carousel */}
                    </div>
                    {/* end single-content-item */}
                    <div className="section-block" />
                  </div>
                  {/* end photo */}
                  <div id="faq" className="page-scroll">
                    <div className="single-content-item padding-top-40px padding-bottom-40px">
                      <h3 className="title font-size-20">FAQ</h3>
                      <div className="accordion accordion-item padding-top-30px" id="accordionExample2">
                        <div className="card">
                          <div className="card-header" id="faqHeadingFour">
                            <h2 className="mb-0">
                              <button className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseFour" aria-expanded="true" aria-controls="faqCollapseFour">
                                <span className="ms-3">I'm a solo traveller, is there a single
                                  supplement?</span>
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
                                <span className="ms-3">Should I book pre/post tour
                                  accommodation?</span>
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
                                <span className="ms-3">What is cancellation policy?</span>
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
                                <span className="ms-3">Which currency is most widely accepted on this
                                  tour?</span>
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
                  <div id="location-map" className="page-scroll">
                    <div className="single-content-item padding-top-40px padding-bottom-40px">
                      <h3 className="title font-size-20">Location</h3>
                      <div className="gmaps padding-top-30px">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3220582.101712651!2d111.72032468736893!3d37.974802328116944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x3676dd556edbe6e9%3A0x12fdd98581592320!2sLinfen%2C%20Shanxi%2C%20China!3m2!1d36.088004999999995!2d111.518975!4m5!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2sBeijing%2C%20China!3m2!1d39.904199899999995!2d116.40739629999999!5e0!3m2!1sen!2sin!4v1589443024919!5m2!1sen!2sin" allowFullScreen aria-hidden="false" tabIndex={0} />
                      </div>
                    </div>
                    {/* end single-content-item */}
                    <div className="section-block" />
                  </div>
                  {/* end location-map */}
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
                        <h3>Bestseller</h3>
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
                              <input className="date-range form-control" type="text" name="daterange" />
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
                      <a href="tour-booking.html" className="theme-btn text-center w-100 mb-2"><i className="la la-shopping-cart me-2 font-size-18" />Book
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
                                      <a href="#">Privacy Statement</a>
                                    </label>
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
                    <div className="author-content d-flex">
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
      {/* END TOUR DETAIL AREA */}

      <div class="section-block"></div>

      {/* START RELATE TOUR AREA */}
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
              <div className="card-item trending-card">
                <div className="card-img">
                  <a href="tour-details.html" className="d-block">
                    <img src="images/img9.jpg" alt="Destination-img" />
                  </a>
                  <span className="badge">Bestseller</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html">Empire State Building Admission</a>
                  </h3>
                  <p className="card-meta">124 E Huron St, New york</p>
                  <div className="card-rating">
                    <span className="badge text-white">4.4/5</span>
                    <span className="review__text">Average</span>
                    <span className="rating__text">(30 Reviews)</span>
                  </div>
                  <div className="card-price d-flex align-items-center justify-content-between">
                    <p>
                      <span className="price__num">$124.00</span>
                    </p>
                    <a href="tour-details.html" className="btn-text">View details<i className="la la-angle-right" /></a>
                  </div>
                </div>
              </div>
              {/* end card-item */}
            </div>
            {/* end col-lg-4 */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item trending-card">
                <div className="card-img">
                  <a href="tour-details.html" className="d-block">
                    <img src="images/img10.jpg" alt="Destination-img" />
                    <span className="badge badge-ribbon">Save 24%</span>
                  </a>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html">Hut on Blue Water Beach Tour</a>
                  </h3>
                  <p className="card-meta">124 Nevada, Las Vegas</p>
                  <div className="card-rating">
                    <span className="badge text-white">4.4/5</span>
                    <span className="review__text">Superb</span>
                    <span className="rating__text">(30 Reviews)</span>
                  </div>
                  <div className="card-price d-flex align-items-center justify-content-between">
                    <p>
                      <span className="price__num">$100.00</span>
                      <span className="price__num before-price color-text-3">$124.00</span>
                    </p>
                    <a href="tour-details.html" className="btn-text">View details<i className="la la-angle-right" /></a>
                  </div>
                </div>
              </div>
              {/* end card-item */}
            </div>
            {/* end col-lg-4 */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item trending-card">
                <div className="card-img">
                  <a href="tour-details.html" className="d-block">
                    <img src="images/img11.jpg" alt="Destination-img" />
                  </a>
                  <span className="badge">Featured</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html">Golden Gate Seaplane Tour</a>
                  </h3>
                  <p className="card-meta">124 E Huron St, New york</p>
                  <div className="card-rating">
                    <span className="badge text-white">4.4/5</span>
                    <span className="review__text">Good</span>
                    <span className="rating__text">(30 Reviews)</span>
                  </div>
                  <div className="card-price d-flex align-items-center justify-content-between">
                    <p>
                      <span className="price__num">$124.00</span>
                    </p>
                    <a href="tour-details.html" className="btn-text">View details<i className="la la-angle-right" /></a>
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
      {/* END RELATE TOUR AREA */}

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
                      <input type="text" className="form-control copy-input" defaultValue="https://www.tripstar.com/share/101WxMB0oac1hVQQ==/" />
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

    </>
  )
}

export default TourDetailsComponent
