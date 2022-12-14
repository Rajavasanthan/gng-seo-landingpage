import React from 'react'

const CustomCardSectionSix = ({ image, text }) => {
    return (
        <div className="bg-white rounded w-full h-[165px] md:w-[223px] mx-auto border-b-[#FD9E07] border-b-4">
            <div className="bg-[#FD9E07] w-[100px] h-[80px] m-auto flex justify-center items-center">
                <img src={image} alt={text} className="h-10 m-auto" />
            </div>
            <div className="mt-4">
                <p className="font-redHat text-[#3D4C61] text-[16px] font-600 text-center">{text}</p>
            </div>
        </div>
    )
}

export default CustomCardSectionSix