import React from "react";
import Button from "../utils/Button";
import Input from "../utils/Input";

const EducationItem = ( {id, education, onChange, onDelete}) => {
    return (
        <div className="flex flex-col gap-2 mb-4">
            <form className="flex flex-col gap-2 mb-4">
                <Input type="text" name="school" placeholder="School" onChange={(e) => onChange(e, id)} value={education.school}/>
                <Input type="text" name="degree" placeholder="Degree" onChange={(e) => onChange(e, id)} value={education.degree}/>
                <Input type="text" name="fieldOfStudy" placeholder="Field of Study" onChange={(e) => onChange(e, id)} value={education.fieldOfStudy}/>
                <Input type="text" name="startDate" placeholder="Start Date" onChange={(e) => onChange(e, id)} value={education.startDate}/>
                <Input type="text" name="endDate" placeholder="End Date" onChange={(e) => onChange(e, id)} value={education.endDate}/>
                <Input type="text" name="city" placeholder="City" onChange={(e) => onChange(e, id)} value={education.city} className=""/>
                <textarea rows="5" cols="5" className="rounded-md border-2" type="text" name="description" placeholder="Description" onChange={(e) => onChange(e, id)} value={education.description}/>
                <Button type="button" onClick={() => onDelete(id)} text="Delete" name="cancel"/>
            </form>
        </div>
    );
}

export default EducationItem;