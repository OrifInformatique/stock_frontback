import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import ItemCommonDetails from "./pages/ItemCommonDetails";

import Loading from "./ui/Loading";

import Redirect from "./utils/Redirect";
import EventHistory from "./pages/EventHistory";
import "./i18n";

import "./index.pcss";

const container = document.getElementById("root");
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

                    <Route path="objects/:itemCommonId/">
                        <Route path="edit" element={<ItemCommonDetails />} />

                        <Route path="exemplars/">
                            <Route index element={<ItemCommonDetails />} />

                            <Route path="add" element={<ItemCommonDetails />} />

                            <Route
                                path=":itemId"
                                element={<ItemCommonDetails />}
                            />

                            <Route
                                path=":itemId/edit"
                                element={<ItemCommonDetails />}
                            />
                        </Route>
                    </Route>
                    <Route
                        path="objects/:itemCommonID/exemplars/:exemplarID/event-history"
                        // path="/event"
                        element={<EventHistory />}
                    />
                    <Route path="*" element={<Redirect to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Suspense>,
);
