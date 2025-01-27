import React from "react";

// UI elements
import Text from "../texts";

// Declinations
import SectionText from "./SectionText";

const Section = ({ header, children }) => {
    return (
        <div>
            <Text color="primary" className="font-semibold text-sm">{header}</Text>
            {children}
        </div>
    );
}

Section.Text = SectionText;

export {Section, SectionText};
export default Section;