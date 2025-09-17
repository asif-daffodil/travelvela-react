import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header1 from '../components/header-1'
import Footer from '../components/footer/Footer'
import BackToTop from '../components/layout/BackToTop';
import ScrollToTop from '../components/layout/ScrollToTop';
import SignupModal from '../components/modals/SignupModal';
import LoginModal from '../components/modals/LoginModal';
// CSS files are served from public/css — linked below so they are loaded at runtime

export default function Layout1() {
  return (
    <div>
      {/* vendor CSS from public/css */}
      <ScrollToTop />
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/select2.min.css" />
      <link rel="stylesheet" href="/css/line-awesome.css" />
      <link rel="stylesheet" href="/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
      <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />
      <link rel="stylesheet" href="/css/daterangepicker.css" />
      <link rel="stylesheet" href="/css/animate.min.css" />
      <link rel="stylesheet" href="/css/animated-headline.css" />
      <link rel="stylesheet" href="/css/jquery-ui.css" />
      <link rel="stylesheet" href="/css/flag-icon.min.css" />
      <link rel="stylesheet" href="/css/style.css" />
  <Header1 />

      <main>
        <Outlet />
      </main>
      {/* Back to Top Button */}
      <BackToTop />

  <Footer />
      {/* vendor JS from public/js - loaded after footer */}
      <script src="/js/jquery-3.7.1.min.js"></script>
      <script src="/js/jquery-ui.js"></script>

      <script src="/js/bootstrap.bundle.min.js"></script>
      <script src="/js/select2.min.js"></script>
      <script src="/js/moment.min.js"></script>
      <script src="/js/daterangepicker.js"></script>
      <script src="/js/owl.carousel.min.js"></script>
      <script src="/js/jquery.fancybox.min.js"></script>
      <script src="/js/wow.min.js"></script>
      <script src="/js/jquery.countTo.min.js"></script>
      <script src="/js/animated-headline.js"></script>
      <script src="/js/jquery.ripples-min.js"></script>
      <script src="/js/quantity-input.js"></script>
      <script src="/js/main.js"></script>
  {/* Signup and Login Modals */}
  <SignupModal />
  <LoginModal />
    </div>
  )
}
