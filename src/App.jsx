import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'boxicons/css/boxicons.min.css';

import AppRoutes from './routes';
import Navbar from "@/components/Navbar.jsx";

function App() {
    const [cart, setCart] = useState([]);

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Router>
            <div>
                {/* Navbar */}
                <Navbar cartCount={cartCount} />

                {/* Main Content */}
                <main>
                    <AppRoutes />
                </main>

                {/* Footer (optional) */}
                <footer className="bg-gray-800 text-white p-4 text-center">
                    <p>&copy; 2025 ShoeStore. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;