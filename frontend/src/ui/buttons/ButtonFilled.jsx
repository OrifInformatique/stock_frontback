import React from "react";
import clsx from "clsx";

const ButtonFilled = ({ className, variant, children }) => {
    return (
        <button className={clsx(
            "text-white rounded-sm bg-primary min-w-34 max-w-40",
            {
                "hover:bg-primary-light": !variant,
                "hover:bg-success": variant === "success",
                "hover:bg-warning": variant === "warning",
                "hover:bg-danger": variant === "danger",
            },
            className)}
        >
            {children}
        </button>
    );
}

export default ButtonFilled;