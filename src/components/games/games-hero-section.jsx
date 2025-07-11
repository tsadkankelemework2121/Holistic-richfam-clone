import React from "react"

const GamesHeroSection = () => {
  return (
    <section className="relative bg-[#1E3A8A] h-[500px] w-full overflow-hidden">
      {/* Text Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center justify-center text-center">
        <div className="text-[#FDD835]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our games are more than <br /> just fun
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white">
            Play is the foundation for growth. At RICHFAM, each activity is designed with safety in mind and expert
            guidance. Discover developmental games for every age.
          </p>
        </div>
      </div>

      {/* Left Image */}
      <img
        src="/gamesimage1.png"
        alt="Left Character"
        className="absolute left-0 bottom-20 h-[375px] w-[331px] object-contain hidden md:block"
      />

      {/* Right Image */}
      <img
        src="/gamesimage2.png"
        alt="Right Character"
        className="absolute right-0 bottom-20 h-[369px] w-[460px] object-contain hidden md:block"
      />
    </section>
  )
}

export default GamesHeroSection
