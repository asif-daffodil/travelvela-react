import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

// Default navigation items; can be overridden via props
const defaultNavItems = [
	{ to: '/user-dashboard', icon: 'la la-dashboard', label: 'Dashboard' },
	{ to: '/user-dashboard-booking', icon: 'la la-shopping-cart text-color', label: 'My Booking' },
	{ to: '/user-dashboard-profile', icon: 'la la-user text-color-2', label: 'My Profile' },
	{ to: '/user-dashboard-reviews', icon: 'la la-star text-color-3', label: 'My Reviews' },
	{ to: '/user-dashboard-wishlist', icon: 'la la-heart text-color-4', label: 'Wishlist' },
	{ to: '/user-dashboard-settings', icon: 'la la-cog text-color-5', label: 'Settings' },
	{ to: '/logout', icon: 'la la-power-off text-color-6', label: 'Logout', isLogout: true }
];

const UserDashboardSidebar = ({
	userName = 'Ali Tufan',
	memberSince = 'Member Since May 2017',
	avatarSrc = '/images/team8.jpg',
	navItems = defaultNavItems,
	onLogout
}) => {
	const location = useLocation();
	const currentPath = location.pathname.replace(/\/$/, '');

	const handleItemClick = (item, e) => {
		if (item.isLogout && onLogout) {
			e.preventDefault();
			onLogout();
		}
	};

	return (
		<div className="sidebar-nav">
			<div className="sidebar-nav-body">
				<div className="side-menu-close">
					<i className="la la-times" />
				</div>
				<div className="author-content">
					<div className="d-flex align-items-center">
						<div className="author-img avatar-sm">
							<img src={avatarSrc} alt="user avatar" />
						</div>
						<div className="author-bio">
							<h4 className="author__title">{userName}</h4>
							<span className="author__meta">{memberSince}</span>
						</div>
					</div>
				</div>
				<div className="sidebar-menu-wrap">
					<ul className="sidebar-menu list-items">
						{navItems.map(item => {
							const itemPath = item.to.replace(/\/$/, '');
							const isActive = itemPath !== '/' && (currentPath === itemPath || currentPath.startsWith(itemPath + '/'));
							return (
								<li key={item.to} className={isActive ? 'page-active' : ''}>
									<Link to={item.to} onClick={(e) => handleItemClick(item, e)}>
										<i className={`${item.icon} me-2`} />{item.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

UserDashboardSidebar.propTypes = {
	userName: PropTypes.string,
	memberSince: PropTypes.string,
	avatarSrc: PropTypes.string,
	navItems: PropTypes.arrayOf(PropTypes.shape({
		to: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		isLogout: PropTypes.bool
	})),
	onLogout: PropTypes.func
};

export default UserDashboardSidebar;
