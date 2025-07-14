"use client"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import api from "../../api/api"
import BookingModal from "./BookingModal"
import Footer from "../../layout/Footer"

const EventDetail = ({ id }) => {
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState(null)
  const [modalEvent, setModalEvent] = useState(null)

  // Subscribe state
  const [email, setEmail] = useState("")
  const [isSubscribeLoading, setIsSubscribeLoading] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState({
    type: null,
    message: "",
  })

  // Fetch single event function
  const fetchEvent = async (eventId) => {
    try {
      console.log(`🚀 Fetching event with ID: ${eventId}`)
      const response = await api.get(`/event/${eventId}`)
      console.log("✅ Event data received:", response.data)
      return response.data
    } catch (error) {
      console.error("❌ Error fetching event:", error)
      throw error
    }
  }

  // Subscribe function
  const postSubscribe = async (subscribeData) => {
    try {
      console.log("🚀 Posting subscription to: /subscribe")
      console.log("📊 Payload:", subscribeData)
      const response = await api.post("/subscribe", subscribeData)
      console.log("✅ Subscribe response:", response.data)
      return response.data
    } catch (error) {
      console.error("❌ Error posting subscription:", error)
      if (error.response) {
        console.error("📋 Error status:", error.response.status)
        console.error("📋 Error data:", error.response.data)
      }
      throw error
    }
  }

  useEffect(() => {
    const loadEvent = async () => {
      if (!id) return

      try {
        setIsLoading(true)
        setIsError(false)
        setError(null)

        const eventData = await fetchEvent(id)
        console.log("🔍 Event data for display:", eventData)
        console.log("🔍 Event intro specifically:", eventData?.intro)
        console.log("🔍 Event object keys:", Object.keys(eventData || {}))
        setEvent(eventData)
      } catch (err) {
        setIsError(true)
        setError(err)
        console.error("Error loading event:", err)
      } finally {
        setIsLoading(false)
      }
    }

    loadEvent()
  }, [id])

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubscribeLoading(true)
    setSubscribeStatus({ type: null, message: "" })

    try {
      const payload = { email: email.trim() }
      await postSubscribe(payload)

      setSubscribeStatus({
        type: "success",
        message: "Successfully subscribed! Thank you for joining our community.",
      })

      setEmail("")
    } catch (error) {
      console.error("❌ Subscribe error:", error)

      let errorMessage = "Failed to subscribe. Please try again."

      if (error.response) {
        if (error.response.status === 422) {
          const validationErrors = error.response.data?.errors
          if (validationErrors?.email) {
            errorMessage = validationErrors.email[0]
          } else {
            errorMessage = error.response.data?.message || "Invalid email address"
          }
        } else if (error.response.status === 409) {
          errorMessage = "This email is already subscribed!"
        } else {
          errorMessage = error.response.data?.message || "Subscription failed"
        }
      }

      setSubscribeStatus({
        type: "error",
        message: errorMessage,
      })
    } finally {
      setIsSubscribeLoading(false)
    }
  }

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>error</p>

  return (
    <div className="bg-white min-h-screen">
      {/* Mobile Layout */}
      <div className="block md:hidden pt-16 px-4 pb-8">
        <div className="mb-8">
          {/* Mobile Image with Back Arrow - Like Friend's Design */}
          <div className="relative">
            <img
              src={event?.image ? `http://192.168.100.36:8000/storage/${event.image}` : "/images/event-placeholder.png"}
              alt="Event Banner"
              className="w-full h-48 rounded-2xl object-cover"
              onError={(e) => {
                e.currentTarget.src = "/images/event-placeholder.png"
              }}
            />
            {/* Simple Back Arrow - Top Left, No Circle */}
            <button
              onClick={() => navigate(-1)}
              className="absolute top-4 left-2 z-10 text-black hover:text-gray-700 transition-colors"
            >
              <ArrowLeft size={30} />
            </button>
          </div>

          <h2 className="text-xl font-bold text-blue-900 mt-4">{event.title}</h2>
          <p className="text-blue-900 mt-2 flex items-center text-sm">
            📅 {event.date || new Date(event.created_at).toLocaleDateString()}
          </p>
          <p className="text-blue-900 flex items-center text-sm">📍 {event.location}</p>
          <div className="border-t border-gray-200 my-4"></div>

          {/* Mobile Description Content - Proper Intro Fetching */}
          <div className="text-black text-base mb-6">
            {event?.intro && (
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">{event.intro}</p>
              </div>
            )}
            {event?.description && (
              <div className="mb-4">
                <div dangerouslySetInnerHTML={{ __html: event.description }} className="leading-relaxed" />
              </div>
            )}
            {event?.details && (
              <div className="mb-4">
                <p className="leading-relaxed">{event.details}</p>
              </div>
            )}
          </div>

          <button
            onClick={() => setModalEvent(event)}
            className="w-full bg-yellow-400 text-black px-4 py-3 rounded-2xl hover:bg-yellow-500 text-lg mt-6"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Subscribe Section */}
        <div className="bg-gray-100 shadow-md rounded-2xl p-5">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Subscribe</h2>
          <p className="text-black text-base mb-4">
            Stay informed with tips on family child development, parenting advice, and the vital role of play in a
            child's growth. You'll also receive updates on our upcoming events and workshops.
          </p>

          {/* Status Messages */}
          {subscribeStatus.type && (
            <div
              className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
                subscribeStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {subscribeStatus.type === "success" ? (
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              )}
              <span className="text-sm">{subscribeStatus.message}</span>
            </div>
          )}

          <form onSubmit={handleSubscribe}>
            <p className="text-lg mb-2">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-2xl mb-4 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              required
              disabled={isSubscribeLoading}
            />
            <button
              type="submit"
              disabled={isSubscribeLoading || !email.trim()}
              className={`w-full py-3 text-black text-lg rounded-2xl ${
                subscribeStatus.type === "success"
                  ? "bg-green-400 hover:bg-green-500"
                  : subscribeStatus.type === "error"
                    ? "bg-red-400 hover:bg-red-500"
                    : "bg-yellow-400 hover:bg-yellow-500"
              } ${isSubscribeLoading || !email.trim() ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubscribeLoading ? "Subscribing..." : subscribeStatus.type === "success" ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>

        {modalEvent && <BookingModal onClose={() => setModalEvent(null)} event={modalEvent} isOpen={true} />}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-8 h-full px-10 py-5 pt-20">
        <div
          className="w-full md:w-2/3 h-[calc(100vh-7rem)] overflow-y-auto rounded-lg"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Desktop Image with Back Arrow - Like Friend's Design */}
          <div className="relative">
            <img
              src={event?.image ? `http://192.168.100.36:8000/storage/${event.image}` : "/images/event-placeholder.png"}
              alt="Event Banner"
              className="w-full h-80 rounded-3xl object-cover"
              onError={(e) => {
                e.currentTarget.src = "/images/event-placeholder.png"
              }}
            />
            {/* Simple Back Arrow - Top Left, No Circle */}
            <button
              onClick={() => navigate(-1)}
              className="absolute top-6 left-4 z-10 text-black hover:text-gray-700 transition-colors"
            >
              <ArrowLeft size={35} />
            </button>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-4">{event.title}</h2>
          <p className="text-blue-900 mt-2 flex items-center">
            📅 {event.date || new Date(event.created_at).toLocaleDateString()}
          </p>
          <p className="text-blue-900 flex items-center">📍 {event.location}</p>
          <div className="border-t border-black p-4 mt-5"></div>

          {/* Desktop Description Content - Proper Intro Fetching */}
          <div className="mt-3 text-black text-lg mb-6">
            {event?.intro && (
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{event.intro}</p>
              </div>
            )}
            {event?.description && (
              <div className="mb-6">
                <div dangerouslySetInnerHTML={{ __html: event.description }} className="leading-relaxed" />
              </div>
            )}
            {event?.details && (
              <div className="mb-6">
                <p className="leading-relaxed">{event.details}</p>
              </div>
            )}
            {event?.requirements && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-xl">Requirements:</h4>
                <p className="leading-relaxed">{event.requirements}</p>
              </div>
            )}
            {event?.agenda && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-xl">Agenda:</h4>
                <p className="leading-relaxed">{event.agenda}</p>
              </div>
            )}
            {event?.notes && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-xl">Additional Notes:</h4>
                <p className="leading-relaxed">{event.notes}</p>
              </div>
            )}
          </div>

          <button
            onClick={() => setModalEvent(event)}
            className="bg-yellow-400 text-black px-14 py-2 rounded-3xl hover:bg-yellow-500 text-lg mt-5"
          >
            Book Now
          </button>
        </div>

        {/* Desktop Subscribe Section */}
        <div className="w-full md:w-1/3 h-[calc(100vh-7rem)] sticky top-16">
          <div className="bg-gray-100 shadow-md rounded-3xl p-6 h-full">
            <h2 className="text-4xl font-bold text-gray-900 text-center mt-5">Subscribe</h2>
            <p className="text-black mt-9 text-lg">
              Stay informed with tips on family child development, parenting advice, and the vital role of play in a
              child's growth. You'll also receive updates on our upcoming events and workshops.
            </p>

            {/* Status Messages */}
            {subscribeStatus.type && (
              <div
                className={`mt-4 mb-4 p-3 rounded-lg flex items-center gap-2 ${
                  subscribeStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {subscribeStatus.type === "success" ? (
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                )}
                <span className="text-sm">{subscribeStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubscribe}>
              <p className="mt-8 text-xl p-2">Email</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-3xl mt-0 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
                disabled={isSubscribeLoading}
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubscribeLoading || !email.trim()}
                  className={`px-12 py-2 text-black text-lg rounded-3xl mt-5 ${
                    subscribeStatus.type === "success"
                      ? "bg-green-400 hover:bg-green-500"
                      : subscribeStatus.type === "error"
                        ? "bg-red-400 hover:bg-red-500"
                        : "bg-yellow-400 hover:bg-yellow-500"
                  } ${isSubscribeLoading || !email.trim() ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubscribeLoading
                    ? "Subscribing..."
                    : subscribeStatus.type === "success"
                      ? "Subscribed!"
                      : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {modalEvent && <BookingModal onClose={() => setModalEvent(null)} event={modalEvent} isOpen={true} />}

    </div>
  )
}

export default EventDetail
