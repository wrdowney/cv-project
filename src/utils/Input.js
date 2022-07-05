import React from "react";

const Input = ({
    onChange,
    type,
    name,
    placeholder,
    value,
}) => {
    return (
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    );
} 

export default Input;