import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

const ContactUs = () => {


    return (
        <>
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

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Jon Doe"
                                            className="w-full p-3 rounded-lg bg-white text-secondary placeholder-black-500 border-2 border-[#07645F] shadow-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">Email</label>
                                        <input
                                            type="email"
                                            placeholder="9kPmB@example.com"
                                            className="w-full p-3 rounded-lg shadow-md bg-white text-secondary placeholder-black-500 border-2 border-[#07645F] focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">Country</label>
                                        <select
                                            name="topic"
                                            required
                                            className="w-full p-3 rounded-lg shadow-md bg-white text-secondary placeholder-black-500 border-2 border-[#07645F] focus:outline-none focus:ring-2 focus:ring-secondary appearance-none hover:cursor-pointer"
                                            style={{ WebkitAppearance: 'none' }}
                                        >
                                            <option value="" disabled>Select country*</option>
                                            <option value="new-features">India</option>
                                            <option value="muslim-films">UK</option>
                                            <option value="tv-series">US</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
                                        <input
                                            type="text"
                                            placeholder="+91 787576****"
                                            className="w-full p-3 rounded-lg shadow-md bg-white text-secondary placeholder-black-500 border-2 border-[#07645F] focus:outline-none focus:ring-2 focus:ring-secondary"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Write your message here..."
                                        className="w-full p-3 rounded-lg shadow-md bg-white text-secondary placeholder-black-500 border-2 border-[#07645F] focus:outline-none focus:ring-2 focus:ring-secondary"
                                    ></textarea>
                                </div>

                                <div className="flex justify-between items-center">

                                    <button
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