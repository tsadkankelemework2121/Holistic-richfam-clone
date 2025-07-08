import React from "react"
import { Link } from "react-router-dom"
const ImportanceOfPlaySection = () => {
  const blogs = [
    {
      id: "benefits-of-playing",
      title: "Benefits of Playing Games for Kids",
      description:
        "Games play is far more than a simple pastime. It's also instrumental in helping children develop essential skills.",
      image: "/Rectangle 8 (9).png",
    },
    {
      id: "build-self-worth",
      title: "Build Your Child's Self-Worth",
      description:
        "Engagement games is a powerful way to enhance natural capacities and confidence, fostering a positive self-image and building thinking and vital social skills.",
      image:"/Rectangle 8 (10).png",
    },
    {
      id: "communication-skills",
      title: "Enhance Your Kid's Communication Skills",
      description:
        "Developing hand-eye coordination and fine motor skills through play activities and adventures.",
      image: "/Rectangle 8 (11).png",
    }
  ]

  return (
    <section className="py-16 px-6 bg-[#F6F6F6]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-8">
          Importance Of Play
        </h2>

        {/* White wrapper around cards */}
        <div className="bg-white p-6 rounded-lg shadow-md w-[1306px]">
          <div className="grid md:grid-cols-3 gap-10">
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

export default ImportanceOfPlaySection
