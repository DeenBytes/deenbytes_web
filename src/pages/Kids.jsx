import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import GotoTop from '../components/reusebleComp/GotoTop'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import "swiper/css"; // Import Swiper styles
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import InfoCard from '../components/reusebleComp/InfoCard';

const Kids = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Automatically change slide
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            }, 4000);

            return () => clearInterval(interval);
        }
    }, [slides.length, isHovered]);


    // Change slide on dot click
    const changeSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const isMobile = window.innerWidth <= 768; // Adjust breakpoint if needed

        if (!isMobile) {
            AOS.init({ duration: 800, once: true });
        } else {
            // Ensure content is visible on mobile even without AOS
            document.querySelectorAll("[data-aos]").forEach((el) => {
                el.removeAttribute("data-aos");
            });
        }

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <>
            <GotoTop />
            <div className="relative">
                {/* ======== Top about banner start here👇👇👇 ============== */}

                <div
                    className="w-full h-[400px] md:h-[435px] relative bg-cover md:bg-cover lg:bg-contain bg-[68%] md:bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("./assets/kids/KIDS HEADER.jpg")` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#084e33] opacity-80 -z-10"></div>
                    {/* Content */}
                    <div className="absolute inset-0 text-center max-w-3xl mx-auto mt-4 z-20">
                        <h1 className="text-2xl md:text-5xl font-bold text-white px-5">
                            Building Faith, Character, and Knowledge for <span className="text-green-400">Young Hearts.</span>
                        </h1>
                      <p className='text-base text-white px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, debitis?</p>
                    </div>
                </div>
                {/* ======== Objective Application section start here👇👇👇 ============== */}
                <div className='max-w-6xl relative md:mx-auto mx-4'>

                    <div className="my-10">
                        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
                            <span className="text-green-500 ">Objectives</span>
                        </h1>
                        <p className='text-para leading-relaxed text-base text-center mb-8'>lslamic learning for children plays a crucial role in shaping their character, worldview, and daily habits. It provides them with spiritual guidance and moral values that influence how they interact with the world and navigate life’s challenges.
                            Kids Islamic learning involves teaching children about: Faith and Belief (Aqeedah), Worship and Rituals (Ibadah), Quranic Studies, Moral and Ethical Values: Practicing honesty, kindness, patience, gratitude, and respect, Islamic History and Role Models.
                        </p>

                    </div>

                    {/*Game Slider  Start here 👇👇👇👇👇*/}
                    <div className="relative overflow-hidden "
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        {/* Slides */}
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide) => (
                                <div key={slide.id} className="w-full flex-shrink-0 relative">
                                    <picture>
                                        <source
                                            srcSet={slide.srcset}
                                            media="(max-width: 480px)"
                                        />
                                        <img
                                            src={slide.src}
                                            alt={slide.alt}
                                            className="w-full h-full rounded-md"
                                        />
                                    </picture>
                                    <div className={`absolute flex gap-2 ${slide.id === 3 ? 'bottom-3 left-1/2 transform -translate-x-1/2' : 'bottom-4 right-10'}`}>
                                        <div className='flex flex-col'>
                                            <h1 className='text-[#1a1a1a] text-base md:text-3xl font-medium mb-1 md:mb-4'>Download App</h1>
                                            <div className='flex gap-2'>

                                                <a href="https://play.google.com/store/apps/details?id=com.blessedventures.deenbytes" target="_blank" rel="noopener noreferrer">
                                                    <div>
                                                        <img src="./assets/kids/google-play-app-store.png" alt="Deenbyte Playstore" className='w-18 h-7 object-contain md:w-full md:h-auto cursor-pointer' />
                                                    </div>
                                                </a>
                                                <div>
                                                    <img src="./assets/kids/applestore.png" alt="Deenbyte apple-store" className='w-18 h-7 object-contain md:w-full md:h-auto cursor-pointer' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>

                        {/* Dots Navigation */}
                        <div className="flex justify-center space-x-2 mt-4">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-primary" : "bg-[#74C7A1]"
                                        }`}
                                    onClick={() => changeSlide(index)}
                                ></button>
                            ))}
                        </div>
                    </div>

                    {/*Game Slider  Start here 👆👆👆👆👆👆*/}


                </div>
                <div className="mt-16 mb-8 ">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        Practical Ways Islamic Learning Shapes  <span className="text-green-500">Daily Life</span>
                    </h1>
                    <div className='relative max-w-7xl md:mx-auto mx-4'>
                        <Swiper
                            slidesPerView={1}
                            slidesPerGroup={1} // Initial value for small screens
                            loop={true}

                            pagination={{ clickable: true }}
                            breakpoints={{
                                768: { slidesPerView: 2, slidesPerGroup: 2 },
                                1024: { slidesPerView: 3, slidesPerGroup: 3 },
                            }}
                            navigation={{
                                prevEl: '.custom-prev',
                                nextEl: '.custom-next',
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {slides1.map((slide, index) => (
                                <SwiperSlide key={slide.id} className='kidsSlide'>
                                    <div className='h-full min-h-[550px] flex flex-col items-center justify-center'>
                                        <div
                                            className={`group w-[300px] p-3 lg:w-[350px] h-[400px] rounded-2xl transform transition-all duration-500 hover:scale-x-110 hover:scale-y-110 md:hover:scale-y-110 md:hover:scale-x-[1.15] hover:shadow-xl cursor-pointer relative z-10 ${index % 2 === 0
                                                ? 'bg-[#74C7A1] hover:bg-[#E6FDF8]'
                                                : 'bg-[#519A89] hover:bg-[#E6FDF8]'
                                                }`}
                                            style={{
                                                border: `2px solid ${index % 2 === 0 ? '#74C7A1' : '#519A89'}`,
                                            }}
                                        >
                                            {/* Outer div for scaling on hover */}
                                            <div className={`transition-all duration-500 ease-in-out`}>
                                                {/* Inner image wrapper */}
                                                <div className="h-[260px] flex items-center justify-center rounded-t-2xl bg-white group-hover:hidden">
                                                    <img
                                                        src={slide.image}
                                                        alt={slide.title}
                                                        className="w-3/4 h-3/4 object-contain transition-opacity duration-300"
                                                    />
                                                </div>
                                                {/* Title and description */}
                                                <div className="relative h-[calc(430px-300px)] inset-0 flex flex-col items-center justify-center p-4 text-center group-hover:hidden">
                                                    <h2 className="text-2xl font-extrabold ">
                                                        {slide.title}
                                                    </h2>
                                                    <h3 className='text-2xl font-medium '>{slide?.subTitle}</h3>
                                                </div>
                                                <div className="absolute inset-0 flex flex-col items-center justify-start mt-6 p-4 text-center">
                                                    <h2 className="text-lg font-bold mb-2 opacity-0 group-hover:opacity-100">
                                                        {slide.title}
                                                    </h2>
                                                    <p className="opacity-0 text-base transition-opacity duration-300 group-hover:opacity-100">
                                                        {slide.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons */}
                        <div className="custom-prev absolute top-[45%] left-0 md:left-2 transform translate-y-1/4 lg:-translate-y-1/2 cursor-pointer z-50">
                            <button className="text-xl p-2 bg-green-500 text-white rounded-full">
                                <FaRegArrowAltCircleLeft />
                            </button>
                        </div>
                        <div className="custom-next absolute top-[45%] right-0 md:right-2 transform translate-y-1/4 lg:-translate-y-1/2 cursor-pointer z-50">
                            <button className="text-xl p-2 bg-green-500 text-white rounded-full">
                                <FaRegArrowAltCircleRight />
                            </button>
                        </div>
                    </div>
                    <div className='mt-8 relative  max-w-6xl md:mx-auto mx-4'>
                        {guides.map((guide, index) => (
                            <InfoCard
                                key={index}
                                title={guide.title}
                                description={guide.description}
                                image={guide.image}
                                imagePosition={guide.imagePosition}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kids;

const slides = [
    { id: 1, src: "./assets/kids/Alphabets.png", srcset: "./assets/kids/AlphabetsMob.png 480w, ./assets/kids/Alphabets.png 1440w ", alt: "DeenBytes Alphabets" },
    { id: 2, src: "./assets/kids/Numerals.png", srcset: "./assets/kids/NumeralsMob.png 480w, ./assets/kids/Numerals.png 1440w ", alt: "DeenBytes Numerals" },
    { id: 3, src: "./assets/kids/Islamic Quiz.png", srcset: "./assets/kids/IslamicQuizMob.png 480w, ./assets/kids/Islamic Quiz.png 1440w ", alt: "DeenBytes Islamic Quiz" },
];
const slides1 = [
    {
        id: 1,
        title: "Arabic",
        subTitle: "Alphabets",
        image: "./assets/kids/Arabic Alphabets.png",
        description: "Learning the Arabic alphabet is an important step for anyone looking to read and understand the Quran, as well as to speak and write in Arabic. The Arabic alphabet consists of 28 letters, and unlike the Latin alphabet, Arabic is written from right to left.",
    },
    {
        id: 2,
        title: "Arabic",
        subTitle: "Numbers",
        image: "./assets/kids/Arabic Numbers.png?height=200&width=200",
        description: " Learning Arabic numbers is an essential step in understanding both the written and spoken Arabic language. Arabic numerals (the ones used in English and many other languages today) are actually derived from the Arabic numeral system, but in the Arabic-speaking world, they use a different set of numerals.",
    },
    {
        id: 3,
        title: "5 Pillars",
        subTitle: "Islam",
        image: "./assets/kids/5 Pillars Islam.png",
        description: "The Five Pillars of Islam are the core beliefs and practices that every Muslim follows. They form the foundation of a Muslim's faith and actions. Here’s the five pillars: Shahada (Faith), Salah (Prayer), Zakat (Charity), Sawm , Hajj.",
    },
    {
        id: 4,
        title: "Major Sins",
        subTitle: "Islam",
        image: "./assets/kids/Major Sins Islam.png",
        description: " In Islam, there are certain actions that are considered major sins (known as Kabair in Arabic). These are serious offenses that are strictly prohibited in the Quran and Hadith, and committing them can lead to severe consequences in the Hereafter unless the individual repents sincerely and seeks forgiveness from Allah.",
    },
    {
        id: 5,
        title: "Islamic",
        subTitle: "Calender",
        image: "./assets/kids/Islamic Calender.png",
        description: "The Islamic calendar, also known as the Hijri calendar, is a lunar calendar used by Muslims worldwide to determine the dates of religious events, holidays, and rituals. It is different from the Gregorian calendar, which is solar-based. The Islamic calendar has 12 months, each consisting of 29 or 30 days, making it approximately 11 days shorter than the Gregorian year.",
    },
    {
        id: 6,
        title: "Friday",
        subTitle: "Sunnah’s",
        image: "./assets/kids/Friday Sunnah’s.png",
        bgColor: '#F7CD01',
        description: "In Islam, Friday (known as Yawm al-Jumu'ah) is considered the holiest day of the week. It holds a special significance in the lives of Muslims, as it is a day of communal worship, prayer, and reflection. There are several Sunnahs (traditions) associated with Friday that the Prophet Muhammad (PBUH) recommended for Muslims to observe. These practices help in gaining the blessings of Allah and enhancing the spiritual significance of the day.",
    },
    {
        id: 7,
        title: "6 Pillars",
        subTitle: "Iman",
        image: "./assets/kids/6 Pillars Iman.png",
        description: "The Six Pillars of Iman (Faith) are the core beliefs that every Muslim must hold to complete their faith. These pillars are foundational to understanding and practicing Islam, as they define the beliefs that shape a Muslim's worldview and relationship with Allah.",
    },
    {
        id: 8,
        title: "Deen",
        subTitle: "Quiz",
        image: "./assets/kids/Deen Quiz.png",
        description: "At DeenBytes, a Deen Quiz is a quiz or set of questions designed to test and enhance one's knowledge of Islamic teachings (Deen means religion in Arabic). It is a great way to test knowledge and foster a greater understanding of Islam.",
    },
    {
        id: 9,
        title: "Namaz",
        subTitle: "Steps",
        image: "./assets/kids/Namaz Steps.png",
        description: "Learning the steps of Namaz (Salah) is an essential part of Islamic worship. A step-by-step guide to performing Salah for beginners includes the actions and what to recite during each step.",
    }
];

const guides = [
    {
        title: 'Hajj Rulings',
        description: 'Hajj is one of the Five Pillars of Islam and is a religious pilgrimage that every Muslim who is physically and financially able is required to perform at least once in their lifetime. It takes place annually in the Islamic month of Dhul-Hijjah in Makkah, Saudi Arabia. Hajj has specific rulings and steps that must be followed to ensure that it is performed correctly and in accordance with Islamic teachings.',
        image: './assets/kids/Hajj.png',
        imagePosition: 'left'
    },
    {
        title: 'Umrah Guides',
        description: 'Umrah is a lesser pilgrimage to Makkah that can be performed at any time of the year, unlike Hajj, which has specific dates. While Hajj is one of the Five Pillars of Islam, Umrah is a highly recommended act of worship that brings great spiritual rewards. It involves a series of rituals, which can be performed in a shorter time frame than Hajj.',
        image: './assets/kids/Umrah.png',
        imagePosition: 'right'
    }
];