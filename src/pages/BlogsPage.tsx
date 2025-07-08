import BlogHeroSection from "../components/blog/blog-hero-section"
import ChildDevelopmentSection from "../components/blog/child-development-section"
import ImportanceOfPlaySection from "../components/blog/importance-of-play-section"
import NewsletterSection from "../components/blog/newsletter-section"
import ParentingTipsSection from "../components/blog/parenting-tips-section"

const BlogsPage = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <BlogHeroSection />
      <ChildDevelopmentSection />
      <ParentingTipsSection />
      <ImportanceOfPlaySection />
      <NewsletterSection />
    </div>
  )
}

export default BlogsPage
