
import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';
import navbarImg from '../../images/logo/FieldX.png';

const Navbar = () => {
    return (
        <div className='navbar px-12 my-5 flex items-center justify-between'>
            <Link to="/"><img src={navbarImg} alt="" /></Link>
            <nav>
                <NavLink className="login-btn" to="/login" >Login</NavLink>
                <NavLink className="registration" to="/registration" >Registration</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;