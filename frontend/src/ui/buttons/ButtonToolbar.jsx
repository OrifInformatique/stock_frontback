import React from "react";
import clsx from "clsx";

const ButtonToolbar = ({ className, variant, children }) => {
    return (
        <button className={clsx(
            `group border border-primary rounded-full min-w-32`,
            {
                "hover:border-primary-light": !variant,
                "hover:border-success": variant === "success",
                "hover:border-warning": variant === "warning",
                "hover:border-danger": variant === "danger",
            },
            className)}
        >
            <div className="flex justify-start items-center rounded-full">
                {React.Children.map(children, (child) => 
                React.cloneElement(child, {variant}))}
            </div>
        </button>
    );
}

export default ButtonToolbar;