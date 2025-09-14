import React from 'react';
// FIX: Previously imported the Flight booking details component by mistake, causing wrong content to display.
import UserDashboardHotelBookingDetailsComponent from '../components/user-dashboard-booking/UserDashboardHotelBookingDetailsComponent';


const UserDashboardHotelBookingDetails = () => {
    return (
        <>
            <UserDashboardHotelBookingDetailsComponent />
        </>
    );
};

export default UserDashboardHotelBookingDetails;