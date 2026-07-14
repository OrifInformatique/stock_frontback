import clsx from "clsx";
import React, { Children } from "react";
import "../style.css"
/**
 * UI component to display a pop up.
 *
 *
 * @returns {JSX.Element}
 *
 */
const ToolTip = ({
    children,
    showExtraInfos
}) => {
    return (
        <div
            className={clsx(
                "appear absolute w-5/6 w-72 lg:max-w-max bg-white border-2 border-black px-4 py-2 rounded-md z-50",
                !showExtraInfos && "hidden"
            )}>
            { children }
        </div>
    )
}

export default ToolTip;