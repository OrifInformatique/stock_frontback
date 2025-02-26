import React from 'react'
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            {/* Add a header here */}

            <main>
                <Outlet />
            </main>

            {/* Add a footer here */}
        </>
    )
}

export default MainLayout