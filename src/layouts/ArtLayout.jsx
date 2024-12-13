import React, {useState} from "react";
import artworks from '../data/artworks.json'
import GalleryItem from "../components/GalleryItem.jsx";


const ArtLayout  = () => {

    const [selectedImage, setSelectedImage] = useState('/assets/images/1.jpg')

    return (
        <div className="py-6"><div
                className="grid lg:grid-cols-8 sm:grid-cols-1 gap-10 justify-center justify-items-center px-10">

                <div className="card lg:col-span-4 lg:col-start-2 bg-primary items-center">
                    <a href="/gallery" className="flex pb-4 flex-1 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                        </svg>

                    </a>
                    <figure className="border-image-border bordered border-4 relative w-2/3">
                        <img
                            className="border-stone-700 bordered border-2"
                            src={selectedImage}
                        />
                    </figure>
                    <div className="card-body flex-none">
                        <h2 className="card-title justify-center">
                            <div className="flex flex-1 justify-center hover:underline gap-4">
                                <figure className={(selectedImage.toString().includes("1.jpg") ? "border-black bordered border-2 ": "") + "  max-h-lvh w-fit" } onClick={() => setSelectedImage('/assets/images/1.jpg')}>
                                        <img
                                            className=" "
                                            src="/assets/images/1.jpg"
                                        />
                                    </figure>
                                    <figure className={ (selectedImage.toString().includes("2.jpg") ? "border-black bordered border-2 ": "") + "  max-h-lvh w-fit" } onClick={() => setSelectedImage('/assets/images/2.jpg')}>
                                        <img
                                            className=""
                                            src="/assets/images/2.jpg"
                                        />
                                    </figure>
                                    <figure className={ (selectedImage.toString().includes("3.jpg") ? "border-black bordered border-2 ": "") + "  max-h-lvh w-fit" } onClick={() => setSelectedImage('/assets/images/3.jpg')}>
                                        <img
                                            className=" bordered border-2"
                                            src="/assets/images/3.jpg"
                                        />
                                    </figure>
                                    <figure className={ (selectedImage.toString().includes("4.jpg") ? "border-black bordered border-2 ": "") + "  max-h-lvh w-fit" } onClick={() => setSelectedImage('/assets/images/4.jpg')}>
                                        <img
                                            className=" bordered border-2"
                                            src="/assets/images/4.jpg"
                                        />
                                    </figure>
                                </div>
                            </h2>
                        </div>
                </div>

            <div className="flex flex-col gap-4 grid-cols-1 justify-start col-span-2 w-full">
                <div className="text-2xl items-center flex justify-start"><h1>Painting 1</h1></div>
                <div>£3,574.00 GBP</div>
                <div className="text-xs	">taxes included.</div>
                <div className="flex">
                    <div className="btn w-full btn-primary">Purchase</div>
                </div>
                <div>2024</div>
                <div>165 x 190cm (65 x 74.8”)</div>
                <div>mixed media on canvas, framed in sustainably grown flooded gum</div>
                <div className="collapse collapse-arrow">
                    <input type="checkbox" name="my-accordion-1"/>
                    <div className="collapse-title font-medium p-0 py-4">shipping</div>
                    <div className="collapse-content">
                        <p>
                            shipping is not included within the price of the artworks and is calculated at the point of purchase.
                            all artworks are carefully packaged and include transport insurance.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="checkbox" name="my-accordion-2"/>
                    <div className="collapse-title font-medium p-0 py-4">information for international buyers</div>
                    <div className="collapse-content">
                        <p>
                            international buyers please note that artworks shipped outside of australia will be removed
                            from their frame and shipped rolled. artworks will require professional framing once at
                            their destination.
                            <br/>
                            <br/>
                            international buyers please also note that customs may be charged on international
                            (non-australian) purchases. the amount a customs authority may charge is dependent on the
                            destination country and local laws. any fees, taxes or duties are the responsibility of the
                            receiver and the receiver only. taxes are not charged on international purchases.
                        </p>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default ArtLayout;
