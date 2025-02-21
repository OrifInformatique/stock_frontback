import React from "react";
import clsx from "clsx";

const Pill = ({ className, variant, children }) => {
    return (
        <div className={clsx(
                "flex flex-wrap text-white text-xs items-center justify-center whitespace-nowrap rounded-full px-2 py-0.5",
                {
                    "bg-night bg-opacity-80": !variant,
                    "bg-success": variant === "success",
                    "bg-warning": variant === "warning",
                    "bg-danger": variant === "danger",
                },
                className
            )}
        >
            {children}
        </div>
    );
}

export default Pill;
