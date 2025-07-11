"use client"

import { useState } from "react"
import api from "../../API/api" // Adjust path if necessary
import { MapPin, Phone, Mail, Send, Twitter, Linkedin, Facebook } from "lucide-react"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(null)
  const [submitError, setSubmitError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(null)
    setSubmitError(null)

    try {
      // Adjust the endpoint if your backend uses a different one for contact forms
      const response = await api.post("/contact", formData)
      console.log("Form submitted successfully:", response.data)
      setSubmitSuccess("Your message has been sent successfully!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      }) // Clear form
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("Failed to send message. Please try again later.")
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data:", error.response.data)
        console.error("Error status:", error.response.status)
        setSubmitError(error.response.data.message || "Failed to send message. Please try again later.")
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request)
        setSubmitError("No response from server. Please check your internet connection.")
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message)
        setSubmitError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#2A438F] text-white">
      {/* Top section with background image and diagonal cut */}
      <div
        className="relative h-[300px] md:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/richfam-bg.png')`,
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)", // Creates the diagonal cut
        }}
      >
        {/* Overlay for text if needed, but screenshot implies text is part of image */}
      </div>

      {/* Main content section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center md:text-left mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">CONTACT US</h1>
          <p className="text-lg md:text-xl text-white/80">We are looking forward to hearing from you soon</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Left Column: Contact Info & Social Media */}
          <div className="flex-1 w-full md:w-auto space-y-6 md:space-y-8">
            <div className="flex items-center gap-4">
              <MapPin className="text-[#FACC15] w-6 h-6" />
              <p className="text-lg">NSL S/C, Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[#FACC15] w-6 h-6" />
              <p className="text-lg">+251-904-****** / +251-911-******</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#FACC15] w-6 h-6" />
              <p className="text-lg">Info@Richfamcenter.Com</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-8">
              <a href="#" aria-label="Telegram" className="text-[#FACC15] hover:scale-110 transition-transform">
                <Send className="w-8 h-8" />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#FACC15] hover:scale-110 transition-transform">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#FACC15] hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#FACC15] hover:scale-110 transition-transform">
                <Facebook className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1 w-full md:w-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Eg. Lewan Kibrom"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#5C73B0] text-white placeholder:text-white/70 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Eg. lewankibrom11@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#5C73B0] text-white placeholder:text-white/70 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Eg. +2519 345 864"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#5C73B0] text-white placeholder:text-white/70 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Eg. Addis Abeba, Ethiopia"
                  value={formData.location}
                  onChange={handleChange}
                  className="bg-[#5C73B0] text-white placeholder:text-white/70 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
                />
              </div>
              <textarea
                name="message"
                placeholder="Eg. I want to ........."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-[#5C73B0] text-white placeholder:text-white/70 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FACC15] resize-y"
                required
              ></textarea>

              {submitSuccess && <p className="text-green-400 text-center mt-4">{submitSuccess}</p>}
              {submitError && <p className="text-red-400 text-center mt-4">{submitError}</p>}

              <button
                type="submit"
                className="w-full md:w-auto bg-[#FACC15] text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Done"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
