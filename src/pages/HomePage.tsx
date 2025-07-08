import AboutSection from "../components/home/about-section"
import BlogSection from "../components/home/blog-section"
import CenterSection from "../components/home/center-section"
import ContactSection from "../components/home/contact-section"
import EventsSection from "../components/home/events-section"
import Hero from "../components/home/hero-section"
import SupportSection from "../components/home/support-section"


const HomePage = () => {
  return (
    <div>
    <Hero />
     {/* <AboutSection />
     <CenterSection />
     <SupportSection />
     <EventsSection />
     <BlogSection />
      */}
  <ContactSection />
    </div>
  )
}

export default HomePage
