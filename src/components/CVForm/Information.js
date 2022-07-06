import React from "react";
import Input from "../utils/Input";

const Information = ({previewMode, handleChange, cv}) => {
    if(!previewMode) {
        return(
            <div className=" flex flex-col gap-2 mb-4">
                <h2 className="font-bold border-b-2 text-xl">Information</h2>
                <Input type="text" name="firstName" placeholder="First Name" onChange={(e) => handleChange(e)} value={cv.firstName}/>
                <Input type="text" name="lastName" placeholder="Last Name" onChange={(e) => handleChange(e)} value={cv.lastName}/>
                <Input type="text" name="email" placeholder="Email" onChange={(e) => handleChange(e)} value={cv.email} />
                <Input type="text" name="phone" placeholder="Phone" onChange={(e) => handleChange(e)} value={cv.phone} />
                <Input type="text" name="address" placeholder="Address" onChange={(e) => handleChange(e)} value={cv.address} />
                <Input type="text" name="description" placeholder="Description" onChange={(e) => handleChange(e)} value={cv.description} />
            </div>
        );
    }
    else {
        return(
            <div className="flex p-4 justify-between border-b-2 pb-1">
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-3xl">{cv.firstName}</h1>
                    <h1 className="font-bold text-3xl">{cv.lastName}</h1>
                    <p className="bottom-0 text-sm">{cv.description}</p>
                </div>
                <div className="flex flex-col gap-4 text-sm text-right mt-7">
                    <p>{cv.email}</p>
                    <p>{cv.phone}</p>
                    <p>{cv.address}</p>
                </div>
            </div>
        );
    }
    
}

export default Information;