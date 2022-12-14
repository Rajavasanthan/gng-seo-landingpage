import TechStackCard from "./TechStackCard";

export default function HeroSectionThree() {
    return (
        <div className="relative p-4 sm:p-2 md:p-0 md:h-[350px] bg-[#F7F8FD] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
            <img src="/assets/square2.png" alt="squares" className="hidden h-16 md:block md:absolute top-3 right-1" />
            <div className="order-last m-auto md:order-none">
                <div className="flex items-center justify-center space-x-4 md:justify-start">
                    <TechStackCard image={"/assets/angular.svg"} text={"Angular"} />
                    <TechStackCard image={"/assets/react.svg"} text={"React"} />
                </div>
                <div className="flex flex-wrap items-center justify-center space-x-4 md:justify-between">
                    <TechStackCard image={"/assets/node.svg"} text={"Nodejs"} />
                    <TechStackCard image={"/assets/next.svg"} text={"Next"} />
                    <TechStackCard image={"/assets/nest.svg"} text={"Next js"} />
                </div>
            </div>
            <div className="md:mx-0 flex sm:justify-center items-center">
                <p className="font-700 text-[24px] sm:text-[35px] mb-6 sm:mb-0 text-[#3D4C61]">We Help you Hire <br /> Experts in Domain likes</p>
            </div>
        </div>
    );
}