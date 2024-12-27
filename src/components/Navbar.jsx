import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose,IoChevronDownOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(null);
    const location = useLocation();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSubmenu = (id) => setSubmenuOpen(submenuOpen === id ? null : id);

    return (
        <div className="h-[80px] flex justify-between items-center text-white sticky top-0 z-50 bg-no-repeat bg-center bg-cover shadow-md py-4 px-4" style={{ backgroundImage: "url('./assets/DeenbytesHeader.png')" }}>
                <div className="flex items-center gap-2">
                    <img
                        src="./assets/DeenbyteLogo.png"
                        alt="deenbytes logo"
                        className="h-14 w-full object-contain"
                    />
                </div>
            <nav className=" flex items-center justify-between  mx-5">
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? null : <IoMdMenu size={24} />}
                    </button>
                </div>
                <ul className="hidden md:flex gap-5">
                    {MenuItems.map((item) => (
                        <li key={item?.id} className="relative">
                            <Link
                                to={item?.link}
                                className={`text-white text-base hover:text-gray-200 px-3 py-2 flex items-center gap-1 rounded-md transition-all duration-300 ease-in-out  relative ${location.pathname === item?.link ? "bg-[#004D40] font-bold" : ""
                                    } underline-stroke`}
                                onClick={() => item?.subMenu && toggleSubmenu(item?.id)}
                            >
                                {item?.name}
                                {item?.subMenu && (
                                    <IoChevronDownOutline
                                        size={16}
                                        className={`transform transition-transform ${submenuOpen === item?.id ? "rotate-180" : ""
                                            }`}
                                    />
                                )}
                            </Link>
                            {item?.subMenu && submenuOpen === item?.id && (
                                <ul className="absolute top-full left-0 bg-[#00695C] text-white shadow-md rounded-md mt-2">
                                    {item?.subMenu.map((subItem) => (
                                        <li key={subItem?.id}>
                                            <Link
                                                to={subItem?.link}
                                                className={`block text-base px-4 py-2 transition-all duration-500  ${location.pathname === subItem?.link
                                                    ? "bg-[#004D40]  font-bold "
                                                    : "hover:bg-[#004D40]"
                                                    }`}
                                                onClick={() => setSubmenuOpen(null)}
                                            >
                                                {subItem?.name}
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            )}
                        </li>
                    ))}
                    <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium ">
                        Download
                    </button>
                    <div className="text-primary flex justify-center items-center">

                    <FaUserCircle  size={30}/>
                    </div>
                </ul>

            </nav>
            {isMenuOpen && (
                <div className="md:hidden h-screen  overflow-hidden absolute top-0 right-0 w-full ">
                    <div className="bg-[#EBFFF1] flex justify-center items-center w-full flex-col " style={{ height: "70vh" }}>

                        {/* Close Button */}
                        <button onClick={toggleMenu} className="text-white absolute top-4 right-4">
                            {isMenuOpen ? <IoClose size={24} className="text-[#000000]" /> : null}
                        </button>

                        {/* Menu Items */}
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {MenuItems.map((item) => (
                                <div key={item?.id}>
                                    <Link
                                        to={item?.link}
                                        className={`text-secondary hover:text-gray-200 px-3 py-2 flex items-center justify-center my-4 gap-1 rounded-md transition-all duration-300 ease-in-out relative ${location.pathname === item?.link ? "bg-primary font-bold text-center text-white" : ""
                                            } underline-stroke`}
                                        onClick={() => (item?.subMenu ? toggleSubmenu(item?.id) : toggleMenu())}
                                    >
                                        {item?.name}
                                        {item?.subMenu && (
                                            <IoChevronDownOutline
                                                size={24}
                                                className={`transform transition-transform ${submenuOpen === item?.id ? "rotate-180" : ""
                                                    }`}
                                            />
                                        )}
                                    </Link>
                                    {item?.subMenu && submenuOpen === item?.id && (
                                        <div className="pl-4">
                                            {item?.subMenu.map((subItem) => (
                                                <Link
                                                    to={subItem?.link}
                                                    className={`block px-3 py-2 rounded-lg text-secondary transition-all duration-500 ${location.pathname === subItem?.link ? "bg-[#004D40] font-bold text-white" : "hover:bg-[#004D40]"
                                                        }`}
                                                    key={subItem?.id}
                                                    onClick={toggleMenu}
                                                >
                                                    {subItem?.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div
                        className="bg-[#A4DBAC] w-full flex items-center   flex-col"
                        style={{ height: "25%" }}
                    >
                        <div className="w-3/4  border-t-[#184B12] border-t-2 mt-4 mb-2" style={{ boxShadow: "0 2px 2.3px #00000040" }} />

                        <span className="text-[#000000]">Contact us</span>
                        <div className="flex justify-center items-center space-x-4 py-4 rounded-t-lg">
                            <a href="https://www.instagram.com/deenbytesofficial" className="text-green-800 hover:text-green-600">
                                <img src={"./assets/instagram.png"} alt="DeenBytesApps" className="h-8 w-8 object-contain" />
                            </a>
                            <a href="https://www.facebook.com/deenBytes" className="text-green-800 hover:text-green-600">
                                <img src={"./assets/facebook.png"} alt="DeenBytesApps" className="h-8 w-8 object-contain" />
                            </a>
                            <a href="https://www.youtube.com/@DeenBytesofficial" className="text-green-800 hover:text-green-600">
                                <img src={"./assets/Youtube.png"} alt="DeenBytesApps" className="h-8 w-8 object-contain" />
                            </a>
                            <a href="https://x.com/Deenbytes" className="text-green-800 hover:text-green-600">
                                <img src={"./assets/twitter.png"} alt="DeenBytesApps" className="h-8 w-8 object-contain" />
                            </a>
                            <a href="https://www.linkedin.com/company/deenbytes/" className="text-green-800 hover:text-green-600">
                                <img src={"./assets/linkdin.png"} alt="DeenBytesApps" className="h-8 w-8 object-contain" />
                            </a>
                        </div>
                    </div>
                </div>

            )}

        </div>
    );
}

export default Navbar;

const MenuItems = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "About Us",
        link: "/about"
    },
    {
        id: 3,
        name: "Features",
        link: "/features",
        subMenu: [
            {
                id: 1,
                name: "User 1",
                link: "/user1"
            },
            {
                id: 2,
                name: "User 2",
                link: "/user2"
            }
        ]
    },
    {
        id: 4,
        name: "Kids",
        link: "/kid",

    },
    {
        id: 5,
        name: "Live Session",
        link: "/live-session",
    },
    {
        id: 6,
        name: "Premium",
        link: "/premium"
    },

];
