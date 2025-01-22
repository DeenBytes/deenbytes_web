import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import CourseCardPlace from './CourseCardPlace'
import { apiJson } from '../api'
const CourseTracks = () => {
const [courses,setCourses] = useState([])
//======Function to get all courses ===============\\
    const getAllCourses = async () => {
        try {
            const res = await apiJson.get("/api/Website/allCourseData");
            if (res?.status === 200) {
                setCourses(res?.data?.result?.slice(0, 3));
            }
        } catch (error) {
            if (error?.status === 404) {
                setCourses([])
            }
            console.log(error)
        }
    }
    useEffect(() => {
        getAllCourses()
    
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
            <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Upcoming Live Courses
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Transform your understanding of Islam with live, interactive courses on Quranic studies, prayer mastery, and Arabic language learning.
                </p>
            </div>

            <div className="overflow-x-auto ">
                <div className="grid grid-flow-col  lg:grid-cols-3 auto-cols-[minmax(300px,_1fr)] gap-6 sm:gap-8 mb-5 snap-x snap-mandatory pt-6 ">
                    {courses?.length <= 0 ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <CourseCardPlace key={index} />
                        ))
                    ) : (
                        courses?.map((course, index) => (
                            <CourseCard key={index} {...course} className="snap-start" />
                        ))
                    )}

                </div>
            </div>

        </div>
    )
}

export default CourseTracks