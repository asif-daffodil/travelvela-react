import UserDashboardFooter from '../user-dashboard/UserDashboardFooter';
import UserDashboardBreadcrumb from '../user-dashboard/UserDashboardBreadcrumb';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const UserDashboardReviewsComponent = () => {
    const navigate = useNavigate();
    const { isAuthenticated, name, email, contact, image } = useSelector((state) => state.auth || {});

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    const { firstName, lastName } = useMemo(() => {
        const full = (name || '').trim();
        if (!full) return { firstName: '', lastName: '' };
        const parts = full.split(/\s+/);
        const f = parts[0] || '';
        const l = parts.slice(1).join(' ');
        return { firstName: f, lastName: l };
    }, [name]);

    const imageUrl = useMemo(() => {
        if (image) {
            return /^https?:\/\//i.test(image) ? image : `https://admin.travelvela.com/${image}`;
        }
        return 'images/team1.jpg';
    }, [image]);

    return (
        <>
            <div className='dashboard-content-wrap'>
                <div className="dashboard-bread dashboard--bread">
                    <div className="container-fluid">
                        <UserDashboardBreadcrumb
                            title="My Reviews"
                            items={[
                                { label: 'Home', to: '/' },
                                { label: 'User Dashboard', to: '/user-dashboard' },
                                { label: 'Settings', to: '/user-dashboard/user-dashboard-settings', active: true }
                            ]}
                        />
                        {/* end row */}
                    </div>
                </div>
                {/* end dashboard-bread */}
                <div className="dashboard-main-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-box">
                                    <div className="form-title-wrap">
                                        <h3 className="title">Personal Information</h3>
                                    </div>
                                    <div className="form-content">
                                        <div className="user-profile-action d-flex align-items-center pb-4">
                                            <div className="user-pro-img">
                                                <img src={imageUrl} alt="user-image" />
                                            </div>
                                            <div className="upload-btn-box">
                                                <p className="pb-2 font-size-15 line-height-24">
                                                    Max file size is 5MB, Minimum dimension: 150x150 And
                                                    Suitable files are .jpg &amp; .png
                                                </p>
                                                <div className="file-upload-wrap file-upload-wrap-2">
                                                    <input type="file" name="files[]" className="multi file-upload-input with-preview" maxLength={1} />
                                                    <span className="file-upload-text"><i className="la la-upload me-2" />Upload Image</span>
                                                    <a href="#" className="theme-btn theme-btn-small">Remove Image</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-form-action">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-6 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">First Name</label>
                                                            <div className="form-group">
                                                                <span className="la la-user form-icon" />
                                                                <input className="form-control" type="text" defaultValue={firstName} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-6 */}
                                                    <div className="col-lg-6 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">Last Name</label>
                                                            <div className="form-group">
                                                                <span className="la la-user form-icon" />
                                                                <input className="form-control" type="text" defaultValue={lastName} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-6 */}
                                                    <div className="col-lg-6 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">Email Address</label>
                                                            <div className="form-group">
                                                                <span className="la la-envelope form-icon" />
                                                                <input className="form-control" type="text" defaultValue={email || ''} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-6 */}
                                                    <div className="col-lg-6 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">Phone number</label>
                                                            <div className="form-group">
                                                                <span className="la la-phone form-icon" />
                                                                <input className="form-control" type="text" defaultValue={contact || ''} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-6 */}
                                                    <div className="col-lg-6 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">Date of birth</label>
                                                            <div className="form-group">
                                                                <span className="la la-user form-icon" />
                                                                <input className="form-control" type="text" defaultValue="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-6 */}
                                                    <div className="col-lg-6 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">Address</label>
                                                            <div className="form-group">
                                                                <span className="la la-map form-icon" />
                                                                <input className="form-control" type="text" defaultValue="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-6 */}
                                                    <div className="col-lg-12">
                                                        <div className="btn-box">
                                                            <button className="theme-btn" type="button">
                                                                Save Changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-12 */}
                                                </div>
                                                {/* end row */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* end form-box */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6">
                                <div className="form-box">
                                    <div className="form-title-wrap">
                                        <h3 className="title">Change Email</h3>
                                    </div>
                                    <div className="form-content">
                                        <div className="contact-form-action">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-12 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">Current Email</label>
                                                            <div className="form-group">
                                                                <span className="la la-envelope form-icon" />
                                                                <input className="form-control" type="text" placeholder="Current email" defaultValue={email || ''} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-12 */}
                                                    <div className="col-lg-12 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">New Email</label>
                                                            <div className="form-group">
                                                                <span className="la la-envelope form-icon" />
                                                                <input className="form-control" type="text" placeholder="New email" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-12 */}
                                                    <div className="col-lg-12 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">New Email Again</label>
                                                            <div className="form-group">
                                                                <span className="la la-envelope form-icon" />
                                                                <input className="form-control" type="text" placeholder="New email again" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-12 */}
                                                    <div className="col-lg-12">
                                                        <div className="btn-box">
                                                            <button className="theme-btn" type="button">
                                                                Change Email
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-12 */}
                                                </div>
                                                {/* end row */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* end form-box */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6">
                                <div className="form-box">
                                    <div className="form-title-wrap">
                                        <h3 className="title">Change Password</h3>
                                    </div>
                                    <div className="form-content">
                                        <div className="contact-form-action">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-6 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">Current Password</label>
                                                            <div className="form-group">
                                                                <span className="la la-lock form-icon" />
                                                                <input className="form-control" type="text" placeholder="Current password" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-6 */}
                                                    <div className="col-lg-6 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">New Password</label>
                                                            <div className="form-group">
                                                                <span className="la la-lock form-icon" />
                                                                <input className="form-control" type="text" placeholder="New password" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-6 */}
                                                    <div className="col-lg-6 responsive-column">
                                                        <div className="input-box">
                                                            <label className="label-text">New Password Again</label>
                                                            <div className="form-group">
                                                                <span className="la la-lock form-icon" />
                                                                <input className="form-control" type="text" placeholder="New password again" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-6 */}
                                                    <div className="col-lg-12">
                                                        <div className="btn-box">
                                                            <button className="theme-btn" type="button">
                                                                Change Password
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* end col-lg-12 */}
                                                </div>
                                                {/* end row */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* end form-box */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6">
                                <div className="form-box">
                                    <div className="form-title-wrap">
                                        <h3 className="title pb-2">Forgot Password</h3>
                                        <p className="font-size-15 line-height-24">
                                            Enter the email of your account to reset password. Then
                                            you will receive a link to email <br />
                                            to reset the password.If you have any issue about reset
                                            password
                                            <a href="contact.html" className="color-text">contact us</a>
                                        </p>
                                    </div>
                                    <div className="form-content">
                                        <div className="contact-form-action">
                                            <form action="#">
                                                <div className="input-box">
                                                    <label className="label-text">Email Address</label>
                                                    <div className="form-group">
                                                        <span className="la la-envelope form-icon" />
                                                        <input className="form-control" type="text" placeholder="Enter email address" defaultValue={email || ''} />
                                                    </div>
                                                </div>
                                                <div className="btn-box">
                                                    <button className="theme-btn" type="button">
                                                        Recover Password
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* end form-box */}
                            </div>
                            {/* end col-lg-6 */}
                        </div>
                        {/* end row */}
                        <UserDashboardFooter />
                        {/* end row */}
                    </div>
                    {/* end container-fluid */}
                </div>
            </div>
        </>
    );
};

export default UserDashboardReviewsComponent;