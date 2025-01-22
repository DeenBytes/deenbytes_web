import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GotoTop from '../components/reusebleComp/GotoTop'
import { useSearchParams } from "react-router-dom";

const Features = () => {

    const [searchParams] = useSearchParams();
    const featureId = searchParams.get('id'); 
    const featureRefs = useRef({}); 
  
    useEffect(() => {
        if (featureId && featureRefs.current[featureId]) {
          const element = featureRefs.current[featureId];
          const yOffset = -50;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
          window.scrollTo({
            top: y,
            behavior: 'smooth',
          });
        }
      }, [featureId]);
    useEffect(() => {
        const isMobile = window.innerWidth <= 768; 

        if (!isMobile) {
            AOS.init({ duration: 800, once: false });
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
                    className="w-full h-[400px] md:h-[435px] relative bg-cover md:bg-cover lg:bg-contain bg-center md:bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("./assets/featureBg.png")` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#084e33] opacity-40"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex justify-center items-center flex-col text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-5xl text-white font-bold mb-6">
                            Available <span className="text-[#B2F01F]">DeenBytes <br/>Features</span>
                        </h1>
                        {/* <h1 className="text-3xl md:text-5xl text-white font-bold mb-6">Choice For <span className="text-[#B2F01F]">
                            Future</span></h1> */}
                        <div className="text-white text-base px-4 ">
                            DeenBytes is an all-in-one guide to living an Islamic lifestyle. With features like Quran recitation, prayer time notifications, daily duas, and finding local mosques, Tasbih counter, this app helps you stay connected to your faith. Learn about Islam from scratch, track your prayers, and access important Islamic events and teachings, all in one place. Whether you’re at home or on the go, DeenBytes makes it easy to practice and grow in your faith every day.
                        </div>
                    </div>

                </div>
                {/* ======== Objective Application section start here👇👇👇 ============== */}

                <div className="relative my-10  max-w-6xl md:mx-auto mx-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
                        Application's <span className="text-green-500 "> Objectives</span>
                    </h1>
                    <p className='text-para leading-relaxed text-base text-center mb-8'>DeenBytes features aim to provide a comprehensive and user-friendly Islamic experience, helping users grow spiritually, stay connected to their faith, and practice Islam in their daily lives. Would you like to focus on any particular feature or need help with a more specific app description?
                    </p>

                </div>

                {/* ============ All Free Feture Section Start Here👇👇👇 =========== */}

                <div className='max-w-6xl mx-4 md:mx-auto text-center'>
                    <div className="flex items-center justify-center space-x-4 mb-10 md:mb-16 mx-2 ">
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold ">
                            <span className="text-navy-900">DeenBytes</span>
                            <span className="text-green-500"> Top Features</span>
                        </h1>
                    </div>
                    {allFeature?.map(({ id, title, description, icon, reverse, }) => (
                        <div className={`grid grid-cols-1 md:grid-cols-2  gap-8 my-8 max-w-5xl md:mx-auto  ${reverse ? 'direction-rtl' : ''}`} key={id}    ref={(el) => (featureRefs.current[id] = el)}>
                            <div className={`flex flex-col space-y-4 md:mt-6 px-4 md:px-12 text-left  ${reverse ? 'md:order-last' : ''}`} data-aos="fade-left">
                                <h2 className={`text-2xl md:text-3xl font-bold `}>
                                    {title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {description}
                                </p>
                            </div>
                            <div className={`flex justify-center md:justify-center items-center md:items-center ${reverse ? 'md:order-first' : ''} max-h-[450px] max-w-[450px]`} 
                            >
                                {icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Features
const allFeature = [
    {
        id: 1,
        title: "Prayer Time",
        description: "The prayer time feature in an DeenBytes app is essential for helping Muslims perform Salah (prayers) on time, a core obligation in Islam. These features provide accurate and user-friendly tools to ensure users never miss their prayers, regardless of their location or schedule.By incorporating a prayer time feature, DeenBytes app becomes a vital tool for Muslims to stay punctual in their prayers, fostering spiritual growth and fulfilling their religious obligations.",
        icon: <img src="./assets/Prayer Time.png" alt="DeenBytes Prayer Time" className='h-full  w-full p-6 object-contain' data-aos="fade-right" />,
        reverse: false
    },
    {
        id: 2,
        title: "Qibla",
        description: "The Qibla features in DeenBytes app help users accurately determine the direction of the Kaaba in Makkah, which Muslims face during Salah (prayers). These features are crucial for ensuring the correct orientation for prayers, particularly for Muslims travelling or living in areas without easy access to mosques or community resources. By including Qibla features, DeenBytes app becomes an indispensable tool for Muslims, ensuring they can fulfill their religious obligations with ease and confidence.",
        icon: <img src="./assets/Qibla.png" alt="DeenBytes Qibla" className='h-full  w-full p-6 object-contain' data-aos="fade-right" />,
        reverse: true
    },
    {
        id: 3,
        title: "Tasbih",
        description: "Tasbih features in DeenBytes help Muslims engage in this spiritual practice more effectively. Tasbih refers to the act of glorifying and praising Allah through the recitation of specific words or phrases, such as SubhanAllah (Glory be to Allah), Alhamdulillah (Praise be to Allah), and Allahu Akbar (Allah is the Greatest). Dhikr (remembrance of Allah) is highly emphasized in Islam.By incorporating Tasbih features, DeenBytes app can help users enhance their spiritual practice, maintain a constant connection with Allah, and build a habit of regular worship.",
        icon: <img src="./assets/Tasbih.png" alt="DeeenBytes Tasbih" className='h-full  w-full p-6 object-contain' data-aos="fade-right" />,
        reverse: false
    },
    {
        id: 4,
        title: "Find Mosque",
        description: "The Mosque Finder feature in DeenBytes app helps Muslims locate nearby mosques for prayer, community events, and other religious activities. This feature is especially important for Muslims living in non-Muslim-majority countries, travellers, and those who may not be familiar with their surroundings. It ensures that Muslims can fulfilll their religious obligations, such as performing Salah in the congregation, regardless of where they are.By including Mosque Finder features, DeenBytes app becomes an essential tool for Muslims to maintain their connection to the mosque, engage with their community, and ensure that they can perform their prayers and other religious duties consistently.",
        icon: <img src="./assets/Find Mosque.png" alt="DeenBytes Find Mosque" className='h-full  w-full p-6 object-contain' data-aos="fade-right" />,
        reverse: true
    },
    {
        id: 5,
        title: "Duas",
        description: "Dua is a direct way of communicating with Allah, and the Dua feature in DeenBytes helps Muslims engage in supplication regularly, strengthening their spiritual connection with Allah. By incorporating a Dua feature, DeenBytes app becomes an invaluable tool for Muslims seeking to enhance their spiritual practices, seek Allah's help, and engage in consistent worship.",
        icon: <img src="./assets/Duas.png" alt="DeenBytes Duas" className='h-full  w-full p-6 object-contain' data-aos="fade-right" />,
        reverse: false
    },
    {
        id: 6,
        title: "Quran",
        description: "The Quran is the holy book of Islam, revealed to the Prophet Muhammad (PBUH) as guidance for all of humanity. It is the ultimate source of knowledge, wisdom, and divine law. The features for reading and listening to the Quran in DeenBytes app is essential for Muslims to connect with Allah’s word, improve their understanding of the faith, and incorporate the Quran into their daily lives. These features play a critical role in facilitating the recitation, memorization, and reflection on the Quranic verses.",
        icon: <img src="./assets/Quran.png" alt="DeenBytes Quran" className='h-full  w-full p-6 object-contain' data-aos="fade-right" />,
        reverse: true
    },
    {
        id: 7,
        title: "99 Names",
        description: "The 99 Names of Allah (Asma Ul Husna) are a set of names that describe the attributes and qualities of Allah. Each name reflects a different aspect of Allah’s divine nature, and understanding these names is a significant part of Islamic belief and practice. The 99 Names of Allah feature in DeenBytes app helps Muslims learn, reflect upon, and recite these names to strengthen their connection with Allah, gain spiritual benefits, and increase their understanding of His greatness.",
        icon: <img src="./assets/99 Names.png" alt="DeenBytes 99 Names" className='h-full  w-full p-6 object-contain' data-aos="fade-right" />,
        reverse: false
    },
    {
        id: 8,
        title: "Zakat",
        description: " Zakat is one of the Five Pillars of Islam, and it holds immense significance in the lives of Muslims. It is a mandatory act of charity that purifies wealth and serves to redistribute wealth within the Muslim community. Zakat is not only a financial obligation but also a spiritual one, promoting social justice, helping those in need, and purifying the soul. Features related to Zakat in DeenBytes app help facilitate the calculation, understanding, and fulfilment of this important duty.By integrating Zakat features into DeenBytes app, Muslims are empowered to easily calculate, track, and donate their Zakat, fulfilling their religious obligations with ease and confidence.",
        icon: <img src="./assets/Zakat.png" alt="DeenBytes Zakat" className='h-full  w-full p-6 object-contain' data-aos="fade-right" />,
        reverse: true
    },
    {
        id: 9,
        title: "Makkah Live",
        description: "The Makkah Live feature in an Islamic app provides Muslims with real-time access to the holy city of Makkah, where the Kaaba, the most sacred site in Islam, is located. This feature allows users to watch live broadcasts of the Masjid al-Haram, the mosque surrounding the Kaaba, and participate virtually in the spiritual atmosphere of Makkah. The significance of the Makkah Live feature is profound, as it helps Muslims around the world connect with the holiest place in Islam, especially for those who are unable to visit in person. The Makkah Live feature in DeenBytes app is a valuable tool for fostering spiritual connection, unity, and education. It allows Muslims to experience the holiness of Makkah, stay motivated for pilgrimage, and engage in worship, all while strengthening their relationship with Allah.",
        icon: <img src="./assets/Makkah Live.png" alt="DeeenBytes Makkah Live" className='h-full  w-full p-6 object-contain' data-aos="fade-right" />,
        reverse: false
    },
    {
        id: 10,
        title: "Calendar",
        description: "The Islamic calendar, also known as the Hijri calendar, holds significant importance in Islam, as it is used to determine the dates of key religious events, rituals, and observances. Unlike the Gregorian calendar, which is solar, the Islamic calendar is lunar, meaning it is based on the phases of the moon. This calendar plays a central role in the daily lives of Muslims, helping them follow the prescribed acts of worship and celebrate Islamic holidays.By structuring the year around acts of worship and reflection, the calendar encourages Muslims to live their lives in accordance with Allah’s guidance, ensuring that they remain spiritually connected and focused on their faith",
        icon: <img src="./assets/Calendar.png" alt="DeenBytes Calendar" className='h-full  w-full p-6 object-contain' data-aos="fade-right" />,
        reverse: true
    },
    {
        id: 11,
        title: "Prayer Tracker",
        description: "The prayer tracking feature in DeenBytes apps plays a crucial role in helping Muslims maintain consistency and discipline in their daily prayers (Salah). It allows users to track their prayer habits, monitor their performance, and ensure they fulfill this essential pillar of Islam on time. The prayer tracking feature can include various functionalities, each designed to support and enhance the user's worship experience.The ability to track prayers also fosters accountability, allowing users to reflect on their performance and strive for improvement. Ultimately, prayer tracking features enhance the user’s connection to Allah and help them fulfill their religious duties with sincerity and devotion.",
        icon: <img src="./assets/Prayer Tracker.png" alt="DeenBytes Prayer Tracker" className='h-full  w-full p-6 object-contain' data-aos="fade-right" />,
        reverse: false
    }
]