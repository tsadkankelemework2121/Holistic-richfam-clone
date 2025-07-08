import safeFacilitiesImg from "../../assets/safe-facilities.png";
import gamingAreasImg from "../../assets/gaming-areas.png";
import learningProgramsImg from "../../assets/gaming-areas.png";
import familyServicesImg from "../../assets/gaming-areas.png";

const MembershipsFacilities = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Safe and Family-Friendly Facilities */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image Placeholder */}
            <div className="relative h-80 rounded-3xl overflow-hidden">
              <img 
                src={safeFacilitiesImg.src} 
                alt="Safe and family friendly facilities" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Safe and Family-Friendly Facilities</h2>
              <p className="text-lg text-gray-700 mb-8">
                As a member, enjoy access to secure facilities designed for families:
              </p>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Safety:</span> Trained staff, CCTV monitoring, and
                    child-safe zones ensure your peace of mind.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Convenient Parking:</span> Ample, secure parking spaces
                    close to the facility.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Child-Friendly Amenities:</span> On-site cleaning and
                    changing rooms for your little ones' comfort.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-bold text-gray-900">Emergency Preparedness:</span> First aid services and
                    rapid response protocols in place.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Gaming and Play Areas */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Gaming and Play Areas</h2>
              <p className="text-lg text-gray-700 mb-6">
                Members enjoy unlimited access to a variety of interactive play zones and gaming experiences,
                categorized by age group and developmental focus.
              </p>
              <p className="text-lg text-gray-700">
                From role-playing activities to physical challenges, every visit will be an adventure.
              </p>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative h-80 rounded-3xl overflow-hidden">
              <img 
                src={gamingAreasImg.src} 
                alt="Gaming and play areas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3. Learning and Development Programs */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image Placeholder */}
            <div className="relative h-80 rounded-3xl overflow-hidden">
              <img 
                src={learningProgramsImg.src} 
                alt="Learning and development programs" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Learning and Development Programs</h2>
              <p className="text-lg text-gray-700 mb-8">
                Membership includes access to educational workshops, parenting tips, and developmental activities
                tailored for kids and families.
              </p>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>
                    Participate in expert-led sessions on{" "}
                    <span className="font-bold text-gray-900">cognitive, social, and physical growth.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>Exclusive invites to members-only events and activities.</div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-3 mt-1">•</span>
                  <div>Discounts on additional courses and private sessions.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Comprehensive Family Services */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

            {/* Right Image Placeholder */}
            <div className="relative h-80 rounded-3xl overflow-hidden">
              <img 
                src={familyServicesImg.src} 
                alt="Comprehensive family services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembershipsFacilities