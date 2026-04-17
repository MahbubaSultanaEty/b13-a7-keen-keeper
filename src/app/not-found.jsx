import React from 'react';
import Link from "next/link";
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center space-y-6">

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-md mx-auto">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/">
                  <button className="mt-4 px-6 py-3 rounded-xl bg-purple-500 text-white font-medium shadow-md hover:bg-purple-600 transition duration-300 ">
                      <div className='flex gap-2'>
                          <Home/> Go Back Home
                      </div>
           
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFoundPage;