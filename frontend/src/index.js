import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';

import Loading from './components/Loading';

import Redirect from './utils/Redirect';

import './i18n';

import './index.pcss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Suspense fallback={<Loading />}>
        <BrowserRouter
            basename={process.env.APP_ROOT}
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />

                    <Route path="*" element={<Redirect to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Suspense>
);