import React from "react";
import clsx from "clsx";

const ButtonFilled = ({ className, variant, children }) => {
    return (
        <button className={clsx(`text-white rounded-sm bg-primary hover:bg-${variant} min-w-34`, className)}>
            {children}
        </button>
    );
}

export default ButtonFilled;