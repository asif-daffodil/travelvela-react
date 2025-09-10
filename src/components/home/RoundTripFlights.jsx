import React from 'react';

const RoundTripFlights = () => {
    return (
  <section className="round-trip-flight section-gap">
  <div className="container">
  <div className="row">
          <div className="col-lg-12">
            <div className="theme-section-head text-center mb-0">
              <span> Destination </span>
              <h3>
                Most Popular Round-trip <br />
                Flight Destinations
              </h3>
            </div>
            {/* end section-heading */}
          </div>
          {/* end col-lg-12 */}
        </div>
  {/* end row */}
        <div className="row padding-top-40px">
          <div className="col-lg-12">
            <div className="flight-filter-tab text-center">
              <div className="section-tab section-tab-3">
                <ul
                  className="nav nav-tabs justify-content-center"
                  id="myTab4"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="new-york-tab"
                      data-bs-toggle="tab"
                      href="#new-york"
                      role="tab"
                      aria-controls="new-york"
                      aria-selected="false"
                    >
                      New York
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="hong-kong-tab"
                      data-bs-toggle="tab"
                      href="#hong-kong"
                      role="tab"
                      aria-controls="hong-kong"
                      aria-selected="false"
                    >
                      Hong Kong
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="beijing-tab"
                      data-bs-toggle="tab"
                      href="#beijing"
                      role="tab"
                      aria-controls="beijing"
                      aria-selected="false"
                    >
                      Beijing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tokyo-tab"
                      data-bs-toggle="tab"
                      href="#tokyo"
                      role="tab"
                      aria-controls="tokyo"
                      aria-selected="false"
                    >
                      Tokyo
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="seoul-tab"
                      data-bs-toggle="tab"
                      href="#seoul"
                      role="tab"
                      aria-controls="seoul"
                      aria-selected="false"
                    >
                      Seoul
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- end section-tab --> */}
            {/* </div>
            <!-- end flight-filter-tab --> */}
            <div className="popular-round-trip-wrap padding-top-40px">
              <div className="tab-content" id="myTabContent4">
                <div
                  className="tab-pane fade show active"
                  id="new-york"
                  role="tabpanel"
                  aria-labelledby="new-york-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              New York<i className="la la-exchange mx-2"></i>Los
                              Angeles
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$340</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img2.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              New York<i className="la la-exchange mx-2"></i
                              >Barcelona
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$740</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img3.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              New York<i className="la la-exchange mx-2"></i>Dallas
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$140</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img4.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              New York<i className="la la-exchange mx-2"></i>San
                              Francisco
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$340</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img5.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              New York<i className="la la-exchange mx-2"></i>Miami
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$100</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img6.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              New York<i className="la la-exchange mx-2"></i>London
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$640</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                  </div>
                </div>
                {/* <!-- end tab-pane --> */}
                <div
                  className="tab-pane fade"
                  id="hong-kong"
                  role="tabpanel"
                  aria-labelledby="hong-kong-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Hong Kong<i className="la la-exchange mx-2"></i
                              >Singapore
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$340</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img2.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Hong Kong<i className="la la-exchange mx-2"></i>Tokyo
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$740</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img3.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Hong Kong<i className="la la-exchange mx-2"></i>Seoul
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$140</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img4.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Hong Kong<i className="la la-exchange mx-2"></i>Manila
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$340</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img5.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Hong Kong<i className="la la-exchange mx-2"></i>Nepal
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$100</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img6.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Hong Kong<i className="la la-exchange mx-2"></i
                              >Beijing
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$640</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                  </div>
                </div>
                {/* <!-- end tab-pane --> */}
                <div
                  className="tab-pane fade"
                  id="seoul"
                  role="tabpanel"
                  aria-labelledby="seoul-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Seoul<i className="la la-exchange mx-2"></i>Nepal
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$340</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img2.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Seoul<i className="la la-exchange mx-2"></i>Taipei
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$740</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img3.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Seoul<i className="la la-exchange mx-2"></i>Beijing
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$140</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img4.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Seoul<i className="la la-exchange mx-2"></i>Tokyo
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$340</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img5.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Seoul<i className="la la-exchange mx-2"></i>Hong kong
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$100</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img6.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Seoul<i className="la la-exchange mx-2"></i>Bangkok
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$640</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                  </div>
                </div>
                {/* <!-- end tab-pane --> */}
                <div
                  className="tab-pane fade"
                  id="tokyo"
                  role="tabpanel"
                  aria-labelledby="tokyo-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Tokyo<i className="la la-exchange mx-2"></i>Taipei
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$340</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img2.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Tokyo<i className="la la-exchange mx-2"></i>Taipei
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$740</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img3.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Tokyo<i className="la la-exchange mx-2"></i>Beijing
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$140</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img4.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Tokyo<i className="la la-exchange mx-2"></i>Tokyo
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$340</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img5.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Tokyo<i className="la la-exchange mx-2"></i>Hong kong
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$100</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img6.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Tokyo<i className="la la-exchange mx-2"></i>Hanoi
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$640</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                  </div>
                </div>
                {/* <!-- end tab-pane --> */}
                <div
                  className="tab-pane fade"
                  id="beijing"
                  role="tabpanel"
                  aria-labelledby="beijing-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Beijing<i className="la la-exchange mx-2"></i>Taipei
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$340</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img2.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Beijing<i className="la la-exchange mx-2"></i>Taipei
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$740</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img3.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Beijing<i className="la la-exchange mx-2"></i>Beijing
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$140</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img4.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Beijing<i className="la la-exchange mx-2"></i>Tokyo
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$340</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img5.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Beijing<i className="la la-exchange mx-2"></i>Hong
                              kong
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$100</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                    <div className="col-lg-4 responsive-column">
                      <div className="deal-card">
                        <div className="deal-title d-flex align-items-center">
                          <img
                            src="images/airline-img6.png"
                            alt="air-line-img"
                          />
                          <h3 className="deal__title">
                            <a
                              href="flight-single.html"
                              className="d-flex align-items-center"
                            >
                              Beijing<i className="la la-exchange mx-2"></i>Hanoi
                            </a>
                          </h3>
                        </div>
                        <p className="deal__meta">Tue, Jul 14-Fri, Jul 24</p>
                        <div
                          className="deal-action-box d-flex align-items-center justify-content-between"
                        >
                          <div className="price-box d-flex align-items-center">
                            <span className="price__from me-1">From</span
                            ><span className="price__num">$640</span>
                          </div>
                          <a href="flight-single.html" className="btn-text"
                            >See details<i className="la la-angle-right"></i
                          ></a>
                        </div>
                      </div>
                      {/* <!-- end deal-card --> */}
                    </div>
                    {/* <!-- end col-lg-4 --> */}
                  </div>
                </div>
                {/* <!-- end tab-pane --> */}
              </div>
              {/* <!-- end tab-content --> */}
              <div
                className="tab-content-info d-flex justify-content-between align-items-center"
              >
                <p className="font-size-15">
                  <i className="la la-question-circle me-1"></i>Average round-trip
                  price per person, taxes and fees included.
                </p>
                <a href="#" className="btn-text font-size-15"
                  >Discover More <i className="la la-angle-right"></i
                ></a>
              </div>
              {/* <!-- end tab-content-info --> */}
            </div>
          </div>
          {/* <!-- end col-lg-12 --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </div>
    </section>
    );
};

export default RoundTripFlights;