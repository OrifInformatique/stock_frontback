import React from "react";
import clsx from "clsx";

const Subtitle = ({ className, children }) => {
    return (
        <h2 className={clsx(
            "text-lg font-medium bg-night bg-opacity-10 rounded-sm px-2",
            className)}
        >
            {children}
        </h2>
    );
}

export default Subtitle;