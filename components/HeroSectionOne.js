import { useRouter } from "next/router";
import HeroSectionOneCard from "./HeroSectionOneCard";
import ContactForm from './ContactForm'
import PricingCard from "./PricingCard";
import React, { useState } from "react";
import ClientCard from "./ClientCard";

export default function HeroSectionOne() {
    const [formError, setFormError] = useState(null);
    const router = useRouter();

    return (
        <div id="homepage">
            <div className={`bg-[#F7F8FD] pb-[50px] pt-[50px] md:pb-[100px] `}>
                <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">
                    <div className="p-4 m-auto sm:p-2 md:p-0">
                        <p className="text-[#FD9E07] text-[24px] font-500">
                            Get the Best of Both worlds
                        </p>
                        {router.pathname.includes("offshore-software-development-company") &&
                            <React.Fragment>
                                <p className="text-[#3D4C61] text-[28px] sm:text-[40px] font-900">
                                    Unlock Your Business Potential <br />
                                    with Offshore Software Development
                                </p>
                                <ul className="p-4 list-disc">
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>100% In-House Team:</strong> Say goodbye to freelancers. Work with a cohesive team committed to your project's success.</li>
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>Hassle-Free Onboarding:</strong> Skip the hiring headaches and jumpstart your project swiftly.</li>
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>Flexible Engagement:</strong> Hire our developers on an hourly or monthly basis as per your project needs.</li>
                                </ul>
                            </React.Fragment>
                        }

                        {router.pathname.includes("hire-contract-developers") &&
                            <React.Fragment>
                                <p className="text-[#3D4C61] text-[28px] sm:text-[45px] font-900">
                                    Hire Dedicated <br />
                                    Remote Developers
                                </p>
                                <ul className="p-4 list-disc">
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>100% In-House Team:</strong> Say goodbye to freelancers. Work with a cohesive team committed to your project's success.</li>
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>Hassle-Free Onboarding:</strong> Skip the hiring headaches and jumpstart your project swiftly.</li>
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>Flexible Engagement:</strong> Hire our developers on an hourly or monthly basis as per your project needs.</li>
                                </ul>
                            </React.Fragment>
                        }
                    </div>
                    <div className="w-full ml-auto md:my-10 md:w-[70%]" id="contactform">
                        <ContactForm setFormError={setFormError} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:gap-10 mx-auto space-y-3 md:space-y-0 md:grid-cols-4 max-w-7xl mt-0 md:mt-[-100px]">
                <HeroSectionOneCard
                    image={"/assets/minilogo4.svg"}
                    count={8}
                    text={"Years Experience"}
                />
                <HeroSectionOneCard
                    image={"/assets/minilogo3.svg"}
                    count={10000}
                    text={"Hours of Development"}
                />
                <HeroSectionOneCard
                    image={"/assets/minilogo2.svg"}
                    count={3890}
                    text={"Happy Customers"}
                />
                <HeroSectionOneCard
                    image={"/assets/minilogo1.svg"}
                    count={11000}
                    text={"Cups of Coffee"}
                />
            </div>
            <div className="pt-10 pb-20 mx-auto mt-16 max-w-7xl">
                <ClientCard />
            </div>
        </div>
    );
}

// <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FD9E07] opacity-30"></span>
// ${(formError && formError.isValid) ? "h-[1200px]" : "h-[1350px]"} ${(formError && formError.isValid) ? "md:h-[780px]" : "md:h-[900px]"} mt-[60px] md:mt-[80px]

// <div className="bg-[#FD9E07] max-w-7xl mx-auto mt-24 pt-10 pb-20">
//                 <div className="flex justify-center sm:h-[100px] mb-8">
//                     <p className="text-white text-[24px] sm:text-[35px] font-900 font-redHat flex justify-start items-center">
//                         <img src="/assets/square-orange.png" alt="squares" className="h-6 mr-2" />
//                         Pricing Models
//                     </p>
//                 </div>
//                 <div className="grid grid-cols-1 mx-auto space-y-3 sm:gap-10 md:space-y-0 md:grid-cols-2 md:px-24">
//                     <PricingCard
//                         image={"/assets/sand-clock.svg"}
//                         text={"Hourly pricing model"}
//                     />
//                     <PricingCard
//                         image={"/assets/calendar.svg"}
//                         text={"Fixed monthly pricing model"}
//                     />
//                 </div>
//             </div>