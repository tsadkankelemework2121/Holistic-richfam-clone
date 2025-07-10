import axios from "axios"

const api = axios.create({
  baseURL: "http://192.168.100.36:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 Making API request to: ${config.baseURL}${config.url}`)
    return config
  },
  (error) => {
    console.error("❌ Request error:", error)
    return Promise.reject(error)
  },
)

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log(`✅ API response received:`, {
      url: response.config.url,
      status: response.status,
      data: response.data,
    })
    return response
  },
  (error) => {
    console.error("❌ Response error:", {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    })
    return Promise.reject(error)
  },
)

// Fetch events function
export const fetchEvents = async () => {
  try {
    const response = await api.get("/event")
    return response.data
  } catch (error) {
    console.error("Error fetching events:", error)
    throw error
  }
}

// Fetch events by category
export const fetchEventsByCategory = async (category) => {
  try {
    let endpoint = ""
    switch (category) {
      case "upcoming":
        endpoint = "/event/category/upcoming-event"
        break
      case "workshops":
        endpoint = "/event/category/workshop"
        break
      case "special":
        endpoint = "/event/category/special-program"
        break
      default:
        endpoint = "/event/category/upcoming-event"
    }

    console.log(`🔍 fetchEventsByCategory called with: ${category}`)
    console.log(`📡 Making request to: ${endpoint}`)

    const response = await api.get(endpoint)
    return response.data
  } catch (error) {
    console.error(`❌ fetchEventsByCategory error for ${category}:`, error)
    throw error
  }
}

// Post membership function
export const postMembership = async (membershipData) => {
  try {
    console.log("🚀 Posting membership to: /membership/register")
    console.log("📊 Payload:", membershipData)

    const response = await api.post("/membership/register", membershipData)
    console.log("✅ Membership response:", response.data)
    return response.data
  } catch (error) {
    console.error("❌ Error posting membership:", error)
    if (error.response) {
      console.error("📋 Error status:", error.response.status)
      console.error("📋 Error data:", error.response.data)
    }
    throw error
  }
}

// Post booking function
export const postBooking = async (bookingData) => {
  try {
    console.log("🚀 Posting booking to: /bookings")
    console.log("📊 Payload:", bookingData)

    const response = await api.post("/bookings", bookingData)
    console.log("✅ Booking response:", response.data)
    return response.data
  } catch (error) {
    console.error("❌ Error posting booking:", error)
    if (error.response) {
      console.error("📋 Error status:", error.response.status)
      console.error("📋 Error data:", error.response.data)
    }
    throw error
  }
}

// Post subscribe function
export const postSubscribe = async (subscribeData) => {
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

// Fetch single event by ID
export const fetchEventById = async (id) => {
  try {
    const response = await api.get(`/event/${id}`)
    return response.data
  } catch (error) {
    console.error("Error fetching event by ID:", error)
    throw error
  }
}

// Additional API functions you might need
export const postEventRegistration = async (registrationData) => {
  try {
    const response = await api.post("/event-registration", registrationData)
    return response.data
  } catch (error) {
    console.error("Error posting event registration:", error)
    throw error
  }
}

// Fetch memberships
export const fetchMemberships = async () => {
  try {
    const response = await api.get("/membership")
    return response.data
  } catch (error) {
    console.error("Error fetching memberships:", error)
    throw error
  }
}

export default api
