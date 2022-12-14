import { useState } from "react";

const Faq = () => {
    const [faqData, setFaqData] = useState([
        {
            title: "In publishing and graphic design, Lorem ipsum is a placeholder",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            isShow: false
        },
        {
            title: "In publishing and graphic design, Lorem ipsum is a placeholder",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            isShow: false
        },
        {
            title: "In publishing and graphic design, Lorem ipsum is a placeholder",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            isShow: false
        }
    ])

    const showFaq = (index) => {
        const clone = [...faqData];
        clone[index].isShow = !clone[index].isShow
        setFaqData(clone)
    }

    return (
        <div className="mx-auto mb-10 max-w-7xl">
            <div className="flex justify-center p-2 md:p-0 h-[100px]">
                <p className="text-[#3D4C61] text-[24px] sm:text-[35px] font-900 font-redHat flex justify-start items-center">
                    <img src="/assets/squres.png" alt="squares" className="mb-2 mr-2 h-10" />
                    Faq
                </p>
            </div>
            {faqData && faqData.map((faq, index) => (
                <div className="p-8 mb-3 shadow-md" key={index}>
                    <div className="flex items-center justify-between">
                        <p className="text-[#747474] font-400 text-[19px] pr-3">{faq.title}</p>
                        <img src="/assets/down-arrow.png" alt="arrow-down" className={`h-5 cursor-pointer ${faq.isShow ? "rotate-180" : "rotate-0"}`} onClick={() => showFaq(index)} />
                    </div>
                    <p className={`text-[#696969] font-400 text-[16px] mt-10 ${faq.isShow ? "block" : "hidden"}`}>
                        {faq.desc}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Faq