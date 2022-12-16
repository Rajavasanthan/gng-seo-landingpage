import ClientCard from "./ClientCard";
import HeroSectionFourCard from "./HeroSectionFourCard";
import HeroSectionSix from "./HeroSectionSix";
import ProcessCard from "./ProcessCard";


export default function HeroSectionFive() {
    return (
        <div>
            <div className="mx-auto sm:my-10 max-w-7xl mb-3 md:mb-[-100px]">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    <HeroSectionFourCard image={"/assets/research-consultant.svg"} text={"Dedicated Resource Consulting"} description={"With our hand-picked experienced candidates, we promise on quality, cost-effective services and efficient timeliness. We deliver the required skill for quick and successful result in your business ventures. They bring in new insights & objectives to the project to finish it on time"} >
                        <p className="font-redHat text-[#3D4C61] text-[24px] mt-4 font-700">Dedicated Resource <br /> Consulting</p>
                    </HeroSectionFourCard>
                    <HeroSectionFourCard image={"/assets/img3.svg"} text={"App Development"} description={"Our app developers build mobile apps from scratch or re-engineer an existing app to your expectations. Our team is highly skilled, experienced and known for sticking to the project deadlines."}><p className="font-redHat text-[#3D4C61] text-[24px] mt-4 font-700">App <br /> Development</p></HeroSectionFourCard>
                    <HeroSectionFourCard image={"/assets/img2.svg"} text={"Custom Development"} description={"We create unique software application to solve specific set of challenges. Our team is qualified to conceptualize, design, build and deploy software for the specific needs of an individual or a company."}>
                        <p className="font-redHat text-[#3D4C61] text-[24px] mt-4 font-700">Custom <br /> Development</p>
                    </HeroSectionFourCard>
                    <HeroSectionFourCard image={"/assets/img1.svg"} text={"Maintenance and Testing"} description={"Being two equally important phases of Software Development Life Cycle, our team is equipped with the expertise and in-depth skill to test the software during pre-release and conduct periodic and planned maintenance"}>
                        <p className="font-redHat text-[#3D4C61] text-[24px] mt-4 font-700">Maintenance and <br /> Testing</p>
                    </HeroSectionFourCard>
                </div>
            </div>
            <div className="bg-[#F7F8FD]">
                <div className="p-4 mx-auto max-w-7xl sm:p-2 md:pt-32">
                    <div className="flex justify-center sm:h-[100px]">
                        <p className="text-[#3D4C61] text-[24px] sm:text-[35px] font-900 font-redHat flex justify-start items-center">
                            <img src="/assets/square2.png" alt="squares" className="h-8 mr-2" />
                            Process & Steps
                        </p>
                    </div>
                    <div className="text-[16px] text-[#696969] font-400 text-justify md:px-0 w-full md:w-8/12 md:mx-auto mb-6 mt-4 md:mt-0">
                        The Process of hiring from G&G is simple, precise and time saving. Start hiring with our simple 4 step process for development and design projects where you get access to proficient developers who produce results that work
                    </div>
                    <div className="relative grid grid-cols-1 gap-5 mt-10 mb-10 md:gap-10 md:grid-cols-2">
                        <ProcessCard extraClass={"box1"} text={"List your Expectations"} desc={"Share your project requirements to receive the best services from the best programmers in the shortest duration and also budget friendly."} count={"01"} />
                        <ProcessCard extraClass={"box2 h-full"} text={"Identify the best developers"} desc={"From those we shortlisted from the pool of talents based on expertise, experience and talent and finalise candidates"} count={"02"} />
                        <ProcessCard extraClass={"box3"} text={"Contract Discussion"} desc={"Discuss your requirements, targets, budget and duration with the developers and finalise them in the contract"} count={"03"} />
                        <ProcessCard extraClass={"box4"} text={"Match a Model"} desc={"Choose a model from the available engagement models, match your terms with the model and get the most fitting developers"} count={"04"} />
                        <div className="middle-bar"></div>
                    </div>
                    <div className="mt-10" id="clientpage">
                        <ClientCard />
                    </div>
                    <div className="pb-10 mt-10 md:mt-20">
                        <HeroSectionSix />
                    </div>
                </div>
            </div>
        </div>
    )
}