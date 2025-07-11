import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Footer from "./layout/Footer"

import AboutPage from "./pages/AboutPage"
import EventsPage from "./pages/EventsPage"
import EventDetailPage from "./pages/EventDetailPage"
import MembershipsPage from "./pages/MembershipsPage"
import "./App.css"
import Navbar from "./layout/Navbar"
import HomePage from "./pages/HomePage"
import BlogsPage from "./pages/BlogsPage"
import GamesPage from "./pages/GamesPage"
import BlogDetail from "./components/blog/blog-detail"
import CognitiveSkillsSection from "./components/games/cognitive-skills-section"
import SocialSkillsSection from "./components/games/social-skills-section"
import EmotionalSkillsSection from "./components/games/emotional-skills-section"
import ContactUsPage from "./components/home/contactus"



function App() {
  return (
    
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<HomePage />} />
               <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:id" element={<EventDetailPage />} />
              <Route path="/membership" element={<MembershipsPage />} />

              {/* Blog Detail Route */}
              <Route path="/blogs/:id" element={<BlogDetail />} />
              

              {/* Nested Games Routes */}
              <Route path="/games" element={<GamesPage />}>
                <Route index element={<CognitiveSkillsSection />} />
                <Route path="social-skills" element={<SocialSkillsSection />} />
                <Route path="emotional-skills" element={<EmotionalSkillsSection />} />
               
          
              </Route>
            </Routes>
          </main>   
           <Footer />
        </div>
      </Router>
      )
}
export default App