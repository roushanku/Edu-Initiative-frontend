"use client"; 
import { useEffect, useState } from 'react';

interface CardProps{
  number: number;
  heading: string;
}

const Card: React.FC<CardProps> = ({ number, heading }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000; // 5 seconds
    const interval = duration / number;

    const counter = setInterval(() => {
      start += 1;
      if (start <= number) {
        setCount(start);
      } else {
        clearInterval(counter);
      }
    }, interval);

    return () => clearInterval(counter);
  }, [number]);

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md text-center py-8 px-20 my-10 mx-10">
      <h2 className="text-green-500 text-2xl font-semibold md:text-3xl">{heading}</h2>
      <p className="text-green-600 text-3xl font-bold mt-2 md:text-4xl">{count}</p>
    </div>
  );
};

export default Card;
