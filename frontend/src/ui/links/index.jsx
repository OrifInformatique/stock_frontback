import React from "react";

// Declinations
import LinkAuth from './LinkAuth';

const Link = ({ to, children, className }) => {
    return (
        <a href={to} className={className}>{children}</a>
    );
}

Link.Auth = LinkAuth;

export { Link, LinkAuth }
export default Link;