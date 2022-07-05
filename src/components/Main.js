import React from 'react';
import Information from './CVForm/Information';
import Experience from './CVForm/Experience';
import Education from './CVForm/Education';

const Main = () => {
    return(
        <div className="m-4 p-4 h-full shadow-md rounded-md border-2">
            <Information />
            <Education />
            <Experience />
        </div>
    );
}

export default Main;