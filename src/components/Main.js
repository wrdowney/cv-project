import React, { useState } from 'react';
import Information from './CVForm/Information';
import Experience from './CVForm/Experience';
import Education from './CVForm/Education';
import Switch from '../utils/Switch';

const Main = () => {
    const [mode, setMode] = useState(false);
    return (
        <div className="m-4 p-4 h-full shadow-md rounded-md border-2">
            <Switch 
                onChange={() => { setMode(!mode); }}
                label="Preview"
            />
            <Information 
                mode = {this.state.togglePreview}
            />
            <Education 
                mode = {this.state.togglePreview}
            />
            <Experience 
                mode = {this.state.togglePreview}
            />
        </div>
    );   
}

export default Main;