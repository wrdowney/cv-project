import React from "react";
import Button from "../utils/Button";
import EducationItem from "./EducationItem";

const Education = ({previewMode, onChange, education, onAdd, onDelete}) => {
    if(!previewMode) {
        const educationItems = education.map((educationItem)=> (
            <EducationItem key={educationItem.id} id={educationItem.id} education={educationItem} onChange={onChange} onDelete={onDelete}/>
        ));
        return (
            <div>
                <h2 className="font-bold border-b-2 text-xl mb-2">Education</h2>
                {educationItems}
                <Button type="button" onClick={onAdd} text="Add" name="add"/>
            </div>
        );
    }
    else {
        const displayEducationItems = education.map((educationItem)=> (
            <div key={educationItem.id}>
                <h3 className="text-xl font-bold">{educationItem.school}</h3>
                <div className="flex justify-between">
                    <p className="font-bold text-sm">{educationItem.degree}</p>
                    <p className="text-sm">{educationItem.startDate}-{educationItem.endDate}</p>
                </div>
                <p className="text-sm">{educationItem.city}</p>
                <p>{educationItem.description}</p>
                
            </div>
        ));
        return (
            <div>
                <h1 className="font-bold text-3xl border-b-2 mt-2">Education</h1>
                {displayEducationItems}
            </div>
        );
    }
}

export default Education;