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
                        <FeedBackCard />
                        <FeedBackCard />
                        <FeedBackCard />
                        <FeedBackCard />
                        <FeedBackCard />
                        <FeedBackCard />
                    </Slider>
                </div>
            </div>
        </div>
    )
}