import React from "react"
import { Link } from "react-router-dom"

const ChildDevelopmentSection = () => {
  const blogs = [
    {
      id: "play-based-learning",
      title: "Play-Based Learning at Richfam Child Care",
      description:
        "Children learn best through play, as it provides a natural and enjoyable way to explore, experiment, and grow.",
      image: "/image6.png",
    },
    {
      id: "child-communication",
      title: "Child Communication Through Playing",
      description:
        "Interactive games boost early language skills, helping children develop fluency and communication through engaging play.",
      image: "/image7.png",
    },
    {
      id: "emotional-intelligence",
      title: "The Role of Play in Emotional Intelligence",
      description:
        "Games aid and guide about fun and play are powerful tools for teaching children how to navigate emotions.",
      image: "/image8.png",
    },
  ]

  return (
    <section className="py-16 px-6 bg-[#F6F6F6]">
      <div className="max-w-[1306px] h-[570px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-8">
          Child Development Tips
        </h2>

        {/* White container wrapping all cards */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full h-full">
          <div className="grid md:grid-cols-3 gap-[65px]">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#F9F9F9] rounded-lg shadow-sm p-4 w-full flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-[230px] mb-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="rounded-[18px] w-[316px] h-[230px] object-cover mx-auto"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#1E3A8A] mb-2">{blog.title}</h3>
                    <p className="text-[18px] text-gray-700 leading-relaxed mb-4">{blog.description}</p>
                  </div>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="text-[#1E3A8A] font-medium hover:underline"
                  >
                    See More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChildDevelopmentSection
