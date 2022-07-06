import React, { useState } from 'react';
import Information from './CVForm/Information';
import Experience from './CVForm/Experience';
import Education from './CVForm/Education';
import Switch from './utils/Switch';
import TemplateCV from './utils/TemplateCV';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
    const [cv, setCv] = useState(TemplateCV);
    const [mode, setMode] = useState(false);

    const handleChangeInformation = (e) => {
        const { name, value } = e.target;

        setCv((prevState) => ({
            ...prevState,
            information: {
                ...prevState.information,
                [name]: value,
            },
        }));    
    };

    const handleChangeExperience = (e, id) => {
        const { name, value } = e.target  
        setCv((prevState) => {
          const newExperience = prevState.experience.map((experienceItem) => {
            if (experienceItem.id === id) {
              return { ...experienceItem, [name]: value }
            }
            return experienceItem
          })
          return { ...prevState, experience: [...newExperience] }
        })
      }
    
    const handleAddExperience = () => {
        setCv((prevState) => ({
          ...prevState,
          experience: [
            ...prevState.experience,
            {
                id: uuidv4(),
                company: "",
                position: "",
                city: "",
                startDate: "",
                endDate: "",
                description: "",
            },
          ],
        }))
    }
    
    const handleDeleteExperience = (id) => {
        setCv((prevState) => {
            const newExperience = prevState.experience.filter(
                (experienceItem) => experienceItem.id !== id
            )
            return { ...prevState, experience: [...newExperience] }
        })
    }

    const handleChangeEducation = (e, id) => {
        const { name, value } = e.target  
        setCv((prevState) => {
          const newEducation = prevState.education.map((educationItem) => {
            if (educationItem.id === id) {
              return { ...educationItem, [name]: value }
            }
            return educationItem
          })
          return { ...prevState, education: [...newEducation] }
        })
    }

    const handleAddEducation = () => {
        setCv((prevState) => ({
          ...prevState,
          education: [
            ...prevState.education,
            {
                id: uuidv4(),
                school: "",
                degree: "",
                fieldOfStudy: "",
                startDate: "",
                endDate: "",
                description: "",
            },
          ],
        }))
    }

    const handleDeleteEducation = (id) => {
        setCv((prevState) => {
            const newEducation = prevState.education.filter(
                (educationItem) => educationItem.id !== id
            )
            return { ...prevState, education: [...newEducation] }
        });
    }

    return (
        <div className="p-4 shadow-md rounded-lg border-2 m-4 w-5/6 bg-white mb-14 overflow-auto h-full">
            <Switch 
                onChange={() => { setMode(!mode); }}
                label="Preview"
            />
            <Information 
                mode = {mode}
                handleChange = {handleChangeInformation}
                cv = {cv.information}
            />
            <Education 
                mode = {mode}
                onChange = {handleChangeEducation}
                onAdd = {handleAddEducation}
                onDelete = {handleDeleteEducation}
                education = {cv.education}
            />
            <Experience 
                mode = {mode}
                onChange = {handleChangeExperience}
                experience = {cv.experience}
                onAdd = {handleAddExperience}
                onDelete = {handleDeleteExperience}
            />
        </div>
    );

}

export default Main;