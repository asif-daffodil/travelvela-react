import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RecoverComponent = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const onSubmit = async ({ email }) => {
        try {
            const form = new URLSearchParams();
            form.append('email', email);
            const res = await axios.post(
                'https://admin.travelvela.com/api/forget/password',
                form,
                {
                    headers: {
                        Authorization: 'TravelVela-DYSBW7537NUDD7078',
                        username: 'genesis',
                        password: 'ERTYUIO87347854',
                    },
                }
            );
            const { success, message, data } = res.data || {};

            if (!success) {
                await Swal.fire({
                    icon: 'error',
                    title: message || 'Request Failed',
                    position: 'top',
                    didOpen: () => {
                        const container = document.querySelector('.swal2-container');
                        if (container) container.style.zIndex = '200000';
                    },
                });
                return;
            }

            const userName = data?.name || '';
            const imagePath = data?.image || '';
            const imageUrl = imagePath && !/^https?:\/\//i.test(imagePath)
                ? `https://admin.travelvela.com/${imagePath}`
                : imagePath;

            const result = await Swal.fire({
                icon: 'success',
                title: message || 'Check your email',
                text: userName ? `User: ${userName}` : undefined,
                imageUrl: imageUrl || undefined,
                imageAlt: userName || 'User Image',
                position: 'top',
                showCancelButton: true,
                confirmButtonText: 'Enter Verification Code',
                cancelButtonText: 'Close',
                didOpen: () => {
                    const container = document.querySelector('.swal2-container');
                    if (container) container.style.zIndex = '200000';
                },
            });

            if (result.isConfirmed) {
                const { value: code } = await Swal.fire({
                    title: 'Enter Verification Code',
                    input: 'text',
                    inputLabel: 'A verification code was sent to your email',
                    inputPlaceholder: 'Enter your code',
                    showCancelButton: true,
                    confirmButtonText: 'Verify',
                    cancelButtonText: 'Cancel',
                    position: 'top',
                    preConfirm: (value) => {
                        if (!value || !String(value).trim()) {
                            Swal.showValidationMessage('Code is required');
                            return false;
                        }
                        return String(value).trim();
                    },
                    didOpen: () => {
                        const container = document.querySelector('.swal2-container');
                        if (container) container.style.zIndex = '200000';
                    },
                });
                if (code) {
                    // Navigate to verify page with email and code for convenience
                    try {
                        navigate('/verify-email', { state: { email, code } });
                    } catch {
                        // ignore navigation issues
                    }
                }
            }
            reset();
        } catch (err) {
            await Swal.fire({
                icon: 'error',
                title: 'Network Error',
                text: err?.response?.data?.message || err.message || 'Please try again',
                position: 'top',
                didOpen: () => {
                    const container = document.querySelector('.swal2-container');
                    if (container) container.style.zIndex = '200000';
                },
            });
        }
    };
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
                                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                            <div className="input-box">
                                                <label className="label-text">Your Email</label>
                                                <div className="form-group">
                                                    <span className="la la-envelope-o form-icon" />
                                                    <input
                                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                        type="email"
                                                        placeholder="Enter email address"
                                                        aria-invalid={errors.email ? 'true' : 'false'}
                                                        {...register('email', {
                                                            required: 'Email is required',
                                                            pattern: {
                                                                value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                                                                message: 'Enter a valid email address',
                                                            },
                                                        })}
                                                    />
                                                    {errors.email && (
                                                        <div className="invalid-feedback d-block">{errors.email.message}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <button type="submit" className="theme-btn" disabled={isSubmitting}>
                                                    {isSubmitting ? 'Sending...' : 'Reset Password'}
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
