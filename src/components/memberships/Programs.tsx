const MembershipsPrograms = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Learning and Development Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-800 to-yellow-500 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-8 left-8 text-white text-4xl font-bold">LEARNING</div>
              <div className="absolute bottom-8 right-8 bg-yellow-400 rounded-2xl p-4">
                <div className="text-blue-900 text-lg font-bold">EDUCATIONAL</div>
                <div className="text-blue-900 text-lg font-bold">WORKSHOPS</div>
                <div className="text-xs text-blue-700 mt-2">@RICHFAM</div>
              </div>

              {/* Character illustrations */}
              <div className="absolute top-16 right-12">
                <div className="w-12 h-16 bg-pink-300 rounded-t-full rounded-b-lg relative">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-4 left-3 w-6 h-1 bg-black rounded-full"></div>
                  <div className="absolute -top-2 left-1 w-10 h-6 bg-black rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-16 left-12">
                <div className="w-12 h-16 bg-blue-300 rounded-t-full rounded-b-lg relative">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-4 left-3 w-6 h-1 bg-black rounded-full"></div>
                  <div className="absolute -top-2 left-1 w-10 h-6 bg-purple-600 rounded-full"></div>
                </div>
              </div>

              {/* Decorative stars */}
              <div className="absolute top-4 right-4 text-white text-xl">⭐</div>
              <div className="absolute bottom-4 left-4 text-white text-lg">✨</div>
              <div className="absolute top-1/2 left-1/2 text-white text-sm">⭐</div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Learning and Development Programs</h2>
            <p className="text-lg text-gray-700 mb-6">
              Membership includes access to educational workshops, parenting tips, and developmental activities tailored
              for kids and families.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-gray-900 mr-2">•</span>
                <div>
                  Participate in expert-led sessions on{" "}
                  <span className="font-bold">cognitive, social, and physical growth.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-gray-900 mr-2">•</span>
                <div>Exclusive invites to members-only events and activities.</div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-gray-900 mr-2">•</span>
                <div>Discounts on additional courses and private sessions.</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Comprehensive Family Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Comprehensive Family Services</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Dedicated Childcare Spaces:</h3>
                <p>
                  Safe, clean areas equipped with trained staff to ensure your child's well-being while you relax or
                  engage in activities.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Parenting Workshops:</h3>
                <p>Gain practical skills and insights through sessions with child development experts.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Family Counseling Access:</h3>
                <p>Supportive guidance for navigating parenting challenges or enhancing family dynamics.</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-8 left-8 text-yellow-400 text-2xl font-bold transform -rotate-6">
                COMPREHENSIVE
              </div>
              <div className="absolute top-16 left-12 text-yellow-400 text-2xl font-bold transform -rotate-6">
                FAMILY
              </div>
              <div className="absolute top-24 left-8 text-yellow-400 text-2xl font-bold transform -rotate-6">
                SERVICES
              </div>

              {/* Family illustration */}
              <div className="absolute bottom-8 right-8 flex items-end space-x-2">
                {/* Mother */}
                <div className="w-12 h-20 bg-yellow-400 rounded-t-full rounded-b-lg relative">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-4 left-3 w-6 h-1 bg-black rounded-full"></div>
                  <div className="absolute -top-2 left-1 w-10 h-6 bg-yellow-600 rounded-full"></div>
                </div>

                {/* Child */}
                <div className="w-8 h-12 bg-pink-400 rounded-t-full rounded-b-lg relative">
                  <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
                  <div className="absolute top-2 left-2 w-4 h-1 bg-black rounded-full"></div>
                </div>

                {/* Father */}
                <div className="w-12 h-20 bg-orange-500 rounded-t-full rounded-b-lg relative">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-4 left-3 w-6 h-1 bg-black rounded-full"></div>
                  <div className="absolute -top-2 left-1 w-10 h-6 bg-gray-800 rounded-full"></div>
                </div>
              </div>

              {/* Hearts */}
              <div className="absolute top-12 right-12 text-pink-400 text-lg">💖</div>
              <div className="absolute top-20 right-20 text-pink-400 text-sm">💖</div>

              {/* Decorative swirl */}
              <div className="absolute bottom-16 left-16 w-8 h-8 border-2 border-yellow-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembershipsPrograms
