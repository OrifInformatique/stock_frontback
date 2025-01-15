import React from "react";
import clsx from "clsx";

const Separator = ({ className }) => {
    return (
        <hr className={clsx("border-secondary-light my-4", className)} />
    );
}

export default Separator;