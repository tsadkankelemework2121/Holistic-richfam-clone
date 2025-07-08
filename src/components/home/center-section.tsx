import React from 'react';

import image2 from "../../assets/image2.png"

import image3 from "../../assets/image3.png"

import image4 from "../../assets/image4.png"
const CenterSection = () => {
  const activities = [
    {
      title: "Soft Block Building (Age 1-3)",
      description:
        "Toddlers use soft, foam blocks to build structures. This activity enhances problem-solving as they figure out how to stack blocks without them toppling over. It also introduces basic concepts like balance, shapes, and sizes.",
      image: image2,
    },
    {
      title: "Interactive Laser Tag (Ages 6-8)",
      description:
        "A fun, social game where kids wear sensor vests and use laser guns to tag each other in a designated area. The game encourages teamwork, communication, and strategy as players work together to 'tag' opponents while avoiding being tagged themselves.",
      image: image3,
    },
    {
      title: "Interactive Gaming (Age 9-12)",
      description:
        "Digital games with interactive touches encourage healthy competition and peer engagement, teaching sportsmanship and mutual respect. These games provide a fun and immersive way for participants to learn teamwork and cooperation.",
      image: image4,
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-center mb-8">RICHFAM Center</h2>

        <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
          RICHFAM is a holistic child development center designed to provide a unique blend of educational and
          recreational experiences for children aged 1-19. The center will offer a range of programs that integrate
          play, learning, and community engagement, aiming to foster physical, emotional, social, cognitive, and
          spiritual growth. With interactive learning zones, cultural enrichment activities, and wellness programs,
          RICHFAM will serve as a safe and nurturing environment where children can explore their potential while
          families and communities come together to support their development.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <img
                  src={activity.image.src}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#1E3A8A] mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#FDD835] hover:bg-yellow-400 text-black font-semibold px-8 py-2 rounded-full transition-colors">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CenterSection;