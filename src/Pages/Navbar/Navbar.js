import { NavLink, Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import navbarImg from "../../images/logo/FieldX.png";
import tabPhnImg from '../../images/tab-phn-group.png';

const Navbar = () => {
  return (
    <div className="navbar-banner">
      <div className="navbar px-12 pb-3 py-5 flex items-center justify-between">
        <Link to="/">
          <img src={navbarImg} alt="" />
        </Link>
        <nav>
          <NavLink className="login-btn" to="/login">
            Login
          </NavLink>
          <NavLink className="registration" to="/registration">
            Registration
          </NavLink>
        </nav>
      </div>
      <div className="request-demo">
        <div className="mx-auto grid w-3/5 mt-24">
          <h1 className="text-5xl tracking-wider leading-[60px] text-center font-bold">
            Analytics that transform your product inside-out
          </h1>
          <div className="mx-auto mt-12">
            <button className="login-btn">Request for Demo</button>
            <button className="registration">Request for Demo</button>
          </div>
          <div className="tab-phn-group">
            <img src={tabPhnImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
