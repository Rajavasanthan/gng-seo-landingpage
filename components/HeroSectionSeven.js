import FeedBackCard from "./FeedBackCard";
import Slider from "react-slick";
import { useRef } from "react";

export default function HeroSectionSeven() {
    const sliderRef = useRef();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    };

    const onClickNext = () => {
        sliderRef.current.slickNext();
    }

    const onClickPrev = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <div className="py-10 mx-auto overflow-hidden bg-white max-w-7xl">
            <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="px-3 w-full md:w-[600px]">
                    <img src="/assets/squres.png" alt="squares" className="mb-2 h-10" />
                    <p className="text-[#3D4C61] font-900 text-[24px] sm:text-[35px] font-redHat">Some of Our <br /> Satisfied Clients.</p>
                    <p className="text-[#3D4C61] font-400 text-[16px] font-redHat my-4 w-full md:w-2/3">
                        Grids and Guides is a top Web Design Company in Chennai Started in 2010 with a small team and now we
                    </p>

                    <div className="items-center justify-center hidden mt-10 space-x-10 md:flex md:justify-start">
                        <button className="w-[63px] h-[63px] shadow-md rounded" onClick={onClickPrev}>
                            <img src="/assets/down-arrow.png" alt="arrow-down" className="h-6 m-auto rotate-90 cursor-pointer" />
                        </button>
                        <button className="w-[63px] h-[63px] shadow-md rounded" onClick={onClickNext}>
                            <img src="/assets/down-arrow.png" alt="arrow-down" className="h-6 m-auto -rotate-90 cursor-pointer" />
                        </button>
                    </div>
                </div>
                <div className="md:w-[700px] w-full">
                    <Slider ref={sliderRef} {...settings} autoplay arrows={false}>
                        <FeedBackCard name="R.K.Karthikeyan" designation="CEO @ We Monsterstudio" description="Thanks for the fantastic job guys(Grids and Guides). It was a pleasure working with Raja Vasanthan as he worked closely with us every step of the way, and we valued his creative input that exceeded our expectations. We are planning a couple more web designing in the near future, and we will be trusting Gus and J.P. to come through for us again and again. If you are looking to get a website built or redesigned these are the go to
                        guys."/>
                        <FeedBackCard name="RJ.Vigneshkanth" designation="CEO @ Blacksheep" description="We are absolutely thrilled with our new website...we really cannot thank Grids and Guides enough! The team have interpreted our brief beyond our expectations & have designed us a site we are incredibly proud of! Every request has been dealt with so quickly and if ever I had a query or problem it has been resolved within hours. Grids and Guides has been fantastic from start to finish and it honestly has been an absolute pleasure dealing with them...I reccomend everyone to use this."/>
                        <FeedBackCard name="Naveen" designation="Spaces Gardening" description="We are delighted with our decision to use Grids and Guides Web designing Company in Chennai for our website design, and would like to congratulate you and your team on a job well done. This has been a painless process for us from start to finish. Our site looks impressive and polished, your designers did a wonderful job converting our initial concepts into a finished product. The most impressive aspect of all was your ability to communicate directly with us on a day-to-day basis, rather than us having to go through an automated call centre - we truly feel like VIP clients, which is a great feeling to have. We would recommend Grids and Guides to other companies without hesitation"/>
                        <FeedBackCard name="Abdhullah" designation="CEO @ Namma Auto Transportation" description="The site you created for us is fantastic. We had many complex requests and you found a way to accommodate them all. The finished site is feature packed and still looks great, which is exactly what we wanted. Having one point of contact during the development of the site made communication very simple. Grids and Guides are just awesome. I wouldn't hesitate to recommend you."/>
                    </Slider>
                </div>
            </div>
        </div>
    )
}