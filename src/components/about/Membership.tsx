"use client"
import { useState } from "react"
import MembershipModal from "./membership-modal"

const AboutMembership = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-3xl font-normal text-blue-900 mb-8 leading-tight max-w-5xl mx-auto">
            Become a member and give your family access to exciting games, safe spaces, and enriching workshops designed
            for all ages.
          </h2>
          <button
            onClick={openModal}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xl px-12 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            Be a member
          </button>
        </div>
      </section>

      <MembershipModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default AboutMembership
