import React from "react"
import { Outlet } from "react-router-dom";

// Modules
import Header from "../modules/header";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className="m-4 lg:mx-60 xl:mx-80">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;