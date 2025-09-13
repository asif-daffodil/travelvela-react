import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
 * UserDashboardBreadcrumb
 * Props:
 *  - title: main heading text (string or React node)
 *  - items: array of { label: string|ReactNode, href?: string, active?: boolean }
 */
const UserDashboardBreadcrumb = ({ title, items = [] }) => (
  <div className="row align-items-center">
    <div className="col-lg-6">
      <div className="breadcrumb-content">
        <div className="section-heading">
          {typeof title === 'string' ? (
            <h2 className="sec__title font-size-30 text-white">{title}</h2>
          ) : (
            title
          )}
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="breadcrumb-list text-end">
        <ul className="list-items">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            const content = item.to && !isLast && !item.active ? (
              <Link to={item.to} className={item.className || 'text-white'}>{item.label}</Link>
            ) : (
              item.label
            );
            return <li key={idx}>{content}</li>;
          })}
        </ul>
      </div>
    </div>
  </div>
);

UserDashboardBreadcrumb.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      href: PropTypes.string,
      active: PropTypes.bool,
      className: PropTypes.string,
    })
  ),
};

export default UserDashboardBreadcrumb;
