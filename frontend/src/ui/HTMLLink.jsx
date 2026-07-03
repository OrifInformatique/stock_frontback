import React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";

import { Button } from "@orif-informatique/react-components-library";

import { useNavigate } from "react-router-dom";

/**
 * UI component to navigate between pages.
 *
 * @param {string} to The link to go to. Required.
 *
 * @param {string} title Title of the link, showing when hovering the link. Null by default.
 *
 * @param {string} [color="blue"] The color of the link. "blue" by default.
 *
 * @param {boolean} [colorOnHover=true] Decide whether to color the text with the color defined in color when hovered. True by default.
 *
 * @param {boolean} [underlineOnHover=false] Decide whether to underline the text when hovered. False by default.
 *
 * @param {boolean} [styleAsButton=false] Decide whether to display the link as a button. False by default.
 *
 * @param {any} [icon=null] Icon used for the link button if styleAsButton is true.
 *
 * @param {string} [className=null] Additional and specific styles for the link. Null by default.
 *
 * @returns {JSX.Element}
 *
 */
const HTMLLink = ({
    to,
    title = null,
    color = "blue",
    colorOnHover = true,
    underlineOnHover = false,
    styleAsButton = false,
    icon = null,
    children,
    className = null
}) => {
    const navigate = useNavigate()
    if (!to) {
        console.error("HTMLLink must have a link to go to.");
        return;
    }

    if (!children) {
        console.error("HTMLLink must have children.");
        return;
    }

    const colorVariants =
    {
        transparent: "bg-transparent hover:bg-transparent border-transparent text-black " + (colorOnHover && "hover:text-blue"),
        blue: "bg-blue hover:bg-white border-blue text-white " + (colorOnHover && "hover:text-blue")
    }
    if (styleAsButton) return (
        <Button
            icon={icon}
            label={title}
            variant="secondary"
            onClick={() => { navigate(to) }}
        >
            {children}
        </Button>
    )
    return (
        <Link
            to={to}
            title={title}
            className={clsx(
                "transition-all",
                colorVariants[color],
                underlineOnHover && "hover:underline",
                className
            )}
        >
            {children}
        </Link>
    )
}

export default HTMLLink;