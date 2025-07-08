"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Games", path: "/games" },
    { name: "Events", path: "/events" },
    { name: "Membership", path: "/membership" },
    { name: "Blog", path: "/blogs" },
  ]

  return (
    <nav className="w-full bg-[#1E3A8A] px-4 md:px-8 py-6 border-b border-[#FFFFFF]" style={{ minHeight: "121px" }}>
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex flex-col">
          <h1 
            className="text-white text-2xl md:text-4xl font-bold mb-1" 
            style={{ fontFamily: "Arial" }}
          >
            RICHFAM
          </h1>
          <p 
            className="text-white text-xs md:text-sm opacity-90" 
            style={{ fontFamily: "Arial", maxWidth: "280px" }}
          >
            Integrated Children Holistic Development,
            <br />
            Lodge & Family Amusement Center.
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 ">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-item ${isActive ? "text-yellow-300" : "text-white hover:text-yellow-300 "}`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-blue-700 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 ${isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-300"}`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar