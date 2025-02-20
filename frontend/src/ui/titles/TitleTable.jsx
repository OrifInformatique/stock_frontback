import React from "react";
import clsx from "clsx";

const TitleTable = ({ className, children }) => {
    return (
        <div className={clsx(
            "text-xl text-left text-white bg-secondary-dark font-medium px-2 py-1",
            className)}
        >
            {children}
        </div>
    );
}

export default TitleTable;