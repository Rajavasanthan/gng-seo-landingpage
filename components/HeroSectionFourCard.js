export default function HeroSectionFourCard({ image, text, description, children }) {
    return (
        <div className="z-10 w-full p-5 text-center bg-white rounded shadow-md md:text-left">
            <img src={image} className="mx-auto my-2 md:mx-0" alt={text} />
            {children}
            <p className="font-redHat text-[#3D4C61] text-[16px] my-2 font-400">
                {description}
            </p>
        </div>
    );
}