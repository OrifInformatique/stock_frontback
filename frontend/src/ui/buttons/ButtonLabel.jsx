import React from "react";
import clsx from "clsx";

// UI elements
import Text from "../texts";

const ButtonLabel = ({ className, variant, children }) => {
    return (
        <div className="mx-auto p-1">
            <Text
                color="primary"
                className={clsx(
                    `whitespace-nowrap px-2`,
                    {
                        "group-hover:text-primary-light": !variant,
                        "group-hover:text-success": variant === "success",
                        "group-hover:text-warning": variant === "warning",
                        "group-hover:text-danger": variant === "danger",
                    },
                    className
                )}
            >
                {children}
            </Text>
        </div>
    );
}

export default ButtonLabel;