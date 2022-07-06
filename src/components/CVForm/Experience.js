import React from "react"
import Button from "../utils/Button";
import ExperienceItem from "./ExperienceItem"

const Experience = ({previewMode, onChange, experience, onAdd, onDelete})=> {

    if(!previewMode) {
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
        const displayExperienceItems = experience.map((experienceItem)=> (
            <div key={experienceItem.id}>
                <h3 className="text-xl font-bold">{experienceItem.position}</h3>
                <div className="flex justify-between">
                    <p className="font-bold text-sm">{experienceItem.company}</p>
                    <p className="text-sm">{experienceItem.startDate}-{experienceItem.endDate}</p>
                </div>
                <p className="text-sm">{experienceItem.city}</p>
                <p>{experienceItem.description}</p>
                
            </div>
        ));
        return (
            <div>
                <h1 className="font-bold text-3xl border-b-2 mt-2">Experience</h1>
                {displayExperienceItems}
            </div>
        );
    }  
}

export default Experience;