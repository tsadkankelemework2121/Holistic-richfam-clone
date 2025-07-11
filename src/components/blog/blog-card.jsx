"use client"

import { Link } from "react-router-dom"


function BlogCard({ blog, index }) {
  const handleImageError = (e) => {
    e.target.src = "/placeholder.svg?height=230&width=316"
  }

  // Debug log to see if component is being called
  console.log("BlogCard rendering:", blog)

  return (
    <div
      className="flex flex-col bg-[#F9F9F9] p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
      style={{ width: "341px", height: "451px" }}
    >
      {/* Image */}
      <div className="mb-6 flex justify-center">
        <img
          src={`http://192.168.100.36:8000/storage${blog.image}`}
          alt={blog.title || "Blog image"}
          className="object-cover rounded-[18px]"
          style={{ width: "316px", height: "230px" }}
          onError={handleImageError}
        />
      </div>

      {/* Title */}
      <h3 className="text-[#1E3A8A] font-bold text-[18px] mb-4 leading-tight">{blog.title || "Untitled"}</h3>

      {/* Description */}
      <p className="text-black text-[18px] font-normal leading-relaxed mb-4 flex-grow">
        {blog.description ||
          blog.excerpt ||
          (blog.content && blog.content.replace(/<[^>]*>/g, "").substring(0, 120) + "...") ||
          "No description available"}
      </p>

      {/* See More Link */}
      <Link
        to={`/blogs/${blog.id || 1}`}
        className="text-[#1E3A8A] font-normal text-[14px] hover:underline inline-block"
        style={{ opacity: 0.7 }}
      >
        See more
      </Link>
    </div>
  )
}

export default BlogCard
