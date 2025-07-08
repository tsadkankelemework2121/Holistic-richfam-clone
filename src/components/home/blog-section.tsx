import React from "react"
import image1 from "../../assets/image6.png"
import image2 from "../../assets/image7.png"
import image3 from "../../assets/image8.png"

const ChildDevelopmentSection = () => {
  const blogs = [
    {
      id: "play-based-learning",
      title: "Play-Based Learning at Richfam Child Care",
      description:
        "Children learn best through play, as it provides a natural and enjoyable way to explore, experiment, and grow.",
      image: image1.src,
    },
    {
      id: "child-communication",
      title: "Child Communication Through Playing",
      description:
        "Interactive games boost early language skills, helping children develop fluency and communication through engaging play.",
      image: image2.src,
    },
    {
      id: "emotional-intelligence",
      title: "The Role of Play in Emotional Intelligence",
      description:
        "Games aid and guide about fun and play are powerful tools for teaching children how to navigate emotions.",
      image: image3.src,
    },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-12">
          Child Development Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-[18px] font-bold text-[#1E3A8A] mb-3">
                  {blog.title}
                </h3>
                <p className="text-[18px] text-gray-700 leading-relaxed mb-4">
                  {blog.description}
                </p>
                <button className="text-[#1E3A8A] border border-[#1E3A8A] bg-transparent px-4 py-2 rounded hover:bg-[#1E3A8A] hover:text-white transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChildDevelopmentSection
