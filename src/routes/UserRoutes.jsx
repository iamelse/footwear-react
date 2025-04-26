import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../config/routesConfig';

import Home from '@/pages/user/Home.jsx';
import NotFound from "@/pages/NotFound.jsx";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME.path} element={<Home />} />

            {/* Catch-all 404 route at the top level */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default UserRoutes;