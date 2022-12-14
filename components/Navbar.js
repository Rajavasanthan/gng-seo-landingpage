import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4  py-2.5 shadow">
            <div className="container flex flex-wrap items-center justify-between mx-auto max-w-7xl">
                <Link
                    to="homepagelogo"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="flex items-center"
                >
                    <img id="homepagelogo" src="/assets/logo.svg" className="mr-3 cursor-pointer h-9 sm:h-10" alt="Grids and Guides" />
                </Link>
                {!openMobileNav &&
                    <button onClick={() => setOpenMobileNav(!openMobileNav)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                }
                {openMobileNav &&
                    <button onClick={() => setOpenMobileNav(!openMobileNav)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <img src="/assets/close.svg" className="w-6 h-6" alt="close icon" />
                    </button>
                }
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <Link
                                to="homepagelogo"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="block text-[18px] text-[#BABABA] mt-2 rounded cursor-pointer"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="aboutpage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                className="block text-[18px] text-[#BABABA] mt-2 rounded cursor-pointer"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="servicepage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                                className="block text-[18px] text-[#BABABA] mt-2 rounded cursor-pointer"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="clientpage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                                className="block text-[18px] text-[#BABABA] mt-2 rounded cursor-pointer"
                            >
                                Clients
                            </Link>
                        </li>
                        <li className="relative mt-2">
                            <Link
                                to="contactpage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                                className="bg-[#3D4C61] text-[15px] text-white font-redHat px-3 py-2 rounded cursor-pointer"
                            >
                                CONACT US
                            </Link>
                            <span className="animate-pulse absolute w-3 h-3 bg-[#FD9E07] rounded-full top-[-13px] right-[-4px]"></span>
                        </li>
                    </ul>
                </div>
            </div>
            {openMobileNav &&
                <div className="block w-full md:hidden">
                    <ul className="w-full p-4 mt-4 space-y-5 text-center border border-gray-100 rounded-lg bg-gray-50 font-redHat">
                        <li>
                            <Link
                                onClick={() => setOpenMobileNav(false)}
                                to="homepagelogo"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="block text-[18px] text-[#BABABA] mt-2 rounded cursor-pointer"
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setOpenMobileNav(false)}
                                to="aboutpage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                className="block text-[18px] text-[#BABABA] mt-2 rounded cursor-pointer"
                            >About</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setOpenMobileNav(false)}
                                to="servicepage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                                className="block text-[18px] text-[#BABABA] mt-2 rounded cursor-pointer"
                            >Services</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setOpenMobileNav(false)}
                                to="clientpage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                                className="block text-[18px] text-[#BABABA] mt-2 rounded cursor-pointer"
                            >Clients</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setOpenMobileNav(false)}
                                to="contactpage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={2000}
                                className="bg-[#3D4C61] text-[15px] text-white font-redHat px-3 py-2 rounded cursor-pointer"
                            >CONACT US</Link>
                        </li>
                    </ul>
                </div>
            }
        </nav>

    );
}