import React from "react";
import Input from "../utils/Input";
import Button from "../utils/Button";

const ExperienceItem = ( {id, experience, onChange, onDelete}) => {
    return (
        <div className="flex flex-col gap-2 mb-4">
            <form className="flex flex-col gap-2 mb-4">
                <Input type="text" name="company" placeholder="Company" onChange={(e) => onChange(e, id)} value={experience.company}/>
                <Input type="text" name="position" placeholder="Position" onChange={(e) => onChange(e, id)} value={experience.position}/>
                <Input type="text" name="startDate" placeholder="Start Date" onChange={(e) => onChange(e, id)} value={experience.startDate}/>
                <Input type="text" name="endDate" placeholder="End Date" onChange={(e) => onChange(e, id)} value={experience.endDate}/>
                <Input type="text" name="city" placeholder="City" onChange={(e) => onChange(e, id)} value={experience.city} className=""/>
                <textarea rows="5" cols="5" className="rounded-md border-2" type="text" name="description" placeholder="Description" onChange={(e) => onChange(e, id)} value={experience.description}/>
                <Button type="button" onClick={() => onDelete(id)} text="Delete" name="cancel"/>
            </form>
        </div>
    );
}

export default ExperienceItem;