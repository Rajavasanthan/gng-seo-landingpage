import { useState } from "react"
import { Link } from "react-scroll";

const PRODUCT_ENGINEERING = [
    {
        imgSrc: "/assets/angular.svg",
        name: "Angular",
        height: "h-13"
    },
    {
        imgSrc: "/assets/react.svg",
        name: "React",
        height: "h-13"
    },
    {
        imgSrc: "/assets/next.svg",
        name: "Next",
        height: "h-12"
    },
    {
        imgSrc: "/assets/vue.svg",
        name: "Vuejs",
        height: "h-13"
    },
    {
        imgSrc: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-ar21.svg",
        name: "Vuejs",
        height: "h-15"
    },
    {
        imgSrc: "/assets/nest.svg",
        name: "Nest",
        height: "h-14"
    },
    {
        imgSrc: "/assets/node.svg",
        name: "Node",
        height: "h-16"
    },
    {
        imgSrc: "/assets/python.svg",
        name: "Python",
        height: "h-9"
    },
    {
        imgSrc: "/assets/es.svg",
        name: "Elastic Search",
        height: "h-14"
    },
    {
        imgSrc: "/assets/java.svg",
        name: "Java",
        height: "h-10"
    },
    {
        imgSrc: "/assets/flutter.svg",
        name: "Flutter",
        height: "h-13"
    },
    {
        imgSrc: "/assets/ionic.svg",
        name: "Ionic",
        height: "h-10"
    },
    {
        imgSrc: "/assets/android.svg",
        name: "Android",
        height: "h-16"
    },
    {
        imgSrc: "/assets/ios.svg",
        name: "iOS",
        height: "h-12"
    },
    {
        imgSrc: "/assets/kotlin.svg",
        name: "Kotlin",
        height: "h-15"
    },
    {
        imgSrc: "/assets/swift.svg",
        name: "Swift",
        height: "h-15"
    },
    {
        imgSrc: "/assets/html.svg",
        name: "HTML",
        height: "h-15"
    },
    {
        imgSrc: "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg",
        name: "CSS",
        height: "h-15"
    },
    {
        imgSrc: "/assets/typescript.svg",
        name: "Typescript",
        height: "h-15"
    },
    {
        imgSrc: "/assets/php.svg",
        name: "PHP",
        height: "h-15"
    },
    {
        imgSrc: "/assets/laravel.svg",
        name: "Laravel",
        height: "h-15"
    },
    {
        imgSrc: "/assets/spring.svg",
        name: "Spring",
        height: "h-15"
    },
    {
        imgSrc: "/assets/serverless.svg",
        name: "Serverless",
        height: "h-16"
    },
    {
        imgSrc: "/assets/lambda.svg",
        name: "Lambda",
        height: "h-16"
    },
]

const DATA_ENGINEERING = [
    {
        imgSrc: "/assets/aws.svg",
        name: "AWS",
        height: "h-10"
    },
    {
        imgSrc: "/assets/azure.svg",
        name: "Azure",
        height: "h-9"
    },
    {
        imgSrc: "/assets/digitalocean.svg",
        name: "Digital Ocean",
        height: "h-13"
    },
    {
        imgSrc: "/assets/gcloud.svg",
        name: "Google Cloud",
        height: "h-13"
    },
    {
        imgSrc: "/assets/kafka.svg",
        name: "kafka",
        height: "h-12"
    },
    {
        imgSrc: "/assets/dynamodb.svg",
        name: "DynamoDB",
        height: "h-13"
    },
    {
        imgSrc: "/assets/awsrds.svg",
        name: "AWS RDS",
        height: "h-13"
    },
    {
        imgSrc: "/assets/redshift.svg",
        name: "AWS Redshift",
        height: "h-13"
    },
    {
        imgSrc: "/assets/elasticcache.svg",
        name: "AWS Elastic Cache",
        height: "h-13"
    },
    {
        imgSrc: "/assets/mysql.svg",
        name: "MYSQL",
        height: "h-10"
    },
    {
        imgSrc: "/assets/postgre.svg",
        name: "PostgreSQL",
        height: "h-13"
    },
    {
        imgSrc: "/assets/mongodb.svg",
        name: "MongoDB",
        height: "h-10"
    },
    {
        imgSrc: "/assets/scylla.svg",
        name: "Scylla",
        height: "h-16"
    },
    {
        imgSrc: "/assets/firebase.svg",
        name: "Firebase",
        height: "h-16"
    },
]


export default function Technologies() {
    const [selected, setSelected] = useState(0);
    const handleTab = (index) => {
        setSelected(index)
    }
    return (
        <div className="p-4 mx-auto sm:p-2 md:p-0 max-w-7xl">
            <p className="text-[#3D4C61] text-[24px] sm:text-[35px] font-900 font-redHat text-center">
                Technologies.
            </p>
            <div className="flex justify-center mt-4 space-x-6">
                <div className="cursor-pointer" onClick={() => handleTab(0)}>
                    <p className={`text-[18px] font-500 text-center ${selected === 0 ? "text-[#FD9E07]" : ""}`}>Product Engineering</p>
                    {selected === 0 &&
                        <div className="flex justify-center mt-1">
                            <div className="w-2/3 h-1 bg-[#FD9E07] rounded-md"></div>
                        </div>
                    }
                </div>
                <div className="cursor-pointer" onClick={() => handleTab(1)}>
                    <p className={`text-[18px] font-500 text-center ${selected === 1 ? "text-[#FD9E07]" : ""}`}>Data Engineering</p>
                    {selected === 1 &&
                        <div className="flex justify-center mt-1">
                            <div className="w-2/3 h-1 bg-[#FD9E07] rounded-md"></div>
                        </div>
                    }
                </div>
            </div>

            {selected === 0 &&
                <div className="flex justify-center items-center flex-wrap md:max-w-[900px] mx-auto space-x-2 mt-3 pb-10">
                    {PRODUCT_ENGINEERING.map((product, key) =>
                        <TechStackCard key={key} image={product.imgSrc} text={product.name} height={product.height} />
                    )}
                </div>
            }

            {selected === 1 &&
                <div className="flex justify-center items-center flex-wrap max-w-[900px] mx-auto space-x-2 mt-3 pb-10">
                    {DATA_ENGINEERING.map((product, key) =>
                        <TechStackCard key={key} image={product.imgSrc} text={product.name} height={product.height} />
                    )}
                </div>
            }

            <div className="flex items-center justify-center w-full px-2 mt-14">
                <div className="relative">
                    <Link
                        to="contactform"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1200}
                        className="w-full hover:shadow-2xl text-center md:w-1/3 bg-[#3D4C61] text-[15px] text-white font-redHat px-3 py-3 rounded cursor-pointer"
                    >
                        Get Free Quote Now
                    </Link>
                    <span className="absolute animate-pulse w-3 h-3 bg-[#FD9E07] rounded-full top-[-11px] right-[-4px]"></span>
                </div>
            </div>
        </div>
    )
}


function TechStackCard({ image, text, height }) {
    return (
        <div className="flex items-center justify-center flex-col bg-white rounded-2xl shadow-lg h-[130px] w-[170px] m-1 hover:shadow-2xl">
            <img src={image} className={`object-contain mr-2 ${height ? height : "h-6"}`} alt={text} />
        </div>
    )
}

// <p className="font-redHat text-[#3D4C61] text-[20px] font-600">{text}</p>