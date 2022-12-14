
const Footer = () => {
    return (
        <div className="bg-[#F0F0F0]">
            <div className="grid grid-cols-1 gap-10 py-10 mx-auto md:grid-cols-3 max-w-7xl">
                <img src="/assets/gandg.svg" alt="Grids and Guides" className="m-auto w-36 md:w-2/4" />
                <div className="m-auto">
                    <p className="font-700 text-[25px] font-redHat text-[#3D4C61]">Address</p>
                    <p className="font-400 text-[16px] sm:text-[18px] font-redHat">8/4 Poomagal Second Street</p>
                    <p className="font-400 text-[16px] sm:text-[18px] font-redHat">Ambal Nagar,</p>
                    <p className="font-400 text-[16px] sm:text-[18px] font-redHat">Ekkattuthangal, Chennai, Tamil Nadu</p>
                    <p className="font-400 text-[16px] sm:text-[18px] font-redHat">Pin : 600032, India.</p>
                </div>
                <div className="m-auto md:m-0">
                    <p className="font-700 text-[25px] font-redHat text-[#3D4C61]">Contact</p>
                    <p className="font-400 text-[16px] sm:text-[18px] font-redHat">Email: vasanth@gridsandguides.com</p>
                    <p className="font-400 text-[16px] sm:text-[18px] font-redHat">Phone: +91-9884327203</p>
                </div>
            </div>
        </div>
    )
}

export default Footer 