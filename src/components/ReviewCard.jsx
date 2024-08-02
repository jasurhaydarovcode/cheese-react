import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { name, location, date, rating, review: reviewText, images } = review;

    return (
        <div className="border rounded-lg p-4 shadow-md bg-white">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">{name}</h2>
                <div className="flex items-center">
                    {Array(rating).fill().map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                    ))}
                    {Array(5 - rating).fill().map((_, i) => (
                        <FaStar key={i + rating} className="text-gray-300" />
                    ))}
                </div>
            </div>
            <p className="text-sm text-gray-500 mb-2">{location}</p>
            <p className="text-sm leading-6 mb-2">{reviewText}</p>
            <div className="flex space-x-2 mb-2">
                {images.map((src, i) => (
                    <img key={i} src={src} alt={`review-${i}`} className="w-16 h-16 object-cover rounded" />
                ))}
            </div>
            <p className="text-xs text-gray-400">{date}</p>
        </div>
    );
};

export default ReviewCard;
