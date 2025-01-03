import React, { useEffect, useState } from 'react'
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import GotoTop from '../components/reusebleComp/GotoTop';
import Select from "react-select";
import { apiJson } from '../api';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
const ContactUs = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    //======Function to get all countries ===============\\
    const getAllCountries = async () => {
        try {
            setLoading(true);
            const res = await apiJson.get("/api/Website/getCounteryList");
            if (res?.status === 200) {
                const data = res?.data?.result?.map((item) => ({
                    ...item,
                    value: item?.name,
                }));
                setCountries(data);
            } else {
                setCountries([]);
            }
        } catch (error) {
            if (error?.response?.status === 404) {
                setCountries([]);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllCountries();
    }, []);

    //==== inilize formik data ================\\

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            country: "",
            phone: "",
            message: "",
        },
        onSubmit: async (values) => {
            try {
                setIsSubmitting(true);
                const res = await apiJson.post("/api/Website/userContectAdd", values);
                if (res?.status === 200) {
                    setIsSubmitting(false);
                    toast.success(res?.data?.message);
                    formik.resetForm();
                }
            } catch (error) {
                setIsSubmitting(false);
                toast.error(error?.response?.data?.message);
            }
        },
    })
    return (
        <>
            <GotoTop />
            <div className="min-h-screen p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className='text-2xl md:text-5xl text-secondary font-bold text-center mb-8'>Contact Us</h1>
                    <p className='text-para text-center text-base mb-8'>Any question or remarks? Just write us a message!</p>
                    <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden border border-blue-100">
                        {/* Left Column */}
                        <div className="w-full md:p-4">
                            {/* Map Container */}
                            <div className="h-64 w-full ">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2419531009064!2d55.293387773685765!3d25.26244502905807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433f10bc5ecd%3A0x1ec0ed8a51c21c72!2s43%20Al%20Fahidi%20St%20-%20Al%20Fahidi%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1735019431712!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    title="office location"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className='rounded-t-xl'
                                ></iframe>
                            </div>

                            {/* Contact Information Card */}
                            <div className="bg-[#084E33] text-white p-8 rounded-b-xl">
                                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                                <p className="text-gray-300 mb-8">Say something to start a live chat!</p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <IoMail className="h-6 w-6 text-white" />
                                        <span><a
                                            href="mailto:support@deenbytes.com"
                                            className="text-white text-lg hover:text-emerald-600 transition-colors"
                                        >
                                            support@deenbytes.com
                                        </a></span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <FaPhoneAlt className="h-6 w-6 text-white" />

                                        <span><a
                                            href="tel:+971 5448 43841"
                                            className="text-white text-lg hover:text-emerald-600 transition-colors"
                                        >
                                            +971 5448 43841
                                        </a></span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <RiMapPin2Fill className="h-6 w-6 text-white" />
                                        <span> Office 43-44, Al Fahidi, Bur Dubai, Dubai,
                                            <br />
                                            United Arab Emirates</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="p-8">
                            <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
                            <p className="text-gray-600 mb-8">Say something to start a live chat!</p>

                            <form onSubmit={formik.handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">Name</label>
                                        <input
                                            value={formik.values?.name}
                                            onChange={formik.handleChange}
                                            type="text"
                                            name='name'
                                            placeholder="Jon Doe"
                                            className="w-full p-3 rounded-lg bg-white text-secondary placeholder-black-500 border-2 border-[#07645F]  focus:outline-none focus:ring-1 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">Email</label>
                                        <input
                                            name='email'
                                            value={formik.values?.email}
                                            onChange={formik.handleChange}
                                            type="email"
                                            placeholder="9kPmB@example.com"
                                            className="w-full p-3 rounded-lg  bg-white text-secondary placeholder-black-500 border-2 border-[#07645F] focus:outline-none focus:ring-1 focus:ring-secondary"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">Country</label>
                                        <Select
                                            options={countries}
                                            styles={customStyles}
                                            placeholder={loading ? "Loading..." : "Select country*"}
                                            value={countries?.find((item) => item?.value === formik?.values?.country) || null}
                                            onChange={(selected) => {
                                                formik.setFieldValue('country', selected?.name);
                                            }}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            isClearable
                                            getOptionLabel={
                                                (option) => {
                                                    return (
                                                        <>
                                                            <div className='flex'>
                                                                <div>
                                                                    <img src={option?.flag} alt={option?.name} className='h-6 w-6 object-contain mr-3' />
                                                                </div>
                                                                <span className='spanColor'>{option?.name}</span>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
                                        <input
                                            name='phone'
                                            value={formik.values?.phone}
                                            onChange={formik.handleChange}
                                            type="text"
                                            placeholder="+91 787576****"
                                            className="w-full p-3 rounded-lg bg-white text-secondary placeholder-black-500 border-2 border-[#07645F] focus:outline-none focus:ring-1 focus:ring-secondary"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Message</label>
                                    <textarea
                                        name='message'
                                        value={formik.values?.message}
                                        onChange={formik.handleChange}
                                        rows="4"
                                        placeholder="Write your message here..."
                                        className="w-full p-3 rounded-lg  bg-white text-secondary placeholder-black-500 border-2 border-[#07645F] focus:outline-none focus:ring-1 focus:ring-secondary"
                                    ></textarea>
                                </div>

                                <div className="flex justify-between items-center">

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="bg-green-900 text-white px-8 py-3 rounded-md hover:bg-green-800 transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactUs
// Custom styles for react-select
const customStyles = {
    control: (base) => ({
        ...base,
        backgroundColor: "white",
        borderColor: "#07645F",
        borderWidth: "2px",
        borderRadius: "0.5rem",
        padding: "6px",
        boxShadow: "none",
        "&:hover": {
            borderColor: "#07645F",
        },
    }),
    placeholder: (base) => ({
        ...base,
        color: "black",
    }),
    singleValue: (base) => ({
        ...base,
        color: "#333",
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: "#07645F",
    }),
    menu: (base) => ({
        ...base,
        borderRadius: "0.5rem",
        border: "1px solid #07645F",
        zIndex: 10,
    }),
    option: (base, { isFocused, isSelected }) => ({
        ...base,
        backgroundColor: isFocused ? "#F1F9F8" : "white",
        color: isSelected ? "#07645F" : "black",
        "&:active": {
            backgroundColor: "#E6F4F3",
        },
    }),
};
