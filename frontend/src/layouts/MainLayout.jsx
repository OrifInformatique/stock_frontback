import React from 'react'
import { Outlet } from "react-router-dom";

/**
 * Layout for all pages.
 *
 * @returns {JSX.Element}
 *
 */
const MainLayout = () => {
    return (
        <>
            <header>
                Header works!
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                Footer works!
            </footer>
        </>
    )
}

export default MainLayout