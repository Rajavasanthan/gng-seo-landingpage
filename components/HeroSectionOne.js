import { useRouter } from "next/router";
import HeroSectionOneCard from "./HeroSectionOneCard";
import ContactForm from './ContactForm'
import PricingCard from "./PricingCard";
import React, { useState } from "react";
import ClientCard from "./ClientCard";
import { Link } from "react-scroll";

export default function HeroSectionOne() {
    const router = useRouter();
    const isReactOrNodejsOrMobileDevLink = !router.pathname.includes("hire-nodejs-developers")
        && !router.pathname.includes("hire-mobileapp-developers")
        && !router.pathname.includes("hire-reactjs-developers");
    return (
        <div id="homepage">
            <div className={`bg-[#F7F8FD] pb-[50px] pt-[50px] md:pb-[100px] `}>
                <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">
                    <div className="p-4 m-auto sm:p-2 md:p-0">
                        {isReactOrNodejsOrMobileDevLink &&
                            <p className="text-[#FD9E07] text-[24px] font-500">
                                Get the Best of Both worlds
                            </p>
                        }
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

                        {router.pathname.includes("hire-nodejs-developers") &&
                            <React.Fragment>
                                <div className="my-3">
                                    <div className="">
                                        <img src="/assets/nodejs1.svg" className="h-16" alt={"nodejs"} />
                                    </div>
                                </div>
                                <p className="text-[#3D4C61] text-[28px] sm:text-[45px] font-900">
                                    Hire Dedicated <br />
                                    Remote Nodejs & Nest.js Developers
                                </p>
                                <ul className="p-4 list-disc">
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>100% In-House Team:</strong> Say goodbye to freelancers. Work with a cohesive team committed to your project's success.</li>
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>Hassle-Free Onboarding:</strong> Skip the hiring headaches and jumpstart your project swiftly.</li>
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>Flexible Engagement:</strong> Hire our developers on an hourly or monthly basis as per your project needs.</li>
                                </ul>
                            </React.Fragment>
                        }

                        {router.pathname.includes("hire-mobileapp-developers") &&
                            <React.Fragment>
                                <div className="flex flex-wrap items-center justify-around my-3 space-x-0 md:space-x-5 md:justify-start">
                                    <div className="">
                                        <img src="/assets/kotlin.svg" className="h-20" alt={"android"} />
                                    </div>
                                    <div className="">
                                        <img src="/assets/swift.svg" className="h-20" alt={"swift"} />
                                    </div>
                                </div>
                                <div className="flex items-center justify-start my-3 space-x-4">
                                    <div className="">
                                        <img src="/assets/react-native.svg" className="h-16" alt={"react native"} />
                                    </div>
                                    <div className="">
                                        <img src="/assets/flutter.svg" className="h-16" alt={"flutter"} />
                                    </div>
                                    <div className="">
                                        <img src="/assets/ionic.svg" className="h-10" alt={"ionic"} />
                                    </div>
                                </div>
                                <p className="text-[#3D4C61] text-[28px] sm:text-[45px] font-900">
                                    Hire Dedicated
                                    Remote Mobile App Developers
                                </p>
                                <ul className="p-4 list-disc">
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>100% In-House Team:</strong> Say goodbye to freelancers. Work with a cohesive team committed to your project's success.</li>
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>Hassle-Free Onboarding:</strong> Skip the hiring headaches and jumpstart your project swiftly.</li>
                                    <li className="text-[#A5A5A5] text-[16px] sm:text-[20px] sm:px-2 md:p-0 mt-2 text-justify"><strong>Flexible Engagement:</strong> Hire our developers on an hourly or monthly basis as per your project needs.</li>
                                </ul>
                            </React.Fragment>
                        }

                        {router.pathname.includes("hire-reactjs-developers") &&
                            <React.Fragment>
                                <div className="flex items-center justify-start w-full my-3">
                                    <div className="">
                                        <img src="/assets/react.svg" className="h-28" alt={"reactjs"} />
                                    </div>
                                    <div className="">
                                        <img src="/assets/next.svg" className="h-16 ml-[50px]" alt={"nextjs"} />
                                    </div>
                                </div>
                                <p className="text-[#3D4C61] text-[28px] sm:text-[45px] font-900">
                                    Hire Dedicated
                                    Remote React.js Developers
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
                        <ContactForm />
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
            <div className="pb-20 mx-auto mt-16 max-w-7xl">
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