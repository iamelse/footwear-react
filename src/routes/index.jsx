import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ROUTES } from '@/config/routesConfig';
import NotFound from '@/pages/NotFound';

import AuthRoutes from './AuthRoutes';
import UserRoutes from "@/routes/UserRoutes.jsx";

const AppRoutes = () => {
    const location = useLocation();

    // Update document title based on route
    useEffect(() => {
        const routePath = location.pathname;
        const currentRoute = Object.values(ROUTES).find(route => route.path === routePath);
        if (currentRoute) {
            document.title = currentRoute.title || '';
        }
    }, [location]);

    return (
        <Routes>
            {/* Auth routes */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* User routes */}
            <Route path="/*" element={<UserRoutes />} />

            {/* Catch-all 404 route at the top level */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;