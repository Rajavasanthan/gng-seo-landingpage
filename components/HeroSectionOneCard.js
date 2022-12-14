export default function HeroSectionOneCard({ image, count, text }) {
    return (
        <div className="p-3 sm:p-5 text-center bg-white rounded shadow-md mb-2 sm:mb-0">
            <img src={image} className="mx-auto h-10 my-2" alt={text} />
            <p className="font-redHat text-[#3D4C61] text-[30px] sm:text-[35px] mt-2 sm:mt-4 font-700">{count}</p>
            <p className="font-redHat text-[#3D4C61] text-[20px] my-2 font-600">{text}</p>
        </div>
    );
}