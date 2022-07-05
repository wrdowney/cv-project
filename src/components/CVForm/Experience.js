import React from "react"

const Experience = ({mode})=> {
    console.log(mode);
    if(!mode) {
        return (
            <div>
                <h2 className="font-bold border-b-2 text-xl">Experience</h2>
            </div>
        );
    }
    else {
        return (
            <div>
                123
            </div>
        );
    }  
}

export default Experience