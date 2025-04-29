import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "@/components/Navbar.jsx";

const MainLayout = () => {
    const [cart, setCart] = useState([]);

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar cartCount={cartCount} />

            {/* Main Content */}
            <main className="flex-1 bg-white pb-16"> {/* Add padding to the bottom */}
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 px-3 text-center">
                <p>&copy; 2025 Footwear. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainLayout;