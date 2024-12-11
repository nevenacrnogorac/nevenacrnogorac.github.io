import React from "react";

const GalleryItem = ({ item }) => {
    return (
        <article className="bg-white shadow rounded-lg overflow-hidden">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">Price: {item.price}</p>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <div className="mt-4">
                    {item.status === "available" ? (
                        <span className="text-xs font-bold px-2 py-1 bg-green-200 text-green-800 rounded-full">
              Available
            </span>
                    ) : (
                        <span className="text-xs font-bold px-2 py-1 bg-red-200 text-red-800 rounded-full">
              Sold
            </span>
                    )}
                </div>
            </div>
        </article>
    );
};

export default GalleryItem;
