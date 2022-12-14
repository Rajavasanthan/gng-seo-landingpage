import React from 'react'

const FeedBackCard = () => {
    return (
        <div className="bg-white rounded shadow-md w-full md:w-[400px] mx-auto my-10">
            <div className="flex justify-between mx-10">
                <div className="bg-[#FD9E07] w-[60px] text-center pt-7 border-b" style={{ borderBottomLeftRadius: "40px", borderBottomRightRadius: "40px" }} >
                    <img src="/assets/user.png" alt="squares" className="mt-5" />
                </div>
                <img src="/assets/squres.png" alt="squares" className="h-10 mt-4" />
            </div>
            <div className="p-10">
                <p className="font-redHat text-[#3D4C61] text-[24px] font-700">Abdhulla</p>
                <p className="text-[#FD9E07] text-[18px] font-600 font-redHat">CEO @ Namma Auto Transportation</p>
                <p className="font-redHat text-[#696969] text-[16px] font-400 mt-1">
                    The site you created for us is fantastic. We had many complex requests and you found a way to accommodate them all. The finished site is feature packed and still looks great, which is exactly what we wanted.
                </p>
            </div>
        </div>
    )
}

export default FeedBackCard 