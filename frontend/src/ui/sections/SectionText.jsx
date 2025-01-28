import React from "react";
import clsx from "clsx";

const SectionText = ({ className, children }) => {
    return (
        <div className={clsx("text-sm", className)}>{children}</div>
    );
}

export default SectionText;