import React from "react";
import clsx from "clsx";

// UI elements
import Text from "../texts";

const SectionText = ({ className, children }) => {
    return (
        <Text className={clsx("text-sm", className)}>{children}</Text>
    );
}

export default SectionText;