import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
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
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                </div>
     
                <div className="navbar-center">
                    <button className="btn btn-ghost ">Home</button>
                    <button className="btn btn-ghost ">Career</button>
                    <button className="btn btn-ghost ">About</button>

                </div>
                <div className="navbar-end">
                    {Links}
                </div>
            </div>
        </div>
    );
};

export default Navbar;