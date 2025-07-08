const AboutTeam = () => {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      bio: "Passionate gamer with 15+ years in the gaming industry",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Davis",
      role: "Head of Community",
      bio: "Expert in building and nurturing gaming communities",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      bio: "Gaming technology enthusiast and software architect",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Wilson",
      role: "Events Manager",
      bio: "Tournament organizer with a passion for competitive gaming",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">The passionate people behind GameHub</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeam
