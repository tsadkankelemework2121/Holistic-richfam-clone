import BlogSection from "../components/blog/blog-section" 
import BlogHeroSection from "../components/blog/blog-hero-section"
import NewsletterSection from "../components/blog/newsletter-section"
function BlogPage() {
  return (
  <div><BlogHeroSection />
    <div className="bg-white min-h-screen py-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <BlogSection category="child-development-tips" title="Child Development Tips" />

        <BlogSection category="parenting-tips" title="Parenting Tips" />

        <BlogSection category="importance-of-play" title="Importance of Play" />

      
      </div>
      <div className="border-t border-black"></div>
    </div>
<NewsletterSection />
<br/>
    </div>
  )
}

export default BlogPage
