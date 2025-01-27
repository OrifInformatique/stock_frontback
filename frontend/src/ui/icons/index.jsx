import React from "react";

// UI elements
import IconAdd from "./IconAdd";
import IconBack from "./IconBack";
import IconDate from "./IconDate";
import IconDelete from "./IconDelete";
import IconEdit from "./IconEdit";
import IconHistory from "./IconHistory";
import IconMessage from "./IconMessage";
import IconScan from "./IconScan";
import IconUser from "./IconUser";

const Icon = () => {
    return (
        <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
    )
}

Icon.Add = IconAdd;
Icon.Back = IconBack;
Icon.Date = IconDate;
Icon.Delete = IconDelete;
Icon.Edit = IconEdit;
Icon.History = IconHistory;
Icon.Message = IconMessage;
Icon.Scan = IconScan;
Icon.User = IconUser;

export {
    Icon, IconAdd, IconBack, IconDate, IconDelete, IconEdit, IconHistory,
    IconMessage, IconScan, IconUser
}
export default Icon;