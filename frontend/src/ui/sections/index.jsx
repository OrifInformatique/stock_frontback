import React from "react";
import clsx from "clsx";

// Declinations
import SectionText from "./SectionText";

const Section = ({ header, variant, children }) => {
    return (
        <div>
            <div className={clsx(
                "font-semibold text-sm",
                {
                    "text-night": !variant,
                    "text-primary": variant === "primary",
                })}
            >
                {header}
            </div>
            {children}
        </div>
    );
}

Section.Text = SectionText;

export {Section, SectionText};
export default Section;