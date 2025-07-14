import { Link } from "react-router-dom"

function BlogCard({ blog, index, hideSeeMore = false }) {
  
  const imageUrl = blog.image_url || "/placeholder.svg?height=230&width=316"


  const displayIntro = blog.intro || "No introduction available."

  return (
    <div
      className="flex flex-col bg-[#F9F9F9] p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
      style={{ width: "341px", height: "451px" }}
    >
      {/* Image */}
      <div className="mb-6 flex justify-center">
        <img
          src={imageUrl || "/placeholder.svg"} // Directly use the local placeholder URL
          alt={blog.title || "Blog image"}
          width="316"
          height="230"
          className="object-cover rounded-[18px]"
          style={{ width: "316px", height: "230px" }}
        />
      </div>
      
      <h3 className="text-[#1E3A8A] font-bold text-[18px] mb-4 leading-tight">{blog.title || "Untitled"}</h3>
      
      <p className="text-black text-[18px] font-normal leading-relaxed mb-4 flex-grow">{displayIntro}{!hideSeeMore && (
        <Link
          to={`/blogs/${blog.id || 1}`} // Link to the BlogDetail page
          className="text-[#1E3A8A] font-normal text-[14px] hover:underline inline-block"
          style={{ opacity: 0.7 }}
        >
          See more
        </Link>
      )}</p>
      
      
    </div>
  )
}

export default BlogCard
