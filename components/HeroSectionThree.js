import TechStackCard from "./TechStackCard";

export default function HeroSectionThree() {
    return (
        <div className="relative p-4 sm:p-2 md:p-0 md:h-[300px] bg-[#F7F8FD] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
            <img src="/assets/square2.png" alt="squares" className="hidden h-16 md:block md:absolute top-3 right-1" />
            <div className="order-last m-auto">
                <div className="flex items-center justify-between space-x-1 md:space-x-4 md:justify-start">
                    <TechStackCard image={"/assets/angular.svg"} text={"Angular"} />
                    <TechStackCard image={"/assets/react.svg"} text={"React"} />
                </div>
                <div className="flex flex-wrap items-center justify-between space-x-1 md:space-x-4 md:justify-between">
                    <TechStackCard image={"/assets/node.svg"} text={"Nodejs"} />
                    <TechStackCard image={"/assets/next.svg"} text={""} />
                    <TechStackCard image={"/assets/nest.svg"} text={"Next js"} />
                </div>
            </div>
            <div className="flex items-center w-full ml-auto md:mx-0 sm:justify-center">
                <p className="font-700 text-[25px] md:w-7/12 w-full md:mx-auto mb-6 text-[#3D4C61]">Our Professional engineers possess strong exposure in every segment of development in the domain like</p>
            </div>
        </div>
    );
} 