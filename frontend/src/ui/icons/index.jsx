import clsx from "clsx";

const Icon = ({ renderItem, className }) => {
    return renderItem({ className: clsx(className) });
}

export default Icon;