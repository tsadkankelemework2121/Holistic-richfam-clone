import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Navbar from "./layout/Navbar"
import HomePage from "./pages/HomePage"
import BlogsPage from "./pages/BlogsPage"
import GamesPage from "./pages/GamesPage"
import BlogDetail from "./components/blog/blog-detail"
import CognitiveSkillsSection from "./components/games/cognitive-skills-section"
import SocialSkillsSection from "./components/games/social-skills-section"
import EmotionalSkillsSection from "./components/games/emotional-skills-section"

// Create Query Client instance
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<BlogsPage />} />

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
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
