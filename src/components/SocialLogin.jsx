import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='flex flex-col gap-y-2 '>
            <h2 className=' text-lg font-extrabold'>Login With</h2>
            <button className='btn '>
                <FaGoogle />
                Login with Google
            </button>

            <button className='btn'>
                <FaGithub />
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;