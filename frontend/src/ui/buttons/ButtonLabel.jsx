import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const ButtonLabel = ({ className, variant, children }) => {
    const { t } = useTranslation();

    return (
        <div className={clsx(
            "whitespace-nowrap mx-auto py-1 px-2",
            {
                "group-hover:text-primary-light": !variant,
                "group-hover:text-success": variant === "success",
                "group-hover:text-warning": variant === "warning",
                "group-hover:text-danger": variant === "danger",
            },
            className)}
        >
            {children}
        </div>
    );
}

export default ButtonLabel;