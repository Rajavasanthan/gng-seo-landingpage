import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4  py-2.5 shadow fixed top-0 w-full z-50 h-[60px] md:h-[80px]">
            <div className="container flex flex-wrap items-center justify-between mx-auto max-w-7xl">
                <Link
                    to="homepage"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="flex items-center"
                >
                    <img
                        id="homepagelogo"
                        src="/assets/logo.svg"
                        className="mr-3 cursor-pointer h-9 sm:h-10"
                        alt="Grids and Guides"
                    />
                </Link>
                <div className="" id="navbar-default">
                    <ul className="flex flex-col border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li className="relative mt-2">
                            <Link
                                to="contactform"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                                className="bg-[#3D4C61] text-[15px] text-white font-redHat px-3 py-2 rounded cursor-pointer"
                            >
                                Get Free Quote
                            </Link>
                            <span className="animate-pulse absolute w-3 h-3 bg-[#FD9E07] rounded-full top-[-13px] right-[-4px]"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
