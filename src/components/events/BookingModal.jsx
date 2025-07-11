"use client"
import { useState } from "react"
import { X, CheckCircle, AlertCircle } from "lucide-react"
import api from "../../api/api"
import PropTypes from "prop-types"

const postBooking = async (bookingData) => {
  try {
    console.log("🚀 Posting booking to: /bookings");
    console.log("📊 Payload:", bookingData);
    const response = await api.post("/bookings", bookingData);
    console.log("✅ Booking response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error posting booking:", error);
    if (error.response) {
      console.error("📋 Error status:", error.response.status);
      console.error("📋 Error data:", error.response.data);
    }
    throw error;
  }
};

const BookingModal = ({ isOpen, onClose, event }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    profession: "",
    age: "",
    comment: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error status when user starts typing
    if (submitStatus.type === "error") {
      setSubmitStatus({ type: null, message: "" })
    }
  }

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      profession: "",
      age: "",
      comment: "",
    })
    setSubmitStatus({ type: null, message: "" })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const payload = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        profession: formData.profession,
        age: Number.parseInt(formData.age) || 0,
        comment: formData.comment,
        event_id: event?.id || null,
        event_title: event?.title || "",
      }

      console.log("🚀 Submitting booking:", payload)

      const response = await postBooking(payload)
      console.log("✅ Booking response:", response.data)

      setSubmitStatus({
        type: "success",
        message: "Booking submitted successfully! We'll contact you soon to confirm your reservation.",
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        resetForm()
      }, 3000)
    } catch (error) {
      console.error("❌ Booking error:", error)

      let errorMessage = "Failed to submit booking. Please try again."

      if (error.response) {
        if (error.response.status === 404) {
          errorMessage = "Booking service not available. Please contact support."
        } else if (error.response.status === 422) {
          const validationErrors = error.response.data?.errors
          if (validationErrors) {
            const firstError = Object.values(validationErrors)[0]
            errorMessage = Array.isArray(firstError) ? firstError[0] : firstError
          } else {
            errorMessage = error.response.data?.message || "Validation failed"
          }
        } else if (error.response.status === 500) {
          errorMessage = "Server error. Please try again later."
        } else {
          errorMessage = error.response.data?.message || `Error: ${error.response.status}`
        }
      } else if (error.request) {
        errorMessage = "No response from server. Please check your connection."
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    if (!isLoading) {
      resetForm()
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-center items-center p-6 pb-4 relative border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Book now</h2>
          <button
            onClick={handleClose}
            className="absolute right-6 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50 p-1"
            disabled={isLoading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {/* Event Info */}
          {event && (
            <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-1">Booking for:</h3>
              <p className="text-blue-800">{event.title}</p>
            </div>
          )}

          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border-2 border-green-200"
                  : "bg-red-50 text-red-800 border-2 border-red-200"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              )}
              <span className="font-semibold text-sm">{submitStatus.message}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-gray-900 transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-gray-900 transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-gray-900 transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-gray-900 transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="profession" className="block text-sm font-semibold text-gray-700 mb-2">
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-gray-900 transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                min="1"
                max="120"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-gray-900 transition-all duration-200"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-semibold text-gray-700 mb-2">
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-gray-900 resize-none transition-all duration-200"
                placeholder="Any special requests or additional information..."
                disabled={isLoading}
              />
            </div>
          </form>
        </div>

        {/* Fixed Footer with Button */}
        <div className="p-6 pt-4 border-t border-gray-100">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full font-bold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
              submitStatus.type === "success"
                ? "bg-green-500 hover:bg-green-600 text-white"
                : submitStatus.type === "error"
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
            } ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"}`}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Submitting...
              </>
            ) : submitStatus.type === "success" ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Success!
              </>
            ) : submitStatus.type === "error" ? (
              <>
                <AlertCircle className="w-5 h-5" />
                Try Again
              </>
            ) : (
              "Book now"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

BookingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  event: PropTypes.object,
}

export default BookingModal
