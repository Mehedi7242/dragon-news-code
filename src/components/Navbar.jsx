import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    const Links = <>
        <button className="btn btn-ghost text-xl">
            <FontAwesomeIcon icon={faUser} />                    
        </button>
        <Link to={'/auth/login'} className="btn bg-[#1E1E1E] text-base-100 hover:text-black">
            Login
        </Link>
    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                </div>
     
                <div className="navbar-center">
                    <NavLink to={'/'} className="btn btn-ghost ">Home</NavLink>
                    <NavLink className="btn btn-ghost ">Career</NavLink>
                    <NavLink className="btn btn-ghost ">About</NavLink>

                </div>
                <div className="navbar-end">
                    {Links}
                </div>
            </div>
        </div>
    );
};

export default Navbar;