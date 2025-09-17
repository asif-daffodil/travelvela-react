import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setUser } from '../store/slices/authSlice';

const VerifyEmail = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const prefilledEmail = (location?.state && location.state.email) || '';
    const prefilledCode = (location?.state && location.state.code) || '';
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        defaultValues: {
            code: prefilledCode,
            email: prefilledEmail,
            password: '',
        },
    });

    const onSubmit = async (data) => {
        const payload = {
            code: data.code,
            email: data.email,
            password: data.password,
        };
        try {
            const res = await axios.post(
                'https://admin.travelvela.com/api/password/reset',
                payload,
                {
                    headers: {
                        Authorization: 'TravelVela-DYSBW7537NUDD7078',
                        username: 'genesis',
                        password: 'ERTYUIO87347854',
                    },
                }
            );

            const { success, message, data: userData } = res.data || {};
            if (!success) {
                await Swal.fire({
                    icon: 'error',
                    title: message || 'Password Reset Failed',
                    position: 'top',
                    didOpen: () => {
                        const container = document.querySelector('.swal2-container');
                        if (container) container.style.zIndex = '200000';
                    },
                });
                return;
            }

            if (userData) {
                dispatch(
                    setUser({
                        token: userData.token,
                        image: userData.image,
                        name: userData.name,
                        email: userData.email,
                        contact: userData.contact,
                        email_verified_at: userData.email_verified_at,
                    })
                );
            }

            const result = await Swal.fire({
                icon: 'success',
                title: 'Password changed successfully',
                text: message && message !== 'Successfully Logged In' ? message : undefined,
                position: 'top',
                confirmButtonText: 'OK',
                allowOutsideClick: false,
                didOpen: () => {
                    const container = document.querySelector('.swal2-container');
                    if (container) container.style.zIndex = '200000';
                },
            });

            reset({ ...payload, password: '' });
            if (result?.isConfirmed) {
                try {
                    navigate('/');
                } catch {
                    // ignore
                }
            }
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
        <div className="container py-5">
            <h1 className="mb-3">Reset Password</h1>
            <p className="mb-4">Enter the verification code sent to your email, your email address, and your new password.</p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="row g-3">
                    <div className="col-12 col-md-4">
                        <label className="label-text">Verification Code</label>
                        <div className="form-group">
                            <input
                                className={`form-control ${errors.code ? 'is-invalid' : ''}`}
                                type="text"
                                placeholder="Enter code"
                                aria-invalid={errors.code ? 'true' : 'false'}
                                {...register('code', {
                                    required: 'Code is required',
                                    minLength: { value: 4, message: 'Minimum 4 characters' },
                                })}
                            />
                            {errors.code && <div className="invalid-feedback d-block">{errors.code.message}</div>}
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <label className="label-text">Email</label>
                        <div className="form-group">
                            <input
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                type="email"
                                placeholder="Enter email"
                                aria-invalid={errors.email ? 'true' : 'false'}
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                                        message: 'Enter a valid email',
                                    },
                                })}
                            />
                            {errors.email && <div className="invalid-feedback d-block">{errors.email.message}</div>}
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <label className="label-text">New Password</label>
                        <div className="form-group">
                            <input
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                type="password"
                                placeholder="Enter new password"
                                aria-invalid={errors.password ? 'true' : 'false'}
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Minimum 6 characters' },
                                })}
                            />
                            {errors.password && <div className="invalid-feedback d-block">{errors.password.message}</div>}
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <button type="submit" className="theme-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Resetting...' : 'Reset Password'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default VerifyEmail;