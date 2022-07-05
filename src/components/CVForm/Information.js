import React from "react";
import Input from "../utils/Input";

const Information = (
    mode,
) => {
    if(!mode.mode) {
        return(
            <div className=" flex flex-col gap-2">
                <h2 className="font-bold border-b-2">Information</h2>
                <Input type="text" name="first-name" placeholder="First Name" onChange=""/>
                <Input type="text" name="last-name" placeholder="Last Name" onChange=""/>
                <Input type="text" name="email" placeholder="Email" onChange=""/>
                <Input type="text" name="phone" placeholder="Phone" onChange=""/>
                <Input type="text" name="address" placeholder="Address" onChange=""/>
            </div>
        );
    }
    else {
        return(
            <></>
        );
    }
    
}

export default Information;