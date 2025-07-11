"use client"

import { Link } from "react-router-dom"

const MembershipSection = () => {
  const packages = [
    {
      title: "One-Day Free Trial",
      description: "Experience our offerings with a complimentary day at our center.",
    },
    {
      title: "One-Month Plan",
      description: "Perfect for those looking to try out our offerings over a short period.",
    },
    {
      title: "Six-Month Plan",
      description: "Ideal for families who want to commit to a longer-term learning experience.",
    },
    {
      title: "Annual Plan",
      description: "The ultimate package for year-round access and maximum benefits.",
    },
  ]

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 bg-[#F9F9F9]">
      <div className="max-w-full sm:max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="bg-[#F9F9F9] text-[#1E3A8A] p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-left">
            Membership Packages
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left">
            Become a valued member of our community and choose a plan that best suits your family's needs. Each package
            is designed to offer <strong>flexibility, exclusive perks</strong>, and access to our nurturing programs and
            safe, fun-filled spaces.
          </p>
        </div>

        {/* Cards Section */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-[65px]">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-[#F9F9F9] p-4 sm:p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold text-base sm:text-lg text-[#1E3A8A] mb-3 sm:mb-4">{pkg.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{pkg.description}</p>
                <Link
                  to="/membership"
                  className="inline-block bg-yellow-400 hover:bg-yellow-400/40 text-black font-semibold px-4 sm:px-6 py-2 rounded-full w-full transition-colors text-sm sm:text-base"
                >
                  Register now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembershipSection
