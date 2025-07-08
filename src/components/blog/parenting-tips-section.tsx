import React from "react"
import { Link } from "react-router-dom"

const ParentingTipsSection = () => {
  const blogs = [
    {
      id: "teach-responsibility",
      title: "How to Teach Your Child Responsibility",
      description:
        "Teaching children how to take a sense of ownership. They are an effective way to help children learn responsibility and building life skills.",
      image: "/Rectangle 8 (6).png",
    },
    {
      id: "body-language",
      title: "Body Language",
      description:
        "Reading is a journey filled with kids insights, and important, but it also presents unique challenges and joys.",
      image: "/Rectangle 8 (7).png",
    },
    {
      id: "simple-advice",
      title: "Simple Advice for Parents on Parenting",
      description:
        "Parenting children for advice is about guiding them through life's adventures with love, patience, and understanding.",
      image:"/Rectangle 8 (8).png",
    },
  ]

  return (
    <section className="py-16 px-6 bg-[#F6F6F6]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-8">
          Parenting Tips
        </h2>

        {/* Outer white container for the cards */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid md:grid-cols-3 gap-6">
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
                    className=" text-[#1E3A8A]-69 font-regular hover:underline"
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

export default ParentingTipsSection
