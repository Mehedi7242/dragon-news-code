import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { data: newsList } = useLoaderData();

    return (
        <div className="p-6">
                <h2 className="font-extrabold text-lg mb-4">Dragon News Home</h2>
                <div className="grid grid-cols-1 gap-6">
                    {newsList.map((news) => (
                    <NewsCard key={news._id} news={news} />
                    ))}
                </div>
        </div>
    );
};

export default CategoryNews;
