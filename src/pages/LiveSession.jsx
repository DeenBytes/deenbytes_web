import React, { useState } from 'react'
import GotoTop from '../components/reusebleComp/GotoTop'
import { FaClock, FaUsers } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import TrainingCard from '../components/reusebleComp/TrainingCard';
import { LuCircleCheckBig } from "react-icons/lu";
const LiveSession = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [isExpandedDesc, setIsExpandedDesc] = useState({});
  const visibleCards = window.innerWidth >= 768 ? (isExpanded ? cards.length : 4) : isMobileExpanded ? cards.length : 1;
  const handleToggleDesc = (id) => {
    setIsExpandedDesc((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleMobileToggle = () => setIsMobileExpanded(!isMobileExpanded);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <GotoTop />
      <div className="relative">
        {/* ======== Top about banner start here👇👇👇 ============== */}
        <div
         className="w-full h-[400px] md:h-[435px] relative bg-cover md:bg-cover lg:bg-contain bg-[68%] md:bg-center bg-no-repeat"
         style={{ backgroundImage: `url("./assets/Live Session.jpg")` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#084e33] opacity-80 -z-10"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex justify-center items-start flex-col max-w-4xl mx-auto text-left px-6 md:px-0">
            <h1 className="text-2xl sm:text-2xl md:text-5xl font-bold text-white leading-tight ">
              The <span className="text-green-400">Smart</span><br /> Choice For{" "}
              <span className="text-green-400">Future</span>
            </h1>
            <p className="mt-4 text-white text-sm sm:text-sm max-w-xl">
              Elearn is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush the...
            </p>
          </div>
        </div>

        {/* ======== Objective Application section start here👇👇👇 ============== */}
        <div className='max-w-6xl relative md:mx-auto mx-4'>
          <div className="my-10 md:px-3">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
              <span className="text-green-500 ">Objectives</span>
            </h1>
            <p className='text-para leading-relaxed text-base text-center mb-8'>lslamic learning for children plays a crucial role in shaping their character, worldview, and daily habits. It provides them with spiritual guidance and moral values that influence how they interact with the world and navigate life’s challenges.
              Kids Islamic learning involves teaching children about: Faith and Belief (Aqeedah), Worship and Rituals (Ibadah), Quranic Studies, Moral and Ethical Values: Practicing honesty, kindness, patience, gratitude, and respect, Islamic History and Role Models.
            </p>

          </div>
          {/* ======== Course  section start here👇👇👇 ============== */}

          <div className="md:px-3 lg:px-8">
            <div className="flex justify-center items-center flex-col bg-[#D5E6DF] rounded-xl border-[2px] border-[#21674B]">
              <div className="relative w-full px-2 mb-4 md:mb-0 pt-8 md:px-12">
                <h1 className="text-3xl md:text-5xl font-bold text-center">
                  Objective <span className="text-green-600">Application</span>
                </h1>
                <div className='absolute top-10 left-[79%] '>
                  <button
                    onClick={handleToggle}
                    className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-green-700 transition-colors hidden md:flex justify-center items-center ms-9"
                  >
                    {isExpanded ? "See Less" : "See More"} &nbsp;
                    <span
                      className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      <IoIosArrowDown className="w-4 h-4" />
                    </span>
                  </button>
                </div>

              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 px-6 py-6 md:px-12 md:py-12 w-full">
                {cards.slice(0, visibleCards).map((card) => (
                  <div
                    key={card.id}
                    className="bg-white max-w-[450px] h-auto rounded-xl overflow-hidden mx-auto"
                    style={{
                      boxShadow: "0px 4px 25px 0px #0000001A",
                    }}
                  >
                    <img
                      src={card?.thumbnail_Image || "/placeholder.svg"}
                      alt={card?.course_Name}
                      className="w-full h-48 px-4  py-2 mt-2 rounded-2xl"
                    />
                    <div className="p-4 flex justify-between items-center flex-row">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{card?.course_Name}</h3>
                      <div className="flex  flex-col text-sm text-[#2c2c2c] gap-1">
                        <div className="flex items-center gap-2">
                          <FaClock className="w-4 h-4" />
                          <span>{card?.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaUsers className="w-4 h-4" />
                          <span>{card?.saves} Enrolled</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-2 border-gray-200 border-dashed mx-5"></div>
                    <div className="px-4 h-24 overflow-y-auto w-full my-3 livesession" >
                      <p className="text-para text-sm md:text-base font-normal mb-4">
                        {isExpandedDesc[card?.id]
                          ? card?.course_Description
                          : card?.course_Description?.slice(0, 90) + "..."}
                        <span
                          onClick={() => handleToggleDesc(card?.id)}
                          className="underline cursor-pointer ml-2 text-blue-600"
                        >
                          {isExpandedDesc[card?.id] ? "Read less" : "Read more"}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleMobileToggle}
                className="px-4 py-2 mb-8  bg-secondary text-white rounded-lg hover:bg-green-700 transition-colors flex md:hidden "
              >
                {isMobileExpanded ? "See Less" : "See More"} &nbsp;
                <span
                  className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"
                    }`}
                >
                  <IoIosArrowDown className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
          {/* ======== Cousrse type like one on one section start here👇👇👇 ============== */}

          <div className="my-8 lg:p-8 ">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 sm:mb-20 md:mb-24">
              <span className="text-slate-900">Objective </span>
              <span className="text-emerald-500">Application</span>
            </h1>

            <div className="hidden md:grid md:grid-cols-2 gap-0 md:gap-8 md:px-3">
              <TrainingCard
                title="1-on-1"
                icon='./assets/whitesingle.svg'
                features={oneOnOneFeatures}
              />
              <TrainingCard
                title="Group"
                icon='./assets/whiteGroup.svg'
                features={groupFeatures}
              />
            </div>

          </div>
          {/* ======== Cousrse type like one on one section for mobile view start here👇👇👇 ============== */}

          <div className="my-8 lg:p-8  md:hidden flex items-center justify-center ">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-[2px] border-[#21674B]">
              {/* Header */}
              <div className="grid grid-cols-2">
                <div className="bg-[#1B5E41] p-4 flex items-center gap-2 text-white">
                  <img src='./assets/whitesingle.svg' className="w-6 h-6 me-5" alt={'Single'} />
                  <h2 className="text-lg font-semibold">1-on-1</h2>
                </div>
                <div className="bg-[#1B5E41] p-4 flex items-center gap-2 text-white">
                  <img src='./assets/whiteGroup.svg' className="w-6 h-6 me-5" alt={'Group'} />
                  <h2 className="text-lg font-semibold">Group</h2>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-2 relative">
                {/* Left Column */}
                <div >
                  {oneOnOneFeatures.map((feature, index) => (
                    <div
                      key={`left-${index}`}
                      className={`px-3 py-4 h-48 flex gap-3 items-start ${index % 2 === 0 ? 'bg-[#DBFBEF]' : 'bg-[#EDFFF8]'
                        }`}
                    >
                      <LuCircleCheckBig className="w-6 h-6 text-[#15B45B] mt-1 flex-shrink-0" />
                      <p className="text-para text-base">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#81AD9C]" style={{ boxShadow: '0 13px 5px rgba(0, 0, 0, 0.4)' }}></div>
                {/* Right Column */}
                <div>
                  {groupFeatures.map((feature, index) => (
                    <div
                      key={`right-${index}`}
                      className={`px-3 py-4 h-48 flex gap-3 items-start ${index % 2 === 0 ? 'bg-[#DBFBEF]' : 'bg-[#EDFFF8]'
                        }`}
                    >
                      <LuCircleCheckBig className="w-6 h-6 text-[#15B45B] mt-1 flex-shrink-0" />
                      <p className="text-para text-base">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LiveSession
const cards = [
  {
    id: 1,
    course_Name: "Arabic Grammar",
    thumbnail_Image: "./assets/arabic.jpg",
    duration: "22hr",
    saves: "278",
    course_Description: "Master Arabic grammar online with DeenBytes’s comprehensive Arabic Grammar Course, carefully crafted to build a strong understanding of sentence structure, verb conjugation, punctuation, and more.",
  },
  {
    id: 2,
    course_Name: "Arabic Counting",
    thumbnail_Image: "./assets/numeric.jpg",
    duration: "12hrs",
    saves: "250",
    course_Description: "Mastering Arabic numbers requires grasping both the numeral system used in Arabic-speaking regions and the language-specific terminology for these numbers.",
  },
  {
    id: 3,
    course_Name: "Important Duas",
    thumbnail_Image: "./assets/dua.jpg",
    duration: "21hrs",
    saves: "178",
    course_Description: "The online course aims to teach all the essential daily duas that Muslims should know and regularly recite, as well as guide them in the proper method of making dua (supplication).",
  },
  {
    id: 4,
    course_Name: "Learn Kalima",
    thumbnail_Image: "./assets/kalima.jpg",
    duration: "15hrs",
    saves: "194",
    course_Description: "Islam consistently emphasizes having a strong belief in Almighty Allah, as a solid foundation leads to steadfast faith. The six Kalimas consist of fundamental expressions that represent the essence of faith at its core.",
  },
  {
    id: 5,
    course_Name: "Namaz step-by-step",
    thumbnail_Image: "./assets/namaz.jpg",
    duration: "32hrs",
    saves: "156",
    course_Description: "Learning to pray Namaz is a crucial aspect of a Muslim's religious practice. Discover the significance of Namaz, the prescribed prayer schedule, and the correct positions for performing it, enabling you to fully engage in this act of worship.",
  },
  {
    id: 6,
    course_Name: "Mastering the 114 Surahs",
    thumbnail_Image: "./assets/quran.jpg",
    duration: "48hrs",
    saves: "234",
    course_Description: "This course offers an in-depth exploration of the Qur'an’s 114 Surahs, enabling learners to gain a deeper connection with the divine message through understanding, recitation, and application.",
  }
]

const oneOnOneFeatures = [
  "Customised Agenda tailored to participant's goals, skills and requirements",
  "The trainer's focused attention to the participant",
  "Flexible schedule as per the availability of the participant",
  "1-on-1 Direct involvement of trainer with the participant"
]

const groupFeatures = [
  "Dynamic feature to encourage participants to share ideas, and perspectives",
  "Networking opportunities to build connections",
  "Pre defined topics to keep discussions focused",
  "Open forums for addressing group questions and concerns."
]