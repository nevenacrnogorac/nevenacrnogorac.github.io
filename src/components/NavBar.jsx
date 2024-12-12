import React from "react";

const NavBar = () => {
    return (
        <div className="navbar bg-primary px-6 lg:px-12">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl ">Nevena Crnogorac</a>
            </div>
            <div className="flex-none lg:hidden">
                {/* Hamburger meni za mobilne uređaje */}
                <label htmlFor="menu-toggle" className="btn btn-ghost btn-square">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </label>
            </div>
            <div className="flex-none hidden lg:flex">
                {/* Glavni meni za desktop */}
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Gallery</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>2024</a></li>
                                <li><a>2023</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            {/* Drawer za mobilni meni */}
            <input id="menu-toggle" type="checkbox" className="drawer-toggle hidden"/>
            <div className="drawer-side lg:hidden py-16 z-50">
                <label htmlFor="menu-toggle" className="drawer-overlay"></label>
                <ul className="menu px-6 p-4 mx-100 w-80 bg-base-100 text-base-content">
                    {/* Hamburger meni stavke */}
                    <li>
                        <details>
                            <summary>Gallery</summary>
                            <ul>
                                <li><a>2024</a></li>
                                <li><a>2023</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
