import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="text-xl mt-4 text-gray-600">Oops! The page you're looking for doesn't exist.</p>
                <p className="mt-4 text-gray-500">
                    Go back to <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>.
                </p>
            </div>
        </div>
    );
};

export default NotFound;