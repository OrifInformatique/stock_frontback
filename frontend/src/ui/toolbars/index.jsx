import React from "react";
import clsx from "clsx";

const Toolbar = ({ className, children }) => {
    return (
        <div className={clsx("flex items-start justify-between m-4 gap-4", className)}>
            {children}
        </div>
    );
}

export default Toolbar;