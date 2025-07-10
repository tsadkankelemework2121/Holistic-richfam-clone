import axios from "axios"

const api = axios.create({
  baseURL: "http://192.168.100.36:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

// Event interface
export interface Event {
  id: number
  title: string
  image: string
  intro: string
  location: string
  created_at: string
  updated_at: string
}

// Fetch events function
export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await api.get("/event")
    return response.data
  } catch (error) {
    console.error("Error fetching events:", error)
    throw error
  }
}

// Post membership function
export const postMembership = async (membershipData: any) => {
  try {
    const response = await api.post("/membership/register", membershipData)
    return response.data
  } catch (error) {
    console.error("Error posting membership:", error)
    throw error
  }
}

// Fetch single event by ID - Fixed with proper TypeScript typing
export const fetchEventById = async (id: string): Promise<Event> => {
  try {
    const response = await api.get(`/event/${id}`)
    return response.data
  } catch (error) {
    console.error("Error fetching event by ID:", error)
    throw error
  }
}

// Additional API functions you might need
export const postEventRegistration = async (registrationData: any) => {
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
    const response = await api.get("/membership/register")
    return response.data
  } catch (error) {
    console.error("Error fetching memberships:", error)
    throw error
  }
}

export default api
