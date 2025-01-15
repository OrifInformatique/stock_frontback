import React from "react";
import clsx from "clsx";

const ButtonIcon = ({ className, children }) => {
    return (
        <div className={clsx("flex justify-center items-center bg-primary group-hover:bg-primary-light p-1", className)}>
            {children}
        </div>
    );
}

export default ButtonIcon;