import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram,FaTwitter,FaYoutube,FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom'
// #0f1923
const Footer = () => {
    return (
        <footer className="bg-[#043232] text-white py-8 px-4 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-12 sm:gap-8 md:gap-10">
                {/* Who We Are Section */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-medium mt-2">Who We Are</h3>
                    <ul className="space-y-1 md:space-y-2">
                        <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* What We Do Section */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-medium mt-2">What We Do</h3>
                    <ul className="space-y-1 md:space-y-2">
                        <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Our Features</Link></li>
                        <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Press Releases</Link></li>
                    </ul>
                </div>

                {/* Address Section */}
                <div className="space-y-4 md:col-span-4">
                    <h3 className="text-lg font-medium mt-2">Address</h3>
                    <p className="text-gray-400">
                        <span className="font-bold text-white">RegOffice :</span> Office 43-44, Al Fahidi, Bur Dubai, Dubai, United Arab Emirates
                    </p>
                    <p className="text-gray-400">
                        <span className="font-bold text-white">Email :</span> <a href="mailto:support@deenbytes.com">support@deenbytes.com</a>
                    </p>
                    <p className="text-gray-400">
                        <span className="font-bold text-white">Contact :</span> <a href="tel:+971 5448 43841">+971 5448 43841</a>
                    </p>
                </div>

                {/* Logo and Social Links Section */}
                <div className="space-y-4 md:col-span-4">
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <img src="./assets/WhiteLogo.svg" alt="Deenbytes Logo" className="h-16 md:h-1/3 md:w-3/4 object-contain" />
                    </div>
                    <p className="text-gray-400 text-left max-w-sm">
                        Where Faith Meets Technology for Muslims Worldwide. DeenBytes App simplifies daily worship with advanced features like Qibla Finder, Duas, and educational content. Join DeenBytes and take a step closer to living an organized, faith-filled life.
                    </p>
                    <div className="flex flex-wrap space-x-4 gap-y-4">
                        <Link to="https://www.facebook.com/deenBytes" aria-label="Facebook" className="h-9 w-9 border bg-white border-white rounded-lg flex justify-center items-center text-black  transition-colors">
                            <FaFacebookF  className='h-6 w-6 hover:transform hover:scale-110 transition-transform transition-duration-300' />
                        </Link>
                        <Link to="https://www.instagram.com/deenbytesofficial" aria-label="Instagram" className="h-9 w-9 border bg-white border-white rounded-lg flex justify-center items-center text-black  transition-colors">
                            <FaInstagram  className='h-6 w-6 hover:transform hover:scale-110 transition-transform transition-duration-300' />
                        </Link>
                        <Link to="https://x.com/Deenbytes" aria-label="Twitter" className="h-9 w-9 border border-white bg-white rounded-lg flex justify-center items-center text-black  transition-colors">
                            <FaTwitter className='h-6 w-6 hover:transform hover:scale-110 transition-transform transition-duration-300' />
                        </Link>
                        <Link to="https://www.youtube.com/@DeenBytes_Islamic" aria-label="YouTube" className="h-9 w-9 bg-white border border-white rounded-lg flex justify-center items-center text-black  transition-colors">
                            <FaYoutube ube className='h-6 w-6 hover:transform hover:scale-110 transition-transform transition-duration-300' />
                        </Link>
                        <Link to="https://www.linkedin.com/company/deenbytes/" aria-label="LinkedIn" className="h-9 w-9 bg-white border border-white rounded-lg flex justify-center items-center text-black  transition-colors">
                            <FaLinkedinIn fill='#000' className='h-6 w-6 hover:transform hover:scale-110 transition-transform transition-duration-300' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-between flex-col md:flex-row mt-7 pt-8 border-t border-gray-800">
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Help Center</Link>
                    <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Cookies Policy</Link>
                    <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/Terms-and-Conditions" className="text-sm text-gray-400 hover:text-white transition-colors">Terms and conditions</Link>
                    <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Disclaimer</Link>
                </div>
                <p className="text-center text-sm text-gray-400 mt-4 md:mt-0">
                    Copyright © 2024 Blessed Ventures CS & CSET CO. L.L.C All rights reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer