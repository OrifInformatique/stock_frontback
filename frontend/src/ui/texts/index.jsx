import React from "react";
import clsx from "clsx";

const Text = ({ className, color, children }) => {
    return (
        <div className={clsx(`text-${color || "night"}`, className)}>{children}</div>
    );
}

export default Text;