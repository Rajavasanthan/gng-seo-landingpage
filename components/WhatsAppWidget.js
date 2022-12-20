import React from 'react'

const WhatsAppWidget = ({ className }) => {
    return (
        <a href='https://api.whatsapp.com/send/?phone=919884327203&text=hi' target="_blank" className={`${className} w-12 h-12 shadow-2xl cursor-pointer z-50`}>
            <img src="/assets/whatsapp.png" alt="whatsapp logo" className='rounded-md' />
        </a>
    )
}

export default WhatsAppWidget