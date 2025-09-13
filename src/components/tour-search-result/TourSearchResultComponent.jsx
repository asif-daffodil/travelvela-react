import { useEffect } from "react";

const TourSearchResultComponent = () => {
  useEffect(() => {
    // Initialize select2 for all .select-contain-select
    if (window.$ && window.$.fn.select2) {
      window.$('.select-contain-select').select2({
        minimumResultsForSearch: Infinity,
        width: '100%'
      });
    }
    // Initialize jQuery UI datepicker for .date-range
    if (window.$ && window.$.fn.datepicker) {
      window.$('.date-range').datepicker({
        dateFormat: 'mm/dd/yy',
        minDate: 0
      });
    }
  }, []);
  return (
    <>
      {/* ================================  
      START BREADCRUMB AREA
      ================================= */}
      <section className="breadcrumb-area bread-bg">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="search-result-content">
                  <div className="section-heading">
                    <h2 className="sec__title text-white">Tour Search Result</h2>
                  </div>
                  <div className="search-fields-container margin-top-30px">
                    <div className="contact-form-action">
                      <form action="#" className="row">
                        <div className="col-lg-3 col-sm-6 pe-0">
                          <div className="input-box">
                            <label className="label-text">Destination</label>
                            <div className="form-group">
                              <span className="la la-map-marker form-icon" />
                              <input className="form-control" type="text" placeholder="Where are you going?" />
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
                            <label className="label-text">Adults (18+)</label>
                            <div className="form-group select2-container-wrapper">
                              <div className="select-contain w-auto">
                                <select className="select-contain-select">
                                  <option value={0}>Select Adults</option>
                                  <option value={1}>1 Adult</option>
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
                        {/* end col-lg-3 */}
                        <div className="col-lg-3 col-sm-6">
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
                        {/* end col-lg-3 */}
                      </form>
                    </div>
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
                          <h3 className="title font-size-15 pb-3">Tour Categories</h3>
                          <div className="custom-checkbox d-inline-block me-4">
                            <input type="checkbox" className="form-check-input" id="cat1" />
                            <label htmlFor="cat1">City trips</label>
                          </div>
                          <div className="custom-checkbox d-inline-block me-4">
                            <input type="checkbox" className="form-check-input" id="cat2" />
                            <label htmlFor="cat2">Outdoors</label>
                          </div>
                          <div className="custom-checkbox d-inline-block me-4">
                            <input type="checkbox" className="form-check-input" id="cat3" />
                            <label htmlFor="cat3">Sightseeing Tours</label>
                          </div>
                          <div className="custom-checkbox d-inline-block me-4">
                            <input type="checkbox" className="form-check-input" id="cat4" />
                            <label htmlFor="cat4">Eco tourism</label>
                          </div>
                          <div className="custom-checkbox d-inline-block me-4">
                            <input type="checkbox" className="form-check-input" id="cat5" />
                            <label htmlFor="cat5">Escorted tours</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hero-filter-search-btn">
                      <a href="flight-search-result.html" className="theme-btn w-100 text-center margin-top-20px">Modify Search</a>
                    </div>
                  </div>
                  {/* end main-search-input */}
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

      {/* ================================
      END BREADCRUMB AREA
      ================================= */}

      {/* ================================
      START CARD AREA
      ================================= */}
      <section className="card-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-wrap margin-bottom-30px">
                <div className="filter-top d-flex align-items-center justify-content-between pb-4">
                  <div>
                    <h3 className="title font-size-24">2293 Tours found</h3>
                    <p className="font-size-14 line-height-20 pt-1">
                      Book with confidence: No tour booking fees
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
                          Categories
                        </a>
                        <div className="dropdown-menu dropdown-menu-wrap">
                          <div className="dropdown-item">
                            <div className="checkbox-wrap">
                              <div className="custom-checkbox">
                                <input type="checkbox" className="form-check-input" id="catChb1" />
                                <label htmlFor="catChb1">Active Adventures Tours</label>
                              </div>
                              <div className="custom-checkbox">
                                <input type="checkbox" className="form-check-input" id="catChb2" />
                                <label htmlFor="catChb2">Ecotourism</label>
                              </div>
                              <div className="custom-checkbox">
                                <input type="checkbox" className="form-check-input" id="catChb3" />
                                <label htmlFor="catChb3">Group Tours</label>
                              </div>
                              <div className="custom-checkbox">
                                <input type="checkbox" className="form-check-input" id="catChb4" />
                                <label htmlFor="catChb4">Ligula</label>
                              </div>
                              <div className="custom-checkbox">
                                <input type="checkbox" className="form-check-input" id="catChb5" />
                                <label htmlFor="catChb5">Family Tours</label>
                              </div>
                              <div className="custom-checkbox">
                                <input type="checkbox" className="form-check-input" id="catChb6" />
                                <label htmlFor="catChb6">City Tour</label>
                              </div>
                              <div className="custom-checkbox">
                                <input type="checkbox" className="form-check-input" id="catChb7" />
                                <label htmlFor="catChb7">National Park Tours</label>
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
                      <option value={2}>New Tour</option>
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
                  <h3 className="title stroke-shape">Where would like to go?</h3>
                  <div className="sidebar-widget-item">
                    <div className="contact-form-action">
                      <form action="#">
                        <div className="input-box">
                          <label className="label-text">Destination</label>
                          <div className="form-group">
                            <span className="la la-map-marker form-icon" />
                            <input className="form-control" type="text" placeholder="Destination, city, or region" />
                          </div>
                        </div>
                        <div className="input-box">
                          <label className="label-text">From</label>
                          <div className="form-group">
                            <span className="la la-calendar form-icon" />
                            <input className="date-range form-control" type="text" name="daterange-single" />
                          </div>
                        </div>
                        <div className="input-box">
                          <label className="label-text">To</label>
                          <div className="form-group">
                            <span className="la la-calendar form-icon" />
                            <input className="date-range form-control" type="text" name="daterange-single" />
                          </div>
                        </div>
                        <div className="input-box">
                          <label className="label-text">Trip Type</label>
                          <div className="form-group">
                            <div className="select-contain select2-container-wrapper select-contain-shadow w-auto">
                              <select className="select-contain-select">
                                <option value={1}>City Tour</option>
                                <option value={2}>Village Tour</option>
                                <option value={3}>Holiday Tour</option>
                                <option value={4}>Honeymoon Tour</option>
                                <option value={5}>Family Tour</option>
                              </select>
                            </div>
                            {/* end select-contain */}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* end sidebar-widget-item */}
                  <div className="btn-box pt-2">
                    <a href="tour-search-result.html" className="theme-btn">Search Now</a>
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
                  <h3 className="title stroke-shape">Categories</h3>
                  <div className="sidebar-category">
                    <div className="custom-checkbox">
                      <input type="checkbox" className="form-check-input" id="c1" />
                      <label htmlFor="c1">All <span className="font-size-13 ms-1">(1809)</span></label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" className="form-check-input" id="c2" />
                      <label htmlFor="c2">Active Adventure Tours
                        <span className="font-size-13 ms-1">(809)</span></label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" className="form-check-input" id="c3" />
                      <label htmlFor="c3">Ecotourism
                        <span className="font-size-13 ms-1">(504)</span></label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" className="form-check-input" id="c4" />
                      <label htmlFor="c4">Escorted Tours
                        <span className="font-size-13 ms-1">(401)</span></label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" className="form-check-input" id="c5" />
                      <label htmlFor="c5">Group Tours
                        <span className="font-size-13 ms-1">(277)</span></label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" className="form-check-input" id="c6" />
                      <label htmlFor="c6">Ligula <span className="font-size-13 ms-1">(87)</span></label>
                    </div>
                    <div className="collapse" id="categoryMenu">
                      <div className="custom-checkbox">
                        <input type="checkbox" className="form-check-input" id="c7" />
                        <label htmlFor="c7">Family Tours
                          <span className="font-size-13 ms-1">(100)</span></label>
                      </div>
                      <div className="custom-checkbox">
                        <input type="checkbox" className="form-check-input" id="c8" />
                        <label htmlFor="c8">City Trips
                          <span className="font-size-13 ms-1">(58)</span></label>
                      </div>
                      <div className="custom-checkbox">
                        <input type="checkbox" className="form-check-input" id="c9" />
                        <label htmlFor="c9">National Parks Tours
                          <span className="font-size-13 ms-1">(33)</span></label>
                      </div>
                    </div>
                    {/* end collapse */}
                    <a className="btn-text" data-bs-toggle="collapse" href="#categoryMenu" role="button" aria-expanded="false" aria-controls="categoryMenu">
                      <span className="show-more">Show More <i className="la la-angle-down" /></span>
                      <span className="show-less">Show Less <i className="la la-angle-up" /></span>
                    </a>
                  </div>
                </div>
                {/* end sidebar-widget */}
                <div className="sidebar-widget">
                  <h3 className="title stroke-shape">Tour Duration</h3>
                  <div className="sidebar-category">
                    <div className="custom-checkbox">
                      <input type="checkbox" className="form-check-input" id="all" />
                      <label htmlFor="all">All</label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" className="form-check-input" id="full-day" />
                      <label htmlFor="full-day">Full Day</label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" className="form-check-input" id="days-10" />
                      <label htmlFor="days-10">10 Days</label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" className="form-check-input" id="days-7" />
                      <label htmlFor="days-7">7 Days</label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" className="form-check-input" id="days-5" />
                      <label htmlFor="days-5">5 Days</label>
                    </div>
                    <div className="collapse" id="tourDurationMenu">
                      <div className="custom-checkbox">
                        <input type="checkbox" className="form-check-input" id="days-3" />
                        <label htmlFor="days-3">3 Days</label>
                      </div>
                      <div className="custom-checkbox">
                        <input type="checkbox" className="form-check-input" id="days-2" />
                        <label htmlFor="days-2">2 Days</label>
                      </div>
                      <div className="custom-checkbox">
                        <input type="checkbox" className="form-check-input" id="hours-8" />
                        <label htmlFor="hours-8">8 Hours</label>
                      </div>
                      <div className="custom-checkbox">
                        <input type="checkbox" className="form-check-input" id="hours-3-5" />
                        <label htmlFor="hours-3-5">3-5 Hours</label>
                      </div>
                      <div className="custom-checkbox">
                        <input type="checkbox" className="form-check-input" id="hours-3" />
                        <label htmlFor="hours-3">3 Hours</label>
                      </div>
                    </div>
                    {/* end collapse */}
                    <a className="btn-text" data-bs-toggle="collapse" href="#tourDurationMenu" role="button" aria-expanded="false" aria-controls="tourDurationMenu">
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
              {/* API TOUR DATA START */}
              <div className="card-item card-item-list" data-tour-id={44}>
                <div className="card-img">
                  <a href="tour-details.html?id=44" className="d-block">
                    <img src="https://admin.travelvela.com/tour_packages/YJe1716379116.png" alt="Darjeeling Tour" />
                  </a>
                  <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Save for Later">
                    <i className="la la-heart-o" />
                  </div>
                  <span className="badge">Featured</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html?id=44">Discover a Journey Through The Queen Of Hills Darjeeling (3
                      Days and 2 Nights)</a>
                  </h3>
                  <p className="card-meta mt-2">
                    <i className="la la-map-marker" />Darjeeling, West Bengal
                  </p>
                  <div className="border-top mt-2">
                    {/* Tour Details */}
                    <div className="tour-details-summary mt-2">
                      {/* Availability */}
                      <div className="availability-info" style={{ fontSize: 15 }}>
                        <p>
                          <i className="la la-user me-1" /> From 1 to 100 Peoples
                        </p>
                      </div>
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                      <span className="tour-hour">
                        <i className="la la-clock-o me-1" />3 days 2 nights
                      </span>
                    </div>
                    <div className="card-price d-flex align-items-end justify-content-between">
                      <div className="pricing-info">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">৳10,190</span>
                        </p>
                      </div>
                      <a href="tour-details.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* API TOUR DATA END */}
              {/* EXISTING SAMPLE TOURS START */}
              <div className="card-item card-item-list">
                <div className="card-img">
                  <a href="tour-details.html" className="d-block">
                    <img src="images/img9.jpg" alt="Destination-img" />
                  </a>
                  <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Save for Later">
                    <i className="la la-heart-o" />
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html?id=44">Discover a Journey Through The Queen Of Hills Darjeeling (3
                      Days and 2 Nights)</a>
                  </h3>
                  <p className="card-meta mt-2">
                    <i className="la la-map-marker" />Darjeeling, West Bengal
                  </p>
                  <div className="border-top mt-2">
                    {/* Tour Details */}
                    <div className="tour-details-summary mt-2">
                      {/* Availability */}
                      <div className="availability-info" style={{ fontSize: 15 }}>
                        <p>
                          <i className="la la-user me-1" /> From 1 to 100 Peoples
                        </p>
                      </div>
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                      <span className="tour-hour">
                        <i className="la la-clock-o me-1" />3 days 2 nights
                      </span>
                    </div>
                    <div className="card-price d-flex align-items-end justify-content-between">
                      <div className="pricing-info">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">৳10,190</span>
                        </p>
                      </div>
                      <a href="tour-details.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-item */}
              <div className="card-item card-item-list">
                <div className="card-img">
                  <a href="tour-details.html" className="d-block">
                    <img src="images/img10.jpg" alt="Destination-img" />
                  </a>
                  <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Save for Later">
                    <i className="la la-heart-o" />
                  </div>
                  <span className="badge">Bestseller</span>
                  <span className="badge badge-ribbon">24% Save</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html?id=44">Discover a Journey Through The Queen Of Hills Darjeeling (3
                      Days and 2 Nights)</a>
                  </h3>
                  <p className="card-meta mt-2">
                    <i className="la la-map-marker" />Darjeeling, West Bengal
                  </p>
                  <div className="border-top mt-2">
                    {/* Tour Details */}
                    <div className="tour-details-summary mt-2">
                      {/* Availability */}
                      <div className="availability-info" style={{ fontSize: 15 }}>
                        <p>
                          <i className="la la-user me-1" /> From 1 to 100 Peoples
                        </p>
                      </div>
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                      <span className="tour-hour">
                        <i className="la la-clock-o me-1" />3 days 2 nights
                      </span>
                    </div>
                    <div className="card-price d-flex align-items-end justify-content-between">
                      <div className="pricing-info">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">৳10,190</span>
                        </p>
                      </div>
                      <a href="tour-details.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-item */}
              <div className="card-item card-item-list">
                <div className="card-img">
                  <a href="tour-details.html" className="d-block">
                    <img src="images/img9.jpg" alt="Destination-img" />
                  </a>
                  <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Save for Later">
                    <i className="la la-heart-o" />
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html?id=44">Discover a Journey Through The Queen Of Hills Darjeeling (3
                      Days and 2 Nights)</a>
                  </h3>
                  <p className="card-meta mt-2">
                    <i className="la la-map-marker" />Darjeeling, West Bengal
                  </p>
                  <div className="border-top mt-2">
                    {/* Tour Details */}
                    <div className="tour-details-summary mt-2">
                      {/* Availability */}
                      <div className="availability-info" style={{ fontSize: 15 }}>
                        <p>
                          <i className="la la-user me-1" /> From 1 to 100 Peoples
                        </p>
                      </div>
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                      <span className="tour-hour">
                        <i className="la la-clock-o me-1" />3 days 2 nights
                      </span>
                    </div>
                    <div className="card-price d-flex align-items-end justify-content-between">
                      <div className="pricing-info">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">৳10,190</span>
                        </p>
                      </div>
                      <a href="tour-details.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-item */}
              <div className="card-item card-item-list">
                <div className="card-img">
                  <a href="tour-details.html" className="d-block">
                    <img src="images/img10.jpg" alt="Destination-img" />
                  </a>
                  <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Save for Later">
                    <i className="la la-heart-o" />
                  </div>
                  <span className="badge">Bestseller</span>
                  <span className="badge badge-ribbon">24% Save</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html?id=44">Discover a Journey Through The Queen Of Hills Darjeeling (3
                      Days and 2 Nights)</a>
                  </h3>
                  <p className="card-meta mt-2">
                    <i className="la la-map-marker" />Darjeeling, West Bengal
                  </p>
                  <div className="border-top mt-2">
                    {/* Tour Details */}
                    <div className="tour-details-summary mt-2">
                      {/* Availability */}
                      <div className="availability-info" style={{ fontSize: 15 }}>
                        <p>
                          <i className="la la-user me-1" /> From 1 to 100 Peoples
                        </p>
                      </div>
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                      <span className="tour-hour">
                        <i className="la la-clock-o me-1" />3 days 2 nights
                      </span>
                    </div>
                    <div className="card-price d-flex align-items-end justify-content-between">
                      <div className="pricing-info">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">৳10,190</span>
                        </p>
                      </div>
                      <a href="tour-details.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-item */}
              <div className="card-item card-item-list">
                <div className="card-img">
                  <a href="tour-details.html" className="d-block">
                    <img src="images/img11.jpg" alt="Destination-img" />
                  </a>
                  <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Save for Later">
                    <i className="la la-heart-o" />
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html?id=44">Discover a Journey Through The Queen Of Hills Darjeeling (3
                      Days and 2 Nights)</a>
                  </h3>
                  <p className="card-meta mt-2">
                    <i className="la la-map-marker" />Darjeeling, West Bengal
                  </p>
                  <div className="border-top mt-2">
                    {/* Tour Details */}
                    <div className="tour-details-summary mt-2">
                      {/* Availability */}
                      <div className="availability-info" style={{ fontSize: 15 }}>
                        <p>
                          <i className="la la-user me-1" /> From 1 to 100 Peoples
                        </p>
                      </div>
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                      <span className="tour-hour">
                        <i className="la la-clock-o me-1" />3 days 2 nights
                      </span>
                    </div>
                    <div className="card-price d-flex align-items-end justify-content-between">
                      <div className="pricing-info">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">৳10,190</span>
                        </p>
                      </div>
                      <a href="tour-details.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-item */}
              <div className="card-item card-item-list">
                <div className="card-img">
                  <a href="tour-details.html" className="d-block">
                    <img src="images/img12.jpg" alt="Destination-img" />
                  </a>
                  <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Save for Later">
                    <i className="la la-heart-o" />
                  </div>
                  <span className="badge">Featured</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html?id=44">Discover a Journey Through The Queen Of Hills Darjeeling (3
                      Days and 2 Nights)</a>
                  </h3>
                  <p className="card-meta mt-2">
                    <i className="la la-map-marker" />Darjeeling, West Bengal
                  </p>
                  <div className="border-top mt-2">
                    {/* Tour Details */}
                    <div className="tour-details-summary mt-2">
                      {/* Availability */}
                      <div className="availability-info" style={{ fontSize: 15 }}>
                        <p>
                          <i className="la la-user me-1" /> From 1 to 100 Peoples
                        </p>
                      </div>
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                      <span className="tour-hour">
                        <i className="la la-clock-o me-1" />3 days 2 nights
                      </span>
                    </div>
                    <div className="card-price d-flex align-items-end justify-content-between">
                      <div className="pricing-info">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">৳10,190</span>
                        </p>
                      </div>
                      <a href="tour-details.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-item */}
              <div className="card-item card-item-list">
                <div className="card-img">
                  <a href="tour-details.html" className="d-block">
                    <img src="images/img13.jpg" alt="Destination-img" />
                  </a>
                  <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Save for Later">
                    <i className="la la-heart-o" />
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html?id=44">Discover a Journey Through The Queen Of Hills Darjeeling (3
                      Days and 2 Nights)</a>
                  </h3>
                  <p className="card-meta mt-2">
                    <i className="la la-map-marker" />Darjeeling, West Bengal
                  </p>
                  <div className="border-top mt-2">
                    {/* Tour Details */}
                    <div className="tour-details-summary mt-2">
                      {/* Availability */}
                      <div className="availability-info" style={{ fontSize: 15 }}>
                        <p>
                          <i className="la la-user me-1" /> From 1 to 100 Peoples
                        </p>
                      </div>
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                      <span className="tour-hour">
                        <i className="la la-clock-o me-1" />3 days 2 nights
                      </span>
                    </div>
                    <div className="card-price d-flex align-items-end justify-content-between">
                      <div className="pricing-info">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">৳10,190</span>
                        </p>
                      </div>
                      <a href="tour-details.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-item */}
              <div className="card-item card-item-list">
                <div className="card-img">
                  <a href="tour-details.html" className="d-block">
                    <img src="images/img14.jpg" alt="Destination-img" />
                  </a>
                  <div className="add-to-wishlist icon-element" data-bs-toggle="tooltip" data-placement="top" title="Save for Later">
                    <i className="la la-heart-o" />
                  </div>
                  <span className="badge">Featured</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <a href="tour-details.html?id=44">Discover a Journey Through The Queen Of Hills Darjeeling (3
                      Days and 2 Nights)</a>
                  </h3>
                  <p className="card-meta mt-2">
                    <i className="la la-map-marker" />Darjeeling, West Bengal
                  </p>
                  <div className="border-top mt-2">
                    {/* Tour Details */}
                    <div className="tour-details-summary mt-2">
                      {/* Availability */}
                      <div className="availability-info" style={{ fontSize: 15 }}>
                        <p>
                          <i className="la la-user me-1" /> From 1 to 100 Peoples
                        </p>
                      </div>
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                      <span className="tour-hour">
                        <i className="la la-clock-o me-1" />3 days 2 nights
                      </span>
                    </div>
                    <div className="card-price d-flex align-items-end justify-content-between">
                      <div className="pricing-info">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">৳10,190</span>
                        </p>
                      </div>
                      <a href="tour-details.html" className="theme-btn">Check Availability<i className="la la-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-item */}
            </div>
            {/* end col-lg-8 */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-lg-12">
              <div className="btn-box mt-3 text-center">
                <button type="button" className="theme-btn">
                  <i className="la la-refresh me-1" />Load More
                </button>
                <p className="font-size-13 pt-2">Showing 1 - 9 of 2293 Tours</p>
              </div>
              {/* end btn-box */}
            </div>
            {/* end col-lg-12 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* ================================
      END CARD AREA
      ================================= */}

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

export default TourSearchResultComponent;
