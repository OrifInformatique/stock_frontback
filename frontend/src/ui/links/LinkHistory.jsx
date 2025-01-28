import React from "react";

import Icon from "../icons";

const LinkHistory = ({ className, to }) => {
    return (
        <a className={className} href={to}>
            <div className="flex items-center">
                <Icon.History className="stroke-1 h-10 text-primary" />
            </div>
        </a>
    );
}

export default LinkHistory;