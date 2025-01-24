import React from "react";
import clsx from "clsx";

const ButtonIcon = ({ className, variant, children }) => {
    return (
        <div className={clsx(`flex justify-center items-center bg-primary group-hover:bg-${variant} p-1`, className)}>
            {children}
        </div>
    );
}

export default ButtonIcon;