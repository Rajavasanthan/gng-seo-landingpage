import { useRef } from "react";
import Slider from "react-slick";
import SliderComponent from "./SliderComponent";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>
        </div>
    );
}

export default function ClientCard() {

    const sliderRef = useRef();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ],
    };

    const onClickNext = () => {
        sliderRef.current.slickNext();
    }

    const onClickPrev = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <div className="bg-[#3D4C61] text-white px-[45px] md:px[100px] py-[30px] sm:py-[80px] overflow-x-hidden relative">
            <div className="flex flex-col justify-around md:flex-row">
                <div className="flex justify-center sm:h-[100px] mb-8">
                    <p className="text-white text-[24px] sm:text-[35px] font-900 font-redHat flex justify-start items-center">
                        <img src="/assets/orange-white-logo.png" alt="squares" className="h-8 mr-4" />
                        Our Clients
                    </p>
                </div>
                <p className="font-900 text-[24px] sm:text-[35px] font-redHat"></p>
                <p className="font-400 text-[16px] font-redHat text-left md:w-2/5 mt-5 md:mt-6">
                    Our prime motive is to inculcate the desires of the clients and yield a satisfactory response from them.
                </p>
            </div>
            <div className="relative w-full mx-0 my-10 md:w-10/12 md:mx-auto">
                <SamplePrevArrow className="absolute left-[-30px] sm:left-[-20px] top-16 cursor-pointer" onClick={onClickPrev} />
                <Slider ref={sliderRef} {...settings} autoplay arrows={false}>
                    <SliderComponent image={"/assets/logos/blacksheep.png"} name={"blacksheep"} />
                    <SliderComponent image={"/assets/logos/gofloaters.png"} name={"gofloaters"} />
                    <SliderComponent image={"/assets/logos/workmates.png"} name={"workmate"} />
                    <SliderComponent image={"/assets/pulllogic.svg"} name={"pulllogic"} />
                    <SliderComponent image={"/assets/logos/cratoflow.png"} name={"cratoflow"} />
                    <SliderComponent image={"/assets/logos/blacksheep.png"} name={"blacksheep"} />
                    <SliderComponent image={"/assets/logos/gofloaters.png"} name={"gofloaters"} />
                    <SliderComponent image={"/assets/logos/workmates.png"} name={"workmate"} />
                    <SliderComponent image={"/assets/pulllogic.svg"} name={"pulllogic"} />
                    <SliderComponent image={"/assets/logos/cratoflow.png"} name={"cratoflow"} />
                </Slider>
                <SampleNextArrow className="absolute right-[-30px] sm:right-[-20px] top-16 cursor-pointer" onClick={onClickNext} />
            </div>
        </div>
    )
}