import { useState } from "react";

const Faq = () => {
    const [faqData, setFaqData] = useState([
        {
            title: "How can offshore software development benefit my business?",
            desc: "Offshore software development offers several benefits, including cost savings, access to global talent, scalability, and the ability to focus on core competencies. It enables you to leverage expertise from around the world while reducing development costs and increasing efficiency.",
            isShow: false
        },
        {

            title: "How do you ensure the quality of the software developed offshore?",
            desc: "We prioritize quality assurance through rigorous testing, adherence to industry best practices, and following robust coding standards. Our experienced offshore development team focuses on delivering high-quality, bug-free applications to meet your business requirements.",
            isShow: false
        },
        {
            title: "Is offshore software development secure?",
            desc: "We understand the importance of security and take it seriously. We implement stringent security measures, including data encryption, secure communication channels, and confidentiality agreements, to protect your sensitive information and intellectual property.",
            isShow: false
        },
        {
            title: "How do you ensure effective communication and collaboration during offshore development?",
            desc: "We ensure seamless communication and collaboration through dedicated project managers who act as a bridge between you and our offshore development team. We utilize modern collaboration tools, regular progress updates, and encourage open communication to keep you informed throughout the development process.",
            isShow: false
        },
        {
            title: "Can I scale the offshore development team based on my project requirements?",
            desc: "Yes, you can easily scale your offshore development team as per your project needs. Whether you need to expand the team, add specific expertise, or adjust the team size based on evolving requirements, we offer flexibility to accommodate your project's scalability.",
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
                    <img src="/assets/squres.png" alt="squares" className="h-10 mb-2 mr-2" />
                    Faq
                </p>
            </div>
            {faqData && faqData.map((faq, index) => (
                <div className="p-8 mb-3 shadow-md cursor-pointer" key={index} onClick={() => showFaq(index)}>
                    <div className="flex items-center justify-between">
                        <p className="text-[#747474] font-400 text-[19px] pr-3">{faq.title}</p>
                        <img src="/assets/down-arrow.png" alt="arrow-down" className={`h-5 cursor-pointer ${faq.isShow ? "rotate-180" : "rotate-0"}`} />
                    </div>
                    <div className={`text-[#696969] font-400 text-[16divx] mt-10 ${faq.isShow ? "block" : "hidden"}`}>
                        {faq.desc}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Faq