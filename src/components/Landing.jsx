
import React from "react";
import myImage from '../assets/images/cover.jpg'; // Prilagodite putanju

const Landing = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={myImage.src}
                    className="max-w-lg rounded-lg shadow-2xl"/>
                <div className="">
                    <h1 className="text-5xl font-bold">Art Gallery</h1>
                    <p className="py-6">
                        Here you can buy created by Nevena Crnogorac, artist from Serbia.
                    </p>
                    <button className="btn btn-primary">Browse Gallery</button>
                    <button className="btn ml-6 btn-outline">Subscribe to email list</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
