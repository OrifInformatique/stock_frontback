import React from "react";

const TableEntry = ({ children }) => {
    return (
        <span className="bg-secondary-light border-t border-secondary-dark p-2">
            {children}
        </span>
    );
}

export default TableEntry;