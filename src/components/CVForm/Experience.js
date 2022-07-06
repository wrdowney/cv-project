import React, {useState} from "react"
import Button from "../utils/Button";
import Input from "../utils/Input";

const Experience = ({mode, onChange, cv})=> {
    const [showAddExperienceForm, setShowAddExperienceForm] = useState(false);

    const toggleAddExperienceForm = () => {
        return (
            console.log(showAddExperienceForm),
            setShowAddExperienceForm(!showAddExperienceForm)
        );
    }
    
    if(!mode) {
        if(showAddExperienceForm) {
            return (
                <div className="flex flex-col gap-2 mb-4">
                    <h2 className="font-bold border-b-2 text-xl mb-2">Experience</h2>
                    <form className="flex flex-col gap-2 mb-4">
                        <Input type="text" name="company" placeholder="Company" onChange={(e) => onChange(e)} value={cv.company}/>
                        <Input type="text" name="position" placeholder="Position" onChange={(e) => onChange(e)} value={cv.position}/>
                        <Input type="text" name="description" placeholder="Description" onChange={(e) => onChange(e)} value={cv.description}/>
                        <Input type="text" name="startDate" placeholder="Start Date" onChange={(e) => onChange(e)} value={cv.startDate}/>
                        <Input type="text" name="endDate" placeholder="End Date" onChange={(e) => onChange(e)} value={cv.endDate}/>
                        <Input type="text" name="city" placeholder="City" onChange={(e) => onChange(e)} value={cv.city}/>
                        <div className="flex gap-2 w-full">
                            <Button type="button" onClick={() => toggleAddExperienceForm()} text="Cancel" name="cancel"/>
                            <Button type="submit" onClick={() => toggleAddExperienceForm()} text="Add" name="add"/>
                        </div>
                    </form>
                    
                    

                </div>
            );
        }
        else {
            return (
                <div>
                    <h2 className="font-bold border-b-2 text-xl mb-2">Experience</h2>
                    <Button type="button" text="+Add Experience" name="btn-add-experience" onClick={() => toggleAddExperienceForm()}/>
                </div>
            );
        }
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