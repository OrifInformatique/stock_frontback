import React from "react";
import { useTranslation } from "react-i18next";

// UI elements
import Text from "../texts";
import Icon from "../icons";

const LinkHistory = ({ className, to }) => {
    const { t } = useTranslation();

    return (
        <a className={className} href={to}>
            <div className="flex items-center">
                <Icon.History className="stroke-1 h-10 text-primary" />
            </div>
        </a>
    );
}

export default LinkHistory;