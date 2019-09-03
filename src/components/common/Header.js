import React from 'react';
import { NavLink } from 'react-router-dom'; //handle all of our links

//excellente
const Header = () => {
  const activeStyle = { color: '#F25B2A' }; // inline styling for all active links in our app
  return (
    <div className="container">
      <header>
        <img src="" alt="Coursera logo" className="logo"></img>

        <nav>
          <a href="#" className="hide-desktop">
            <img src="" alt="toggle menu" className="menu"></img>
          </a>
          <ul className="show-desktop hide-desktop">
            <li>
              <img
                src=""
                alt="exit menu"
                className="exit-btn hide-desktop"
              ></img>
            </li>
            <li>
              <NavLink to="/" activeStyle={activeStyle} exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" activeStyle={activeStyle} exact>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={activeStyle}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
