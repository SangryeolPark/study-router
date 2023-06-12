import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const isActive = ({ isActive }) => (isActive ? 'text-danger' : 'text-white') + ' nav-link px-2';
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            LOGO
          </Link>
          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/home" className={isActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={isActive}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/members" className={isActive}>
                Members
              </NavLink>
            </li>
            <li>
              <NavLink to="/songs" className={isActive}>
                SongList
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
