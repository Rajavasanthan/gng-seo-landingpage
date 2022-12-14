export default function TechStackCard({ image, text }) {
    return (
        <div className="flex items-center justify-center bg-white rounded shadow-md h-[60px] w-[170px] mb-4">
            <img src={image} className="object-contain h-6 mr-2" alt={text} />
            <p className="font-redHat text-[#3D4C61] text-[20px] font-600">{text}</p>
        </div>
    )
}