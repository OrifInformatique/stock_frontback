import React from "react";
import clsx from "clsx";

const ButtonIcon = ({ className, variant, children }) => {
    return (
        <div
            className={clsx(
                "flex justify-center items-center bg-primary p-1",
                {
                    "group-hover:bg-primary-light": !variant,
                    "group-hover:bg-success": variant === "success",
                    "group-hover:bg-warning": variant === "warning",
                    "group-hover:bg-danger": variant === "danger",
                },
                className)}
        >
            {children}
        </div>
    );
}

export default ButtonIcon;