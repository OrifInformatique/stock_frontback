import React from "react";
import clsx from "clsx";

const ButtonToolbar = ({ className, children }) => {
    return (
        <button className={clsx("group border border-primary hover:border-primary-light rounded-full w-32", className)}>
            <div className="flex justify-start rounded-full">
                {children}
            </div>
        </button>
    );
}

export default ButtonToolbar;