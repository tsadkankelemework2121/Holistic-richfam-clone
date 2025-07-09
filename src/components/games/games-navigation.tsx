import React from "react"
import { Link, useLocation } from "react-router-dom"

const GamesNavigation = () => {
  const location = useLocation()
  const pathname = location.pathname

 const tabs = [
  { name: "Cognitive Skills", href: "/games", active: pathname === "/games" },
  { name: "Social Skills", href: "/games/social-skills", active: pathname === "/games/social-skills" },
  { name: "Emotional Skills", href: "/games/emotional-skills", active: pathname === "/games/emotional-skills" },
]


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

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-3">
            {tabs.map((tab) => (
              <Link key={tab.name} to={tab.href}>
                <button
                  className={`w-full px-6 py-3 rounded-full font-semibold transition-colors border ${
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
        </div>

      </div>
    </section>
  )
}

export default GamesNavigation
