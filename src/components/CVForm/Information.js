import React from "react";
import Input from "../utils/Input";

const Information = ({mode, handleChange, cv}) => {
    if(!mode) {
        return(
            <div className=" flex flex-col gap-2">
                <h2 className="font-bold border-b-2">Information</h2>
                <Input type="text" name="firstName" placeholder="First Name" onChange={(e) => handleChange(e)}/>
                <Input type="text" name="lastName" placeholder="Last Name" onChange={(e) => handleChange(e)}/>
                <Input type="text" name="email" placeholder="Email" onChange={(e) => handleChange(e)}/>
                <Input type="text" name="phone" placeholder="Phone" onChange={(e) => handleChange(e)}/>
                <Input type="text" name="address" placeholder="Address" onChange={(e) => handleChange(e)}/>
            </div>
        );
    }
    else {
        console.log(cv);
        return(
            <div>
                <h1>{cv.firstName}</h1>
            </div>
        );
    }
    
}

export default Information;