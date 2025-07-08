import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
// import Footer from "./layout/Footer"
import HomePage from "./pages/HomePage"
// import GamesPage from "./pages/GamesPage"
// import BlogsPage from "./pages/BlogsPage"


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/games" element={<GamesPage />} />
           */}

          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
