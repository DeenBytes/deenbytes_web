import React from 'react';
import { FaRegClock, FaBookOpen } from "react-icons/fa";
const CourseCard = (course) => {

    return (
        <div className="relative w-full max-w-[417px] h-auto sm:h-[390px] bg-white rounded-xl shadow-md mx-auto">
            <div className="relative h-48 p-4">
                <img
                    src={course?.thumbnail_Image}
                    alt={`deenBytes ${course?.course_Name}`}
                    className="w-full h-full object-cover rounded-lg"
                />

            </div>

            <div className="px-4 sm:px-6 pb-14">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl sm:text-xxl font-bold text-secondary mb-2 sm:mb-2">{course?.course_Name}</h3>
                </div>

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


                </div>

                <div className="flex items-start sm:items-center justify-between text-gray-500 text-xs sm:text-sm">
                    <div className="flex items-center gap-1">
                        <FaRegClock className="w-4 h-4" />
                        <span>{course?.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaBookOpen className="w-4 h-4" />
                        <span>{course?.module} modules</span>
                    </div>
                </div>
            </div>

            <button className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-secondary text-white py-3 sm:py-3 rounded-lg hover:bg-primary transition-colors text-sm font-semibold z-10 w-10/12 uppercase tracking-wider ">
                Join Course
            </button>
        </div>
    );
};

export default CourseCard;
