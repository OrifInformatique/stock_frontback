import React from "react";

// Declinations
import LinkAuth from './LinkAuth';

const Link = ({ className, to, children }) => {
    return (
        <a href={to} className={className}>{children}</a>
    );
}

Link.Auth = LinkAuth;

export { Link, LinkAuth }
export default Link;