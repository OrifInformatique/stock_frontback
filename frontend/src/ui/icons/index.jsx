import clsx from "clsx";

// UI elements
import IconAdd from "./IconAdd";
import IconAuth from "./IconAuth";
import IconBack from "./IconBack";
import IconDelete from "./IconDelete";
import IconEdit from "./IconEdit";
import IconHistory from "./IconHistory";
import IconScan from "./IconScan";

const Icon = ({ renderItem, className }) => {
    return renderItem({ className: clsx(className) });
}

Icon.Add = IconAdd;
Icon.Auth = IconAuth;
Icon.Back = IconBack;
Icon.Delete = IconDelete;
Icon.Edit = IconEdit;
Icon.History = IconHistory;
Icon.Scan = IconScan;

export {Icon, IconAdd, IconAuth, IconBack, IconDelete, IconEdit, IconHistory, IconScan}
export default Icon;