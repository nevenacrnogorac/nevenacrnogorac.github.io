import React from "react";
import myImage from '../assets/images/cover.jpg'; // Prilagodite putanju


const HomeLayout = () => {
    return (
        <div className="flex h-screen">
            <div className="md:basis-1/5"></div>
            <div className="grow flex-1 basis-1/2 justify-around">
                <div className="flex flex-col items-start">
                    <div className="flex items-center mb:py-6 py-4 flex-1 w-full">
                        <h1 className=" flex text-3xl items-center w-full justify-center md:justify-start ">Nevena Crnogorac</h1>
                        <div/>
                    </div>
                    <div className="flex flex-col md:flex-row items-stretch justify-around justify-items-stretch w-full">
                        <div className="flex-col items-start md:w-1/2 justify-items-center md:justify-items-start pt-5 ">
                            <div>
                                <button className="outline-2 border-black border-2 p-2 px-6 mb-4 md:mb-20">join mailing list</button>
                            </div>
                            <div>
                                <div className="flex md:pb-4 justify-center md:justify-start"><a href="#">&gt; Previous work</a></div>
                                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="flex md:pb-4 justify-center md:justify-start md:pl-4"><a href="#">about</a></div>
                                <div className="flex md:pb-4 justify-center md:justify-start md:pl-4"><a href="#">contact</a></div>
                            </div>
                        </div>
                        <div className="">
                            <img className="object-contain h-auto px-10 py-5 " src={myImage.src} alt="Nevena Crnogorac"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:basis-1/5"></div>
        </div>
    )
        ;
};

export default HomeLayout;
