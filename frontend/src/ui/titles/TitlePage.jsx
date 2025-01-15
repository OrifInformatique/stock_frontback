import React from "react";
import clsx from "clsx";

const TitlePage = ({ className, children }) => {
    return (
        <h1 className={clsx("text-lg rounded-sm bg-secondary-light px-2", className)}>{children}</h1>
    );
}

export default TitlePage;