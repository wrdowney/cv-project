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
 
    return (
        <div className="p-4 h-full shadow-md rounded-md border-2 m-4 w-5/6">
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
                //mode = {this.state.togglePreview}
            />
            <Experience 
                //mode = {this.state.togglePreview}
            />
        </div>
    );
    
    
}

export default Main;