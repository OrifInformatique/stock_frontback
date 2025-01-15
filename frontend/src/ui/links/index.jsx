import React from "react";

// Declinations
import LinkAuth from "./LinkAuth";
import LinkHistory from "./LinkHistory";

const Link = ({ className, to, children }) => {
    return (
        <a href={to} className={className}>{children}</a>
    );
}

Link.Auth = LinkAuth;
Link.History = LinkHistory;

export { Link, LinkAuth, LinkHistory }
export default Link;