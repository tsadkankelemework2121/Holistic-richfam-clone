import React from "react"


const BlogHeroSection = () => {
  return (
    <section className="relative w-full h-[500px]">
   
      <img
        src="/image10.png"
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />

      
      <div className="absolute inset-0  flex items-center justify-center px-6">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-[#FDD835] mb-6 leading-tight">
            Get Insights About Children's
            <br />
            Richfam Center
          </h1>
           <div><p className="text-lg md:text-xl text-white leading-relaxed">
            Our guide covers a variety of tips and learning, sharing essential guidance for families on how to nurture
            learning, sharing, and fun in your child's development.
          </p>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default BlogHeroSection
