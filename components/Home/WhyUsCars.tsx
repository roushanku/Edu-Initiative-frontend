"use client"
import React, { useState } from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const WhyUscard: React.FC<CardProps> = ({ imageUrl, title, description, buttonText }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative w-64 h-80 p-5 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 ease-in-out 
      ${hovered ? 'transform scale-105' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-20 h-20 mb-4"
          />
          <h3 className="text-center text-xl font-bold text-gray-800">{title}</h3>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-center text-green-600 text-xl font-bold">{title}</h3>
          <p className="text-center text-gray-500 mb-4">{description}</p>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default WhyUscard;
