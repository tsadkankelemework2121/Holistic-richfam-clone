"use client"

import { useState } from "react"
import api from "../../API/api"
import { useQuery } from "@tanstack/react-query"
import BlogCard from "./blog-card"
import NavigationDots from "./navigation-dots"

function ChildDevelopmentSection() {
  const [currentPage, setCurrentPage] = useState(0)

  const fetchData = async () => {
    const response = await api.get("/blogs/category/child-development-tips")
    return response.data
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["child-development"],
    queryFn: fetchData,
    staleTime: 10000,
  })

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  if (isLoading) {
    return (
      <section className="py-16 px-6 bg-[#F6F6F6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[37px] font-bold text-[#1E3A8A] text-left mb-8">Child Development Tips</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto" style={{ width: "1306px", height: "535px" }}>
            <div className="h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-[65px]">
                  {[1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="animate-pulse bg-[#F9F9F9] p-6 rounded-2xl border border-gray-200"
                      style={{ width: "341px", height: "451px" }}
                    >
                      <div
                        className="bg-gray-300 rounded-[18px] mb-6 mx-auto"
                        style={{ width: "316px", height: "230px" }}
                      ></div>
                      <div className="h-6 bg-gray-300 rounded mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      </div>
                      <div className="h-4 bg-gray-300 rounded w-20 mt-4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 px-6 bg-[#F6F6F6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[37px] font-bold text-[#1E3A8A] text-left mb-8">Child Development Tips</h2>
          <div
            className="bg-white rounded-2xl shadow-lg p-8 mx-auto flex items-center justify-center"
            style={{ width: "1306px", height: "535px" }}
          >
            <div className="text-center text-red-500">Error loading child development tips: {error.message}</div>
          </div>
        </div>
      </section>
    )
  }

  // Get current page blogs (3 per page) - sorted by ID
  const blogsPerPage = 3
  const sortedBlogs = data?.sort((a, b) => a.id - b.id) || []
  const startIndex = currentPage * blogsPerPage
  const currentBlogs = sortedBlogs.slice(startIndex, startIndex + blogsPerPage)

  return (
    <section className="py-16 px-6 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[37px] font-bold text-[#1E3A8A] text-left mb-8">Child Development Tips</h2>

        {/* White Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto" style={{ width: "1306px", height: "535px" }}>
          <div className="h-full flex flex-col">
            {/* Cards Container */}
            <div className="flex-1 flex items-center justify-center">
              {currentBlogs.length > 0 ? (
                <div className="grid grid-cols-3 gap-[65px]">
                  {currentBlogs.map((blog, index) => (
                    <BlogCard key={blog.id || index} blog={blog} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <p>No blogs available for this page</p>
                  <p className="text-sm mt-2">Current page: {currentPage + 1}</p>
                </div>
              )}
            </div>

            {/* Navigation Dots - Always show 3 dots */}
            <div className="flex justify-center mt-4">
              <NavigationDots totalPages={3} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChildDevelopmentSection
