import HeroSectionOneCard from "./HeroSectionOneCard";
import Image from "next/image";

export default function PricingModelCardSection() {
    return (
        <div id="homepage">
            <div className="bg-[#F7F8FD] md:h-[650px]">
                <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">
                    <div className="p-4 sm:p-2 m-auto md:p-0">
                        <p className="text-[#FD9E07] text-[24px] font-500">Best website for business</p>
                        <p className="text-[#3D4C61] text-[28px] sm:text-[45px] font-900">Hire AngularJS <br />Developers</p>
                        <p className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 md:w-2/3 mt-2">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface</p>
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
        </div>
    )
}