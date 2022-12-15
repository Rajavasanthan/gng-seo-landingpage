import { useState } from "react";

const Faq = () => {
    const [faqData, setFaqData] = useState([
        {
            title: "How to hire Dedicated Developers from Grids & Guides?",
            desc: <div>
                <p>To hire developers from us, Clients have just to follow a few steps:</p>
                <p>a. Approach us with the requirements of the project and developers in brief.</p>
                <p>b. Choose the developers that are appropriate depending on your expectations.</p>
                <p>c. Discuss the project in detail and take updates from them about the work progress.</p>
            </div>,
            isShow: false
        },
        {

            title: "How much does it cost to hire a Developer?",
            desc: "The cost can be estimated based on the project requirement and we have varied pricing based on per hour and per month and the client can choose as per their convenience.",
            isShow: false
        },
        {
            title: "What are the benefits of hiring a Dedicated Developer?",
            desc: "The developer will work only on one single client project and the client has the option to hire a developer as per their project needs instead of hiring a full-time employee.",
            isShow: false
        },
        {
            title: "What should I be ready with before contacting Grids & Guides?",
            desc: "It is better to have a clear idea and objective of your project (technical expertise will be an added advantage). Our business and technology consultants are there to help you anytime.",
            isShow: false
        },
        {
            title: "Who owns the code?",
            desc: "The code ownership will be provided to the client.",
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
                    <p className={`text-[#696969] font-400 text-[16px] mt-10 ${faq.isShow ? "block" : "hidden"}`}>
                        {faq.desc}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Faq