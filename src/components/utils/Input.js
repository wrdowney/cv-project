import React from "react";

const Input = ({
    onChange,
    type,
    name,
    placeholder,
    value = "",
}) => {
    return (
        <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} className="border-2 rounded-md"></input>
    );
} 

export default Input;