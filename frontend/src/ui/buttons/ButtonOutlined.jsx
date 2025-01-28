import React from "react";
import clsx from "clsx";

const ButtonOutlined = ({ className, variant, children }) => {
    return (
        <button className={clsx(
            "group border border-primary bg-white rounded-sm max-w-40",
            {
                "hover:border-primary-light": !variant,
                "hover:border-success": variant === "success",
                "hover:border-warning": variant === "warning",
                "hover:border-danger": variant === "danger",
            },
            className)}
        >
            <div className="flex">
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, {variant})
                )}
            </div>
        </button>
    );
}

export default ButtonOutlined;
