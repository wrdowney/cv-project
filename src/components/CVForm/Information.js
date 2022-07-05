import React from "react";
import Section from "../../utils/Section";

const Information = (
    mode,
) => {
    if(!mode.mode) {
        return(
            <Section title="Information123">
                test123
            </Section>
        );
    }
    else {
        return(
            <Section title="Information1">
                test
            </Section>
        );
    }
    
}

export default Information;