import React from "react"
import { Outlet } from "react-router-dom";

// Modules
import Header from "../modules/header";

const MainLayout = () => {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="m-4 max-sm:max-w-sm">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;