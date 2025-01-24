import React from "react";
import clsx from "clsx";

// UI elements
import Text from "../texts";

const Pill = ({ className, children }) => {
    return (
        <Text className={clsx("flex-wrap bg-secondary-dark text-white text-xs whitespace-nowrap rounded-full px-2", className)}>
            {children}
        </Text>
    );
}

export default Pill;
