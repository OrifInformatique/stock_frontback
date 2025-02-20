import React from "react";
import { Link } from "react-router-dom";

// UI elements
import Icon from "../icons";

const LinkHistory = ({ className, to }) => {
    return (
        <Link className={className} to={to}>
            <div className="flex items-center">
                <Icon.History className="stroke-1 h-10 text-primary" />
            </div>
        </Link>
    );
}

export default LinkHistory;