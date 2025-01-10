import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from './layouts/main';

// Modules
import ItemInformation from './modules/item/item-information';
import ItemHistory from './modules/item/item-history';
import Error404 from './modules/error404';

// Utils
import Redirect from './utils/Redirect'

// Styles
import './index.pcss';

// Translation
import './i18n';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter basename={process.env.APP_ROOT}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Error404 />} />
        <Route path="items/:id" element={<ItemInformation />} />
        <Route path="items/:id/history" element={<ItemHistory />} />
        <Route path="*" element={<Redirect to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);