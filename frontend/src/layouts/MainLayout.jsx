import React from 'react'
import { Outlet } from "react-router-dom";
import { Header, Footer, ScrollToTopButton} from "@orif-informatique/react-components-library";
import "@orif-informatique/react-components-library/styles.css";
/**
 * Layout for all pages.
 *
 * @returns {JSX.Element}
 *
 */
const MainLayout = () => {
    return (
        <>
            <Header
            logoPath="/images/logo.svg"
            style={{zIndex:500}}
            />

            <main>
                <Outlet />
            </main>
            <ScrollToTopButton onClick={()=>{}}/>
            <Footer
            style={{zIndex:500}}
            />
        </>
    )
}

export default MainLayout