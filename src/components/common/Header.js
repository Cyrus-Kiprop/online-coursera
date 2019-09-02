import React from 'react';
import { NavLink } from 'react-router-dom'; //handle all of our links

const Header = () => {
  const activeStyle = { color: '#F25B2A' }; // inline styling for all active links in our app
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>{' | '}
      <NavLink to="/about" activeStyle={activeStyle}>About
        Home
      </NavLink>
    </nav>
  );
};
export default Header;
