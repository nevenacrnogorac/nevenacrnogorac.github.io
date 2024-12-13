
import React from "react";
import myImage from '../assets/images/cover.jpg'; // Prilagodite putanju

const Landing = () => {
    return (
        <div className="hero bg-primary py-6">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img
                    src={myImage.src}
                    className="lg:max-w-2xl shadow-2xl"/>
                <div className="">
                    <h1 className="text-5xl font-bold">Art Gallery</h1>
                    <p className="py-6">
                        Here you can buy paintings created by Nevena Crnogorac, artist from Serbia.
                    </p>
                    <div className="grid lg:grid-cols-2 sm:grid-rows-2 gap-2">
                    <a className="grid" href="/gallery"><button className="btn btn-primary">Browse Gallery</button></a>
                    <button className="btn btn-outline sm:mx-4">Subscribe to email list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
