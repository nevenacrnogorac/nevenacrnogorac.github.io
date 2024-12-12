import React, {useState} from "react";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    return (
        <div className="divide-y-1">
            <div className="navbar bg-primary px-6 lg:px-12">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Nevena Crnogorac</a>
                </div>
                <div className="flex-none lg:hidden">
                    {/* Hamburger meni za mobilne uređaje */}
                    <label htmlFor="menu-toggle" className="btn btn-ghost btn-square peer-checked:clickable" onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className={`w-6 h-6 ${menuOpen ? 'hidden' : 'block'}`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className={`w-6 h-6 ${menuOpen ? 'block' : 'hidden'}`}
                        />
                    </label>
                </div>
                <div className="flex-none hidden lg:flex">
                    {/* Glavni meni za desktop */}
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>Gallery</summary>
                                <ul className="bg-base-100 rounded-t-none p-2 z-50">
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
                <input id="menu-toggle" type="checkbox" className="drawer-toggle peer"/>
                <div className="drawer-side lg:hidden py-16 z-50 peer-checked:visible">
                    <label htmlFor="menu-toggle" className="drawer-overlay h-screen" onClick={toggleMenu}></label>
                    <ul className="menu px-6 p-4 mx-100 w-screen bg-primary text-base-content">
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
            <hr className="bg-stone-900 "/>
        </div>
    );
};

export default NavBar;
