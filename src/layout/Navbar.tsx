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
    <nav className="w-full bg-[#1E3A8A] px-4 md:px-8 py-6 sticky top-0 z-50" style={{ minHeight: "121px" }}>
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Logo + Text */}
        <Link to="/" className="flex flex-col items-center">
          <h1 className="text-white text-4xl font-black leading-tight tracking-wide text-center ">
            RICHFAM
          </h1>
          <p
            className="text-white text-sm leading-snug text-center"
            style={{
              fontFamily: "Arial",
              whiteSpace: "pre-line",
              maxWidth: "280px",
              lineHeight: "1.3"
            }}
          >
            Integrated Children Holistic Development,{'\n'}Lodge & Family Amusement Center.
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-end space-x-[60px]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white text-base font-medium transition-colors ${
                  isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-blue-700 rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
                  className={`block py-2 text-lg ${
                    isActive ? "text-yellow-400 font-bold" : "text-white hover:text-yellow-300"
                  }`}
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
