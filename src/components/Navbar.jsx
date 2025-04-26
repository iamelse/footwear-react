import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white text-gray-800 z-50 h-16">
            {/* Mobile Navbar */}
            <div className="max-w-7xl mx-auto px-2.5 py-2.5 flex items-center justify-between md:hidden">
                {/* Search Form */}
                <div className="flex items-center flex-1 mr-4">
                    <form className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pr-10 py-1.5 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Icon Button on the right */}
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 mt-0.5 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            <i className="bx bx-search text-xl text-gray-800 font-medium"></i>
                        </button>
                    </form>
                </div>

                {/* Cart Icon */}
                <div className="relative mr-4">
                    <Link to="/cart" className="text-gray-800">
                        <i className="bx bx-cart-alt text-2xl"></i>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Hamburger Menu Button */}
                <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                    <i className="bx bx-menu text-3xl"></i>
                </button>

                {/* Floating Action Menu - Bottom Nav */}
                <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-md md:hidden">
                    <div className="flex justify-around items-center gap-2 py-1 px-4">
                        <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-blue-600 gap-1">
                            <i className="bx bx-home text-2xl"></i>
                            <span className="text-xs">Home</span>
                        </Link>
                        <Link to="/wishlist" className="flex flex-col items-center text-gray-600 hover:text-blue-600 gap-1">
                            <i className="bx bx-heart text-2xl"></i>
                            <span className="text-xs">Wishlist</span>
                        </Link>
                        <Link to="/transactions" className="flex flex-col items-center text-gray-600 hover:text-blue-600 gap-1">
                            <i className="bx bx-receipt text-2xl"></i>
                            <span className="text-xs">Order</span>
                        </Link>
                    </div>
                </div>

            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white text-gray-800 z-50 transform transition-all duration-500">
                    {/* Top Bar with Close Button and "Main Menu" */}
                    <div className="flex px-4 py-2 mt-2 border-b">
                        {/* Close Button (X Icon) - Vertically Centered */}
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 text-2xl"
                        >
                            <i className="bx bx-x"></i>
                        </button>

                        {/* "Main Menu" Text on the Right */}
                        <span className="text-xl font-semibold text-gray-800">Main Menu</span>
                    </div>

                    {/* Login & Register Buttons (Two Column Layout) */}
                    <div className="px-4 py-4 flex space-x-4">
                        {/* Login Button */}
                        <Link
                            onClick={toggleMenu}
                            to="/auth/login"
                            className="w-1/2 text-center font-semibold bg-blue-600 text-white py-1.5 rounded-lg hover:bg-blue-600"
                        >
                            Login
                        </Link>

                        {/* Register Button */}
                        <Link
                            onClick={toggleMenu}
                            to="/auth/register"
                            className="w-1/2 text-center font-semibold bg-white text-blue-600 border-2 border-blue-600 py-1.5 rounded-lg hover:bg-gray-200 hover:text-blue-600"
                        >
                            Register
                        </Link>
                    </div>

                    {/* Menu Links */}
                    <div className="flex flex-col h-full px-4 py-2 space-y-5">
                        <Link onClick={toggleMenu} to="/" className="flex items-center text-md hover:text-gray-600 space-x-2">
                            <i className="bx bx-receipt text-3xl"></i>
                            <span>My Order</span>
                        </Link>

                        <Link onClick={toggleMenu} to="/" className="flex items-center text-md hover:text-gray-600 space-x-2">
                            <i className="bx bx-heart text-3xl"></i>
                            <span>Wishlist</span>
                        </Link>

                        <Link onClick={toggleMenu} to="/" className="flex items-center text-md hover:text-gray-600 space-x-2">
                            <i className="bx bx-star text-3xl"></i>
                            <span>Review</span>
                        </Link>

                        <Link onClick={toggleMenu} to="/" className="flex items-center text-md hover:text-gray-600 space-x-2">
                            <i className="bx bx-repeat text-3xl"></i>
                            <span>Buy Again</span>
                        </Link>
                    </div>

                </div>
            )}

            {/* Desktop Navbar (hidden on mobile) */}
            <div className="hidden md:flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">
                <div className="text-2xl font-bold text-gray-800">
                    <Link to="/">FootWear</Link>
                </div>

                <div className="flex space-x-6">
                    <Link to="/" className="hover:text-gray-500 transition duration-300">Home</Link>
                    <Link to="/shop" className="hover:text-gray-500 transition duration-300">Shop</Link>
                    <Link to="/auth/login" className="hover:text-gray-500 transition duration-300">Login</Link>
                    <Link to="/auth/register" className="hover:text-gray-500 transition duration-300">Register</Link>
                </div>

                <div className="relative">
                    <Link to="/cart" className="flex items-center space-x-2 text-gray-800">
                        <i className="bx bx-cart-alt text-2xl"></i>
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;