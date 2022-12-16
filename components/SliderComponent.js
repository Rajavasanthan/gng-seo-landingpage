

export default function SliderComponent({ image, name }) {
    return (
        <div className="bg-white w-[265px] h-[160px] mx-auto border">
            <img src={image} className="object-contain h-full m-auto w-100" alt={name} />
        </div>
    )
}
