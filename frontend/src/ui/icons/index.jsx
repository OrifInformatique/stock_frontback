import clsx from "clsx";

// UI elements
import IconAuth from "./IconAuth";
import IconBack from "./IconBack";
import IconHistory from "./IconHistory";
import IconScan from "./IconScan";

const Icon = ({ renderItem, className }) => {
    return renderItem({ className: clsx(className) });
}

Icon.Auth = IconAuth;
Icon.Back = IconBack;
Icon.History = IconHistory;
Icon.Scan = IconScan;

export {Icon, IconAuth, IconBack, IconHistory, IconScan}
export default Icon;