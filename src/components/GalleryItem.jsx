import React from "react";

const GalleryItem = ({ item }) => {
    return (
        <div className="card bg-primary w-full">
            <a className="grid flex-1 items-end justify-end" href={item.url}>
            <figure className="w-full py-1">
                <img
                    className="border-black bordered border-2"
                    src={item.image}
                    alt={item.name}/>
            </figure>
            <div className="card-body flex-none">
                <h2 className="card-title justify-center">
                    <div className="flex flex-1 justify-center hover:underline">{item.name}</div>
                </h2>
            </div>
            </a>
        </div>
    );
};

export default GalleryItem;
