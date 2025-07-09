import React from "react";

const SocialSkillsSection = () => {
  const games = [
    {
      title: "Push and Pull Toys Track (Toddlers or Age 1-3)",
      description:
        "Kids push or pull fun-sized train along a track. The activity builds gross motor skills, hand-eye coordination, and provides a sense of accomplishment.",
      image: "/placeholder.svg?height=200&width=300&text=Push+Pull+Toys",
    },
    {
      title: "Bouncy Balloon (Toddlers Age 1-3)",
      description:
        "The bouncy balloon game involves toddlers bouncing large, soft balloons in the air. This activity promotes hand-eye coordination, gross motor skills, and provides endless fun and giggles for toddlers.",
      image: "/placeholder.svg?height=200&width=300&text=Bouncy+Balloon",
    },
    {
      title: "Mini Obstacle Course (Preschoolers Age 3-5)",
      description:
        "An obstacle course with crawling, jumping, and balancing challenges. This activity develops gross motor skills, coordination, and confidence while encouraging physical activity.",
      image: "/placeholder.svg?height=200&width=300&text=Mini+Obstacle",
    },
    {
      title: "Balance and Slides (Preschoolers Age 3-5)",
      description:
        "Balancing activities and slides help develop gross motor skills and confidence. Children practice balance while having fun with slides that provide safe and exciting play.",
      image: "/placeholder.svg?height=200&width=300&text=Balance+Slides",
    },
    {
      title: "Giant Building Blocks (Early School Age or Age 6-8)",
      description:
        "Large, lightweight blocks allow children to build structures, vehicles, and forts. This activity promotes creativity, problem-solving, and cooperative play.",
      image: "/placeholder.svg?height=200&width=300&text=Giant+Blocks",
    },
    {
      title: "Mini Sports Arena (Early School Age or Age 6-8)",
      description:
        "Mini sports activities in a small arena environment help kids learn teamwork and cooperation. Activities include mini basketball, soccer, and other team sports.",
      image: "/placeholder.svg?height=200&width=300&text=Mini+Sports",
    },
    {
      title: "Brain Climbing Wall (Preschoolers Age 3-5)",
      description:
        "Climbing improves upper body strength, coordination, and confidence. It is designed to be safe and age-appropriate for preschoolers while building physical strength.",
      image: "/placeholder.svg?height=200&width=300&text=Climbing+Wall",
    },
    {
      title: "Trampoline Zone (Preschoolers Age 3-5)",
      description:
        "Jumping on trampolines is excellent for cardiovascular fitness, balance, and coordination. The zone provides a safe and fun environment for active play.",
      image: "/placeholder.svg?height=200&width=300&text=Trampoline",
    },
    {
      title: "Reading Chronicles (Teen Age 13-19)",
      description:
        "An interactive story-driven game where teens can explore different narratives, make choices that affect story outcomes, and develop critical thinking skills while fostering emotional intelligence, empathy, and self-expression.",
      image: "/placeholder.svg?height=200&width=300&text=Reading+Chronicles",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#F6F6F6]">
      <div className="max-w-[1306px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-8">
          Social Skills Games
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

export default SocialSkillsSection;
