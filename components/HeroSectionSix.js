import CustomCardSectionSix from "./CustomCardSectionSix";

export default function HeroSectionSix() {
    return (
        <div className="flex flex-col items-center justify-center w-full md:flex-row">
            <div className="grid order-last grid-cols-2 gap-10 mt-5 md:ml-auto md:mt-0 md:order-none">
                <CustomCardSectionSix image={"/assets/rating4.svg"} text={"Innovative Solutions"} />
                <CustomCardSectionSix image={"/assets/rating3.svg"} text={"Enhanced Productivity"} />
                <CustomCardSectionSix image={"/assets/rating2.svg"} text={"Transparent Process"} />
                <CustomCardSectionSix image={"/assets/rating1.svg"} text={"Flexible Model"} />
            </div>
            <div className="w-full ml-auto md:w-4/12 md:mr-auto">
                <img src="/assets/square2.png" alt="squares" className="h-10 mb-6 mr-2" />
                <p className="text-[#3D4C61] font-900 text-[24px] sm:text-[35px] font-redHat">Benefits of <br /> working with our team.</p>
                <p className="text-[#3D4C61] font-400 text-[16px] font-redHat my-4">
                    At Grids and Guides, we combine our extensive experience with a continuous learning mindset to stay at the forefront of the latest technologies. Our dedicated team takes ownership of your project, ensuring a seamless collaboration that delivers stellar results.
                </p>
            </div>
        </div>
    )
}