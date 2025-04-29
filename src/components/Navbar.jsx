import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showFloatingBar, setShowFloatingBar] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (!footer) return;

            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            setShowFloatingBar(footerTop > windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white text-gray-800 z-50 h-16 border-b border-gray-200">
            {/* Mobile Navbar */}
            <div className="max-w-7xl mx-auto px-2.5 py-2.5 flex items-center justify-between md:hidden">
                {/* Search Form */}
                <div className="flex items-center flex-1 mr-4">
                    <form className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pr-10 py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-600"
                        >
                            <i className="bx bx-search text-xl font-medium"></i>
                        </button>
                    </form>
                </div>

                {/* Cart Icon */}
                <div className="relative mr-4">
                    <Link to="/cart" className="text-gray-800 hover:text-blue-600 transition">
                        <i className="bx bx-cart-alt text-2xl"></i>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Hamburger Menu Button */}
                <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-600 focus:outline-none">
                    <i className="bx bx-menu text-3xl"></i>
                </button>
            </div>

            {/* Floating Bottom Nav */}
            <div className={`
                fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-md 
                transition-all duration-500 ease-in-out transform 
                ${showFloatingBar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'} 
                block md:hidden
            `}>
                <div className="flex justify-around items-center gap-2 py-1 px-4">
                    <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                        <i className="bx bx-home text-2xl"></i>
                        <span className="text-xs">Home</span>
                    </Link>
                    <Link to="/wishlist" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                        <i className="bx bx-heart text-2xl"></i>
                        <span className="text-xs">Wishlist</span>
                    </Link>
                    <Link to="/transactions" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                        <i className="bx bx-receipt text-2xl"></i>
                        <span className="text-xs">Order</span>
                    </Link>
                    <Link to="/profile" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
                        <i className="bx bx-user text-2xl"></i>
                        <span className="text-xs">Profile</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white text-gray-800 z-50 transition-all duration-500">
                    <div className="flex px-4 py-2 mt-2 border-b items-center">
                        <button onClick={toggleMenu} className="text-gray-800 text-2xl">
                            <i className="bx bx-x"></i>
                        </button>
                        <span className="ml-4 text-xl font-semibold">Main Menu</span>
                    </div>

                    <div className="px-4 py-4 flex space-x-4">
                        <Link
                            onClick={toggleMenu}
                            to="/auth/login"
                            className="w-1/2 text-center font-semibold border border-blue-600 text-blue-600 py-1.5 rounded-lg hover:bg-blue-50 transition"
                        >
                            Login
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            to="/auth/register"
                            className="w-1/2 text-center font-semibold bg-blue-600 text-white py-1.5 rounded-lg hover:bg-blue-700 transition"
                        >
                            Register
                        </Link>
                    </div>

                    <div className="flex flex-col h-full px-4 py-2 space-y-5">
                        <Link onClick={toggleMenu} to="/" className="flex items-center hover:text-blue-600 space-x-2">
                            <i className="bx bx-receipt text-3xl"></i>
                            <span>My Order</span>
                        </Link>
                        <Link onClick={toggleMenu} to="/" className="flex items-center hover:text-blue-600 space-x-2">
                            <i className="bx bx-heart text-3xl"></i>
                            <span>Wishlist</span>
                        </Link>
                        <Link onClick={toggleMenu} to="/" className="flex items-center hover:text-blue-600 space-x-2">
                            <i className="bx bx-star text-3xl"></i>
                            <span>Review</span>
                        </Link>
                        <Link onClick={toggleMenu} to="/" className="flex items-center hover:text-blue-600 space-x-2">
                            <i className="bx bx-repeat text-3xl"></i>
                            <span>Buy Again</span>
                        </Link>
                    </div>
                </div>
            )}

            {/* Desktop Navbar */}
            <div className="hidden md:flex max-w-7xl mx-auto px-4 h-16 items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-black mr-8">
                    <Link to="/">Footwear</Link>
                </div>

                {/* Search Form */}
                <div className="flex-1 flex justify-center">
                    <form className="relative w-full max-w-2xl">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-3 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-600"
                        >
                            <i className="bx bx-search text-xl"></i>
                        </button>
                    </form>
                </div>

                {/* Cart + Auth */}
                <div className="flex items-center space-x-4 ml-8">
                    <div className="relative">
                        <Link to="/cart" className="text-gray-800 hover:text-blue-600 transition">
                            <i className="bx bx-cart-alt text-2xl"></i>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                    <Link
                        to="/auth/login"
                        className="px-4 py-1.5 rounded-md text-sm font-semibold border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/auth/register"
                        className="px-4 py-1.5 rounded-md text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;