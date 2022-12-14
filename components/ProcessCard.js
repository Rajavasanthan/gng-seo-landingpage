

export default function ProcessCard({ count, text, desc, extraClass }) {
    return (
        <div className={`bg-white rounded shadow-md h-[250px] md:w-[400px] relative mx-auto ${extraClass}`}>
            <div className="flex justify-between mx-6 sm:mx-10">
                <div className="bg-[#FD9E07] w-[60px] text-center pt-7">
                    <p className="text-white font-redHat font-700 text-[30px]">{count}</p>
                </div>
                <img src="/assets/squres.png" alt="squares" className="h-10 mt-4" />
            </div>
            <div className="p-6">
                <p className="font-redHat text-[#3D4C61] text-[24px] font-700">{text}</p>
                <p className="font-redHat text-[#696969] text-[16px] font-400 mt-1">
                    {desc}
                </p>
            </div>
        </div>
    )
}
