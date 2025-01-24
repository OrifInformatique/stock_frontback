import React from "react";
import clsx from "clsx";

// UI elements
import Text from "../texts";

const ImagePill = ({ className, children }) => {
    return (
        <div className={clsx("absolute bg-primary bg-opacity-70 bottom-6 -left-2 rounded-r-full px-3 py-1", className)}>
            <Text className="text-white text-sm font-medium">{children}</Text>
        </div>
    );
}

export default ImagePill;