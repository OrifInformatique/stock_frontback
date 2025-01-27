import React from "react";

// Declinations
import Subtitle from "./Subtitle";
import TitleApp from "./TitleApp";
import TitlePage from "./TitlePage";

const Title = ({ children }) => {
    return (
        <h1>{children}</h1>
    );
}

Title.App = TitleApp;
Title.Page = TitlePage;
Title.Sub = Subtitle;

export {Title, TitleApp, Subtitle}
export default Title;