import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/hero-filter.css';


export default function HeroFilter() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const [flyingFrom, setFlyingFrom] = useState({ airport: 'Dhaka', details: 'Bangladesh, Hazrat Shahjalal International Airport (DAC)', code: 'DAC' });
  const [flyingTo, setFlyingTo] = useState({ airport: 'Dhaka', details: 'Bangladesh, Hazrat Shahjalal International Airport (DAC)', code: 'DAC' });

  const wrapperRef = useRef(null);

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const handleItemClick = (setter, item) => {
    setter(item);
    setActiveDropdown(null);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    if (window.$ && window.$.fn && window.$.fn.select2) {
      window.$('.select-contain-select').select2({
        minimumResultsForSearch: -1,
        width: 'resolve'
      });
    }
  }, []);

  const airports = [
    { airport: 'Dhaka', details: 'Bangladesh, Hazrat Shahjalal International Airport (DAC)', code: 'DAC' },
    { airport: 'New York', details: 'United States, John F. Kennedy International Airport (JFK)', code: 'JFK' },
    { airport: 'London', details: 'United Kingdom, Heathrow Airport (LHR)', code: 'LHR' },
    { airport: 'Dubai', details: 'United Arab Emirates, Dubai International Airport (DXB)', code: 'DXB' },
    { airport: 'Tokyo', details: 'Japan, Haneda Airport (HND)', code: 'HND' },
  ];

  return (
    <div className="hero-filter">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-filter-inner">
              {/* end hero-content */}
              <div className="section-tab hero-filter-tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center active" id="flight-tab" data-bs-toggle="tab" href="#flight" role="tab" aria-controls="flight" aria-selected="true">
                      <i className="la la-plane me-1" />Flights
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" id="hotel-tab" data-bs-toggle="tab" href="#hotel" role="tab" aria-controls="hotel" aria-selected="false">
                      <i className="la la-hotel me-1" />Hotels
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" id="tour-tab" data-bs-toggle="tab" href="#tour" role="tab" aria-controls="tour" aria-selected="false">
                      <i className="la la-globe me-1" />Tours
                    </a>
                  </li>
                </ul>
              </div>
              {/* end section-tab */}
              <div className="tab-content search-fields-container" id="myTabContent">
                <div className="tab-pane fade show active" id="flight" role="tabpanel" aria-labelledby="flight-tab">
                  <div className="section-tab section-tab-2 pb-2 flight-subtab">
                    <ul className="nav nav-tabs" id="myTab3" role="tablist" style={{ justifyContent: 'left' }}>
                      <li className="nav-item">
                        <a className="nav-link active" id="one-way-tab" data-bs-toggle="tab" href="#one-way" role="tab" aria-controls="one-way" aria-selected="true">One way</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="round-trip-tab" data-bs-toggle="tab" href="#round-trip" role="tab" aria-controls="round-trip" aria-selected="false">Round-trip</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="multi-city-tab" data-bs-toggle="tab" href="#multi-city" role="tab" aria-controls="multi-city" aria-selected="false">Multi-city</a>
                      </li>
                    </ul>
                  </div>
                  {/* end section-tab */}
                  <div className="tab-content" id="myTabContent3">
                    <div className="tab-pane fade show active" id="one-way" role="tabpanel" aria-labelledby="one-way-tab">
                      <div className="contact-form-action">
                        <form action="#" className="row align-items-center" ref={wrapperRef}>
                          <div className="col-lg-6 pe-0">
                            <div className="s-select-widget-group-single">
                              <div className="search-select-widget">
                                <label className="label-text">Flying from</label>
                                <div className="search-select-input" onClick={() => toggleDropdown('dropdown1')}>
                                  <div className="s-select-input-data">
                                    <div className="s-select-input-data-right">
                                      <span><i className="la la-map-marker form-icon" />{flyingFrom.airport}</span>
                                      <p>{flyingFrom.details}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className={`s-select-widget-dropdown ${activeDropdown === 'dropdown1' ? 'show' : ''}`} id="dropdown1">
                                  <div className="s-widget-dropdown-item" onClick={() => handleItemClick(setFlyingFrom, { airport: 'Dhaka', details: 'Bangladesh, Hazrat Shahjalal International Airport (DAC)', code: 'DAC' })}>
                                    <div className="s-widget-dropdown-data">
                                      <div className="s-widget-dropdown-data-right">
                                        <span><i className="la la-map-marker form-icon" />Dhaka</span>
                                        <p>Bangladesh, Hazrat Shahjalal International Airport (DAC)</p>
                                      </div>
                                      <h6>DAC</h6>
                                    </div>
                                  </div>
                                  {airports.map(item => (
                                    <div key={item.code} className="s-widget-dropdown-item" onClick={() => handleItemClick(setFlyingFrom, item)}>
                                      <div className="s-widget-dropdown-data">
                                        <div className="s-widget-dropdown-data-right">
                                          <span><i className="la la-map-marker form-icon" />{item.airport}</span>
                                          <p>{item.details}</p>
                                        </div>
                                        <h6>{item.code}</h6>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="select-widget-middle-icon"><i className="la la-exchange" /></div>
                              <div className="search-select-widget">
                                <label className="label-text">Flying to</label>
                                <div className="search-select-input" onClick={() => toggleDropdown('dropdown2')}>
                                  <div className="s-select-input-data">
                                    <div className="s-select-input-data-right">
                                      <span><i className="la la-map-marker form-icon" />{flyingTo.airport}</span>
                                      <p>{flyingTo.details}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className={`s-select-widget-dropdown ${activeDropdown === 'dropdown2' ? 'show' : ''}`} id="dropdown2">
                                  {airports.map(item => (
                                    <div key={item.code} className="s-widget-dropdown-item" onClick={() => handleItemClick(setFlyingTo, item)}>
                                      <div className="s-widget-dropdown-data">
                                        <div className="s-widget-dropdown-data-right">
                                          <span><i className="la la-map-marker form-icon" />{item.airport}</span>
                                          <p>{item.details}</p>
                                        </div>
                                        <h6>{item.code}</h6>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-2">
                            <div className="input-box">
                              <label className="label-text">Departing</label>
                              <div className="form-group">
                                <span className="la la-calendar form-icon" />
                                <DatePicker
                                  selected={departDate}
                                  onChange={date => setDepartDate(date)}
                                  className="date-range form-control"
                                  placeholderText="Departing"
                                  dateFormat="MM/dd/yyyy"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-2">
                            <div className="input-box">
                              <label className="label-text">Traveler</label>
                              <div className="form-group">
                                <div className="dropdown dropdown-contain gty-container">
                  <a className="dropdown-toggle dropdown-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    <span className="adult" data-text="Adult" data-text-multi="Adults">0 Adult</span> - <span className="children" data-text="Child" data-text-multi="Children">0 Child</span>
                  </a>
                                  <div className="dropdown-menu dropdown-menu-wrap">
                                    <div className="dropdown-item">
                                      <div className="qty-box d-flex align-items-center justify-content-between">
                                        <label>Adults</label>
                                        <div className="qtyBtn d-flex align-items-center">
                                          <div className="qtyDec"><i className="la la-minus" /></div>
                                          <input type="text" name="adult_number" defaultValue="0" />
                                          <div className="qtyInc"><i className="la la-plus" /></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="dropdown-item">
                                      <div className="qty-box d-flex align-items-center justify-content-between">
                                        <label>Children</label>
                                        <div className="qtyBtn d-flex align-items-center">
                                          <div className="qtyDec"><i className="la la-minus" /></div>
                                          <input type="text" name="children_number" defaultValue="0" />
                                          <div className="qtyInc"><i className="la la-plus" /></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="dropdown-item">
                                      <div className="qty-box d-flex align-items-center justify-content-between">
                                        <label>Infants</label>
                                        <div className="qtyBtn d-flex align-items-center">
                                          <div className="qtyDec"><i className="la la-minus" /></div>
                                          <input type="text" name="infants_number" defaultValue="0" />
                                          <div className="qtyInc"><i className="la la-plus" /></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-2">
                            <div className="input-box">
                              <label className="label-text">Class</label>
                              <div className="form-group select-contain select2-container-wrapper w-auto">
                                <select className="select-contain-select" defaultValue="1">
                                  <option value="1">Economy</option>
                                  <option value="2">Business</option>
                                  <option value="3">First class</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="hero-filter-search-btn">
                            <a href="/flight-search-result.html" className="theme-btn w-100 text-center margin-top-20px">Search Now</a>
                          </div>
                        </form>
                      </div>

                      <div className="tab-pane fade" id="round-trip" role="tabpanel" aria-labelledby="round-trip-tab">
                        <div className="contact-form-action">
                          {/* round-trip simplified: reuse same structure or extend as needed */}
                          <form action="#" className="row align-items-center">
                            <div className="col-lg-6 pe-0">
                              {/* ...similar widgets... */}
                            </div>
                          </form>
                        </div>
                      </div>

                      {/* multi-city, advanced-wrap and other panes omitted for brevity but structure preserved in original HTML */}
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="hotel" role="tabpanel" aria-labelledby="hotel-tab">
                  <div className="contact-form-action">
                    <form action="#" className="row align-items-center">
                      <div className="col-lg-3 pe-0">
                        <div className="input-box">
                          <label className="label-text">Destination / Hotel name</label>
                          <div className="form-group">
                            <span className="la la-map-marker form-icon" />
                            <input className="form-control" type="text" placeholder="Enter city or property" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 pe-0">
                        <div className="input-box">
                          <label className="label-text">Check in</label>
                          <div className="form-group">
                            <span className="la la-calendar form-icon" />
                            <input className="date-range form-control" type="text" name="daterange-single" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 pe-0">
                        <div className="input-box">
                          <label className="label-text">Check out</label>
                          <div className="form-group">
                            <span className="la la-calendar form-icon" />
                            <input className="date-range form-control" type="text" name="daterange-single" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="input-box">
                          <label className="label-text">Guests and Rooms</label>
                          <div className="form-group">
                            <div className="dropdown dropdown-contain gty-container">
                              <a className="dropdown-toggle dropdown-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                <span className="adult" data-text="Adult" data-text-multi="Adults">0 Adult</span> - <span className="children" data-text="Child" data-text-multi="Children">0 Child</span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-wrap">
                                <div className="dropdown-item">
                                  <div className="qty-box d-flex align-items-center justify-content-between">
                                    <label>Rooms</label>
                                    <div className="qtyBtn d-flex align-items-center">
                                      <div className="qtyDec"><i className="la la-minus" /></div>
                                      <input type="text" name="room_number" defaultValue="0" className="qty-input" />
                                      <div className="qtyInc"><i className="la la-plus" /></div>
                                    </div>
                                  </div>
                                </div>
                                {/* other dropdown items... */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div className="hero-filter-search-btn">
                      <a href="hotel-search-result.html" className="theme-btn">Search Now</a>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="tour" role="tabpanel" aria-labelledby="tour-tab">
                  <div className="contact-form-action">
                    <form action="#" className="row align-items-center">
                      <div className="col-lg-4 pe-0">
                        <div className="input-box">
                          <label className="label-text">Where would like to go?</label>
                          <div className="form-group">
                            <span className="la la-map-marker form-icon" />
                            <input className="form-control" type="text" placeholder="Destination, city, or region" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 pe-0">
                        <div className="input-box">
                          <label className="label-text">From</label>
                          <div className="form-group">
                            <span className="la la-calendar form-icon" />
                            <input className="date-range form-control" type="text" name="daterange-single" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="input-box">
                          <label className="label-text">To</label>
                          <div className="form-group">
                            <span className="la la-calendar form-icon" />
                            <input className="date-range form-control" type="text" name="daterange-single" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="advanced-wrap">
                    <a className="btn collapse-btn theme-btn-hover-gray font-size-15" data-bs-toggle="collapse" href="#collapseSeven" role="button" aria-expanded="false" aria-controls="collapseSeven">
                      Advanced search <i className="la la-angle-down ms-1" />
                    </a>
                    <div className="pt-3 collapse" id="collapseSeven">
                      <div className="slider-range-wrap">
                        <div className="price-slider-amount padding-bottom-20px">
                          <label htmlFor="amount" className="filter__label">Price Range</label>
                          <input type="text" id="amount" className="amounts" />
                        </div>
                        <div id="slider-range" />
                      </div>
                      <div className="checkbox-wrap padding-top-30px">
                        <h3 className="title font-size-15 pb-3">Tour Categories</h3>
                        <div className="custom-checkbox d-inline-block me-4">
                          <input type="checkbox" className="form-check-input" id="tourChb1" />
                          <label htmlFor="tourChb1">Active Adventure Tours</label>
                        </div>
                        {/* additional checkboxes omitted for brevity */}
                      </div>
                    </div>
                  </div>
                  <div className="hero-filter-search-btn">
                    <a href="tour-search-result.html" className="theme-btn">Search Now</a>
                  </div>
                </div>
                {/* end tab-pane */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
