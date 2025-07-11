"use client"

import { Link } from "react-router-dom"

const EventsSection = () => {
  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 bg-white">
      <div className="max-w-full sm:max-w-[1405px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-6 sm:mb-8">Events</h2>

        <div className="bg-[#F5F5F5] rounded-lg shadow-lg overflow-hidden w-full">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-[374px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[375px] flex items-center justify-center p-3 sm:p-4">
              <div className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[374px] h-full rounded-[18px] overflow-hidden">
                <img src="/image5.png" alt="Event banner" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between min-h-[300px] lg:min-h-[375px]">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1E3A8A] mb-3 sm:mb-4 leading-tight">
                  Greetings from RICHFAM - Holistic Child Development Center!
                </h3>

                <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 space-y-1">
                  <p>📅 Saturday, December 14, 2024 | starting 10:00 AM</p>
                  <p>📍 RICHFAM Center, Addis Ababa</p>
                </div>

                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
                  <p className="leading-relaxed">
                    We are excited to invite you and your family to <strong>PLAYFUL MINDS</strong>, a vibrant
                    celebration of fun and learning through play! Join us for a day filled with exciting activities and
                    games that encourage cognitive, social, and physical development for children of all ages!
                  </p>

                  <div>
                    <p className="font-semibold mb-1 sm:mb-2">🎯 What to expect:</p>
                    <ul className="space-y-1 ml-3 sm:ml-4 list-disc text-xs sm:text-sm">
                      <li className="leading-relaxed">
                        <strong>Interactive Games & Role Plays:</strong> Explore over 100 activities designed to boost
                        creativity and problem-solving skills.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Kids' Learning Zone:</strong> Fun educational stations focusing on language, math, and
                        motor skills development.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center sm:text-right mt-4 sm:mt-6">
                <Link
                  to="/events"
                  className="inline-block bg-[#FDD835] hover:bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base"
                >
                  Other Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
