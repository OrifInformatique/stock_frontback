import React from "react";

// UI elements
import ButtonToolbar from "./ButtonToolbar";
import ButtonIcon from "./ButtonIcon";
import ButtonLabel from "./ButtonLabel";

const Button = ({ className, children }) => {
    return (
        <button className={className}>{children}</button>
    );
}

Button.Toolbar = ButtonToolbar;
Button.Icon = ButtonIcon;
Button.Label = ButtonLabel;

export { Button, ButtonToolbar }
export default Button;