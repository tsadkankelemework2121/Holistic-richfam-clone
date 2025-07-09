import React from "react"

const EventsSection = () => {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-[1405px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-center mb-8">Events</h2>

        <div className="bg-[#F5F5F5] rounded-lg shadow-lg overflow-hidden w-full h-[375px] flex flex-col md:flex-row">
          {/* Left Image Section */}
          <div className="flex items-center justify-center w-[374px] h-full p-4">
            <div className="w-[374px] h-[344px] rounded-[18px] overflow-hidden">
              <img
                src="/image5.png"
                alt="Event banner"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">
                Greetings from RICHFAM - Holistic Child Development Center!
              </h3>

              <div className="text-sm text-gray-600 mb-4">
                <p>📅 Saturday, December 14, 2024 | starting 10:00 AM</p>
                <p>📍 RICHFAM Center, Addis Ababa</p>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  We are excited to invite you and your family to <strong>PLAYFUL MINDS</strong>, a vibrant celebration of
                  fun and learning through play! Join us for a day filled with exciting activities and games that
                  encourage cognitive, social, and physical development for children of all ages!
                </p>

                <div>
                  <p className="font-semibold mb-2">🎯 What to expect:</p>
                  <ul className="space-y-1 ml-4 list-disc">
                    <li>
                      <strong>Interactive Games & Role Plays:</strong> Explore over 100 activities designed to boost
                      creativity and problem-solving skills.
                    </li>
                    <li>
                      <strong>Kids' Learning Zone:</strong> Fun educational stations focusing on language, math, and
                      motor skills development.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-right mt-4">
              <button className="bg-[#FDD835] hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full transition-colors">
                Other Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
