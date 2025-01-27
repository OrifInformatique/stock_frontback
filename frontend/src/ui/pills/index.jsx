import React from "react";
import clsx from "clsx";

// UI elements
import Text from "../texts";

const Pill = ({ className, variant, children }) => {
    return (
        <Text
            color="white"
            className={clsx(
                `flex-wrap text-xs whitespace-nowrap rounded-full px-2 py-0.5`,
                variant ? `bg-${variant}` : "bg-secondary-dark",
                className
            )}
        >
            {children}
        </Text>
    );
}

export default Pill;
