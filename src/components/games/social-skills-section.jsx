"use client"
import image1 from "../../assets/image 86.png"
import image2 from "../../assets/image 87.png"
import image3 from "../../assets/image 88.png"
import image4 from "../../assets/image 89.png"
import image5 from "../../assets/image 90.png"
import image6 from "../../assets/image 91.png"
import image7 from "../../assets/image 92.png"

const SocialSkillsSection = () => {
  const games = [
    {
      title: "Ball Pit Adventure (Toddlers  or Age 1-3)",
      description:
        "A colorful ball pit promotes interaction among toddlers. Sharing and taking turns teach early social skills, while the group environment encourages cooperation.",
      image: image1,
    },
    {
      title: "Sensory Tunnel Crawl (Toddlers  or Age 1-3)",
      description:
        "The Soft tunnels with mirrors, textures, and lights stimulate curiosity. Crawling alongside peers fosters early bonding and group play. balloon game involves toddlers bouncing large, soft balloons in the air. This activity promotes hand-eye coordination, gross motor skills, and provides endless fun and giggles for toddlers.",
      image: image2,
    },
    {
      title: "Mini Ride-On Toy Circuit (Preschoolers or Age 3-5)",
      description:
        "An obstacle Kids take turns driving small scooters or cars along a track. It teaches patience, cooperation, and basic traffic rules in a fun environment. with crawling, jumping, and balancing challenges. This activity develops gross motor skills, coordination, and confidence while encouraging physical activity.",
      image: image3,
    },
    {
      title: "Interactive Laser Tag (Ages 6-8) and Slides (Preschoolers Age 3-5)",
      description:
        "Balancing A fun, social game where kids wear sensor vests and use laser guns to tag each other in a designated area. The game encourages teamwork, communication, and strategy as players work together to “tag” opponents while avoiding being tagged themselves. and slides help develop gross motor skills and confidence. Children practice balance while having fun with slides that provide safe and exciting play.",
      image: image4,
    },
    {
      title: "Giant Building Blocks (Early School Age or Age 6-8)",
      description:
        "Large, lightweight blocks allow children to build structures, vehicles, and forts. This activity promotes creativity, problem-solving, and cooperative play.",
      image: image5,
    },
    {
      title: "Creative Arts Corner (Early School-Age or Age 6-8) ",
      description:
        "Mini sports activities in a small arena environment help kids learn teamwork and cooperation. Activities include mini basketball, soccer, and other team sports.",
      image: image6,
    },
    {
      title: "Interactive Gaming (Preteens or Age 9-12)",
      description:
        "Climbing improves upper body strength, coordination, and confidence. It is designed to be safe and age-appropriate for preschoolers while building physical strength.",
      image:image7,
    },
  ]

  return (
    <section className="py-16 px-6 bg-[#F6F6F6]">
      <div className="max-w-[1306px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-8">Social Skills Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {games.map((game, index) => (
            <div key={index} className="bg-[#F9F9F9] rounded-lg shadow-sm p-4 w-full flex flex-col">
              <div className="w-full h-[240px] mb-4 flex justify-center">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="rounded-[18px] w-[400px] h-[240px] object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[18px] font-bold text-[#1E3A8A] mb-2">{game.title}</h3>
                <p className="text-[16px] font-medium text-black leading-relaxed mb-4">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialSkillsSection
