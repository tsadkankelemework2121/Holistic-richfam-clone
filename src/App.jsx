import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import EventsPage from "./pages/EventsPage"
import EventDetailPage from "./pages/EventDetailPage"
//import BlogsPage from "./pages/BlogsPage"
//import GamesPage from "./pages/GamesPage"
import MembershipsPage from "./pages/MembershipsPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
    
          <Route path="/memberships" element={<MembershipsPage />} />
        </Routes>
           <Footer />
      </div>
    </Router>
  )
}

export default App
