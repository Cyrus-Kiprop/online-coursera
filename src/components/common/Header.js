import React from 'react';
import { NavLink } from 'react-router-dom'; //handle all of our links

//excellente
const Header = () => {
  const activeStyle = { color: '#F25B2A' }; // inline styling for all active links in our app
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/courses" activeStyle={activeStyle} exact>
        Courses
      </NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};
export default Header;
