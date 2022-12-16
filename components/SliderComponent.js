

export default function SliderComponent({ image, name }) {
    return (
        <div className="bg-white md:w-[265px] h-[160px] mx-auto border">
            <img src={image} className="object-contain w-full h-full m-auto w-100" alt={name} />
        </div>
    )
}
