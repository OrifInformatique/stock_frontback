import React from "react";

// Declinations
import TableEntry from "./TableEntry";

// UI elements
import Title from "../../ui/titles";

const Table = ({ title, entries }) => {
    return (
        <div className="flex flex-col w-full border border-secondary-dark">
            <Title.Table>{title}</Title.Table>
            {entries.map((entry, index) => (
                <TableEntry key={`entry-${index}`}>
                    {entry.map((row, index) => (
                        <div key={`row-${index}`}>{row}</div>
                    ))}
                </TableEntry>
            ))}
        </div>
    );
}

export default Table;