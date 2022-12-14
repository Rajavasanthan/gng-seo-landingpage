export default function HeroSectionFour() {
    return (
        <div className="p-4 sm:p-2 my-auto sm:mt-10" id="servicepage">
            <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">
                <div className="p-2 my-auto mr-auto md:p-0">
                    <p className="text-[#3D4C61] text-[24px] sm:text-[35px] font-900 flex justify-start items-center">
                        <img src="/assets/squres.png" alt="squares" className="h-10 mb-2 mr-2" />
                        Hire expert level developers From diverse sectors
                    </p>
                </div>
                <div className="m-auto my-auto space-y-6 md:p-0 mt-6">
                    <p className="text-[#696969] font-400 text-[16px] w-full md:w-3/4 md:ml-auto">
                        We possess brilliant skill set of programmers for scalable and secure web applications and associated services
                    </p>
                </div>
            </div>
        </div>
    );
}