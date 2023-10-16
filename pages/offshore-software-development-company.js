import { Fragment, useEffect, useState } from "react";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import FreeQuote from "../components/FreeQuote";
import HeroSectionFive from "../components/HeroSectionFive";
import HeroSectionFour from "../components/HeroSectionFour";
import HeroSectionOne from "../components/HeroSectionOne";
import HeroSectionSeven from "../components/HeroSectionSeven";
import HeroSectionThree from "../components/HeroSectionThree";
import HeroSectionTwo from "../components/HeroSectionTwo";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Technologies from "../components/Technologies";
import FloatedPhone from "../components/FloatedPhone";
import PricingModel from "../components/PricingModel";

export default function Home() {
    const [showScrollToTopBtn, setshowScrollToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setshowScrollToTopBtn(true);
            } else {
                setshowScrollToTopBtn(false);
            }
        });
    }, []);

    return (
        <div className="relative">
            {showScrollToTopBtn && <ScrollToTop className={"fixed bottom-3 right-3"} />}
            <FloatedPhone className={"fixed bottom-3 left-3"} />
            <Navbar />
            <HeroSectionOne />
            <Technologies />
            <PricingModel />
            <HeroSectionFour />
            <HeroSectionFive />
            <HeroSectionSeven />
            <Faq />
            <Footer />
        </div>
    );
}
//<HeroSectionTwo />
//   <FreeQuote />
// {showScrollToTopBtn &&
//     <Fragment>
//         <WhatsAppWidget className={"fixed bottom-[82px] right-3"} />
//         <ScrollToTop className={"fixed bottom-3 right-3"} />
//     </Fragment>
// }
// {!showScrollToTopBtn &&
//     <WhatsAppWidget className={"fixed bottom-3 right-3"} />
// }
