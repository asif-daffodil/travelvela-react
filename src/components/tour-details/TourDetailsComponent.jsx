import React from 'react'
import { Link } from 'react-router-dom'

const TourDetailsComponent = () => {
  return (
    <section className="tour-details-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="title">Tour Details</h2>
            <p className="lead">Replace this with the full tour details markup from `tour-details.html`.</p>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="sidebar-widget">
                <h3 className="title">Book This Tour</h3>
                <Link to="/tour-booking" className="theme-btn">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourDetailsComponent
