import React from "react";
import myImage from '../assets/images/cover.jpg'; // Prilagodite putanju


const GalleryLayout  = ({children}) => {
    return (
        <div>
        <div className="text-2xl items-center flex justify-center p-10"><h1>All artworks</h1></div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-center justify-items-center px-10">
                {children}
            </div>
        </div>
    );
};

export default GalleryLayout;
