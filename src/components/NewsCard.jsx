import React from 'react';
import { FaStar, FaRegStar, FaEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const {
        author,
        title,
        published_date,
        thumbnail_url,
        details,
        rating,
        total_view
    } = news;

    return (
        <div className="border rounded-lg shadow-md overflow-hidden">
            {/* Author Info */}
            <div className="flex items-center gap-3 p-4 bg-gray-100">
                <img
                    src={author?.img || 'https://via.placeholder.com/40'}
                    alt={author?.name || 'Author'}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <h3 className="text-sm font-bold">{author?.name || 'Unknown Author'}</h3>
                    <p className="text-xs text-gray-500">{new Date(published_date).toLocaleDateString()}</p>
                </div>
                <div className="ml-auto">
                    <button className="text-gray-500 hover:text-gray-700">
                        <FaShareAlt size={18} />
                    </button>
                </div>
            </div>

            {/* News Title and Thumbnail */}
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <img
                    src={thumbnail_url}
                    alt="News Thumbnail"
                    className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-gray-700 text-sm">
                    {details.length > 100 ? `${details.slice(0, 100)}...` : details}
                    <span className="text-blue-500 font-semibold cursor-pointer"> Read More</span>
                </p>
            </div>

            {/* Footer: Ratings and Views */}
            <div className="flex items-center justify-between p-4 border-t bg-gray-50">
                {/* Ratings */}
                <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                        index < Math.round(rating?.number) ? (
                            <FaStar key={index} />
                        ) : (
                            <FaRegStar key={index} />
                        )
                    ))}
                    <span className="text-gray-600 text-sm ml-2">{rating?.number || 0}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span className="text-sm">{total_view || 0}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
