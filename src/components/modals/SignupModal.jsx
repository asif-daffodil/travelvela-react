import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function SignupModal() {
  const navigate = useNavigate();
  
  const closeModal = () =>
    new Promise((resolve) => {
      const modalEl = document.getElementById('signupPopupForm');
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
        // ignore and use fallback
      }
      // Fallback: manually hide
      modalEl.classList.remove('show');
      modalEl.setAttribute('aria-hidden', 'true');
      modalEl.style.display = 'none';
      document.body.classList.remove('modal-open');
      document.querySelectorAll('.modal-backdrop').forEach((bd) => bd.parentNode?.removeChild(bd));
      setTimeout(resolve, 50);
    });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      contact: data.contact,
    };
    try {
      const res = await axios.post(
        'https://admin.travelvela.com/api/user/registration',
        payload,
        {
          headers: {
            Authorization: 'TravelVela-DYSBW7537NUDD7078',
            username: 'genesis',
            password: 'ERTYUIO87347854',
          },
        }
      );
      const { success, message } = res.data || {};
      if (!success) {
        await closeModal();
        await Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: message || 'Something went wrong',
          position: 'top',
          confirmButtonText: 'OK',
          didOpen: () => {
            const container = document.querySelector('.swal2-container');
            if (container) container.style.zIndex = '200000';
          },
        });
        return;
      }

      await closeModal();
      const result = await Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: message || 'Check Email for Verification Code',
        position: 'top',
        confirmButtonText: 'Verify Email',
        showCancelButton: true,
        cancelButtonText: 'Close',
        didOpen: () => {
          const container = document.querySelector('.swal2-container');
          if (container) container.style.zIndex = '200000';
        },
      });
      if (result.isConfirmed) {
        navigate('/verify-email');
      }
      // Optionally close modal via Bootstrap API if available
      // const modalEl = document.getElementById('signupPopupForm');
      // if (modalEl && window.bootstrap) {
      //   const modal = window.bootstrap.Modal.getInstance(modalEl) || new window.bootstrap.Modal(modalEl);
      //   modal.hide();
      // }
    } catch (err) {
  console.error('Signup failed:', err);
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

  const passwordValue = watch('password');
  return (
    <div className="modal-popup">
      <div className="modal fade" id="signupPopupForm" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title title" id="exampleModalLongTitle">Sign Up</h5>
                <p className="font-size-14">Hello! Welcome Create a New Account</p>
              </div>
              <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="la la-close" />
              </button>
            </div>
            <div className="modal-body">
              <div className="contact-form-action">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="input-box">
                    <label className="label-text">Name</label>
                    <div className="form-group">
                      <span className="la la-user form-icon" />
                      <input
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder="Type your name"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        {...register('name', {
                          required: 'Name is required',
                          minLength: { value: 3, message: 'Minimum 3 characters' },
                        })}
                      />
                      {errors.name && (
                        <div className="invalid-feedback d-block">{errors.name.message}</div>
                      )}
                    </div>
                  </div>
                  {/* end input-box */}
                  <div className="input-box">
                    <label className="label-text">Email Address</label>
                    <div className="form-group">
                      <span className="la la-envelope form-icon" />
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
                      {errors.email && (
                        <div className="invalid-feedback d-block">{errors.email.message}</div>
                      )}
                    </div>
                  </div>
                  {/* end input-box */}
                  <div className="input-box">
                    <label className="label-text">Contact Number</label>
                    <div className="form-group">
                      <span className="la la-phone form-icon" />
                      <input
                        className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
                        type="tel"
                        placeholder="Type your contact number"
                        aria-invalid={errors.contact ? 'true' : 'false'}
                        {...register('contact', {
                          required: 'Contact number is required',
                          pattern: {
                            value: /^[0-9+()\-\s]{7,15}$/,
                            message: 'Enter a valid phone number',
                          },
                        })}
                      />
                      {errors.contact && (
                        <div className="invalid-feedback d-block">{errors.contact.message}</div>
                      )}
                    </div>
                  </div>
                  {/* end input-box */}
                  <div className="input-box">
                    <label className="label-text">Password</label>
                    <div className="form-group">
                      <span className="la la-lock form-icon" />
                      <input
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        type="password"
                        placeholder="Type password"
                        aria-invalid={errors.password ? 'true' : 'false'}
                        {...register('password', {
                          required: 'Password is required',
                          minLength: { value: 6, message: 'Minimum 6 characters' },
                        })}
                      />
                      {errors.password && (
                        <div className="invalid-feedback d-block">{errors.password.message}</div>
                      )}
                    </div>
                  </div>
                  {/* end input-box */}
                  <div className="input-box">
                    <label className="label-text">Repeat Password</label>
                    <div className="form-group">
                      <span className="la la-lock form-icon" />
                      <input
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        type="password"
                        placeholder="Type again password"
                        aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                        {...register('confirmPassword', {
                          required: 'Please confirm your password',
                          validate: (value) => value === passwordValue || 'Passwords do not match',
                        })}
                      />
                      {errors.confirmPassword && (
                        <div className="invalid-feedback d-block">{errors.confirmPassword.message}</div>
                      )}
                    </div>
                  </div>
                  {/* end input-box */}
                  <div className="btn-box pt-3 pb-4">
                    <button type="submit" className="theme-btn w-100">Register Account</button>
                  </div>
                  <div className="action-box text-center">
                    <p className="font-size-14">Or Sign up Using</p>
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
