"use client"

const HeroSection = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:info@richfamcenter.com"
  }

  return (
    <section className="bg-[#1E3A8A] relative overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:h-[500px]">
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-11 py-8 sm:py-12 md:py-16 lg:py-0">
        <div className="max-w-full sm:max-w-xl md:max-w-2xl">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
            Get the Joy of Learning
            <br />
            Through Play!
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-7 md:mb-8 leading-relaxed opacity-90 max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
            At RICHFAM, we focus on fostering children's development through engaging activities and play, providing a
            nurturing space for growth. Our services cater to children and families, offering fun, educational
            experiences. Explore our diverse programs designed to support all aspects of your child's development.
          </p>
          <div className="mb-4 sm:mb-5 md:mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-md px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-full text-gray-700 text-sm sm:text-base md:text-lg border-none outline-none bg-white hover:bg-yellow-400/40 transition-colors"
            />
          </div>
          <button
            onClick={handleContactClick}
            className="bg-[#FDD835] text-black px-6 sm:px-7 md:px-8 py-2.5 sm:py-2.5 md:py-3 rounded-full font-Regular text-sm sm:text-base md:text-lg hover:bg-yellow-400 transition-colors text-underlined"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Layout - Simplified with fewer images */}
      <div className="block sm:hidden">
        <div className="absolute right-2 bottom-0 opacity-70">
          <img src="/jasper.png" alt="Gaming Character" className="w-[80px] h-[130px] object-contain" />
        </div>
        <div className="absolute right-2 top-4 opacity-90">
          <img src="/chuckerun.png" alt="Character" className="w-[120px] h-[180px] object-contain" />
        </div>
      </div>

      {/* Tablet Layout - Scaled down images */}
      <div className="hidden sm:block md:block lg:hidden">
        <div className="absolute left-0 bottom-0 opacity-70">
          <img
            src="/jasper.png"
            alt="Gaming Character"
            className="w-[100px] sm:w-[120px] md:w-[130px] h-[160px] sm:h-[190px] md:h-[210px] object-contain"
          />
        </div>
        <div className="absolute left-[200px] sm:left-[250px] md:left-[300px] top-2 sm:top-3 md:top-4 opacity-90">
          <img
            src="/chuckerun.png"
            alt="Character"
            className="w-[150px] sm:w-[180px] md:w-[200px] h-[220px] sm:h-[260px] md:h-[290px] object-contain"
          />
        </div>
        <div className="absolute right-2 sm:right-4 md:right-6 top-[40px] sm:top-[50px] md:top-[60px]">
          <img
            src="/buildingimage.png"
            alt="Gaming Facility"
            className="w-[200px] sm:w-[250px] md:w-[300px] h-[120px] sm:h-[150px] md:h-[180px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Desktop Layout - Original positioning */}
      <div className="hidden lg:block">
        <div className="absolute left-0 bottom-0 opacity-70">
          <img src="/jasper.png" alt="Gaming Character" className="w-[163px] h-[269px] object-contain" />
        </div>
        <div className="absolute left-[505px] top-5 opacity-90">
          <img src="/chuckerun.png" alt="Character" className="w-[309px] h-[455px] object-contain" />
        </div>
        <div className="absolute left-[810px] top-[78px]">
          <img
            src="/buildingimage.png"
            alt="Gaming Facility"
            className="w-[600px] h-[340px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Decorative blur circles - Responsive */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-15 md:top-20 left-1/4 w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 bg-[#FDD835] rounded-full blur-xl sm:blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-15 md:bottom-20 right-1/4 w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24 bg-white rounded-full blur-lg sm:blur-xl md:blur-2xl"></div>
      </div>
    </section>
  )
}

export default HeroSection
