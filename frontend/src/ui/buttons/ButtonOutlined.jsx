import React from "react";
import clsx from "clsx";

const ButtonOutlined = ({ className, variant, children }) => {
    return (
        <button className={clsx(`group border border-primary bg-white rounded-sm hover:border-${variant} max-w-36`, className)}>
            <div className="flex">
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, {variant})
                )}
            </div>
        </button>
    );
}

export default ButtonOutlined;
