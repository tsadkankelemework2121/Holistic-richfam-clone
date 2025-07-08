const AboutMission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <h2 className="text-5xl font-bold text-blue-900 mb-8 text-center">Mission</h2>
            <p className="text-xl text-gray-800 leading-relaxed text-center">
              To nurture creativity, foster inclusive education, and build a brighter future through holistic
              development that embraces every child's unique potential and promotes community engagement.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <h2 className="text-5xl font-bold text-blue-900 mb-8 text-center">Vision</h2>
            <p className="text-xl text-gray-800 leading-relaxed text-center">
              To be a leading center for holistic child development in Ethiopia, where all children regardless of their
              abilities thrive in an inclusive environment, empowered to become compassionate, innovative, and
              responsible global citizens.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMission
