import React from 'react';
import { Link } from 'react-router-dom';

const RecoverComponent = () => {
    return (
        <>
            {/* START BREADCRUMB AREA */}
            <section className="breadcrumb-area bread-bg-9">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="breadcrumb-content">
                                    <div className="section-heading">
                                        <h2 className="sec__title text-white">Recover Password</h2>
                                    </div>
                                </div>
                                {/* end breadcrumb-content */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6">
                                <div className="breadcrumb-list text-end">
                                    <ul className="list-items">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Pages</li>
                                        <li>Recover Password</li>
                                    </ul>
                                </div>
                                {/* end breadcrumb-list */}
                            </div>
                            {/* end col-lg-6 */}
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
            {/* END BREADCRUMB AREA */}

            {/* START CONTACT AREA */}
            <section className="contact-area padding-top-100px padding-bottom-70px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <div className="form-box">
                                <div className="form-title-wrap">
                                    <h3 className="title">Recover Password</h3>
                                    <p className="font-size-15 pt-2">
                                        Enter the email of your account to reset password. Then you
                                        will receive a link to email to reset the password.If you have
                                        any issue about reset password
                                        <a href="contact.html" className="text-color">contact us</a>
                                    </p>
                                </div>
                                {/* form-title-wrap */}
                                <div className="form-content">
                                    <div className="contact-form-action">
                                        <form method="post">
                                            <div className="input-box">
                                                <label className="label-text">Your Email</label>
                                                <div className="form-group">
                                                    <span className="la la-envelope-o form-icon" />
                                                    <input className="form-control" type="email" name="email" placeholder="Enter email address" />
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <button type="button" className="theme-btn">
                                                    Reset Password
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
                        {/* end col-lg-8 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* END CONTACT AREA */}
        </>
    );
};

export default RecoverComponent;
