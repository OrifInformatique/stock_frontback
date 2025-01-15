import React from "react";
import clsx from "clsx";

const Separator = ({ className }) => {
    return (
        <hr className={clsx("border-secondary-light mx-2", className)} />
    );
}

export default Separator;