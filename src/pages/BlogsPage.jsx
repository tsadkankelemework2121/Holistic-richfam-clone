import Hero from "../components/blog/blog-hero-section"
import ChildDevelopmentSection from "../components/blog/child-development-section"
import ParentingTipsSection from "../components/blog/parenting-tips-section"
import ImportanceOfPlaySection from "../components/blog/importance-of-play-section"
import BottomSection from "../components/blog/newsletter-section"



function Blogs() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <ChildDevelopmentSection />
      <ParentingTipsSection />
      <ImportanceOfPlaySection />
      <BottomSection />
      
    </div>
  )
}

export default Blogs
