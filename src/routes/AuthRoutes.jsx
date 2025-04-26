import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../config/routesConfig';

import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import NotFound from "@/pages/NotFound.jsx";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN.path} element={<Login />} />
            <Route path={ROUTES.REGISTER.path} element={<Register />} />

            {/* Catch-all 404 route at the top level */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AuthRoutes;