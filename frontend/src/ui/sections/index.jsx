import React from "react";

// Declinations
import SectionText from "./SectionText";

const Section = ({ header, children }) => {
    return (
        <div>
            <div className="text-primary font-semibold text-sm">
                {header}
            </div>
            {children}
        </div>
    );
}

Section.Text = SectionText;

export {Section, SectionText};
export default Section;