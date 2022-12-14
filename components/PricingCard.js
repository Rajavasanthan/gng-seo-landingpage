import React from 'react'

const PricingCard = ({ image, text }) => {
    return (
        <div className="bg-[#3D4C61] rounded w-full h-[170px] md:h-[190px] md:w-11/12 mx-auto">
            <div className="bg-[#6E7B8C] w-[100px] h-[80px] m-auto flex justify-center items-center">
                <img src={image} alt={text} className="h-10 m-auto" />
            </div>
            <div className="mt-6">
                <p className="font-redHat text-white text-[16px] md:text-[18px] font-600 text-center">{text}</p>
            </div>
        </div>
    )
}

export default PricingCard