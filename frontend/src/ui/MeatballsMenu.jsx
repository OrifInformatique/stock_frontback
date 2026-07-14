import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import HTMLLink from "./HTMLLink";

import { Button } from "@orif-informatique/react-components-library";
import "../style.css"
/**
 * UI component to add a meatballs menu with personalized actions.
 *
 * @param {Array<any>} actions List of objects with a label, an icon, and an action. \
 * isLink: Define whether the action is a link or not.
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
    const ref = useRef(null);
    if(!actions || actions.length < 1)
    {
        console.error("MeatballsMenu must have at least one action");
        return;
    }

    const [openMeatballsMenu, setOpenMeatballsMenu] = useState(false);

    //Hide the menu when user clicks elsewhere
    useEffect(()=>{
        function hasClickedElsewhere(eevent){
            if(ref.current && !ref.current.contains(eevent.target)){
                setOpenMeatballsMenu(false);
            }
        }

        document.addEventListener('mouseup',hasClickedElsewhere);
        return(()=>{
            document.removeEventListener('mouseup',hasClickedElsewhere);
        })
    },[]);

    return (
        <div ref={ref} className={`relative w-fit`}>
            <FontAwesomeIcon
                icon={faEllipsis}
                size="1xl"
                onClick={() => setOpenMeatballsMenu(prev => !prev)}
                className="hover:cursor-pointer"
            />

            {openMeatballsMenu && (
                <div className="appearMenu rounded-md absolute top-8 right-0 flex flex-col min-w-max gap-2 p-2 bg-gray-300 rounded-md z-500 shadow-2xl">
                    {actions.map(action => (
                        <div key={action.label}>
                            {action.isLink ? (

                                <HTMLLink
                                    to={action.action}
                                    icon={action.icon}
                                    title={action.label}
                                    styleAsButton={true}
                                />
                            ) : (
                                <Button
                                    icon={action.icon}
                                    label={action.label}
                                    keepLabel={true}
                                    onClick={()=>{action.action();setOpenMeatballsMenu(false);}}
                                    className={"!rounded-md w-full"}
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MeatballsMenu;