import React from "react";
import clsx from "clsx";

// UI elements
import Text from "../texts";

const ButtonLabel = ({ className, children }) => {
    return (
        <div className="mx-auto p-1">
            <Text className={clsx("text-primary group-hover:text-primary-light", className)}>{children}</Text>
        </div>
    );
}

export default ButtonLabel;