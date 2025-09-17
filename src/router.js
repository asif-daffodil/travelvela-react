import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import BlogSidebar from './pages/BlogSidebar.jsx'
import Layout1 from './layouts/layout-1.jsx'
import Layout2 from './layouts/layout-2.jsx'
import BlogSingle from './pages/BlogSingle.jsx'
import Checkout from './pages/Checkout.jsx'
import Contact from './pages/Contact.jsx'
import Destinations from './pages/Destinations.jsx'
import Faq from './pages/Faq.jsx'
import FlightBooking from './pages/FlightBooking.jsx'
import FlightSearchResult from './pages/FlightSearchResult.jsx'
import FlightSingle from './pages/FlightSingle.jsx'
import Gallery from './pages/Gallery.jsx'
import HotelBooking from './pages/HotelBooking.jsx'
import HotelSearchResult from './pages/HotelSearchResult.jsx'
import HotelSingle from './pages/HotelSingle.jsx'
import Page404 from './pages/Page404.jsx'
import PaymentComplete from './pages/PaymentComplete.jsx'
import PaymentReceived from './pages/PaymentReceived.jsx'
import Pricing from './pages/Pricing.jsx'
import Recover from './pages/Recover.jsx'
import Services from './pages/Services.jsx'
import TourBooking from './pages/TourBooking.jsx'
import TourDetails from './pages/TourDetails.jsx'
import VerifyEmail from './pages/VerifyEmail.jsx'


import TourSearchResult from './pages/TourSearchResult.jsx'
import Layout3 from './layouts/layout-3.jsx';
import UserDashboard from './pages/UserDashboard.jsx'
import UserDashboardBooking from './pages/UserDashboardBooking.jsx'
import UserDashboardFlightBookingDetails from './pages/UserDashboardFlightBookingDetails.jsx'
import UserDashboardHotelBookingDetails from './pages/UserDashboardHotelBookingDetails.jsx'
import UserDashboardProfile from './pages/UserDashboardProfile.jsx'
import UserDashboardReviews from './pages/UserDashboardReviews.jsx'
import UserDashboardWishlist from './pages/UserDashboardWishlist.jsx'
import UserDashboardSettings from './pages/UserDashboardSettings.jsx'
import UserProfile from './pages/UserProfile.jsx'

// Router configuration using React Router data APIs
const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(Layout1),
    children: [
      { index: true, element: React.createElement(Home) },
      { path: 'destinations', element: React.createElement(Destinations) },
    ],
  },
  {
    path: 'verify-email',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(VerifyEmail) },
    ],
  },
  {
    path: 'about',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(About) },
    ],
  },
  {
    path: 'blog-sidebar',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(BlogSidebar) },
    ],
  },
  {
    path: 'blog-single',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(BlogSingle) },
    ],
  },
  {
    path: 'checkout',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(Checkout) },
    ],
  },
  {
    path: 'contact',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(Contact) },
    ],
  },
  {
    path: 'faq',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(Faq) },
    ],
  },
  {
    path: 'flight-booking',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(FlightBooking) },
    ],
  },
  {
    path: 'flight-search-result',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(FlightSearchResult) },
    ],
  },
  {
    path: 'flight-single',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(FlightSingle) },
    ],
  },
  {
    path: 'gallery',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(Gallery) },
    ],
  },
  {
    path: 'pricing',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(Pricing) },
    ],
  },
  {
    path: 'services',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(Services) },
    ],
  },
  {
    path: 'recover',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(Recover) },
    ],
  },
  {
    path: 'hotel-booking',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(HotelBooking) },
    ],
  },
  {
    path: 'hotel-search-result',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(HotelSearchResult) },
    ],
  },
  {
    path: 'hotel-single',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(HotelSingle) },
    ],
  },
  {
    path: 'tour-booking',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(TourBooking) },
    ],
  },
  {
    path: 'tour-details',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(TourDetails) },
    ],
  },

  {
    path: 'tour-search-result',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(TourSearchResult) },
    ],
  },

  // User Dashboard Booking Route
  {
    path: 'user-dashboard',
    element: React.createElement(Layout3),
    children: [
  { index: true, element: React.createElement(UserDashboard) }
    ],
  },
  {
    path: 'user-dashboard-booking',
    element: React.createElement(Layout3),
    children: [
      { index: true, element: React.createElement(UserDashboardBooking) },
    ],
  },
  {
    path: 'user-dashboard-booking/user-dashboard-flight-booking-details',
    element: React.createElement(Layout3),
    children: [
      { index: true, element: React.createElement(UserDashboardFlightBookingDetails) },
    ],
  },
  {
    path: 'user-dashboard-booking/user-dashboard-hotel-booking-details',
    element: React.createElement(Layout3),
    children: [
      { index: true, element: React.createElement(UserDashboardHotelBookingDetails) },
    ],
  },
  {
    path: 'user-dashboard-profile',
    element: React.createElement(Layout3),
    children: [
      { index: true, element: React.createElement(UserDashboardProfile) },
    ],
  },
  {
    path: 'user-dashboard-reviews',
    element: React.createElement(Layout3),
    children: [
      { index: true, element: React.createElement(UserDashboardReviews) },
    ],
  },
  {
    path: 'user-dashboard-wishlist',
    element: React.createElement(Layout3),
    children: [
      { index: true, element: React.createElement(UserDashboardWishlist) },
    ],
  },
  {
    path: 'user-dashboard-settings',
    element: React.createElement(Layout3),
    children: [
      { index: true, element: React.createElement(UserDashboardSettings) },
    ],
  },
  {
    path: 'user-profile',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(UserProfile) },
    ],
  },
  {
    path: 'payment-complete',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(PaymentComplete) },
    ],
  },
  {
    path: 'payment-received',
    element: React.createElement(Layout2),
    children: [
      { index: true, element: React.createElement(PaymentReceived) },
    ],
  },
  // Catch-all route for undefined paths -> 404 page
  {
    path: '*',
    element: React.createElement(Layout2),
    children: [
  { path: '*', element: React.createElement(Page404) },
    ],
  },
])

export default router
