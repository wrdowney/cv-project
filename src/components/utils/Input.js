import React from "react";

const Input = ({
    onChange,
    type,
    name,
    placeholder,
}) => {
    return (
        <input type={type} name={name} placeholder={placeholder} onChange={onChange}></input>
    );
} 

export default Input;