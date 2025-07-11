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
    <>
      <nav className="w-full bg-[#1E3A8A] px-4 md:px-8 py-6 sticky top-0 z-50" style={{ minHeight: "121px" }}>
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">
          {/* Logo + Text */}
          <Link to="/" className="flex flex-col items-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-wide text-center">RICHFAM</h1>
            <p
              className="text-white text-xs leading-snug text-center"
              style={{
                fontFamily: "Arial",
                whiteSpace: "pre-line",
                maxWidth: "280px",
                lineHeight: "1.3",
              }}
            >
              Integrated Children Holistic Development,{"\n"}Lodge & Family Amusement Center.
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-end space-x-[60px] right-[10px] px-20">
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
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#1E3A8A] transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-blue-600">
            <h2 className="text-white text-xl font-bold">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-2 hover:bg-blue-700 rounded-md"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-lg transition-colors ${
                    isActive
                      ? "text-yellow-400 font-bold bg-blue-700"
                      : "text-white hover:text-yellow-300 hover:bg-blue-700"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
