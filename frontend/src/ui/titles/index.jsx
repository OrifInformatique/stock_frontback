import React from "react";

// Declinations
import Subtitle from "./Subtitle";
import TitleApp from "./TitleApp";
import TitlePage from "./TitlePage";
import TitleTable from "./TitleTable";

const Title = ({ children }) => {
    return (
        <h1>{children}</h1>
    );
}

Title.App = TitleApp;
Title.Page = TitlePage;
Title.Sub = Subtitle;
Title.Table = TitleTable;

export {Title, TitleApp, Subtitle, TitleTable}
export default Title;