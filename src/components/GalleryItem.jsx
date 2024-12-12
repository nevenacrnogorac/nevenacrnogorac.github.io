import React from "react";

const GalleryItem = ({ item }) => {
    return (
        <div className="card bg-primary w-full shadow-2xl">
            <a className="grid flex-1 items-end justify-end  divide-y-2" href={item.url}>
            <figure className="w-full py-1">
                <img
                    src={item.image}
                    alt={item.name}/>
            </figure>
            <div className="card-body flex-none">
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
