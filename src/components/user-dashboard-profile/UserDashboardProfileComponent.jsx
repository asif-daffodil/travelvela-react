import UserDashboardFooter from '../user-dashboard/UserDashboardFooter';
import UserDashboardBreadcrumb from '../user-dashboard/UserDashboardBreadcrumb';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const UserDashboardProfileComponent = () => {


    return (
        <>
            <div className='dashboard-content-wrap'>
                <div className="dashboard-bread dashboard--bread">
                    <div className="container-fluid">
                        <UserDashboardBreadcrumb
                            title="My Profile"
                            items={[
                                { label: 'Home', to: '/' },
                                { label: 'User Dashboard', to: '/user-dashboard' },
                                { label: 'My Profile', to: '/user-dashboard-profile', active: true }
                            ]}
                        />
                        {/* end row */}
                    </div>
                </div>
                {/* end dashboard-bread */}
                <div className="dashboard-main-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-box">
                                    <div className="form-title-wrap border-bottom-0 pb-0">
                                        <h3 className="title">Profile Information</h3>
                                    </div>
                                    <div className="form-content">
                                        <div className="table-form table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td className="ps-0">
                                                            <div className="table-content">
                                                                <h3 className="title font-weight-medium">
                                                                    First Name
                                                                </h3>
                                                            </div>
                                                        </td>
                                                        <td>:</td>
                                                        <td>Ali</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="ps-0">
                                                            <div className="table-content">
                                                                <h3 className="title font-weight-medium">
                                                                    Last Name
                                                                </h3>
                                                            </div>
                                                        </td>
                                                        <td>:</td>
                                                        <td>Tufan</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="ps-0">
                                                            <div className="table-content">
                                                                <h3 className="title font-weight-medium">
                                                                    Email Address
                                                                </h3>
                                                            </div>
                                                        </td>
                                                        <td>:</td>
                                                        <td>alitufan@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="ps-0">
                                                            <div className="table-content">
                                                                <h3 className="title font-weight-medium">
                                                                    Phone Number
                                                                </h3>
                                                            </div>
                                                        </td>
                                                        <td>:</td>
                                                        <td>+01 4561 3214</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="ps-0">
                                                            <div className="table-content">
                                                                <h3 className="title font-weight-medium">
                                                                    Date of Birth
                                                                </h3>
                                                            </div>
                                                        </td>
                                                        <td>:</td>
                                                        <td>03 Jun 1990</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="ps-0">
                                                            <div className="table-content">
                                                                <h3 className="title font-weight-medium">
                                                                    Address
                                                                </h3>
                                                            </div>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            8800 Orchard Lake Road, Suite 180 Farmington
                                                            Hills, U.S.A.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="section-block" />
                                        <div className="btn-box mt-4">
                                            <a href="user-dashboard-settings.html" className="theme-btn">Edit Profile</a>
                                        </div>
                                    </div>
                                </div>
                                {/* end form-box */}
                            </div>
                            {/* end col-lg-12 */}
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

export default UserDashboardProfileComponent;