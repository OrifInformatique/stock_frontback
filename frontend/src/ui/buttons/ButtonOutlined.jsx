import React from "react";
import clsx from "clsx";

const ButtonOutlined = ({ className, children }) => {
    return (
        <button className={clsx("group rounded-sm border border-primary hover:border-primary-light min-w-34", className)}>
            <div className="flex">
                {children}
            </div>
        </button>
    );
}

export default ButtonOutlined;