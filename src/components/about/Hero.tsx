"use client"
import about from "../../assets/about.webp";
import { useState, useEffect } from "react"

const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col">
      {/* Background elements unchanged */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0">
        <img
          src={about || "/placeholder.svg"}
          alt="Happy children at RICHFAM"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      {/* Hero Content - completely unchanged */}
      <div className="relative z-10 flex-grow flex items-center justify-center pt-36 sm:pt-44">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl xs:text-6xl sm:text-6xl md:text-7xl font-bold drop-shadow-lg">
            About us
          </h1>
        </div>
      </div>

      {/* Bottom Content - only paragraph adjustment */}
      <div className="relative z-10 bg-white pb-6 sm:pb-8 pt-8 sm:pt-10 mt-20 sm:mt-28">
        <div className="px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12">
          {/* Changed to -translate-y-3 for more upward movement */}
          <p className="text-base xs:text-lg sm:text-lg text-gray-800 leading-relaxed sm:leading-relaxed tracking-normal font-medium lg:ml-8 xl:ml-10 -translate-y-6">
            We offer a comprehensive suite of programs that seamlessly integrate play, education, and community
            engagement, creating an enriching environment where every child can explore their unique capabilities. By
            fostering inclusivity and resilience, RICHFAM ensures that children aged 1-19 are equipped with the
            essential skills to thrive in an ever-evolving global landscape.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero