import React from 'react';
import { FaFacebook ,FaInstagram  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h2 className=' font-extrabold text-lg'>Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start ">
                    <FaFacebook />Facebook
                </button>
                <button className="btn join-item justify-start ">
                    <FaSquareXTwitter />Twitter
                </button>
                <button className="btn join-item justify-start ">
                    <FaInstagram />Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;