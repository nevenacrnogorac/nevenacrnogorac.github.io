import React from "react";
import artworks from '../data/artworks.json'
import GalleryItem from "../components/GalleryItem.jsx";


const GalleryLayout  = () => {
    return (
        <div className="py-6">
        <div className="text-2xl items-center flex justify-center p-10 font-bold"><h1>All artworks</h1></div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-center justify-items-center px-10">
                {artworks.map((item) => (
                    <GalleryItem item={item} />
                ))}
            </div>
        </div>
    );
};

export default GalleryLayout;
