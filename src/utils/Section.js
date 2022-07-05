import React from "react";

const Section = ({title = ""}) => {
    return (
        <div className="flex flex-col">
            <h1>{title}</h1>
        </div>
    );
}

export default Section;