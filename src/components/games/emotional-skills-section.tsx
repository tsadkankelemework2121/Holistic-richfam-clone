import React from "react";

const EmotionalSkillsSection = () => {
  const games = [
    {
      title: "Emotion Recognition Cards (Age 3-6)",
      description:
        "Children learn to identify and name different emotions through colorful cards and interactive activities, building emotional vocabulary and awareness.",
      image: "/placeholder.svg?height=200&width=300&text=Emotion+Cards",
    },
    {
      title: "Mindfulness Activities (Age 4-8)",
      description:
        "Simple breathing exercises, meditation, and mindfulness games that help children learn self-regulation and emotional control techniques.",
      image: "/placeholder.svg?height=200&width=300&text=Mindfulness",
    },
    {
      title: "Feelings Journal (Age 5-10)",
      description:
        "Children express their emotions through drawing, writing, or storytelling, helping them process feelings and develop emotional intelligence.",
      image: "/placeholder.svg?height=200&width=300&text=Feelings+Journal",
    },
    {
      title: "Empathy Building Games (Age 6-10)",
      description:
        "Interactive activities that help children understand others' perspectives and develop compassion and empathy through role-playing and discussion.",
      image: "/placeholder.svg?height=200&width=300&text=Empathy+Games",
    },
    {
      title: "Conflict Resolution Activities (Age 7-12)",
      description:
        "Structured activities that teach children how to resolve disagreements peacefully, communicate effectively, and find win-win solutions.",
      image: "/placeholder.svg?height=200&width=300&text=Conflict+Resolution",
    },
    {
      title: "Self-Expression Arts (Age 5-12)",
      description:
        "Creative activities like art, music, and drama that allow children to express their emotions safely and build confidence in emotional communication.",
      image: "/placeholder.svg?height=200&width=300&text=Self+Expression",
    },
    {
      title: "Storytelling Circle (Age 4-8)",
      description:
        "Children share stories and listen to others, developing communication skills, empathy, and emotional understanding through narrative experiences.",
      image: "/placeholder.svg?height=200&width=300&text=Storytelling",
    },
    {
      title: "Calm Down Corner (Age 3-10)",
      description:
        "A quiet space with sensory tools and calming activities where children can learn to self-regulate and manage overwhelming emotions.",
      image: "/placeholder.svg?height=200&width=300&text=Calm+Corner",
    },
    {
      title: "Friendship Building Games (Age 5-12)",
      description:
        "Interactive games that teach children how to make friends, maintain relationships, and develop social bonds through cooperative activities.",
      image: "/placeholder.svg?height=200&width=300&text=Friendship+Games",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#F6F6F6]">
      <div className="max-w-[1306px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-8">
          Emotional Skills Games
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

export default EmotionalSkillsSection;
