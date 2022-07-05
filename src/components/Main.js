import React from 'react';
import Information from './CVForm/Information';
import Experience from './CVForm/Experience';
import Education from './CVForm/Education';
import Switch from '../utils/Switch';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            togglePreview: false,
        }
    }
    changeMode() {
        this.setState((prevState) => 
        {   
            return {
                togglePreview: !prevState.togglePreview
            }
        });
    }
    render() {
        return (
            <div className="m-4 p-4 h-full shadow-md rounded-md border-2">
                <Switch 
                    onChange={() => this.changeMode()}
                    label="Preview"
                />
                <Information 
                    mode = {this.state.togglePreview}
                />
                <Education />
                <Experience />
            </div>
        );
    }

    
}



export default Main;