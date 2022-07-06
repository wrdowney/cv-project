import React, { useState } from 'react';
import Information from './CVForm/Information';
import Experience from './CVForm/Experience';
import Education from './CVForm/Education';
import Switch from './utils/Switch';
import TemplateCV from './utils/TemplateCV';

const Main = () => {
    const [cv, setCv] = useState(TemplateCV);
    const [mode, setMode] = useState(false);

    function handleChangeInformation(e) {
        const { name, value } = e.target;

        setCv((prevState) => ({
            ...prevState,
            information: {
                ...prevState.information,
                [name]: value,
            },
        }));    
    };

    function handleChangeExperience(e) {
        const { name, value } = e.target;

        setCv((prevState) => ({
            ...prevState,
            experience: {
                ...prevState.experience,
                [name]: value,
            },
        }));    
    };
 
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
            />
            <Experience 
                mode = {mode}
                onChange = {handleChangeExperience}
                cv = {cv.experience}
            />
        </div>
    );
    
    
}

export default Main;