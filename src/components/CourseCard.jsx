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
                <div className="h-24 overflow-y-auto w-full my-3 livesession" >
                      <p className="text-para text-sm md:text-base font-normal mb-4">
                        {isExpandedDesc[course?._id]
                          ? course?.course_Description
                          : course?.course_Description?.slice(0, 90) + "..."}
                        <span
                          onClick={() => handleToggleDesc(course?._id)}
                          className="underline cursor-pointer ml-2 text-blue-600"
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
