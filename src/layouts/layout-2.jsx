import React from 'react';
import { Outlet } from 'react-router-dom';
import Header2 from '../components/layout/Header2';
import Footer from '../components/layout/Footer';
import BackToTop from '../components/layout/BackToTop';
import ScrollToTop from '../components/layout/ScrollToTop';
import SignupModal from '../components/modals/SignupModal';
import LoginModal from '../components/modals/LoginModal';

// New layout using style-2 header
export default function Layout2() {
    return (
        <div>
            {/* Vendor CSS (served from public/css) */}
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

            {/* Style-2 Header */}
            <Header2 />

            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
            <BackToTop />

            {/* Modals for signup and login */}
            <SignupModal />
            <LoginModal />
            {/* Vendor JS (loaded after footer) */}
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
        </div>
    );
}
