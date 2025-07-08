import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"

import HomePage from "./pages/HomePage"

import BlogsPage from "./pages/BlogsPage"


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            
          

          </Routes>
        </main>
        
      </div>
    </Router>
  )
}

export default App
