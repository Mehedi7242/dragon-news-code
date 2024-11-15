import React from 'react';
import Header from '../components/Header';
import RightNavbar from './../components/layout-component/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData()
    const news = (data.data[0])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-5 mx-auto w-11/12 '>
                <section className=' col-span-9'>
                    <h2>Dragon News</h2>
                    <div className='px-2'>

                        <div className="card bg-base-100  shadow-xl rounded-none">
                            <figure className="px-5 pt-10">
                                <img
                                src={news?.image_url}
                                alt="news"
                                className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{news?.title}</h2>
                                <p>{news?.details}</p>
                                <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary bg-[hsl(344,74%,48%)] text-base-200 border-none hover:bg-[hsl(344,76%,50%)]">Back To Category</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <aside className=' col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;