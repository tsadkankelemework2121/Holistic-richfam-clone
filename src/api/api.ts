import axios from "axios"

const api = axios.create({
  baseURL: "http://192.168.100.36:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

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

    console.log(`Making API call to: ${api.defaults.baseURL}${endpoint}`)
    const response = await api.get(endpoint)
    console.log(`API response for ${category}:`, response.data)
    return response.data
  } catch (error) {
    console.error(`Error fetching ${category} events from ${endpoint}:`, error)
    if (error.response) {
      console.error("Response status:", error.response.status)
      console.error("Response data:", error.response.data)
    }
    throw error
  }
}

// Post membership function
export const postMembership = async (membershipData) => {
  try {
    const response = await api.post("/membership/register", membershipData)
    return response.data
  } catch (error) {
    console.error("Error posting membership:", error)
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
