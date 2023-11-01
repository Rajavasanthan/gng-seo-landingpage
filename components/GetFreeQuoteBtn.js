import { Link, animateScroll as scroll } from "react-scroll";

export default function GetFreeQuoteBtn() {
    return (
        <div className="fixed flex bottom-0 z-[1000] w-full md:hidden">
            <Link
                to="contactform"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
                className="w-full text-center bg-[#FD9E07] text-[15px] text-white font-redHat px-3 py-4 rounded cursor-pointer"
            >
                Get Free Quote Now
            </Link>
        </div>
    )
}