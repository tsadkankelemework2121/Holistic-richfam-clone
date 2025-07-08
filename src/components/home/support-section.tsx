import React from "react"


const SupportSection = () => {
  return (
    <section className="px-6 py-12 bg-blue-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">
              Support Our Holistic Child Development Initiative
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
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

            <button className="bg-[#FDD835] hover:bg-yellow-400 text-black font-semibold px-8 py-2 rounded-full transition-colors">
              Support
            </button>
          </div>

          <div className="flex-shrink-0">
            <div className="w-64 h-48">
              <img
                src="/image9.png"
                alt="Children playing together"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
