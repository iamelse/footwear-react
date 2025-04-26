import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically call an API to authenticate the user
        if (email && password) {
            alert('Logged in successfully!');
            navigate('/'); // Redirect to home page after login
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4 flex justify-between items-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/auth/register" className="text-blue-500 hover:text-blue-700">
                            Register
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;