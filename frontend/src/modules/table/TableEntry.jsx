import React from "react";

const TableEntry = ({ children }) => {
    return (
        <div className="flex flex-col bg-secondary-light border-t border-secondary-dark gap-y-3 p-3">
            {children}
        </div>
    );
}

export default TableEntry;