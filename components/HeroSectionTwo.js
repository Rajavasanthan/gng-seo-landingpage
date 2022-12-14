import Image from 'next/image';
import MyImg from '../public/assets/image2.svg';

export default function HeroSectionTwo() {
    return (
        <div className="my-auto h--[600px] sm:mt-10" id="aboutpage">
            <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">
                <div className="p-4 sm:p-2 mr-auto md:p-0">
                    <Image src={MyImg} width={500} height={500} alt="mainlogo2" loading="lazy" />
                </div>
                <div className="p-4 sm:p-2 m-auto space-y-6 md:p-0">
                    <p className="text-[#3D4C61] text-[24px] sm:text-[35px] font-900 flex justify-start items-center">
                        <img src="/assets/squres.png" alt="squares" className="w-10 sm:w-6 h-10 sm:h-6 mr-2" />
                        Why choose us?
                    </p>
                    <p className="text-[#696969] font-400 text-[16px] text-justify md:px-0 md:text-left">Grids & Guides offers access to high profiled skills and solutions with brilliant developers who can execute the tools and techniques in the technology that produces the best in class solutions for any size of assignment. We develop client-side solutions to generate robust and interactive user experience in exchange of immense traffic to the web applications irrespective of the business vertical or dimension.
                    Hire the best and most suitable developers for any industry to build persuasive frontend development and up-gradation that are irreproachable for liable markets and users<br/>
                    Hire a team to develop your app from scratch or hire individual talents to join existing team at multiple levels, G&G is your go to solution provider for all levels of expertise in development<br/>
                    Our Professional engineers possess strong exposure in every segment of development in the domain like</p>
                </div>
            </div>
        </div>
    );
}