import React from "react";

const GalleryItem = ({ item }) => {
    return (
        <div className="card bg-primary w-full shadow-2xl">
            <a href={item.url}>
            <figure>
                <img
                    src={item.image}
                    alt={item.name}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <div className="flex-1">{item.name}</div>
                    {item.status === "NEW" ? (
                        <div className="badge badge-primary">NEW</div>
                    ) : (
                        <div className="badge bedge-seconady">SOLD</div>)}

                </h2>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{item.category}</div>
                </div>
            </div>
            </a>
        </div>
    );
};

export default GalleryItem;
