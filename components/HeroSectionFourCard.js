export default function HeroSectionFourCard({ image, text, description }) {
    return (
        <div className="z-50 p-5 text-center bg-white rounded shadow-md md:text-left">
            <img src={image} className="mx-auto my-2 md:mx-0" alt={text} />
            <p className="font-redHat text-[#3D4C61] text-[24px] mt-4 font-700 w-11/12">{text}</p>
            <p className="font-redHat text-[#3D4C61] text-[16px] my-2 font-400">
                {description}
            </p>
        </div>
    );
}