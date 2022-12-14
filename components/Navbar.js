import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    return (
        <nav className="bg-white border-gray-200 px-4 sm:px-4 py-4 sm:py-2.5 shadow">
            <div className="container flex flex-wrap items-center justify-between mx-auto max-w-7xl">
                <Link href="/" className="flex items-center">
                    <img src="/assets/logo.svg" alt="Grids and Guides" />
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
                            <Link href="/" className="block text-[18px] text-[#BABABA] mt-2 rounded">Home</Link>
                        </li>
                        <li>
                            <Link href="#aboutpage" className="block text-[18px] text-[#BABABA] mt-2 rounded">About</Link>
                        </li>
                        <li>
                            <Link href="#servicepage" className="block text-[18px] text-[#BABABA] mt-2 rounded">Services</Link>
                        </li>
                        <li>
                            <Link href="#clientpage" className="block text-[18px] text-[#BABABA] mt-2 rounded">Clients</Link>
                        </li>
                        <li className="mt-2">
                            <Link href="#contactpage" className="bg-[#3D4C61] text-[15px] text-white font-redHat px-3 py-2 rounded">CONACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {openMobileNav &&
                <div className="block w-full md:hidden">
                    <ul className="w-full p-4 mt-4 space-y-5 text-center border border-gray-100 rounded-lg bg-gray-50 font-redHat">
                        <li>
                            <Link href="/" className="block text-[18px] text-[#BABABA] mt-2 rounded">Home</Link>
                        </li>
                        <li>
                            <Link href="#aboutpage" className="block text-[18px] text-[#BABABA] mt-2 rounded">About</Link>
                        </li>
                        <li>
                            <Link href="#servicepage" className="block text-[18px] text-[#BABABA] mt-2 rounded">Services</Link>
                        </li>
                        <li>
                            <Link href="#clientpage" className="block text-[18px] text-[#BABABA] mt-2 rounded">Clients</Link>
                        </li>
                        <li>
                            <Link href="#contact" className="bg-[#3D4C61] text-[15px] text-white font-redHat px-3 py-2 rounded">CONACT US</Link>
                        </li>
                    </ul>
                </div>
            }
        </nav>

    );
}