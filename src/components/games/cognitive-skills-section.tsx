import React from "react";

const CognitiveSkillsSection = () => {
  const games = [
    {
      title: "Ball Pit Adventures (Toddlers or Age 1-3)",
      description:
        "A colorful ball pit promotes sensory play, balance, and motor skills. Toddlers can explore different textures and colors while developing hand-eye coordination and spatial awareness.",
      image: "/placeholder.svg?height=200&width=300&text=Ball+Pit+Adventures",
    },
    {
      title: "Sensory Tunnel Crawl (Toddlers or Age 1-3)",
      description:
        "Soft tunnels with different textures, sounds, and colors encourage curiosity. Crawling through tunnels develops gross motor skills and spatial awareness.",
      image: "/placeholder.svg?height=200&width=300&text=Sensory+Tunnel",
    },
    {
      title: "Ride-On Toy Corner (Preschoolers or Age 3-5)",
      description:
        "Ride-on toys improve physical coordination and balance while providing hours of fun. Children learn steering, pedaling, and spatial navigation skills.",
      image: "/placeholder.svg?height=200&width=300&text=Ride+On+Toys",
    },
    {
      title: "Interactive Laser Tag (Ages 6-8)",
      description:
        "A fun, social game where kids wear sensor vests and use laser guns to tag each other. Encourages teamwork, communication, and strategic thinking.",
      image: "/placeholder.svg?height=200&width=300&text=Interactive+Laser+Tag",
    },
    {
      title: "Creative Arts Corner (Early School Age or Age 6-8)",
      description:
        "Children can draw, create, or craft in this section. It promotes imaginative play and fine motor skill development while encouraging artistic expression.",
      image: "/placeholder.svg?height=200&width=300&text=Creative+Arts",
    },
    {
      title: "Team Relay Games (Preschoolers or Age 3-5)",
      description:
        "Games like team races or relays require teamwork, turn-taking, and following instructions. These activities help develop social skills and coordination.",
      image: "/placeholder.svg?height=200&width=300&text=Team+Relay",
    },
    {
      title: "Interactive Gaming (Preschoolers or Age 3-5)",
      description:
        "Digital games with interactive features encourage friendly competition and player engagement, teaching sportsmanship and respect.",
      image: "/placeholder.svg?height=200&width=300&text=Interactive+Gaming",
    },
    {
      title: "Sensory Themed Crawl (Toddlers or Age 1-3)",
      description:
        "A colorful crawl space promotes sensory play and balance. Toddlers explore different textures and colors while developing motor skills.",
      image: "/placeholder.svg?height=200&width=300&text=Sensory+Crawl",
    },
    {
      title: "Mini-On Toy Corner (Preschoolers or Age 3-5)",
      description:
        "Ride-on toys improve coordination and balance. Children practice pedaling and steering while building physical confidence.",
      image: "/placeholder.svg?height=200&width=300&text=Mini+Toy+Corner",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#F6F6F6]">
      <div className="max-w-[1306px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-8">
          Cognitive Skills Games
        </h2>

        <div className="grid md:grid-cols-3 gap-[30px]">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] rounded-lg shadow-sm p-4 w-full flex flex-col"
            >
              <div className="w-full h-[230px] mb-4 flex justify-center">
                <img
                  src={game.image}
                  alt={game.title}
                  className="rounded-[18px] w-[316px] h-[230px] object-cover"
                />
              </div>

              <div className="flex flex-col justify-between flex-grow">
                <h3 className="text-[18px] font-bold text-[#1E3A8A] mb-2">{game.title}</h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4">{game.description}</p>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default CognitiveSkillsSection;
