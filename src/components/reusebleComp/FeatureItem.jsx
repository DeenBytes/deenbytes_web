import React from 'react'
import { LuCircleCheckBig } from "react-icons/lu";
const FeatureItem = ({ text }) => {
  return (
    <div className="flex items-start gap-4 ">
      <div className="mt-1">
        <LuCircleCheckBig className="w-6 h-6 text-[#15B45B]" />
      </div>
      <p className="text-para text-base">{text}</p>
    </div>
  )
}

export default FeatureItem