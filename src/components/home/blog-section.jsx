"use client"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import api from "../../API/api"
import BlogCard from "../blog/blog-card"

const BlogSectionHome = () => {
  const fetchChildDevelopmentBlogs = async () => {
    const response = await api.get("/blogs/category/child-development-tips")
    return response.data 
  }

  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["childDevelopmentBlogsHome"], 
    staleTime: 5 * 60 * 1000,
  })

  const blogsList = Array.isArray(blogs) ? blogs : []

  if (isLoading) {
    return (
      <section className="py-16 px-6 bg-[#F6F6F6]">
        <div className="max-w-[1306px] h-[535px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-8">Blogs</h2>
          <div className="bg-white p-6 rounded-lg shadow-md w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A8A] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading child development tips...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 px-6 bg-[#F6F6F6]">
        <div className="max-w-[1306px] h-[535px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-8">Child Development Tips</h2>
          <div className="bg-white p-6 rounded-lg shadow-md w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-red-500 text-xl mb-4">⚠️</div>
              <p className="text-red-600 mb-4">Failed to load child development tips</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-[#1E3A8A] text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-[#F6F6F6]">
      <div className="max-w-[1306px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A] text-left mb-6 sm:mb-8">
          Child Development Tips
        </h2>
        {/* White container wrapping all cards */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full">
          {blogsList.length === 0 ? (
            <div className="text-center py-12 h-[535px] flex items-center justify-center">
              <p className="text-gray-600 text-lg">No child development tips available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[65px] justify-items-center">
              {blogsList.map((blog) => (
                <BlogCard key={blog.id} blog={blog} hideSeeMore={true} /> // Pass hideSeeMore prop
              ))}
            </div>
          )}
          {/* "See All" link positioned at the bottom of the white container */}
          <div className="text-center mt-8">
            <Link
              to="/blogs"
              className="inline-block bg-[#FDD835] hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full transition-colors"
            >
              See All
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSectionHome
