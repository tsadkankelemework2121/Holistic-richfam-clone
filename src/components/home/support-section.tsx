"use client"

const SupportSection = () => {
  const handleSupportClick = () => {
    // Add your support action here
    console.log("Support button clicked")
  }

  return (
    <section className="px-6 py-12 bg-[#F9F9F9]">
      <div className="max-w-[1405px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Text Content */}
          <div className="w-full md:w-[790px] leading-[1.6]">
            <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-[#1E3A8A] mb-4 sm:mb-6 leading-tight tracking-wide text-balance max-w-full">
              Support Our Holistic Child Development Initiative
            </h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 text-gray-700 text-sm sm:text-base md:text-[17px] mb-6 sm:mb-8 md:mb-10">
              <p>
                Our initiative focuses on promoting children's emotional, social, physical, cognitive, and spiritual
                growth. We believe nurturing these aspects will lead to well-rounded individuals equipped to face life's
                challenges.
              </p>
              <p>
                Our programs will include activities that encourage resilience, critical thinking, cultural awareness,
                and community connection, ultimately preparing children to become responsible global citizens.
              </p>
              <p>By signing this page, you can express your appreciation for the idea and help us move forward.</p>
            </div>
            <div className="text-center md:text-left">
              <button
                onClick={handleSupportClick}
                className="bg-[#FDD835] hover:bg-yellow-400/40 text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors"
              >
                Support
              </button>
            </div>
          </div>

          {/* Image - Mobile responsive, Desktop original */}
          <div className="w-full h-[200px] sm:h-[250px] md:w-[575px] md:h-[366px] md:ml-auto mx-auto md:mx-0">
            <img src="/image9.png" alt="Children playing together" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
