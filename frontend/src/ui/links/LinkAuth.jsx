import React from "react";

// UI elements
import Icon from "../icons";

const LinkAuth = ({ className, to }) => {
    return (
        <a className={className} href={to}>
            <Icon.User className="h-10" />
        </a>
    );
}

export default LinkAuth;
