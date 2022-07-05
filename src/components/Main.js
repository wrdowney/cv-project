import Experience from './CVForm/Experience';
import Education from './CVForm/Education';
import Information from './CVForm/Experience'

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