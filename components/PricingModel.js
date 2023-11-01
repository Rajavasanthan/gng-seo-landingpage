import { Link } from "react-scroll";
import PricingCard from "./PricingCard";

export default function PricingModel() {
    return (
        <div className="pb-20 mx-auto mt-14 max-w-7xl">
            <div className="bg-[#FD9E07] max-w-7xl mx-auto mt-24 pt-10 pb-20">
                <div className="flex justify-center sm:h-[100px] mb-8">
                    <p className="text-white text-[24px] sm:text-[35px] font-900 font-redHat flex justify-start items-center">
                        <img src="/assets/square-orange.png" alt="squares" className="h-6 mr-2" />
                        Pricing Models
                    </p>
                </div>
                <div className="grid grid-cols-1 mx-auto space-y-3 sm:gap-10 md:space-y-0 md:grid-cols-2 md:px-24">
                    <PricingCard
                        image={"/assets/sand-clock.svg"}
                        text={"Hourly pricing model"}
                    />
                    <PricingCard
                        image={"/assets/calendar.svg"}
                        text={"Fixed monthly pricing model"}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center w-full px-2 mt-14">
                <div className="relative">
                    <Link
                        to="contactform"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1200}
                        className="w-full hover:shadow-2xl text-center md:w-1/3 bg-[#3D4C61] text-[15px] text-white font-redHat px-3 py-3 rounded cursor-pointer"
                    >
                        Get Free Quote Now
                    </Link>
                    <span className="absolute animate-pulse w-3 h-3 bg-[#FD9E07] rounded-full top-[-11px] right-[-4px]"></span>
                </div>
            </div>
        </div>
    )
}