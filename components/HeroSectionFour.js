export default function HeroSectionFour() {
    return (
        <div className="p-4 my-auto sm:p-2 sm:mt-10" id="servicepage">
            <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">
                <div className="p-2 my-auto mr-auto md:p-0 md:w-11/12">
                    <p className="text-[#3D4C61] text-[24px] sm:text-[35px] font-900 flex justify-start items-center">
                        <img src="/assets/squres.png" alt="squares" className="h-5 mb-8 mr-2 md:mb-10 md:h-9" />
                        Hire expert level developers From diverse sectors
                    </p>
                </div>
                <div className="m-auto my-auto mt-6 space-y-6 md:p-0">
                    <p className="text-[#696969] font-400 text-[17px] font-redHat w-full md:w-3/4 md:ml-auto px-6 md:px-0">
                        We possess brilliant skill set of programmers for scalable and secure web applications and associated services.
                    </p>
                </div>
            </div>
        </div>
    );
}