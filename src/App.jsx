import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import HomePage from "./pages/HomePage"
// import GamesPage from "./pages/GamesPage"
// import BlogsPage from "./pages/BlogsPage"
import AboutPage from "./pages/AboutPage"
import MembershipsPage from "./pages/MembershipsPage"
import EventsPage from "./pages/EventsPage"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            
            <Route path="/events" element={<EventsPage/>} />
            <Route path="/memberships" element={<MembershipsPage/>} />

            {/* <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/games" element={<GamesPage />} />
           */}

          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  )
}

export default App
