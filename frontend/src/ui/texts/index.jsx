import React from "react";
import clsx from "clsx";

const Text = ({ className, children }) => {
    return (
        <div className={clsx("text-night", className)}>{children}</div>
    );
}

export default Text;