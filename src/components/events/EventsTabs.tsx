"use client"
import { useState } from "react"
import EventCard from "./EventCard"
import RegistrationModal from "./RegistrationModal"
import e1 from '../../assets/e1.png'
import e2 from '../../assets/e2.png'

interface EventsTabsProps {
  activeTab: string
}

const EventsTabs = ({ activeTab }: EventsTabsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState("")

  const handleBookNow = (eventTitle: string) => {
    setSelectedEvent(eventTitle)
    setIsModalOpen(true)
  }

  // Event data arrays
  const upcomingEvents = [
    {
      id: 1,
      title: "Greetings from RICHFAM - Holistic Child Development Center!",
      date: "Saturday, December 16, 2024 (starting 10:00 AM)",
      location: "RICHFAM Center, Addis Ababa",
      description: "We are excited to invite you and your family to PLAYFUL MINDS, a vibrant celebration of fun and learning through play!",
      highlights: [
        "Interactive Games & Role Plays: Explore over 150 activities designed to boost creativity and problem-solving skills.",
        "Kids' Learning Zone: Fun educational stations focusing on language, math, and motor skills development.",
      ],
      image: e1, // Removed .src
      bgColor: "from-teal-400 to-cyan-500",
      titleColor: "text-blue-900",
    },
    {
      id: 2,
      title: "You're Invited to RICHFAM's Family Adventure Day! 🎉",
      date: "Saturday, December 16, 2024 (starting 10:00 AM)",
      location: "RICHFAM Center, Addis Ababa, Addis Ababa",
      description:
        "Discover a day of excitement, bonding, and growth with your family at RICHFAM. Our workshop is designed to bring families closer through shared experiences that are as fun as they are meaningful!",
      highlights: [
        "What's Waiting for You:",
        "Interactive Family Challenges: Work together to solve puzzles, build structures, and compete in games that boost teamwork and communication.",
        "Creative Play Stations: Explore hands-on activities like arts and crafts, DIY workshops, and storytelling sessions that spark imagination for all ages.",
        "Parent-Child...",
      ],
      image: e2, // Removed .src
      bgColor: "from-blue-600 to-purple-600",
      titleColor: "text-white",
    },
    // ... other upcoming events
  ]

  const workshopEvents = [
    {
      id: 3,
      title: "Creative Arts Workshop for Kids",
      date: "Sunday, December 17, 2024 (starting 2:00 PM)",
      location: "RICHFAM Art Studio, Addis Ababa",
      description: "Join us for an exciting creative arts workshop where children can explore their artistic talents.",
      highlights: [
        "Painting & Drawing Sessions: Learn basic techniques and create beautiful artwork.",
        "Craft Making: Build fun projects using recycled materials.",
      ],
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "from-purple-400 to-pink-500",
      titleColor: "text-white",
    },
    // ... other workshop events
  ]

  const specialPrograms = [
    {
      id: 5,
      title: "Holiday Celebration Extravaganza",
      date: "Friday, December 22, 2024 (starting 4:00 PM)",
      location: "RICHFAM Main Hall, Addis Ababa",
      description: "Join us for a magical holiday celebration filled with music, dance, and games.",
      highlights: [
        "Live Performances: Music and dance shows by local artists.",
        "Holiday Games: Traditional and modern games for the whole family.",
      ],
      image: "/placeholder.svg?height=200&width=300",
      bgColor: "from-red-400 to-orange-500",
      titleColor: "text-white",
    },
    // ... other special programs
  ]

  const getCurrentEvents = () => {
    switch (activeTab) {
      case "workshops":
        return workshopEvents
      case "special":
        return specialPrograms
      default:
        return upcomingEvents
    }
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {getCurrentEvents().map((event) => (
            <EventCard 
              key={event.id}
              event={event}
              onBookNow={() => handleBookNow(event.title)}
            />
          ))}
        </div>
      </div>
      <RegistrationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventTitle={selectedEvent}
      />
    </section>
  )
}

export default EventsTabs