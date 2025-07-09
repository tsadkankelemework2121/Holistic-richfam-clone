import React from "react"

const SupportSection = () => {
  return (
    <section className="px-6 py-12 bg-[#F9F9F9]">
      <div className="max-w-[1405px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Text Content */}
          <div className="w-full md:w-[790px] leading-[1.6]">
            <h2 className="text-[48px] font-bold text-[#1E3A8A] mb-6 leading-tight tracking-wide text-balance max-w-full">
              Support Our Holistic Child Development Initiative
            </h2>

            <div className="space-y-5 text-gray-700 text-[17px] mb-10">
              <p>
                Our initiative focuses on promoting children's emotional, social, physical, cognitive, and spiritual
                growth. We believe nurturing these aspects will lead to well-rounded individuals equipped to face life's
                challenges.
              </p>

              <p>
                Our programs will include activities that encourage resilience, critical thinking, cultural awareness,
                and community connection, ultimately preparing children to become responsible global citizens.
              </p>

              <p>
                By signing this page, you can express your appreciation for the idea and help us move forward.
              </p>
            </div>

            <div className="text-center md:text-left">
              <button className="bg-[#FDD835] hover:bg-yellow-400/40 text-black font-semibold px-8 py-3 rounded-full transition-colors">
                Support
              </button>
            </div>
          </div>

          {/* Image - aligned hard right */}
          <div className="w-[575px] h-[366px] ml-auto">
            <img
              src="/image9.png"
              alt="Children playing together"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
