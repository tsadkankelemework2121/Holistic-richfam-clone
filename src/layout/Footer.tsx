import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Left Section - Company Info */}
          <div className="lg:col-span-1 md:pr-4 lg:pr-12 relative">
            {/* Background decorative element */}
            <div className="absolute -top-[30%] -left-[25%] z-0">
              <img
                src={"/back.webp"}
                alt="Background Decoration"
                className="w-[500px] md:w-[900px] h-[375px] md:h-[675px] object-contain opacity-80"
              />
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 md:mb-10 tracking-tight leading-none relative z-10">
              RICHFAM
            </h3>
            <div className="space-y-4 md:space-y-6 lg:space-y-8 text-base md:text-lg leading-relaxed font-normal z-10">
              <p className="text-white">
                At RICHFAM, we believe every child has the potential to{" "}
                <span className="underline decoration-white decoration-2 underline-offset-4 font-medium">
                  grow
                </span>
                ,{" "}
                <span className="underline decoration-white decoration-2 underline-offset-4 font-medium">
                  learn
                </span>
                , and{" "}
                <span className="underline decoration-white decoration-2 underline-offset-4 font-medium">
                  thrive
                </span>{" "}
                when provided with the right environment.
              </p>
              <p className="text-white">
                Our mission is to{" "}
                <span className="font-bold text-white">
                  support holistic child development
                </span>{" "}
                by combining{" "}
                <span className="underline decoration-white decoration-2 underline-offset-4 font-medium">
                  fun
                </span>
                ,{" "}
                <span className="underline decoration-white decoration-2 underline-offset-4 font-medium">
                  education
                </span>
                , and{" "}
                <span className="underline decoration-white decoration-2 underline-offset-4 font-medium">
                  creativity
                </span>{" "}
                in a nurturing and inclusive space.
              </p>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="lg:col-span-1 md:pl-8 lg:pl-12 xl:pl-36">
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 tracking-wider text-white">
              QUICK LINKS
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 md:gap-3 text-sm md:text-base font-normal">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  GAMES
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  EVENTS
                </Link>
              </li>
              <li>
                <Link
                  to="/memberships"
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  MEMBERSHIP
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  SUPPORT
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div className="lg:col-span-1 md:pl-8">
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 uppercase tracking-wider text-white">
              CONTACT US
            </h4>
            <div className="space-y-4 md:space-y-6 -ml-2 md:-ml-4">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-yellow-400 -ml-6 md:-ml-10 p-2 md:p-3 rounded-full mr-2 md:mr-4 flex-shrink-0 shadow-lg">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-900" />
                </div>
                <span className="text-sm md:text-base lg:text-lg leading-snug text-white font-normal">
                  NSL S/C, Addis Ababa, Ethiopia
                </span>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center">
                <div className="bg-yellow-400 p-2 md:p-3 -ml-6 md:-ml-10 rounded-full mr-2 md:mr-4 flex-shrink-0 shadow-lg">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-900" />
                </div>
                <span className="text-sm md:text-base lg:text-lg text-white font-normal">
                  +251-904-****** / +251-911-*****
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="bg-yellow-400 p-2 md:p-3 -ml-6 md:-ml-10 rounded-full mr-2 md:mr-4 flex-shrink-0 shadow-lg">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-900" />
                </div>
                <span className="text-sm md:text-base lg:text-lg text-white font-normal">
                  Info@Richfamcenter.Com
                </span>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3 md:space-x-4 mt-6 md:mt-8">
                <div className="bg-yellow-400 p-2 md:p-3 rounded-full hover:bg-yellow-300 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-blue-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>

                {/* Twitter Icon */}
                <div className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-300 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105">
                  <svg
                    className="w-5 h-5 text-blue-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>

                {/* LinkedIn Icon */}
                <div className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-300 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105">
                  <svg
                    className="w-5 h-5 text-blue-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>

                {/* Facebook Icon */}
                <div className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-300 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105">
                  <svg
                    className="w-5 h-5 text-blue-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden sm:block absolute -top-4 left-1/2 transform -translate-x-[125%]">
        <img
          src={"/conf.webp"}
          alt="Party Hat"
          className="w-24 md:w-32 lg:w-40 h-auto object-contain drop-shadow-lg"
        />
      </div>
      <div className="hidden sm:block absolute bottom-16 left-1/2 transform -translate-x-[125%]">
        <img
          src={"/rocket.webp"}
          alt="Rocket"
          className="w-24 md:w-32 lg:w-40 h-auto object-contain drop-shadow-lg opacity-100"
        />
      </div>
      <div className="hidden sm:block absolute bottom-20 right-4">
        <img
          src={"/run.webp"}
          alt="Mouse Character"
          className="w-40 md:w-50 h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-gray-100 py-2 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-700 mb-2 md:mb-0">
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-blue-600 rounded-full flex items-center justify-center mr-2 md:mr-4 bg-white shadow-sm">
              <span className="text-blue-600 font-bold text-sm md:text-lg">
                ©
              </span>
            </div>
            <span className="text-sm md:text-base lg:text-lg font-normal text-gray-800">
              2024 RICHFAM. All Rights Reserved.
            </span>
          </div>
          <div className="text-blue-600 text-sm md:text-base lg:text-lg font-medium hover:text-blue-700 transition-colors duration-200">
            Powered by Helder Technologies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
