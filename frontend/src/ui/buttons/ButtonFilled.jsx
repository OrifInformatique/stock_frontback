import React from "react";
import clsx from "clsx";

const ButtonFilled = ({ className, children }) => {
    return (
        <button className={clsx("text-white rounded-sm bg-primary hover:bg-primary-light min-w-34", className)}>
            {children}
        </button>
    );
}

export default ButtonFilled;