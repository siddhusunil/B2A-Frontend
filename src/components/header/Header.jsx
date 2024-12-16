import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

const Header = ({isAuth}) => {
  return (
    <header>
        <div className="logo"><a href="/"><img src="./logo.svg"/></a></div>

        <div className="link">
            <Link to={'/'}>Home</Link>
            <Link to={'/courses'}>Courses</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact Us</Link>
            
        </div>
        <div className="link-login">
            {
              isAuth ? (
              <Link to={'/account'}>Account</Link>
              ) : ( 
              <Link to={'/login'}>Login</Link>)
            }
        </div>
    </header>
  );
};

export default Header;