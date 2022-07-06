import React from "react";

const Header = ({previewMode, changePreviewMode}) => {
    return (
        <header className="flex w-full p-3 justify-center items-center shadow-md bg-sky-200">
            <h1 className="text-2xl font-bold text-center">Resume Generator</h1>
        </header>
    );
}

export default Header;