import React, { useState, useEffect } from "react";

const ArtLayout = ({ artwork }) => {

    const [selectedImage, setSelectedImage] = useState(artwork.image);

    useEffect(() => {
        setSelectedImage(artwork.image);
    }, [artwork]);

    return (
        <div className="py-6"><div
            className="grid lg:grid-cols-8 sm:grid-cols-1 lg:gap-10 justify-center justify-items-center px-10">

            <div className="card lg:col-span-4 lg:col-start-2 bg-primary items-center">
                <a href="/gallery" className="flex pb-4 flex-1 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
                        stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>

                </a>
                <figure className="border-image-border bordered border-4 relative w-full lg:w-2/3">
                    <img
                        key={selectedImage}
                        className="border-stone-700 bordered border-2 w-full"
                        src={selectedImage}
                        alt={artwork.name}
                    />
                </figure>
                <div className="card-body flex-none">
                    <h2 className="card-title justify-center">
                        <div className="flex flex-1 justify-center hover:underline gap-4 flex-wrap">
                            {artwork.additionalImages && artwork.additionalImages.map((img, index) => (
                                <figure key={index} className={(selectedImage === img ? "border-black bordered border-2 " : "") + "  max-h-20 w-fit cursor-pointer"} onClick={() => setSelectedImage(img)}>
                                    <img
                                        className="h-20"
                                        src={img}
                                        alt={`${artwork.name} view ${index + 1}`}
                                    />
                                </figure>
                            ))}
                        </div>
                    </h2>
                </div>
            </div>

            <div className="flex flex-col gap-4 grid-cols-1 justify-start col-span-2 w-full">
                <div className="text-2xl items-center flex justify-start"><h1>{artwork.name}</h1></div>
                <div>{artwork.price}</div>
                <div className="text-xs	">taxes included.</div>
                <div className="flex">
                    <button className="btn w-full btn-primary" onClick={() => {
                        const subject = encodeURIComponent(`Inquiry about ${artwork.name}`);
                        const body = encodeURIComponent(`Hi Nevena,\n\nI am interested in purchasing "${artwork.name}" (${artwork.price}).\n\nPlease let me know if it is still available and what the shipping costs would be to [Your Country/City].\n\nBest regards,`);
                        window.location.href = `mailto:contact@nevenacrnogorac.com?subject=${subject}&body=${body}`;
                    }}>Purchase Inquiry</button>
                </div>
                <div>{artwork.year}</div>
                <div>{artwork.dimensions}</div>
                <div>{artwork.medium}</div>
                {artwork.shippingInfo && (
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-1" />
                        <div className="collapse-title font-medium p-0 py-4">shipping</div>
                        <div className="collapse-content">
                            <p>
                                {artwork.shippingInfo}
                            </p>
                        </div>
                    </div>
                )}
                {artwork.internationalInfo && (
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" name="my-accordion-2" />
                        <div className="collapse-title font-medium p-0 py-4">information for international buyers</div>
                        <div className="collapse-content">
                            <p className="whitespace-pre-line">
                                {artwork.internationalInfo}
                            </p>
                        </div>
                    </div>
                )}

            </div>
        </div>
        </div>
    );
};

export default ArtLayout;
