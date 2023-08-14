import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";


function CustomInput({ placeholder, imgSrc, type, id, onChange, onBlur, value }) {
    return (
        <div>
            <div className="flex items-center border-b border-[#FD9E07] mx-2 md:mx-0 py-2 my-2">
                <input
                    className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
                    type={type ? type : "text"}
                    placeholder={placeholder}
                    aria-label={placeholder}
                    id={id}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                />
                <div>
                    <img
                        src={imgSrc}
                        alt="user"
                        className="w-6"
                    />
                </div>
            </div>
        </div>
    )
}

export default function ContactForm() {
    const router = useRouter();
    const { campaignId } = router.query;

    const formik = useFormik({
        initialValues: {
            technology: "",
            experience: "",
            budgets: "",
            joining: "",
            name: "",
            email: "",
            phone: "",
            message: "",
            pricingModel: "",
            company: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is Required"),
            email: Yup.string()
                .email("Please enter a valid email address")
                .required("Email is Required"),
            phone: Yup.string()
                .matches(/^\+?[0-9][0-9]{7,14}$/, "Enter a valid Phone Number")
                .required("Phone Number is Required"),
            company: Yup.string().required().min(3, "Enter message atlest 3 character long"),
        }),
        onSubmit: async (values) => {
            await sendEmail(values);
            console.log(values);
        },
    });

    const sendEmail = async (values) => {
        const payload = { ...values };
        payload.campaignId = campaignId ? campaignId : "";
        await fetch(
            "https://8uhrngrbkl.execute-api.ap-south-1.amazonaws.com/gng-send-email",
            {
                method: "POST",
                body: JSON.stringify(payload),
            }
        )
            .then((res) => {
                formik.resetForm();
                router.push("/form-submitted");
                toast.success("Enquiry submitted successfully", {
                    position: "top-center",
                    duration: 6000,
                });
            })
            .catch((err) => {
                toast.error("Something went wrong", {
                    position: "top-center",
                });
                console.log(err);
            });
    };

    return (
        <div className="border rounded-md shadow-md bg-white border-[#FD9E07] mx-2 md:mx-0 mt-4 relative">
            <Toaster />
            <div className="hidden md:absolute md:top-[-20px] md:right-[-35px] md:rotate-45 md:w-[70px] md:h-[70px] md:bg-[#FD9E07] md:rounded-full md:flex md:items-center md:justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FD9E07] opacity-75"></span>
                <p className="text-center text-white font-redHat font-700 md:font-900 md:text-[14px]">SAVE <br /> 10%</p>
            </div>
            <div className="my-3">
                <p className="text-[24px] font-500 text-center">Get Free Quote</p>
                <div className="flex justify-center mt-1 space-x-2">
                    <div className="w-[40px] h-1 bg-[#FD9E07] rounded-md"></div>
                    <div className="w-[20px] h-1 bg-[#FD9E07] rounded-md"></div>
                    <div className="w-[10px] h-1 bg-[#FD9E07] rounded-md"></div>
                </div>
                <div className="w-full my-3 md:w-2/3 md:mx-auto">
                    <CustomInput
                        placeholder="Full Name"
                        imgSrc="/assets/user.svg"
                        id="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {(formik.touched.name && formik.errors.name) && (
                        <span className="mt-0 ml-1 text-xs tracking-wide text-red-500 font-redHat">
                            {formik.errors.name}
                        </span>
                    )}
                    <CustomInput
                        placeholder="E-mail Id"
                        type="email"
                        imgSrc="/assets/mail.svg"
                        id="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {(formik.touched.email && formik.errors.email) && (
                        <span className="ml-1 text-xs tracking-wide text-red-500 font-redHat">
                            {formik.errors.email}
                        </span>
                    )}
                    <CustomInput
                        placeholder="Phone Number"
                        type="tel"
                        imgSrc="/assets/phone.svg"
                        id="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {(formik.touched.phone && formik.errors.phone) && (
                        <span className="ml-1 text-xs tracking-wide text-red-500 font-redHat">
                            {formik.errors.phone}
                        </span>
                    )}
                    <CustomInput
                        placeholder="Company Name"
                        imgSrc="/assets/building.svg"
                        id="company"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.company}
                    />
                    {(formik.touched.company && formik.errors.company) && (
                        <span className="ml-1 text-xs tracking-wide text-red-500 font-redHat">
                            {formik.errors.company}
                        </span>
                    )}
                    <button
                        disabled={formik.isSubmitting}
                        onClick={formik.handleSubmit}
                        className="mx-auto bg-[#FD9E07] text-[15px] font-600 text-white font-redHat w-[138px] h-[42px] cursor-pointer flex justify-center items-center rounded-md"
                    >
                        {formik.isSubmitting && (
                            <img
                                src="/assets/spinner.svg"
                                className="h-8 mx-auto animate-spin"
                                alt="spinner"
                            />
                        )}
                        {!formik.isSubmitting && "Get Quote Now"}
                    </button>
                    <div className="flex items-center justify-center mt-2 space-x-2">
                        <img
                            src="/assets/shield.svg"
                            alt="user"
                            className="w-4 text-[#FD9E07]"
                        />
                        <span className="font-redHat font-500 text-[14px]">100% Privacy Guaranteed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}



