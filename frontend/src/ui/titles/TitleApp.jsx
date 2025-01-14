import React from "react";
import clsx from "clsx";

const TitleApp = ({ children, className }) => {
    return (
        <h1 className={clsx('text-2xl text-white', className)}>{children}</h1>
    );
}

export default TitleApp;