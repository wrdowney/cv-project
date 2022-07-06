import React from "react";

const Button = ({type, onClick, value, name}) => {
    return (
        <button 
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
        type={type} 
        onClick={onClick}
        value={value}
        name={name}
        >
        </button>
    );
};

export default Button;