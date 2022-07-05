import React from 'react';
import Information from './CVForm/Information';
import Experience from './CVForm/Experience';
import Education from './CVForm/Education';
import Switch from '../utils/Switch';

const Main = () => {
    return(
        <div className="m-4 p-4 h-full shadow-md rounded-md border-2">
            <Switch 
                onChange={changeMode()}
                label="Preview"
            >
            </Switch>
            <Information />
            <Education />
            <Experience />
        </div>
    );
}

function changeMode(mode) {
    return () => {
    }
}

export default Main;