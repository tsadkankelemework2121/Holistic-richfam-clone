"use client"

import { useState, useEffect } from "react"

const AboutHero = () => {
  const [backgroundImg, setBackgroundImg] = useState<string>("")

  useEffect(() => {
    const loadBackground = async () => {
      try {
        const img = await import("../../assets/about.webp")
        setBackgroundImg(img.default)
      } catch (error) {
        console.log("Background image could not be loaded")
        // Will use gradient fallback
      }
    }

    loadBackground()
  }, [])

  const backgroundStyle = {
    backgroundImage: backgroundImg ? `url(${backgroundImg})` : `linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)`,
  }

  return (
    <section
      className="relative min-h-[88vh] sm:min-h-[90vh] lg:min-h-[92vh] bg-cover bg-center bg-no-repeat flex flex-col"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="text-center text-white px-4 -mt-8 sm:-mt-12">
          <h1 className="text-5xl xs:text-6xl sm:text-6xl md:text-7xl font-bold drop-shadow-lg -mt-8 sm:-mt-12">
            About us
          </h1>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-0 bg-white pb-4 sm:pb-5 pt-6 sm:pt-8 -mt-8 sm:-mt-12">
        <div className="px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12">
          <p className="text-base xs:text-lg sm:text-lg text-gray-800 leading-relaxed sm:leading-relaxed tracking-normal font-medium lg:ml-8 xl:ml-10">
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
