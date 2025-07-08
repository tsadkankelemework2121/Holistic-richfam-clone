const AboutHistory = () => {
  const milestones = [
    { year: "2018", title: "GameHub Founded", description: "Started as a small gaming cafe with big dreams" },
    {
      year: "2019",
      title: "First Tournament",
      description: "Hosted our first major gaming tournament with 100 participants",
    },
    { year: "2020", title: "Online Platform Launch", description: "Expanded to digital platform during the pandemic" },
    { year: "2021", title: "10K Members", description: "Reached 10,000 active community members" },
    { year: "2022", title: "Multiple Locations", description: "Opened gaming centers in 5 major cities" },
    { year: "2023", title: "Global Expansion", description: "Launched international gaming competitions" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600">From humble beginnings to gaming excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutHistory
