import React from "react";
import clsx from "clsx";

// UI elements
import Text from "../texts";

const ButtonLabel = ({ className, variant, children }) => {
    return (
        <div className="mx-auto p-1">
            <Text className={clsx(`text-primary px-2 whitespace-nowrap group-hover:text-${variant}`, className)}>
                {children}
            </Text>
        </div>
    );
}

export default ButtonLabel;