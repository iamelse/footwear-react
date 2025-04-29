import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ROUTES } from '@/config/routesConfig';
import NotFound from '@/pages/NotFound';

import AuthRoutes from './AuthRoutes';
import MainLayout from "@/layouts/MainLayout.jsx";
import Home from "@/pages/user/Home.jsx";

const AppRoutes = () => {
    const location = useLocation();

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

            {/* User routes inside / */}
            <Route path="/*" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            {/* Global 404 fallback */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;