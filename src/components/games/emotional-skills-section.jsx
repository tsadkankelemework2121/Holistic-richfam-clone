"use client"
import image1 from "../../assets/image 93.png"
import image2 from "../../assets/image 94.png"
import image3 from "../../assets/image 95.png"
import image4 from "../../assets/image 96.png"
import image5 from "../../assets/image 97.png"
import image6 from "../../assets/image 98.png"
import image7 from "../../assets/image 99.png"
import image8 from "../../assets/image 100.png"
import image9 from "../../assets/image 100-1.png"

const EmotionalSkillsSection = () => {
  const games = [
    {
      title: "Emotion Recognition Cards (Age 3-6)",
      description:
        "Children learn to identify and name different emotions through colorful cards and interactive activities, building emotional vocabulary and awareness.",
      image: image1,
    },
    {
      title: "Mindfulness Activities (Age 4-8)",
      description:
        "Simple breathing exercises, meditation, and mindfulness games that help children learn self-regulation and emotional control techniques.",
      image: image2,
    },
    {
      title: "Feelings Journal (Age 5-10)",
      description:
        "Children express their emotions through drawing, writing, or storytelling, helping them process feelings and develop emotional intelligence.",
       image: image3,
    },
    {
      title: "Empathy Building Games (Age 6-10)",
      description:
        "Interactive activities that help children understand others' perspectives and develop compassion and empathy through role-playing and discussion.",
       image: image4,
    },
    {
      title: "Conflict Resolution Activities (Age 7-12)",
      description:
        "Structured activities that teach children how to resolve disagreements peacefully, communicate effectively, and find win-win solutions.",
      image: image5,
    },
    {
      title: "Self-Expression Arts (Age 5-12)",
      description:
        "Creative activities like art, music, and drama that allow children to express their emotions safely and build confidence in emotional communication.",
       image: image6,
    },
    {
      title: "Storytelling Circle (Age 4-8)",
      description:
        "Children share stories and listen to others, developing communication skills, empathy, and emotional understanding through narrative experiences.",
       image: image7,
    },
    {
      title: "Calm Down Corner (Age 3-10)",
      description:
        "A quiet space with sensory tools and calming activities where children can learn to self-regulate and manage overwhelming emotions.",
     image: image8,
    },
    {
      title: "Friendship Building Games (Age 5-12)",
      description:
        "Interactive games that teach children how to make friends, maintain relationships, and develop social bonds through cooperative activities.",
       image: image9,
    },
  ]

  return (
    <section className="py-16 px-6 bg-[#F6F6F6]">
      <div className="max-w-[1306px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-8">
          Emotional Skills Games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {games.map((game, index) => (
            <div key={index} className="bg-[#F9F9F9] rounded-lg shadow-sm p-4 w-full flex flex-col">
              <div className="w-full h-[230px] mb-4 flex justify-center">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="rounded-[18px] w-[400px] h-[240px] object-cover"
                />
              </div>
            
              <div className="flex flex-col">
                <h3 className="text-[18px] font-bold text-[#1E3A8A] mb-2">{game.title}</h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmotionalSkillsSection
