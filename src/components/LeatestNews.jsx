import React from 'react';
import Marquee from "react-fast-marquee";

const LeatestNews = () => {
    return (
        <div className=' p-3 bg-[#F3F3F3] flex items-center'>
            <p className='bg-[#D72050] text-base-100 px-3 py-2'>Leatest</p>
            <Marquee speed={30} pauseOnHover={true} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe tempore, neque voluptatibus repellat eaque at enim voluptatum eligendi mollitia quam, id hic nostrum excepturi maiores ad cumque voluptates in eos?</Marquee>
        </div>
    );
};

export default LeatestNews;