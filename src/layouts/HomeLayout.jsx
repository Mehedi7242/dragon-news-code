import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

import LeatestNews from '../components/LeatestNews';
import LeftNavbar from '../components/layout-component/LeftNavbar';
import RightNavbar from '../components/layout-component/RightNavbar';
import { Outlet } from 'react-router-dom';


const HomeLayout = () => {
    return (
        <div className=' font-poppins'>
            <header className='w-11/12 mx-auto'>
                <Header></Header>
                <section>
                    <LeatestNews></LeatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='grid grid-cols-12 w-11/12 mx-auto'>
                <aside className='left col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className=' col-span-6 mx-auto'>
                    <Outlet></Outlet>
                </section>
                <aside className='right col-span-3'>
                    <RightNavbar></RightNavbar> 
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;