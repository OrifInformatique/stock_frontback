import React from "react";

// Declinations
import TitleApp from "./TitleApp";

const Title = ({ children }) => {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    );
}

Title.App = TitleApp;

export {Title, TitleApp}
export default Title;