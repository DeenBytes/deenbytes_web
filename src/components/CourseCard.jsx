import React, { useState } from 'react';
import { FaClock, FaBookOpen } from "react-icons/fa";
const CourseCard = (course) => {
    const [isExpandedDesc, setIsExpandedDesc] = useState({});
    const handleToggleDesc = (id) => {
        setIsExpandedDesc((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    return (
        <div className="relative w-full max-w-[450px] h-auto  bg-white rounded-xl shadow-md mx-auto">
            <div className="relative">
                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 z-30">
                    <div className="relative">
                        {/* Main green background */}
                        <div className="bg-[#0B4B2C] text-white px-4 lg:px-6 py-2 text-base rounded-b-md font-medium shadow-[0px_4px_4px_0px_#00000060]">
                            Coming Soon
                        </div>
                        {/* Left triangle */}
                        <div
                            className="absolute -left-5 top-0 w-5 h-5 "
                            style={{
                                background: 'linear-gradient(to bottom right, transparent 0%, transparent 50%, #032C1C 50%, #032C1C 100%)'
                            }}
                        />
                        {/* Right triangle */}
                        <div
                            className="absolute -right-5 top-0 w-5 h-5"
                            style={{
                                background: 'linear-gradient(to bottom left, transparent 0%, transparent 50%, #032C1C 50%, #032C1C 100%)'
                            }}
                        />
                    </div>
                </div>

            </div>
            <div className="relative h-48 w-full p-4">
                <img
                    src={course?.thumbnail_Image}
                    alt={`deenBytes ${course?.course_Name}`}
                    className="w-full h-full object-fill rounded-lg"
                />

            </div>

            <div className="px-4">
                {/* <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl sm:text-xxl font-bold text-secondary mb-2 sm:mb-2">{course?.course_Name}</h3>
                </div> */}
                {/* 
                <div className="flex justify-between items-center  mb-4">
                    {course?.sessionTypes?.map((sessionType, index) => (
                        <>
                            <div key={index} className="font-semibold text-sm sm:text-lg ">
                                <div className='flex items-center'>
                                    {sessionType?.type === '1-on-1' ? (
                                        <img src="./assets/One.svg" alt="deenBytes course" className='h-5 w-5' />
                                    ) : sessionType?.type === 'Group' ? (
                                        <img src="./assets/Group.svg" alt="deenBytes course" className='h-5 w-5' />
                                    ) : null}
                                    <span>&nbsp;{sessionType?.type}</span>
                                </div>
                            <p className="ml-1 mt-2">₹{sessionType?.amount}</p>
                            </div>
                        </>
                    ))}


                </div> */}
                <div className="flex justify-between items-center flex-row">
                    <h3 className="text-xl font-bold text-secondary mb-2 ">{course?.course_Name}</h3>
                    <div className="flex flex-col text-sm text-[#2c2c2c] gap-2">
                        <div className="flex items-center gap-2">
                            <FaClock className="w-4 h-4" />
                            <span>{course?.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBookOpen className="w-4 h-4" />
                            <span>{course?.module} modules</span>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 border-gray-200 border-dashed my-2"></div>
                    <p className='text-para text-base font-semibold '>Course Description</p>
                <div className="h-24 overflow-y-auto w-full my-3 livesession" >
                    <p className="text-para text-sm font-normal mb-4">
                        {isExpandedDesc[course?._id]
                            ? course?.course_Description
                            : course?.course_Description?.slice(0, 90) + "..."}
                        <span
                            onClick={() => handleToggleDesc(course?._id)}
                            className="underline cursor-pointer ml-2  text-black font-semibold"
                        >
                            {isExpandedDesc[course?._id] ? "Read less" : "Read more"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
