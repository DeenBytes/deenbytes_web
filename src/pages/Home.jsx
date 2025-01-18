import React, { useEffect, useRef, useState } from 'react'
import { apiJson } from '../api'
import Slider from '../components/Slider'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import CourseTracks from '../components/CourseTracks';
import { Link } from 'react-router-dom';
import GotoTop from '../components/reusebleComp/GotoTop';
import { toast } from 'react-toastify';
const Home = () => {
  const [allahNameList, setAllahNameList] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    marqueeRef.current.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current.start();
  };
  // ======  Fuction to get all allah names ===============\\
  const getAllahName = async () => {
    try {
      const res = await apiJson.get("/api/Website/allahNameList");
      if (res?.status === 200) {
        setAllahNameList(res?.data?.result);
      }
    } catch (error) {
      if (error?.status === 404) {
        setAllahNameList([])
      }
      console.log(error)
    }
  }

  //==========Function to subscribe newsletter ===========\\
  const subscribeNewsletter = async () => {
    try {
      const res = await apiJson.post("/api/Website/userSubscribe", { name, email });
      if (res?.status === 200) {
        toast.success(res?.data?.message);
        setName("");
        setEmail("");
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  }
  useEffect(() => {
    getAllahName()
  }, [])
  return (
    <>
      <GotoTop />
      <div className="mx-auto flex items-center px-10 relative w-full h-[65vh] md:h-[80vh] 2xl:h-[70vh]  bg-no-repeat bg-cover bg-left  md:bg-center xl:bg-center " style={{ backgroundImage: `url("./assets/Deenbyte Apps Banner.jpg")` }}>
     
        <div id="section1" className="max-w-2xl flex flex-col">
          <h1 className="text-5xl font-bold mb-6">
            Connect with <span className="text-[#066530]">Islam</span>
            <br />
            Seamlessly
          </h1>
          <p className="text-[#292929] text-base font-semibold mt-4 ">
            Empower your faith with DeenBytes App—offering Quran tools, prayer alerts, kids' games, and more.
          </p>
          <h2 className='font-bold text-xl text-[#292929] mt-5'>Get the App</h2>
          <div className='flex gap-5 mt-5'>
            <a href="https://play.google.com/store/apps/details?id=com.blessedventures.deenbytes" target="_blank" rel="noopener noreferrer">
              <img src="./assets/kids/google-play-app-store.svg" alt="Get it on Google Play deenbytes" className="w-full md:w-48  h-full md:h-20 object-contain animate-zoomIn" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.deenbytes.deenbytes" target="_blank" rel="noopener noreferrer">
              <img src="./assets/kids/applestore.svg" alt="Get it on App store deenbytes" className="w-full md:w-48  h-full md:h-20 object-contain animate-zoomIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#ebfff1] ">
        {/*========== Allah name section start here👇👇👇 =========== */}
        <div className="h-16 bg-secondary rounded-br-xl rounded-bl-xl backdrop-blur-sm flex items-center justify-around gap-5 md:gap-8 overflow-hidden logos">
          <marquee
            ref={marqueeRef}
            behavior="scroll"
            direction="right"
            scrollamount="10"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {allahNameList && allahNameList.length > 0 && allahNameList?.map((item, index) => (
              <span
                key={index}
                className={`text-arabic text-3xl md:text-5xl mx-5 ${index % 2 === 0 ? "text-[#C99B45]" : "text-[#E9C480]"
                  }`}
              >
                {item.arbicName}
              </span>
            ))}
          </marquee>
        </div> 

        {/* ===========  Main Content ======== */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Phone Mockups */}
            <div className="relative">
              <div className='flex justify-center items-center'>
                <img src="./assets/mobile.png" alt="DeenBytesApps" className="w-3/4 md:w-2/4  h-3/4 md:h-2/4 object-contain" />
              </div>

            </div>


            {/* Right Side - Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                About <span className="text-green-500">Application</span>
              </h1>
              <div className="space-y-4 text-para text-base">
                <p>
                  Welcome to DeenBytes, your trusted companion in enhancing your Islamic lifestyle through cutting-edge technology. Our mission is to empower Muslims worldwide with tools that simplify religious practices, deepen spiritual understanding, and foster a strong connection with Islam.
                </p>
                <p>
                  At DeenBytes, we provide a range of innovative Islamic apps designed to cater to your daily religious needs.
                </p>
              </div>
              <Link to='/about'>
                <button className='bg-secondary text-white w-fit px-8 py-3 mt-4 rounded-xl'>Read More</button>
              </Link>
            </div>
          </div>
        </div>
        <Slider />
        {/*========== Quran Section start here ============  */}
        <div className='bg-[#CDF3D3]'>
          <div className="grid grid-cols-1 lg:grid-cols-2  h-full lg:h-[636px]  lg:max-w-7xl lg:mx-auto">
            {/* Right Content - App Screenshots */}
            <div className="relative flex items-end justify-center order-last lg:order-last mb:0 pt-4 px-4 md:px-2 md:pt-0">
              {/* Main Screenshot */}
              <img
                src="../assets/QuranImage.png"
                alt="Quran Deenbyte App"
                className="w-full h-full md:h-[570px] object-contain"
              />
            </div>

            {/* Left Content */}
            <div className="flex flex-col justify-center pt-9 px-8 md:px-16 lg:px-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-black">AL-</span>
                <span className="text-green-500">Quran</span>
              </h1>
              <p className="text-para mb-4 text-base">
                Al-Quran with DeenBytes: Your Ultimate Guide to Understanding the Divine Message.
              </p>
              <p className="text-para mb-4 text-base">
                The Quran is the eternal guidance for Muslims, offering profound wisdom, spiritual enrichment, and moral direction. At DeenBytes, we aim to make the Quran accessible, easy to read, and listen to for Muslims worldwide. Whether you’re seeking to deepen your understanding, memorize verses, or simply stay connected to Allah’s words, our app provides everything you need in one convenient platform.
              </p>
              <p className="text-para mb-4 text-base">Download DeenBytes now and experience the Quran like never before. Let us be your trusted companion in your journey of faith.</p>
              <Link to='/features'>
              <button className="w-fit px-8 py-3 mt-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300">
                Get Started
              </button>
              </Link>
            </div>
          </div>
        </div>
        {/*========== Quran Section End here ============  */}
        {/*========== Free Features Section start here ============  */}
        <div className="relative bg-[#EBFFF1] py-8 md:max-w-7xl md:mx-auto ">
          <div className="mx-2">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
              Free Features
            </h1>
            <p className="text-center text-para mb-8">
              These services are designed to make practicing Islam easier and more accessible for everyone.
            </p>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3.25,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper custom-swiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="custom-slide cursor-pointer hover:transform hover:scale-105 transition-transform duration-300">
                  <div className="card">
                    <div className="custom-img-container">
                      <img src={slide.image} alt={slide.title} className="object-contain" />
                    </div>
                    <Link to={`/features?id=${slide.id}`}>
                      <div className="content-container md:px-6 ">
                        <div className="relative top-12 md:top-24 pb-4 lg:p-5">
                          <h3 className="text-xl font-semibold text-center mb-4 md:mt-3 text-[#1b5e20]">
                            {slide.title}
                          </h3>
                          <p className="text-gray-600 text-center text-sm leading-relaxed">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
        {/*========== Free Features Section End here ============  */}


        {/*=============== kids learning secton start here👇👇👇👇👇 ============ */}
        <div className="relative">
          <div className="hidden md:block">
            <img
              src="./assets/kidbg.png"
              alt="deenBytes kids learning"
              className='w-full  md:h-[550px] object-cover'
            />
          </div>
          <div className="relative md:absolute flex justify-center items-center flex-col md:flex-row  md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full px-5 md:px-14">
            <div className='w-full flex justify-center items-center md:w-1/2 '>
              <img src="./assets/childs.png" alt="childs" className='h-3/4 w-3/4 md:h-full md:w-full xl:h-[400px] xl:w-[400px] object-contain ' />
            </div>
            <div className='w-full md:w-1/2 flex flex-col px-4 md:px-0 items-center md:items-start'>
              <h1 className="text-3xl md:text-5xl font-bold mb-6  mt-3 md:mt-0">
                Kids <span className="text-[#178753]">Learning</span>
              </h1>
              <p className="text-para mb-4 text-base text-center md:text-left"> At DeenBytes, we believe that instilling Islamic values in children should be both engaging and enjoyable. Our app offers interactive and educational tools designed specifically for kids to help them learn about Islam in a fun and memorable way.</p>
              <Link to={'/kids'}>
                <button className='bg-secondary text-white w-fit px-8 py-3 mt-4 rounded-xl flex'>Learn more</button>
              </Link>
            </div>

          </div>

        </div>

        {/* Course section start here  */}
        <section>
          <CourseTracks />
        </section>

        {/* Newsletter section start here  */}
        <div className=" bg-[#EBFFF1]">
          {/* Curved header section */}
          <div className="relative bg-secondary md:rounded-b-[40%] text-center px-4 py-8 md:py-8">
            <h1 className="text-3xl md:text-4xl  text-white font-bold text-center mb-2">
              Why Choose Us
            </h1>
            <p className="text-center text-white mb-0 md:mb-6">
              Simplify your Islamic lifestyle with innovative tools for worship, learning, and spiritual growth.
            </p>

          </div>

          {/* Form section */}
          <div className="px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto bg-[#9ee4a8] rounded-xl p-6 md:p-8 shadow-xl border border-info text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#024c2d] mb-2">
                Subscribe to Our Newsletter!
              </h2>
              <p className="text-[#196846] text-sm md:text-base mb-6 md:px-8">
                Stay inspired and connected! Subscribe to our newsletter for exclusive updates on Islamic tools, prayer reminders, learning resources, and app features designed to enhance your Deen.
              </p>

              <form className="space-y-4 max-w-sm mx-auto">
                <div className="grid  gap-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter full name"
                      required
                      className="w-full p-3 rounded-lg bg-white text-secondary placeholder-black-500 border border-[#d3d3d3] shadow-md focus:outline-none focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address "
                      required
                      className="w-full p-3 rounded-lg shadow-md bg-white text-secondary placeholder-black-500 border border-[#d3d3d3] focus:outline-none focus:ring-1 focus:ring-secondary mb-3"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w-32 py-3 px-8 bg-secondary hover:bg-primary text-white rounded-full transition-colors duration-200 "
                  onClick={subscribeNewsletter}
                >
                  Subscribe
                </button>
              </form>

            </div>
          </div>
        </div>
        {/* Newsletter section End  here  */}

      </div>

    </>

  )
}

export default Home
const slides = [
  {
    id: 1,
    image: "./assets/features/Prayer Time.png?height=200&width=200",
    title: "Prayer Time",
    altText: "Prayer Time Deenbytes",
    description: "Access accurate Salah timings based on your current location. Receive customizable alerts for all five daily prayers. Stay punctual and enhance your prayer routine effortlessly."
  },
  {
    id: 2,
    image: "./assets/features/qibla.png?height=200&width=200",
    title: "Qibla",
    altText: "Qibla Deenbytes",
    description: "Find the direction of the Kaaba easily with our GPS-enabled Qibla compass. Ensure you face the right way while praying anywhere in the world. Experience peace of mind knowing you're aligned correctly."
  },
  {
    id: 3,
    image: "./assets/features/tasbih.png?height=200&width=200",
    title: "Tasbih",
    altText: "Tasbih Deenbytes",
    description: "Utilize a digital Tasbih counter to track your Dhikr effortlessly. Perfect for daily remembrance of Allah, it enhances your spiritual connection. Keep your focus on worship with this simple tool."
  },
  {
    id: 4,
    image: "./assets/features/Find Mosque.png?height=200&width=200",
    title: "Find Mosque",
    altText: "Find Mosque Deenbytes",
    description: "Quickly locate nearby mosques and prayer spaces wherever you are. The app helps you connect with your community and pray in congregation. Never miss an opportunity to join fellow Muslim worshippers."
  },
  {
    id: 5,
    image: "./assets/features/Dua.png?height=200&width=200",
    title: "Duas",
    altText: "Duas Deenbytes",
    description: "Access a vast library of Duas for every occasion with Arabic text, transliteration, and translation. Deepen your understanding and enhance your spiritual practice. Utilize these supplications for guidance and support."
  },
  {
    id: 6,
    image: "./assets/features/Quran.png?height=200&width=200",
    title: "Quran",
    altText: "Quran Deenbytes",
    description: "Read and listen to the Quran with available translations and Tafsir. Enjoy high-quality recitations by renowned Qaris to elevate your experience. Connect with the divine words of Allah in a meaningful way."
  },
  {
    id: 7,
    image: "./assets/features/allah-name.png?height=200&width=200",
    title: "99 Names",
    altText: "99 Names Deenbytes",
    description: "Explore the beautiful names of Allah, complete with meanings and benefits for recitation. Deepen your appreciation for the divine attributes through study and reflection. Enrich your spiritual practice by integrating these names into your worship."
  },
  {
    id: 8,
    image: "./assets/features/Zakat.png?height=200&width=200",
    title: "Zakat",
    altText: "Zakat Deenbytes",
    description: "Accurately calculate your Zakat obligations with user-friendly tools. Simplify the process of fulfilling your charitable responsibilities. Ensure your giving aligns with Islamic principles and improves your community."
  },
  {
    id: 9,
    image: "./assets/features/Makkah live.png?height=200&width=200",
    title: "Makkah Live",
    altText: "Makkah Live Deenbytes",
    description: "Stream live from Masjid al-Haram in Makkah for a spiritually uplifting experience. Stay connected to the heart of Islam anytime, anywhere. Feel the presence of the sacred atmosphere right from your home."
  },
  {
    id: 10,
    image: "./assets/features/Calender.png?height=200&width=200",
    title: "Calendar",
    altText: "Calendar Deenbytes",
    description: "Track Islamic events and important dates like Ramadan and Eid easily. Stay informed about Hijri dates to honor significant occasions in your faith. Organize your Islamic practices effortlessly throughout the year."
  },
  {
    id: 11,
    image: "./assets/features/Quran.png?height=200&width=200",
    title: "Prayer Tracker",
    altText: "Prayer Tracker Deenbytes",
    description: "Monitor your Salah habits with intuitive tracking features designed for easy use. Stay consistent in your prayer routine and foster a deeper spiritual connection. Reinforce your commitment to regular worship and self-improvement."
  }
];