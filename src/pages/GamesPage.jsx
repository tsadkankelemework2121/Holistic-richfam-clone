import React from "react"
import GamesHeroSection from "../components/games/games-hero-section"
import GamesNavigation from "../components/games/games-navigation"
import MembershipCallToAction from "../components/games/membership-cta-section"
import { Outlet } from "react-router-dom"

const GamesPage = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <GamesHeroSection />
      <GamesNavigation />
      <Outlet /> {/* Render nested routes here */}
      <MembershipCallToAction />
    </div>
  )
}

export default GamesPage
