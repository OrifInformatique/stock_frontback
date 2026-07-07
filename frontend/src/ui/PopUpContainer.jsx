import clsx from "clsx";
import React, { Children } from "react";

/**
 * UI component to display a pop up.
 *
 *
 * @returns {JSX.Element}
 *
 */
const PopUpContainer = ({
    className = null,
    children,
    width,
    height
}) => {
    return (
        <div className="absolute flex justify-center top-20 w-full h-full my-4 space-y-2 p-4 bg-[#00000050] z-500 fadeIn">
            <div className={`fixed bg-background w-[${width}] h-[${height}] p-8 rounded-md appear`}>
                {children}
            </div>
        </div>
    )
}

export default PopUpContainer;