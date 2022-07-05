import React from "react";

const Switch = ({
    label,
    onChange
}) => {
    return (
        <div className="flex justify-center">
        <div className="form-check form-switch">
            <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckDefault">{label}</label>
            <input onChange={onChange} className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault56"></input>
        </div>
        </div>
    );
}

export default Switch;