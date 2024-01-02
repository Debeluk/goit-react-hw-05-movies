import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="../Movies">Movies</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;