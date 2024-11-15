import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './../provider/AuthProvider';
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const Links = <>
        <button className="btn btn-ghost text-xl">
            {
                user && user?.email ? 
                    <img className=' h-10 w-10 rounded-full' src={user?.photoURL} alt="" />
                :
                <FontAwesomeIcon icon={faUser} />              
            }      
        </button>
        {
            user && user?.email ? (<button onClick={logOut} className="btn bg-[#1E1E1E] text-base-100 hover:text-black">Log-Out</button>)
            :
            <Link to={'/auth/login'} className="btn bg-[#1E1E1E] text-base-100 hover:text-black">
            Login
            </Link>
        }
        
    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <h2>{user?.email}</h2>
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