"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import api from "../../API/api" 
import BlogCard from "../blog/blog-card"
import NavigationDots from "../blog/navigation-dots"

function BlogSection({ category, title }) {
  const [currentPage, setCurrentPage] = useState(0)
  const blogsPerPage = 3 // Number of blogs to display per page, as per screenshot

  const fetchData = async () => {
    try {
      const response = await api.get(`/blogs/category/${category}`)
    
      console.log(`Fetched raw response for ${category}:`, response) 
      console.log(`Extracted data for ${category}:`, response.data) 
      return response.data
    } catch (err) {
      console.error(`Error fetching data for ${category}:`, err) 
      throw err 
    }
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["blogs", category], 
    queryFn: fetchData,
    staleTime: 10000,
  })

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

 
  const totalPages = data ? Math.ceil(data.length / blogsPerPage) : 0
  const sortedBlogs = data?.sort((a, b) => (Number(a.id) || 0) - (Number(b.id) || 0)) || []
  const startIndex = currentPage * blogsPerPage
  const currentBlogs = sortedBlogs.slice(startIndex, startIndex + blogsPerPage)

  // Debug logs
  console.log(`[${title}] - Full data (from useQuery):`, data)
  console.log(`[${title}] - isLoading:`, isLoading)
  console.log(`[${title}] - error:`, error)
  console.log(`[${title}] - sortedBlogs:`, sortedBlogs)
  console.log(`[${title}] - currentBlogs:`, currentBlogs)
  console.log(`[${title}] - currentPage:`, currentPage)
  console.log(`[${title}] - totalPages:`, totalPages)

  if (isLoading) {
    return (
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[37px] font-bold text-[#1E3A8A] text-left mb-8">{title}</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto" style={{ width: "1306px", height: "535px" }}>
            <div className="h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[65px]">
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
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[37px] font-bold text-[#1E3A8A] text-left mb-8">{title}</h2>
          <div
            className="bg-white rounded-2xl shadow-lg p-8 mx-auto flex items-center justify-center"
            style={{ width: "1306px", height: "535px" }}
          >
            <div className="text-center text-red-500">
              Error loading {title.toLowerCase()}: {error.message}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[37px] font-bold text-[#1E3A8A] text-left mb-8">{title}</h2>
        {/* White Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto" style={{ width: "1306px", height: "535px" }}>
          <div className="h-full flex flex-col">
            {/* Cards Container */}
            <div className="flex-1 flex items-center justify-center">
              {currentBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[65px]">
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
            {/* Navigation Dots */}
            {totalPages > 1 && ( // Only show dots if there's more than one page
              <div className="flex justify-center mt-4">
                <NavigationDots totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
