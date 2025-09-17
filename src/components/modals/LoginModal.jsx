import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const closeModal = () =>
    new Promise((resolve) => {
      const modalEl = document.getElementById('loginPopupForm');
      if (!modalEl) return resolve();
      try {
        const bs = window?.bootstrap;
        if (bs?.Modal) {
          const instance = bs.Modal.getInstance(modalEl) || new bs.Modal(modalEl);
          const handler = () => {
            modalEl.removeEventListener('hidden.bs.modal', handler);
            resolve();
          };
          modalEl.addEventListener('hidden.bs.modal', handler, { once: true });
          instance.hide();
          return;
        }
      } catch {
        // ignore
      }
      // Fallback hide
      modalEl.classList.remove('show');
      modalEl.setAttribute('aria-hidden', 'true');
      modalEl.style.display = 'none';
      document.body.classList.remove('modal-open');
      document.querySelectorAll('.modal-backdrop').forEach((bd) => bd.parentNode?.removeChild(bd));
      setTimeout(resolve, 50);
    });

  const onSubmit = async (data) => {
    const form = new URLSearchParams();
    form.append('email', data.email);
    form.append('password', data.password);
    try {
      const res = await axios.post('https://admin.travelvela.com/api/user/login', form, {
        headers: {
          Authorization: 'TravelVela-DYSBW7537NUDD7078',
          username: 'genesis',
          password: 'ERTYUIO87347854',
        },
      });

      const { success, message, data: userData } = res.data || {};
      await closeModal();
      if (!success) {
        await Swal.fire({
          icon: 'error',
          title: message || 'Login Failed',
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

      await Swal.fire({
        icon: 'success',
        title: message || 'Successfully Logged In',
        position: 'top',
        didOpen: () => {
          const container = document.querySelector('.swal2-container');
          if (container) container.style.zIndex = '200000';
        },
      });
    } catch (err) {
      await closeModal();
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

  const handleForgotClick = async (e) => {
    e.preventDefault();
    await closeModal();
    navigate('/recover');
  };

  return (
    <div className="modal-popup">
      <div className="modal fade" id="loginPopupForm" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title title" id="exampleModalLongTitle2">Login</h5>
                <p className="font-size-14">Hello! Welcome to your account</p>
              </div>
              <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="la la-close" />
              </button>
            </div>
            <div className="modal-body">
              <div className="contact-form-action">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="input-box">
                    <label className="label-text">Email</label>
                    <div className="form-group">
                      <span className="la la-user form-icon" />
                      <input
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        type="email"
                        placeholder="Type your email"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                            message: 'Enter a valid email address',
                          },
                        })}
                      />
                      {errors.email && <div className="invalid-feedback d-block">{errors.email.message}</div>}
                    </div>
                  </div>
                  {/* end input-box */}
                  <div className="input-box">
                    <label className="label-text">Password</label>
                    <div className="form-group mb-2">
                      <span className="la la-lock form-icon" />
                      <input
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        type="password"
                        placeholder="Type your password"
                        aria-invalid={errors.password ? 'true' : 'false'}
                        {...register('password', {
                          required: 'Password is required',
                          minLength: { value: 6, message: 'Minimum 6 characters' },
                        })}
                      />
                      {errors.password && <div className="invalid-feedback d-block">{errors.password.message}</div>}
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox mb-0">
                        <input type="checkbox" className="form-check-input" id="rememberchb" />
                        <label htmlFor="rememberchb">Remember me</label>
                      </div>
                      <p className="forgot-password">
                        <Link to="/recover" onClick={handleForgotClick}>Forgot Password?</Link>
                      </p>
                    </div>
                  </div>
                  {/* end input-box */}
                  <div className="btn-box pt-3 pb-4">
                    <button type="submit" className="theme-btn w-100" disabled={isSubmitting}>
                      {isSubmitting ? 'Logging in...' : 'Login Account'}
                    </button>
                  </div>
                  <div className="action-box text-center">
                    <p className="font-size-14">Or Login Using</p>
                    <ul className="social-profile py-3">
                      <li>
                        <a href="#" className="bg-5 text-white"><i className="lab la-facebook-f" /></a>
                      </li>
                      <li>
                        <a href="#" className="bg-6 text-white"><i className="lab la-twitter" /></a>
                      </li>
                      <li>
                        <a href="#" className="bg-7 text-white"><i className="lab la-instagram" /></a>
                      </li>
                      <li>
                        <a href="#" className="bg-5 text-white"><i className="lab la-linkedin-in" /></a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              {/* end contact-form-action */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
