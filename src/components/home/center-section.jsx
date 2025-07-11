import React from "react"

const CenterSection = () => {
  const activities = [
    {
      title: "Soft Block Building (Age 1-3)",
      description:
        "Toddlers use soft, foam blocks to build structures. This activity enhances problem-solving as they figure out how to stack blocks without them toppling over. It also introduces basic concepts like balance, shapes, and sizes.",
      image: "/image2.png",
    },
    {
      title: "Interactive Laser Tag (Ages 6-8)",
      description:
        "A fun, social game where kids wear sensor vests and use laser guns to tag each other in a designated area. The game encourages teamwork, communication, and strategy as players work together to 'tag' opponents while avoiding being tagged themselves.",
      image: "/image3.png",
    },
    {
      title: "Interactive Gaming (Age 9-12)",
      description:
        "Digital games with interactive touches encourage healthy competition and peer engagement, teaching sportsmanship and mutual respect. These games provide a fun and immersive way for participants to learn teamwork and cooperation.",
      image:"/image4.png",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#F6F6F6]">
      <div className="max-w-[1306px] mx-auto">
        <h2 className="text-5xl md:text-5xl font-bold text-[#1E3A8A] text-left mb-8">
          RICHFAM Center
        </h2>

        <div className="grid md:grid-cols-3 gap-[30px]">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] rounded-lg shadow-sm p-4 w-full flex flex-col"
            >
              {/* Image with fixed size centered */}
              <div className="w-full h-[230px] mb-4 flex justify-center">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="rounded-[18px] w-[316px] h-[230px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow">
                <h3 className="text-[18px] font-bold text-[#1E3A8A] mb-2">{activity.title}</h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More button below cards */}
        <div className="text-center mt-8">
          <button className="bg-[#FDD835] hover:bg-yellow-400/40 text-black font-semibold px-8 py-3 rounded-full transition-colors">
            See More
          </button>
        </div>
      </div>
    </section>
  )
}

export default CenterSection
