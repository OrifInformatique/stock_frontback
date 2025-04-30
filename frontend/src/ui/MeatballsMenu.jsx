import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

/**
 * UI component to add a meatballs menu with personalized actions.
 *
 * @param {Array<any>} actions List of objects with a label, an icon, and an action. \
 * label: Text of the action. \
 * icon: Icon (FontAwesome) of the action. \
 * action: Function to execute when the action is clicked.
 *
 * @returns {JSX.Element}
 *
 */
const MeatballsMenu = ({
    actions,
}) =>
{
    if(!actions || actions.length < 1)
    {
        console.error("MeatballsMenu must have at least one action");
        return;
    }

    const [openMeatballsMenu, setOpenMeatballsMenu] = useState(false);

    return (
        <div className={`relative w-fit`}>
            <FontAwesomeIcon
                icon={faEllipsis}
                size="2xl"
                onClick={() => setOpenMeatballsMenu(prev => !prev)}
                className="hover:cursor-pointer"
            />

            {openMeatballsMenu && (
                <div className="absolute top-8 right-0 flex flex-col min-w-max gap-2 p-2 bg-gray-300 rounded-md">
                    {actions.map(action => (
                        <Button
                            key={action.label}
                            icon={action.icon}
                            label={action.label}
                            keepLabel={true}
                            onClickFunction={action.action}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default MeatballsMenu;