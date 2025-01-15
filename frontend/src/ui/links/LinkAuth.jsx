import React from "react";

// UI elements
import Icon from "../icons";

const LinkAuth = ({ className, to }) => {
    return (
        <a className={className} href={to}>
            <Icon.Auth />
        </a>
    );
}

export default LinkAuth;
