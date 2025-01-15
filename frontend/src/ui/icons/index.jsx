import clsx from "clsx";

// UI elements
import IconAuth from "./IconAuth";
import IconBack from "./IconBack";
import IconScan from "./IconScan";

const Icon = ({ renderItem, className }) => {
    return renderItem({ className: clsx(className) });
}

Icon.Auth = IconAuth;
Icon.Back = IconBack;
Icon.Scan = IconScan;

export default Icon;