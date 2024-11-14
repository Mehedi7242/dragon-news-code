import React, { useState } from 'react';
import logo from '../assets/logo.png'

import Time from './Time';
const Header = () => {



    return (
        <div className='w-11/12 mx-auto'>
            <div className="logo p-3 flex justify-center items-center">
                <img src={logo} alt="header logo" />
            </div>
            <h2 className='text-center text-gray-500'>Jurnalism Without Fear And Favour</h2>
           <Time></Time>
        </div>
    );
};

export default Header;