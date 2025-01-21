import React from "react";

// UI elements
import ButtonIcon from "./ButtonIcon";
import ButtonLabel from "./ButtonLabel";
import ButtonFilled from "./ButtonFilled";
import ButtonOutlined from "./ButtonOutlined";
import ButtonToolbar from "./ButtonToolbar";

const Button = ({ className, children }) => {
    return (
        <button className={className}>{children}</button>
    );
}

Button.Icon = ButtonIcon;
Button.Label = ButtonLabel;
Button.Filled = ButtonFilled;
Button.Outlined = ButtonOutlined;
Button.Toolbar = ButtonToolbar;

export { Button, ButtonIcon, ButtonLabel, ButtonFilled, ButtonOutlined, ButtonToolbar }
export default Button;