import React from "react";
import clsx from "clsx";

const ImagePill = ({ className, children }) => {
    return (
        <div
            className={clsx(
                "absolute bg-primary bg-opacity-70 bottom-6 -left-3 rounded-r-full pl-5 pr-4 py-1",
                className)}
        >
            <div
                className="text-white text-sm font-medium"
            >
                {children}
            </div>
        </div>
    );
}

export default ImagePill;