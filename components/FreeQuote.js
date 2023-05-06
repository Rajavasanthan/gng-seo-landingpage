import { useFormik } from "formik"
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { useState } from "react";
import { useRouter } from "next/router";

const TECHNOLOGY_OPT = [
    {
        value: "Node Js",
        label: "Node Js"
    },
    {
        value: "Nest Js",
        label: "Nest Js"
    },
    {
        value: "Angular",
        label: "Angular"
    },
    {
        value: "React Js",
        label: "React Js"
    },
    {
        value: "Next Js",
        label: "Next Js"
    },
]

const PRICING_MODEL = [
    {
        value: "Fixed Monthly Cost Model",
        label: "Fixed Monthly Cost Model"
    },
    {
        value: "Hourly Rate Model",
        label: "Hourly Rate Model"
    },
]

const BUDGETS_FIXED = [
    {
        value: "INR 40K - INR 80K",
        label: "INR 40K - INR 80K",
    },
    {
        value: "INR 80K - INR 1.4L",
        label: "INR 80K - INR 1.4L",
    },
    {
        value: "INR 1.5L - INR 2L",
        label: "INR 1.5L - INR 2L",
    },
    {
        value: "INR 2L - INR 3L",
        label: "INR 2L - INR 3L",
    },
    {
        value: "INR 3L and Above",
        label: "INR 3L and Above",
    },
]

const BUDGETS_HOURLY = [
    {
        value: "INR 750 / Hour",
        label: "INR 750 / Hour",
    },
    {
        value: "INR 1000 / Hour",
        label: "INR 1000 / Hour",
    },
    {
        value: "INR 1250 / Hour",
        label: "INR 1250 / Hour",
    },
    {
        value: "INR 1500 / Hour",
        label: "INR 1500 / Hour",
    },
    {
        value: "INR 1800 / Hour",
        label: "INR 1800 / Hour",
    },
]

const JOINING_OPT = [
    {
        value: "IMMEDIATELY",
        label: "IMMEDIATELY",
    },
    {
        value: "ENQUIRY",
        label: "ENQUIRY",
    },
]

const EXPERIENCE_OPT = [
    {
        value: "1 - 3 Years",
        label: "1 - 3 Years",
    },
    {
        value: "4 - 6 Years",
        label: "4 - 6 Years",
    },
    {
        value: "7 - 10 Years",
        label: "7 - 10 Years",
    },
    {
        value: "10+ Years",
        label: "10+ Years",
    },
]

const FreeQuote = () => {
    const router = useRouter();
    const { campaignId } = router.query;
    const [tech, setTech] = useState([]);

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
            company: ""
        },
        validationSchema: Yup.object({
            technology: Yup.string().required("Technology is Required"),
            experience: Yup.string().required("Experience is Required"),
            budgets: Yup.string().required("Budgest is Required"),
            joining: Yup.string().required("Joining is Required"),
            pricingModel: Yup.string().required("Pricing Model is Required"),
            name: Yup.string().required("Name is Required"),
            email: Yup.string().email("Please enter a valid email address").required("Email is Required"),
            phone: Yup.string().matches(/^\+?[0-9][0-9]{7,14}$/, "Enter a valid Phone Number").required("Phone Number is Required"),
            message: Yup.string().min(10, "Enter message atlest 10 character long").required("Message is Required"),
        }),
        onSubmit: async (values) => {
            await sendEmail(values)
        },
    })

    const budgetsSelectOpt = (val) => {
        if (val === "Fixed Monthly Cost Model") {
            return BUDGETS_FIXED
        } else if (val === "Hourly Rate Model") {
            return BUDGETS_HOURLY
        } else {
            return []
        }
    }

    const sendEmail = async (values) => {
        const payload = { ...values };
        payload.campaignId = campaignId ? campaignId : '';
        await fetch("https://8uhrngrbkl.execute-api.ap-south-1.amazonaws.com/gng-send-email", {
            method: "POST",
            body: JSON.stringify(payload)
        })
            .then(res => {
                formik.resetForm()
                setTech([])
                toast.success("Enquiry submitted successfully", {
                    position: "top-center",
                    duration: 6000
                })
            })
            .catch(err => {
                toast.error("Something went wrong", {
                    position: "top-center",
                })
                console.log(err)
            })
    }

    return (
        <div className="bg-[#F7F8FD] p-10 relative" id="contactpage">
            <div className="absolute top-0 right-0">
                <img src="/assets/large-tile.svg" alt="squares" className="hidden md:block md:h-[200px]" />
            </div>
            <Toaster />
            <div className="mx-auto max-w-7xl">
                <div className="flex justify-center p-2 md:p-0 h-[100px]">
                    <p className="text-[#3D4C61] text-[35px] font-900 font-redHat flex justify-start items-center">
                        <img src="/assets/large-tile.svg" alt="squares" className="mb-2 mr-2 h-7" />
                        Get free quotation
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="font-400 text-[17px] text-[#696969] font-redHat text-center">Don’t worry your data and business ideas are safe with us.</p>
                </div>
                <div className="grid grid-cols-1 my-10 gap-y-4 md:gap-y-0 md:grid-cols-3 gap-x-5">
                    <div className="flex flex-col">
                        <Select
                            name="technology"
                            isSearchable={false}
                            placeholder="Choose a Technology"
                            options={TECHNOLOGY_OPT}
                            isMulti
                            value={tech}
                            styles={{
                                control: (baseStyles) => ({
                                    ...baseStyles,
                                    border: 0,
                                    outline: "none",
                                    padding: "10px",
                                    boxShadow: 'none'
                                })
                            }}
                            //onFocus={formik.handleBlur}
                            onBlur={() => formik.setFieldTouched('technology', true)}
                            onChange={async (val) => {
                                setTech(val)
                                const valArr = [];
                                val.forEach(opt => valArr.push(opt.value))
                                await formik.setFieldValue("technology", valArr.join(","))
                            }}
                        />
                        {formik.touched.technology &&
                            <span className="mt-1 ml-1 text-xs tracking-wide text-red-500 font-redHat">
                                {formik.errors.technology}
                            </span>
                        }
                    </div>
                    <div className="flex flex-col">
                        <Select
                            placeholder="Select Experience"
                            name="experience"
                            isSearchable={false}
                            value={EXPERIENCE_OPT.filter(val => val.value === formik.values.experience)}
                            options={EXPERIENCE_OPT}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    border: 0,
                                    outline: "none",
                                    padding: "10px",
                                    boxShadow: 'none'
                                })
                            }}
                            onBlur={() => formik.setFieldTouched('experience', true)}
                            onChange={async (val) => {
                                await formik.setFieldValue("experience", val.value)
                            }}
                        />
                        {formik.touched.experience &&
                            <span className="mt-1 ml-1 text-xs tracking-wide text-red-500 font-redHat">
                                {formik.errors.experience}
                            </span>
                        }
                    </div>
                    <div className="flex flex-col">
                        <Select
                            placeholder="Select a Pricing Model"
                            name="pricingModel"
                            isSearchable={false}
                            options={PRICING_MODEL}
                            value={PRICING_MODEL.filter(val => val.value === formik.values.pricingModel)}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    border: 0,
                                    outline: "none",
                                    padding: "10px",
                                    boxShadow: 'none'
                                })
                            }}
                            onBlur={() => formik.setFieldTouched('pricingModel', true)}
                            onChange={async (val) => {
                                await formik.setFieldValue("pricingModel", val.value)
                                await formik.setFieldValue("budgets", "")
                            }}
                        />
                        {formik.touched.pricingModel &&
                            <span className="mt-1 ml-1 text-xs tracking-wide text-red-500 font-redHat">
                                {formik.errors.pricingModel}
                            </span>
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 my-10 gap-y-4 md:gap-y-0 md:grid-cols-3 gap-x-5">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <Select
                                placeholder="Select Budget"
                                name="budgets"
                                isSearchable={false}
                                value={budgetsSelectOpt(formik.values.pricingModel).filter(val => val.value === formik.values.budgets)}
                                options={budgetsSelectOpt(formik.values.pricingModel)}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        border: 0,
                                        outline: "none",
                                        padding: "10px",
                                        boxShadow: 'none'
                                    })
                                }}
                                onBlur={() => formik.setFieldTouched('budgets', true)}
                                onChange={async (val) => {
                                    await formik.setFieldValue("budgets", val.value)
                                }}
                            />
                            {formik.touched.budgets &&
                                <span className="mt-1 ml-1 text-xs tracking-wide text-red-500 font-redHat">
                                    {formik.errors.budgets}
                                </span>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <Select
                                placeholder="Select Joining Requirement"
                                name="joining"
                                isSearchable={false}
                                value={JOINING_OPT.filter(val => val.value === formik.values.joining)}
                                options={JOINING_OPT}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        border: 0,
                                        outline: "none",
                                        padding: "10px",
                                        boxShadow: 'none'
                                    })
                                }}
                                onBlur={() => formik.setFieldTouched('joining', true)}
                                onChange={async (val) => {
                                    await formik.setFieldValue("joining", val.value)
                                }}
                            />
                            {formik.touched.joining &&
                                <span className="mt-1 ml-1 text-xs tracking-wide text-red-500 font-redHat">
                                    {formik.errors.joining}
                                </span>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                placeholder="Company Name (Optional)"
                                className="p-4 border rounded outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.company}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 my-10 gap-y-4 md:gap-y-0 md:grid-cols-3 gap-x-5">
                    <div className="flex flex-col">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="p-4 border rounded outline-none"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name &&
                            <span className="mt-1 ml-1 text-xs tracking-wide text-red-500 font-redHat">
                                {formik.errors.name}
                            </span>
                        }
                    </div>
                    <div className="flex flex-col">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="p-4 border rounded outline-none"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email &&
                            <span className="mt-1 ml-1 text-xs tracking-wide text-red-500 font-redHat">
                                {formik.errors.email}
                            </span>
                        }
                    </div>
                    <div>
                        <IntlTelInput
                            preferredCountries={['in']}
                            containerClassName="intl-tel-input"
                            inputClassName="form-control w-full p-4 outline-none border"
                            style={{
                                width: "100%"
                            }}
                            onPhoneNumberBlur={(isValid) => {
                                if (!isValid) {
                                    formik.setFieldTouched("phone", "Enter a valid phone number!")
                                }
                            }}
                            value={formik.values.phone}
                            onPhoneNumberChange={async (isValid, phone, country, fullNo, ext) => {
                                await formik.setFieldValue("phone", phone)
                                if (!isValid) {
                                    formik.setFieldError("phone", "Not a valid number")
                                }
                            }}
                            fieldName={"phone"}
                            numberType="MOBILE"
                        //format={true}
                        />
                        {formik.touched.phone &&
                            <span className="mt-1 ml-1 text-xs tracking-wide text-red-500 font-redHat">
                                {formik.errors.phone}
                            </span>
                        }
                    </div>
                </div>
                <div className="w-full my-10">
                    <div className="flex flex-col">
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            placeholder="Message"
                            className="w-full p-4 border rounded outline-none"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        />
                        {formik.touched.message &&
                            <span className="mt-1 ml-1 text-xs tracking-wide text-red-500 font-redHat">
                                {formik.errors.message}
                            </span>
                        }
                    </div>
                </div>
                <div>
                    <button disabled={formik.isSubmitting} onClick={formik.handleSubmit} className="bg-[#FD9E07] w-[180px] h-[60px] text-white font-redHat">
                        {formik.isSubmitting && <img src="/assets/spinner.svg" className="h-8 mx-auto animate-spin" alt="spinner" />}
                        {!formik.isSubmitting && "INQUIRE"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FreeQuote