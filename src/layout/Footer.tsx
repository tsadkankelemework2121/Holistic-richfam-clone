import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-8 left-1/3 opacity-80">
        <img src="/placeholder.svg?height=80&width=80" alt="Party Hat" className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 left-1/2 opacity-80">
        <img src="/placeholder.svg?height=100&width=100" alt="Rocket" className="w-20 h-20" />
      </div>
      <div className="absolute top-0 right-0 opacity-90">
        <img src="/placeholder.svg?height=200&width=200" alt="Character" className="w-48 h-48" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-4xl font-bold mb-6">RICHFAM</h3>
            <div className="space-y-4 text-lg">
              <p>
                At RICHFAM, we believe every child has the potential to{" "}
                <span className="underline font-semibold">grow</span>,{" "}
                <span className="underline font-semibold">learn</span>, and{" "}
                <span className="underline font-semibold">thrive</span> when provided with the right environment.
              </p>
              <p>
                Our mission is to <span className="font-semibold">support holistic child development</span> by combining{" "}
                <span className="underline font-semibold">fun</span>,{" "}
                <span className="underline font-semibold">education</span>, and{" "}
                <span className="underline font-semibold">creativity</span> in a nurturing and inclusive space.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-2xl font-bold mb-8">QUICK LINKS</h4>
            <ul className="space-y-4 text-lg">
              <li>
                <Link to="/" className="hover:text-yellow-300 transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-300 transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/games" className="hover:text-yellow-300 transition-colors">
                  GAMES
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-yellow-300 transition-colors">
                  EVENTS
                </Link>
              </li>
              <li>
                <Link to="/memberships" className="hover:text-yellow-300 transition-colors">
                  MEMBERSHIP
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-yellow-300 transition-colors">
                  BLOG
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-300 transition-colors">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-yellow-300 transition-colors">
                  SUPPORT
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-2xl font-bold mb-8">CONTACT US</h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-yellow-400 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-900" />
                </div>
                <span className="text-lg">NSL S/C, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-400 p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <span className="text-lg">+251-904-****** / +251-911-*****</span>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-400 p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-900" />
                </div>
                <span className="text-lg">Info@Richfamcenter.Com</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <div className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-300 transition-colors cursor-pointer">
                  <img src="/placeholder.svg?height=24&width=24" alt="Telegram" className="w-6 h-6" />
                </div>
                <div className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-300 transition-colors cursor-pointer">
                  <img src="/placeholder.svg?height=24&width=24" alt="Twitter" className="w-6 h-6" />
                </div>
                <div className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-300 transition-colors cursor-pointer">
                  <img src="/placeholder.svg?height=24&width=24" alt="LinkedIn" className="w-6 h-6" />
                </div>
                <div className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-300 transition-colors cursor-pointer">
                  <img src="/placeholder.svg?height=24&width=24" alt="Facebook" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-lg">© 2024 RICHFAM. All Rights Reserved.</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">Powered by Helder Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
