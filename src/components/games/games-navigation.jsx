"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown } from "lucide-react"

const GamesNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  const tabs = [
    { name: "Cognitive Skills", href: "/games", active: pathname === "/games" },
    { name: "Social Skills", href: "/games/social-skills", active: pathname === "/games/social-skills" },
    { name: "Emotional Skills", href: "/games/emotional-skills", active: pathname === "/games/emotional-skills" },
  ]

  const activeTab = tabs.find((tab) => tab.active) || tabs[0]

  return (
    <section className="bg-gray-50 py-8 border-b border-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-4 items-end">
          {tabs.map((tab) => (
            <Link key={tab.name} to={tab.href}>
              <button
                className={`px-8 py-3 rounded-full font-semibold transition-colors border ${
                  tab.active
                    ? "bg-[#FDD835] text-black border-[#FDD835] hover:bg-yellow-400"
                    : "bg-[#FDD835]/45 text-black border-[#FDD835]/45 hover:bg-[#FDD835]/60"
                }`}
              >
                {tab.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Navigation */}
        <div className="md:hidden">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-6 py-3 rounded-full font-semibold bg-[#FDD835] text-black border border-[#FDD835] hover:bg-yellow-400 transition-colors flex justify-between items-center"
            >
              {activeTab.name}
              <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10 overflow-hidden">
                {tabs
                  .filter((tab) => !tab.active)
                  .map((tab) => (
                    <Link key={tab.name} to={tab.href} onClick={() => setIsDropdownOpen(false)}>
                      <button className="w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0">
                        {tab.name}
                      </button>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GamesNavigation
