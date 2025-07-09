import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"

import HomePage from "./pages/HomePage"
import BlogsPage from "./pages/BlogsPage"
import GamesPage from "./pages/GamesPage"

import CognitiveSkillsSection from "./components/games/cognitive-skills-section"
import SocialSkillsSection from "./components/games/social-skills-section"
import EmotionalSkillsSection from "./components/games/emotional-skills-section"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />

            {/* Nested Games Routes */}
            <Route path="/games" element={<GamesPage />}>
              <Route index element={<CognitiveSkillsSection />} />
              <Route path="social-skills" element={<SocialSkillsSection />} />
              <Route path="emotional-skills" element={<EmotionalSkillsSection />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
