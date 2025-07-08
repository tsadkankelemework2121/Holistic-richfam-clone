import React from "react"

const HeroSection = () => {
  return (
    <section className="bg-[#1E3A8A] relative overflow-hidden h-[500px]">
      <div className="relative z-10 h-full flex items-center px-8">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Get the Joy of Learning
            <br />
            Through Play!
          </h1>

          <p className="text-white text-lg mb-8 leading-relaxed opacity-90 max-w-[600px]">
            At RICHFAM, we focus on fostering children's development through engaging activities and play, providing a
            nurturing space for growth. Our services cater to children and families, offering fun, educational
            experiences. Explore our diverse programs designed to support all aspects of your child's development.
          </p>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-md px-6 py-4 rounded-full text-gray-700 text-lg border-none outline-none"
            />
          </div>

          <button className="bg-[#FDD835] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors">
            Contact
          </button>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 opacity-30">
        <img
          src="/jasper.png"
          alt="Gaming Character"
          className="w-[163px] h-[269px] object-contain"
        />
      </div>

      <div className="absolute left-[505px] top-5 opacity-50">
        <img
          src="/chuckerun.png"
          alt="Character"
          className="w-[309px] h-[455px] object-contain"
        />
      </div>

      <div className="absolute left-[810px] top-[78px]">
        <img
          src="/hero.png"
          alt="Gaming Facility"
          className="w-[600px] h-[340px] object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Decorative blur circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-[#FDD835] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>
    </section>
  )
}

export default HeroSection
