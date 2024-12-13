import React from "react";

const GalleryItem = ({ item }) => {
    let ele = ''
    if (item.status === 'SOLD') {
        ele = <div className="badge badge-secondary absolute bottom-2 left-2 rounded-md">Sold</div>
    }

    return (
        <div className="card bg-primary w-full">
            <a className="grid flex-1 items-end justify-end" href={item.url}>
                <figure className="w-full border-image-border bordered border-4 relative">
                    <img
                        className="border-stone-700 bordered border-2"
                        src={item.image}
                        alt={item.name}/>

                    {ele}
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
