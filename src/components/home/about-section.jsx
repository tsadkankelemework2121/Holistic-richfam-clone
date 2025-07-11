import React from "react"


const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-8 bg-white">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/image1.png"
          alt="Children Group"
          className="w-[585px] h-[403px] object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl md:text-5xl font-bold text-[#1E3A8A] mb-6">About RICHFAM</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            At RICHFAM, we hold a profound belief: to transform our world, we must first nurture the potential of our
            children.
          </p>
          <p>
            Founded by the visionary entrepreneur Mr. Fitsum Tefera, RICHFAM is a pioneering holistic child development
            initiative committed to cultivating the future leaders of Ethiopia.
          </p>
          <p>
            Our mission is to empower youth to become productive global citizens, and RICHFAM serves as the dynamic
            catalyst for this transformative journey.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
