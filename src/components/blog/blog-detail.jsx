"use client"

import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../../API/api"
import { useQuery } from "@tanstack/react-query"

function BlogDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  // For simplicity, using fixed blog ID (1) for all detail pages
  const blogId = 1

  const fetchBlogDetail = async () => {
    const response = await api.get(`/blogs/${blogId}`)
    return response.data.data
  }

  const fetchRelatedBlogs = async () => {
    const response = await api.get("/blogs/category/parenting-tips")
    return response
  }

  const {
    data: blogData,
    error: blogError,
    isLoading: blogLoading,
  } = useQuery({
    queryKey: ["blog-detail", blogId],
    queryFn: fetchBlogDetail,
    staleTime: 10000,
  })

  const {
    data: relatedData,
    error: relatedError,
    isLoading: relatedLoading,
  } = useQuery({
    queryKey: ["related-blogs"],
    queryFn: fetchRelatedBlogs,
    staleTime: 10000,
  })

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    setEmail("")
  }

  const handleImageError = (e) => {
    e.target.src = "/placeholder.svg?height=200&width=400"
  }

  if (blogLoading) return <p className="text-center py-8">Loading...</p>
  if (blogError) return <p className="text-center py-8 text-red-500">Error loading blog</p>

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="fixed top-15 left-3 z-10 text-black md:top-24 md:left-6">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Mobile Layout */}
      <div className="block md:hidden pt-16 px-4 pb-8">
        <div className="mb-8">
          <img
            src={`http://192.168.100.36:8000/storage/${blogData?.image}`}
            alt="Blog Banner"
            className="w-full h-48 rounded-2xl object-cover"
            onError={handleImageError}
          />
          <h2 className="text-xl font-bold text-blue-900 mt-4">
            {blogData?.title || "Play-Based Learning at Richfam Child Game Center"}
          </h2>
          <div className="border-t border-gray-200 my-4"></div>

          {/* Blog Content */}
          <div className="text-black text-base">
            {blogData?.content ? (
              <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
            ) : (
              <div className="space-y-4">
                <p>
                  Games that promote <strong>creativity</strong>, <strong>problem-solving</strong>, and{" "}
                  <strong>social skills</strong> are essential for their cognitive, emotional, and social development.
                </p>
                <p>
                  Through creativity-based play, children can express themselves, think outside the box, and discover
                  new possibilities. Games like <strong>puzzles</strong>, <strong>building blocks</strong>, and{" "}
                  <strong>collaborative games</strong> sharpen critical thinking and teach valuable life skills.
                </p>
              </div>
            )}
          </div>

          {/* Related Blogs - Mobile */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Related Blogs</h2>
            {relatedLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-gray-300 rounded-2xl h-32 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {relatedData?.data?.data?.slice(0, 3).map((relatedBlog, index) => (
                  <div key={relatedBlog.id || index} className="bg-gray-50 rounded-2xl p-4">
                    <img
                      src={`http://192.168.100.36:8000/storage/${relatedBlog.image}`}
                      alt={relatedBlog.title}
                      className="w-full h-32 object-cover rounded-xl mb-3"
                      onError={handleImageError}
                    />
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{relatedBlog.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {relatedBlog.description ||
                        relatedBlog.excerpt ||
                        (relatedBlog.content &&
                          relatedBlog.content.replace(/<[^>]*>/g, "").substring(0, 100) + "...") ||
                        "No description available"}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Subscribe Section - Mobile */}
        <div className="bg-gray-100 shadow-md rounded-2xl p-5">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Subscribe</h2>
          <p className="text-black text-base mb-4">
            Stay informed with tips on family child development, parenting advice, and the vital role of play in a
            child's growth. You'll also receive updates on our upcoming events and workshops.
          </p>
          <form onSubmit={handleSubscribe}>
            <p className="text-lg mb-2">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-2xl mb-4 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg rounded-2xl transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-8 h-full px-10 py-5 pt-20">
        {/* Left Side - Scrollable Content */}
        <div
          className="w-full md:w-2/3 h-[calc(100vh-7rem)] overflow-y-auto rounded-lg"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <img
            src={`http://192.168.100.36:8000/storage/${blogData?.image}`}
            alt="Blog Banner"
            className="w-full h-80 rounded-3xl object-cover"
            onError={handleImageError}
          />
          <h2 className="text-2xl font-bold text-blue-900 mt-4">
            {blogData?.title || "Play-Based Learning at Richfam Child Game Center"}
          </h2>
          <div className="border-t border-black p-4 mt-5"></div>

          {/* Blog Content */}
          <div className="mt-3 text-black text-lg">
            {blogData?.content ? (
              <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
            ) : (
              <div className="space-y-6">
                <p>
                  Games that promote <strong>creativity</strong>, <strong>problem-solving</strong>, and{" "}
                  <strong>social skills</strong> are essential for their cognitive, emotional, and social development.
                </p>
                <p>
                  Through creativity-based play, children can express themselves, think outside the box, and discover
                  new possibilities. Games like <strong>puzzles</strong>, <strong>building blocks</strong>, and{" "}
                  <strong>collaborative games</strong> sharpen critical thinking and teach valuable life skills like
                  teamwork and empathy. These experiences lay the foundation for lifelong learning and adaptability.
                </p>
                <p>
                  Engaging in gaming activities encourages children to learn actively while having fun. Creativity-based
                  games foster curiosity and helps develop problem-solving abilities by challenging young minds to think
                  critically and adapt to new situations.
                </p>
                <p>
                  These games also provide opportunities for children to practice <strong>decision-making</strong> and{" "}
                  <strong>develop resilience</strong> when faced with challenges.
                </p>
              </div>
            )}
          </div>

          {/* Related Blogs - Desktop */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Related Blogs</h2>
            {relatedLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-gray-300 rounded-2xl h-48 mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedData?.data?.data?.slice(0, 3).map((relatedBlog, index) => (
                  <div key={relatedBlog.id || index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img
                      src={`http://192.168.100.36:8000/storage/${relatedBlog.image}`}
                      alt={relatedBlog.title}
                      className="w-full h-48 object-cover"
                      onError={handleImageError}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-blue-900 mb-2">{relatedBlog.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {relatedBlog.description ||
                          relatedBlog.excerpt ||
                          (relatedBlog.content &&
                            relatedBlog.content.replace(/<[^>]*>/g, "").substring(0, 100) + "...") ||
                          "No description available"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Sticky Subscribe Section */}
        <div className="w-full md:w-1/3 h-[calc(100vh-7rem)] sticky top-16">
          <div className="bg-gray-100 shadow-md rounded-3xl p-6 h-full">
            <h2 className="text-4xl font-bold text-gray-900 text-center mt-5">Subscribe</h2>
            <p className="text-black mt-9 text-lg">
              Stay informed with tips on family child development, parenting advice, and the vital role of play in a
              child's growth. You'll also receive updates on our upcoming events and workshops.
            </p>
            <form onSubmit={handleSubscribe}>
              <p className="mt-8 text-xl p-2">Email</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-3xl mt-0 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                placeholder="Enter your email"
                required
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-12 py-2 bg-yellow-400 hover:bg-yellow-500 text-black text-lg rounded-3xl mt-5 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
