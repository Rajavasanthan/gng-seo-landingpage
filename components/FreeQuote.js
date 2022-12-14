const FreeQuote = () => {
    return (
        <div className="bg-[#F7F8FD] p-4 sm:p-2" id="contactpage">
            <div className="mx-auto max-w-7xl">
                <div className="flex justify-center sm:h-[100px]">
                    <p className="text-[#3D4C61] text-[24px] sm:text-[35px] font-900 font-redHat flex justify-start items-center">
                        <img src="/assets/square2.png" alt="squares" className="mb-2 mr-2 h-10" />
                        Get free quotation
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="font-400 text-[16px] text-[#696969] font-redHat text-center">Don’t worry your data and business ideas are safe with us.</p>
                </div>
                <div className="grid grid-cols-1 my-10 gap-y-4 md:gap-y-0 md:grid-cols-3 gap-x-5">
                    <input type="text" placeholder="Technology" className="p-4 border-none outline-none" required />
                    <input type="text" placeholder="Experience" className="p-4 border-none outline-none" required />
                    <input type="text" placeholder="Budgets" className="p-4 border-none outline-none" required />
                </div>
                <div className="flex items-center my-10 space-x-5">
                    <p className="font-redHat font-400 text-[15px] text-[#747474]">JOINING</p>
                    <label className="font-redHat font-400 text-[15px] text-[#747474] flex items-center justify-center">
                        <input
                            id="#immediately"
                            name="joining"
                            type="radio"
                            value="immediately"
                            className="w-5 h-5 accent-[#FD9E07] mr-2"
                        /> Immediately
                    </label>
                    <label className="font-redHat font-400 text-[15px] text-[#747474] flex items-center justify-center">
                        <input
                            id="#enquiry"
                            name="joining"
                            type="radio"
                            value="enquiry"
                            className="w-5 h-5 border-none outline-none accent-[#FD9E07] focus:ring-[#FD9E07] mr-2"
                        /> Enquiry
                    </label>
                </div>
                <div className="grid grid-cols-1 my-10 gap-y-4 md:gap-y-0 md:grid-cols-3 gap-x-5">
                    <input type="text" placeholder="Name" className="p-4 border-none outline-none" required />
                    <input type="email" placeholder="Email" className="p-4 border-none outline-none" required />
                    <input type="tel" placeholder="Phone" className="p-4 border-none outline-none" required />
                </div>
                <div className="w-full my-10">
                    <textarea type="text" placeholder="Message" className="w-full p-4 border-none outline-none" required />
                </div>
                <div className="mb-4">
                    <button className="bg-[#FD9E07] w-[180px] h-[60px] text-white font-redHat">INQUIRE</button>
                </div>
            </div>
        </div>
    )
}

export default FreeQuote