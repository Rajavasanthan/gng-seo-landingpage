import HeroSectionOneCard from "./HeroSectionOneCard";
import PricingCard from "./PricingCard";
import MyImg from '../public/assets/image1.svg'
import Image from "next/image";

export default function HeroSectionOne() {
    return (
        <div id="homepage">
            <div className="bg-[#F7F8FD] md:h-[650px]">
                <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">
                    <div className="p-4 sm:p-2 m-auto md:p-0">
                        <p className="text-[#FD9E07] text-[24px] font-500">Get the Best of Both worlds</p>
                        <p className="text-[#3D4C61] text-[28px] sm:text-[45px] font-900">Hire Dedicated <br />Developers</p>
                        <p className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 md:w-2/3 mt-2">Our skilled Developers possess expertise with some of the most robust, scalable,Secure backend and frontend frameworks to develop the best applications using Angular, Reactjs, Nodejs, Nextjs, and Nestjs remotely and reliably.</p>
                    </div>
                    <div className="p-4 ml-auto md:p-0">
                        <Image src={MyImg} width={500} height={500} alt="mainlogo1" loading="lazy" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:gap-10 mx-auto space-y-3 md:space-y-0 md:grid-cols-4 max-w-7xl mt-0 md:mt-[-100px]">
                <HeroSectionOneCard image={"/assets/minilogo4.svg"} count={12} text={"Years Experinece"} />
                <HeroSectionOneCard image={"/assets/minilogo3.svg"} count={12000} text={"Hours of Development"} />
                <HeroSectionOneCard image={"/assets/minilogo2.svg"} count={3890} text={"Happy Customers"} />
                <HeroSectionOneCard image={"/assets/minilogo1.svg"} count={11000} text={"Cups of Coffee"} />
            </div>
            <div className="bg-[#FD9E07] max-w-7xl mx-auto mt-24 pt-10 pb-20">
                <div className="flex justify-center sm:h-[100px] mb-8">
                    <p className="text-white text-[24px] sm:text-[35px] font-900 font-redHat flex justify-start items-center">
                    <img src="/assets/square-orange.png" alt="squares" className="mb-6 mr-2 h-8" />
                    Pricing Models
                    </p>
            </div>
                <div className="grid grid-cols-1 sm:gap-10 mx-auto space-y-3 md:space-y-0 md:grid-cols-2 md:px-16">
                    <PricingCard image={"/assets/sand-clock.svg"} text={"Hourly pricing model"} />
                    <PricingCard image={"/assets/calendar.svg"} text={"Fixed monthly pricing model"} />
                </div>
            </div>
        </div>
    )
}