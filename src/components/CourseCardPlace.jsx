import React from 'react'

const CourseCardPlace = () => {
  return (
<div className="relative w-full max-w-[417px] h-auto sm:h-[390px] bg-white rounded-xl shadow-md mx-auto">
    <div className="relative h-48 p-4">
        <div className="w-full h-full bg-gray-300 rounded-lg animate-pulse"></div>
        <span className="absolute top-6 left-6 bg-gray-300 px-3 py-1 rounded-full text-xs text-gray-500 animate-pulse">
            &nbsp;
        </span>
    </div>

    <div className="p-4 sm:p-6 pb-14">
        <div className="flex justify-between items-start mb-2">
            <div className="w-2/3 h-5 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"
                    ></div>
                ))}
            </div>
        </div>

        <div className="w-1/3 h-6 bg-gray-300 rounded-md animate-pulse mb-4"></div>

        <div className="flex items-start sm:items-center justify-between text-gray-500 text-xs sm:text-sm">
            <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-10 h-4 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
            <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-10 h-4 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
            <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-10 h-4 bg-gray-300 rounded-md animate-pulse"></div>
            </div>
        </div>
    </div>

    <button className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-gray-300 text-white py-3 sm:py-3 rounded-lg animate-pulse text-sm font-semibold z-10 w-10/12">
        &nbsp;
    </button>
</div>

  )
}

export default CourseCardPlace