import React, { useState, useEffect } from 'react'
// import { FaChevronLeft,FaChevronRight} from "react-icons/fa6";
const slides = [
  {
    id: 1,
    title: "يَـٰٓأَيُّهَا ٱلنَّبِىُّ قُل لِّمَن فِىٓ أَيْدِيكُم مِّنَ ٱلْأَسْرَىٰٓ إِن يَعْلَمِ ٱللَّهُ فِى قُلُوبِكُمْ خَيْرًۭا يُؤْتِكُمْ خَيْرًۭا مِّمَّآ أُخِذَ مِنكُمْ وَيَغْفِرْ لَكُمْ ۗ وَٱللَّهُ غَفُورٌۭ رَّحِيمٌۭ",
    description: "O Prophet! Tell the captives in your custody, “If Allah finds goodness in your hearts, He will give you better than what has been taken from you, and forgive you. For Allah is All-Forgiving, Most Merciful.",
    reference: "Surah Al-Anfal Ayat 70 (8:70 Quran)",
  },
  {
    id: 2,
    title: "وَعَسَىٰٓ أَن تَكْرَهُوا۟ شَيْـًۭٔا وَهُوَ خَيْرٌۭ لَّكُمْ ۖ وَعَسَىٰٓ أَن تُحِبُّوا۟ شَيْـًۭٔا وَهُوَ شَرٌّۭ لَّكُمْ ۗ وَٱللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ",
    description: "Perhaps you dislike something which is good for you and like something which is bad for you. Allah knows and you do not know.", 
    reference:"Surah Al-Baqarah Ayat 216" 
  },
  {
    id: 3,
    title: "لَقَدْ جَاءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيصٌ عَلَيْكُم بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ",
    description: "There certainly has come to you a messenger from among yourselves. He is concerned by your suffering, anxious for your well-being, and gracious and merciful to the believers",
    reference:"Surah At-Tawbah - 128"
  },
  {
    id: 4,
    title: "قُلۡ يَٰعِبَادِ ٱلَّذِينَ ءَامَنُواْ ٱتَّقُواْ رَبَّكُمۡ ۚ لِلَّذِينَ أَحۡسَنُواْ فِى هَٰذِهِ ٱلدُّنۡيَا حَسَنَةٌ ۗ وَأَرۡضُ ٱللَّهِ وَٰسِعَةٌ ۗ إِنَّمَا يُوَفَّى ٱلصَّٰبِرُونَ أَجۡرَهُم بِغَيۡرِ حِسَابٍ",
    description: "Say “O My servants who believe! Be mindful of your Lord. Those who do good in this world will have a good reward. And Allah’s earth is spacious. Only those who endure patiently will be given their reward without limit.”",
    reference:"Surah Az-Zumar - 10"
  },
  {
    id: 5,
    title: "سَتَجِدُونَ ءَاخَرِينَ يُرِيدُونَ أَن يَأۡمَنُوكُمۡ وَيَأۡمَنُواْ قَوۡمَهُمۡ كُلَّ مَا رُدُّوٓاْ إِلَى ٱلۡفِتۡنَةِ أُرۡكِسُواْ فِيهَاۚ فَإِن لَّمۡ يَعۡتَزِلُوكُمۡ وَيُلۡقُوٓاْ إِلَيۡكُمُ ٱلسَّلَمَ وَيَكُفُّوٓاْ أَيۡدِيَهُمۡ فَخُذُوهُمۡ وَٱقۡتُلُوهُمۡ حَيۡثُ ثَقِفۡتُمُوهُمۡۚ وَأُوْلَـٰٓئِكُمۡ جَعَلۡنَا لَكُمۡ عَلَيۡهِمۡ سُلۡطَٰنٗا مُّبِينٗا",
    description: "You will find others who wish to obtain security from you and [to] obtain security from their people. Every time they are returned to [the influence of] disbelief, they fall back into it. So if they do not withdraw from you or offer you peace or restrain their hands, then seize them and kill them wherever you overtake them. And those – We have made for you against them a clear authorization.",
    reference:"Surat An-Nisa' 4:91"
  }
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    let interval

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // const nextSlide = () => {
  //   setDirection(1)
  //   setCurrentSlide((prev) => (prev + 1) % slides.length)
  // }

  // const prevSlide = () => {
  //   setDirection(-1)
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  // }

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full overflow-hidden bg-primary ">
      {/* Main Slider */}
      <div className="relative h-[500px] container  mx-auto">
        <div 
          className="absolute inset-0 z-10"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        />
        <div className="relative h-full w-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute  top-0 left-0 w-full h-full transition-transform duration-[5000] ease-in-out`}
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`,
              }}
            >

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-2xl">
                  {slide.description}
                </p>
                <p className="text-sm md:text-md lg:text-md text-warning mt-3 max-w-2xl">
                ( {slide.reference} )
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors z-20"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors z-20"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-6 h-6" />
        </button> */}

        {/* Dots Navigation */}
        <div   className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

