"use client"
import { useQuery } from "@tanstack/react-query"
import api from "../../API/api"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import BlogCard from "../blog/blog-card"

function BlogDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  
  const {
    data: blogPost,
    isLoading: isLoadingBlog,
    error: errorBlog,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const response = await api.get(`/blogs/${id}`)
      console.log("BlogDetail API response:", response.data)
      return response.data.data // Correct data extraction as per Detailevent
    },
    staleTime: 10000,
  })

  
  const {
    data: relatedBlogs,
    isLoading: isLoadingRelated,
    error: errorRelated,
  } = useQuery({
    queryKey: ["relatedBlogs", blogPost?.category],
    queryFn: async () => {
      const response = await api.get(`/blogs/category/${blogPost?.category || "child-development-tips"}`)
      console.log("Related Blogs API response:", response.data)
      // Filter out the current blog post from related blogs
      return response.data.filter((blog) => blog.id !== blogPost.id)
    },
    enabled: !!blogPost, // Only fetch related blogs if the main blog post is loaded
    staleTime: 10000,
  })

  if (isLoadingBlog) return <p className="text-center py-10">Loading blog post...</p>
  if (errorBlog) return <p className="text-center py-10 text-red-500">Error loading blog post: {errorBlog.message}</p>

  if (!blogPost) return <p className="text-center py-10">Blog post not found.</p>

  // Construct image URL based on Detailevent's pattern (data.image)
  const blogImageUrl = blogPost.image
    ? `https://admin.richfamcenter.com/storage/${blogPost.image}`
    : blogPost.image_url || "/placeholder.svg?height=400&width=600"

  return (
    <div className="bg-white min-h-screen">
      <button onClick={() => navigate(-1)} className="fixed top-15 left-3 z-10 text-black md:top-24 md:left-6">
        <ArrowLeft size={30} />
      </button>

      {/* Mobile View */}
      <div className="block md:hidden pt-16 px-4 pb-8">
        <div className="mb-8">
          <img
            src={blogImageUrl || "/placeholder.svg"}
            alt={blogPost.title || "Blog Banner"}
            className="w-full h-48 rounded-2xl object-cover"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=200&width=300"
              e.target.onerror = null
            }}
          />
          <h2 className="text-xl font-bold text-blue-900 mt-4">{blogPost.title}</h2>
          <p className="text-blue-900 mt-2 flex items-center text-sm">
            📅 {blogPost.created_at ? new Date(blogPost.created_at).toLocaleDateString() : "N/A"}
          </p>
          <p className="text-blue-900 flex items-center text-sm">📍 {blogPost.category || "N/A"}</p>
          <div className="border-t border-gray-200 my-4"></div>
          {/* Render full description for BlogDetail */}
          <div
            dangerouslySetInnerHTML={{ __html: blogPost.description || blogPost.content || blogPost.intro }}
            className="text-black text-base"
          />
        </div>
        {/* Related Blogs Section (Mobile) */}
        {isLoadingRelated ? (
          <p className="text-center py-4">Loading related blogs...</p>
        ) : errorRelated ? (
          <p className="text-center py-4 text-red-500">Error loading related blogs: {errorRelated.message}</p>
        ) : relatedBlogs && relatedBlogs.length > 0 ? (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6">Related Blogs</h3>
            <div className="grid grid-cols-1 gap-6">
              {relatedBlogs.slice(0, 3).map((blog, index) => (
                <BlogCard key={blog.id || index} blog={blog} index={index} hideSeeMore={false} />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center py-4 text-gray-500">No related blogs found.</p>
        )}

        {/* Subscribe Section (Mobile) */}
        <div className="bg-gray-100 shadow-md rounded-2xl p-5 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Subscribe</h2>
          <p className="text-black text-base mb-4">
            Stay informed with tips on family child development, parenting advice, and the vital role of play in a
            child's growth. You'll also receive updates on our upcoming events and workshops.
          </p>
          <p className="text-lg mb-2">Email</p>
          <input
            type="email"
            className="w-full border border-gray-300 p-3 rounded-2xl mb-4 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
          />
          <button className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg rounded-2xl">
            Subscribe
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex gap-8 h-full px-10 py-5 pt-20 max-w-7xl mx-auto">
        <div
          className="w-full md:w-2/3 h-[calc(100vh-7rem)] overflow-y-auto rounded-lg"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <img
            src={blogImageUrl || "/placeholder.svg"}
            alt={blogPost.title || "Blog Banner"}
            className="w-full h-80 rounded-3xl object-cover"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=400&width=600"
              e.target.onerror = null
            }}
          />
          <h2 className="text-2xl font-bold text-blue-900 mt-4">{blogPost.title}</h2>
          <p className="text-blue-900 mt-2 flex items-center">
            📅 {blogPost.created_at ? new Date(blogPost.created_at).toLocaleDateString() : "N/A"}
          </p>
          <p className="text-blue-900 flex items-center">📍 {blogPost.category || "N/A"}</p>
          <div className="border-t border-black p-4 mt-5"></div>
          {/* Render full description for BlogDetail */}
          <div
            dangerouslySetInnerHTML={{ __html: blogPost.description || blogPost.content || blogPost.intro }}
            className="mt-3 text-black text-lg"
          />

          {/* Related Blogs Section (Desktop) */}
          {isLoadingRelated ? (
            <p className="text-center py-4">Loading related blogs...</p>
          ) : errorRelated ? (
            <p className="text-center py-4 text-red-500">Error loading related blogs: {errorRelated.message}</p>
          ) : relatedBlogs && relatedBlogs.length > 0 ? (
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-[#1E3A8A] mb-8">Related Blogs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[65px]">
                {relatedBlogs.slice(0, 3).map((blog, index) => (
                  <BlogCard key={blog.id || index} blog={blog} index={index} hideSeeMore={false} />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center py-4 text-gray-500">No related blogs found.</p>
          )}
        </div>
        {/* Subscribe Section (Desktop) */}
        <div className="w-full md:w-1/3 h-[calc(100vh-7rem)] sticky top-16">
          <div className="bg-gray-100 shadow-md rounded-3xl p-6 h-full">
            <h2 className="text-4xl font-bold text-gray-900 text-center mt-5">Subscribe</h2>
            <p className="text-black mt-9 text-lg">
              Stay informed with tips on family child development, parenting advice, and the vital role of play in a
              child's growth. You'll also receive updates on our upcoming events and workshops.
            </p>
            <p className="mt-8 text-xl p-2">Email</p>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded-3xl mt-0 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
            />
            <div className="flex justify-center">
              <button className="px-12 py-2 bg-yellow-400 hover:bg-yellow-500 text-black text-lg rounded-3xl mt-5">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Assuming Footer and Copyright are global components, they should be outside this component or handled by a layout */}
      {/* <Footer/> */}
      {/* <Copyright/> */}
    </div>
  )
}

export default BlogDetail
