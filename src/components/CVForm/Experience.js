import React from "react"
import Button from "../utils/Button";
import ExperienceItem from "./ExperienceItem"

const Experience = ({mode, onChange, experience, onAdd, onDelete})=> {

    if(!mode) {
        const experienceItems = experience.map((experienceItem)=> (
            //console.log(experienceItem),
            <ExperienceItem key={experienceItem.id} id={experienceItem.id} experience={experienceItem} onChange={onChange} onDelete={onDelete}/>
        ));
        return (
            <div>
                <h2 className="font-bold border-b-2 text-xl mb-2">Experience</h2>
                {experienceItems}
                <Button type="button" onClick={onAdd} text="Add" name="add"/>
            </div>
        );
    }
    else {
        return (
            <div>
            </div>
        );
    }  
}

export default Experience