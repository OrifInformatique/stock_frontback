import React from "react";

// Declinations
import TitleApp from "./TitleApp";
import TitlePage from "./TitlePage";

const Title = ({ children }) => {
    return (
        <h1>{children}</h1>
    );
}

Title.App = TitleApp;
Title.Page = TitlePage;

export {Title, TitleApp}
export default Title;