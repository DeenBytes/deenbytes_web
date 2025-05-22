import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import GotoTop from '../components/reusebleComp/GotoTop';
const About = () => {
  const cards = [
    {
      icon: TbTargetArrow,
      title: "Mission",
      description: "Our mission at DeenBytes is to empower Muslims to deepen their faith and enhance their daily worship through innovative technological solutions. We aim to create a user-friendly and inclusive platform that supports the spiritual growth of our users, regardless of their age, location, or level of religious knowledge. By leveraging cutting-edge technology, we aspire to make the practice of Islam more convenient and engaging, helping our users to stay connected to their faith in an increasingly digital world.",
      animate: "fade-right"
    },
    {
      icon: FaEye,
      title: "Vision",
      description: "Our vision is to be the leading digital platform for Muslims worldwide, recognized for our commitment to quality, innovation, and inclusivity. We envision a future where every Muslim can access the tools and resources they need to practice their faith with ease and confidence, no matter where they are. By continuously improving and expanding our services, we aim to foster a global community of Muslims who are connected, informed, and inspired.",
      animate: "fade-up"
    },
    {
      icon: IoDiamondOutline,
      title: "Values",
      description: "At DeenBytes, we focus on faith, trust, and making things easy. We combine Islamic teachings with technology to help Muslims connect with their faith and grow spiritually.",
      animate: "fade-left"
    }
  ]
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
          className="w-full h-[400px] md:h-[435px] relative bg-cover md:bg-cover lg:bg-contain bg-center md:bg-center bg-no-repeat"
          style={{ backgroundImage: `url("./assets/aboutbg.png")` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#084e33] opacity-70"></div>

          {/* Content */}
          <div className="absolute inset-0 flex justify-center items-center flex-col text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl text-white font-bold mb-1">
              Where <span className="text-[#B2F01F]">Faith Meets Technology</span>
            </h1>
            <h1 className="text-3xl md:text-5xl text-white font-bold mb-6">for <span className="text-[#B2F01F]">Muslims Worldwide</span></h1>
            <div className="text-white text-base mx-4">
              In this world of technology, there are Muslims who are ready to incorporate their beliefs with the modern ways and devices. This exposition entails an area whereby ancient principles of Islam are married to the newest technologies in order to enable believers execute their religion in the era of devices. Muslims Worldwide
            </div>
          </div>
        </div>
        {/* ======== Objective Application section start here👇👇👇 ============== */}

        <div className="relative my-10  max-w-6xl md:mx-auto mx-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Application <span className="text-green-500 ">Objective</span>
          </h1>
          <p className='text-base text-left mb-3 text-para px-4'><span className='font-bold text-black'>Enhance Accessibility : </span> We are committed to making DeenBytes accessible to Muslims everywhere, ensuring that our app is available across various devices and platforms. Our goal is to break down barriers and provide an inclusive experience for all users.
          </p>
          <p className='text-base text-left mb-3 text-para px-4'><span className='font-bold text-black'>Promote Education : </span> Through our educational content and live sessions with scholars, we aim to provide valuable knowledge and guidance to our users. Our goal is to support lifelong learning and help users deepen their understanding of Islam.
          </p>
          <p className='text-base text-left mb-3 text-para px-4'><span className='font-bold text-black'>Innovate Continuously : </span>
            We are dedicated to staying at the forefront of technological advancements and continuously improving our app’s features. Our goal is to provide a seamless and enjoyable user experience, with regular updates and new functionalities.
          </p>
          <p className='text-base text-left mb-3 text-para px-4'><span className='font-bold text-black'>Foster Community : </span>
            We strive to create a sense of community among our users by offering features that encourage interaction and support. Our goal is to build a platform where Muslims can connect, share, and grow together in their faith.
          </p>
          <p className='text-base text-left mb-3 text-para px-4'><span className='font-bold text-black'>Ensure Quality : </span>
            We are committed to maintaining the highest standards of quality in everything we do. Our goal is to deliver reliable, accurate, and beneficial content that our users can trust.
          </p>
        </div>
        {/* ======== our Mission vision section start here👇👇👇 ============== */}

        <div className=" p-4 md:p-8 lg:p-12 border-t-4 border-[#09C224] bg-gradient-to-t from-[#EBFFF1] via-[#EBFFF1] to-[#ADEDB6] cursor-pointer">
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8 md:mb-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 relative pt-16 max-w-[400px] hover:shadow-customHover hover:scale-105 transition-all duration-300 mx-auto mt-24 md:mt-16"
                data-aos={card?.animate}
              >
                {/* Icon Circle */}
                <div className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2">
                  <div className="bg-white rounded-full h-36 w-36 md:h-44 md:w-44 p-4 shadow-lg flex justify-center items-center">
                    <div className="bg-green-500 w-full h-full rounded-full p-4 flex justify-center items-center">
                      <card.icon className="h-18 w-18 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h2 className="text-green-700 text-[26px] font-bold text-center mb-4 mt-16">
                  {card.title}
                </h2>
                <p className="text-[#00340E] text-center text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* ============ About Team Section =========== */}
        <div className="bg-gradient-to-t from-[#259d69] via-[#EBFFF1] to-[#EBFFF1]">
          <div className='max-w-6xl mx-4 md:mx-auto text-center'>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex-grow h-[4px] bg-gradient-to-r from-transparent to-[#538971]"></div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
                <span className="text-navy-900">About </span>
                <span className="text-green-500">Team</span>
              </h1>
              <div className="flex-grow h-[4px] bg-gradient-to-l from-transparent to-[#538971]"></div>
            </div>
            <p className="text-para leading-relaxed mt-10 md:mt-14 mb-8">
              The dedicated team for DeeenBytes include team members with a deeper understanding of Islamic values, technical expertise, and a passion for innovation.
            </p>
          </div>

          <div className="relative max-w-6xl mx-4 md:mx-auto  mt-5 flex justify-center items-center">
            <img
              className='w-full md:w-auto object-contain'
              src="./assets/teamLg.png"
              srcset="./assets/temaSm.png 480w, ./assets/teamMd.png 768w, ./assets/teamLg.png 1440w"
              alt="deenBytes Team"
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default About