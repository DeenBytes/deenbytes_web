import React from 'react'
import FeatureItem from './FeatureItem'

const TrainingCard = ({ title, icon: Icon, features }) => {
  return (
    <div className="border-[2px] rounded-3xl max-w-[500px] p-8 flex-1 relative bg-white border-secondary hover:scale-110 transition-all duration-300" style={{boxShadow: '0 10px 25px #00000040'}}>
      <div className="inline-flex items-center gap-2 bg-secondary text-white md:px-10 lg:px-16 py-3 rounded-lg mb-12 absolute -top-7 left-1/2 transform -translate-x-1/2">
        <img src={Icon} className="w-6 h-6 me-5" alt={title}/>
        <span className="text-xl font-medium">{title}</span>
      </div>
      <div className="space-y-2 mt-6">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </div>
    </div>
  )
}

export default TrainingCard