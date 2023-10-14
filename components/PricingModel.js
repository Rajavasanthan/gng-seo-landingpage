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
        </div>
    )
}