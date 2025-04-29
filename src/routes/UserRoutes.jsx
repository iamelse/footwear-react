import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

// Pages
import Home from '@/pages/user/Home';
import NotFound from '@/pages/NotFound';

const UserRoutes = () => {
    return (
        <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    );
};

export default UserRoutes;