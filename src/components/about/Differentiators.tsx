//import nImg from '../../assets/12.png';

const AboutDifferentiators = () => {
  const differentiators = [
    {
      number: "1",
      title: "Holistic Approach:",
      description: "Unlike traditional amusement parks or educational centers, RICHFAM emphasizes a comprehensive methodology that nurtures all aspects of a child's development physical, emotional, social, cognitive, and spiritual.",
    },
    {
      number: "2",
      title: "Cultural Integration:",
      description: "RICHFAM incorporates local culture and traditions into its programs, helping children connect with their heritage while fostering respect for diversity and we will leverage virtual reality (VR) technology to immerse children in their history and traditions. This innovative approach will allow children to experience cultural narratives and historical events in an engaging, interactive way.",
      additionalText: "Through VR, they will explore significant moments in Ethiopian history, understand cultural practices, and connect with their heritage like never before. This technology not only enhances learning but also fosters a deeper appreciation for their identity and traditions, making education both memorable and impactful.",
    },
    {
      number: "3",
      title: "Community-Centric Model:",
      description: "The center actively engages families and local organizations in its initiatives, promoting collaboration and shared learning experiences that strengthen community bonds.",
    },
    {
      number: "4",
      title: "Innovative Learning Environments:",
      description: "RICHFAM features uniquely designed interactive zones that combine play with educational content, ensuring children learn through engaging, hands-on experiences.",
    },
    {
      number: "5",
      title: "Focus on Wellness:",
      description: "The center prioritizes mental health and well-being through programs that address emotional resilience, nutrition, and physical activity, creating a well-rounded approach to child development.",
    },
    {
      number: "6",
      title: "Inclusivity:",
      description: "RICHFAM differentiates itself by prioritizing inclusivity for children with disabilities and special needs. Our center provides a supportive and adaptive environment where there is ample space for all children to thrive. With engaging, accessible programs",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-start"> {/* 60/40 split */}
          {/* Left Content - Scrollable (60%) */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-10">RICHFAM's Differentiators</h2>

            <div className="max-h-[600px] overflow-y-auto pr-4 space-y-8 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
              {differentiators.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-start mb-4">
                    <span className="text-2xl font-bold text-blue-900 mr-4 flex-shrink-0">{item.number}.</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">{item.description}</p>
                      {item.additionalText && (
                        <p className="text-lg text-gray-700 leading-relaxed">{item.additionalText}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

   {/* Right Image - Fixed (40%) */}
<div className="relative lg:sticky lg:top-8 h-full pl-4">
  <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-1 relative overflow-hidden h-[90%] w-[90%] mx-auto"> {/* Reduced size */}
    <img 
      src="/12.webp"
      alt="RICHFAM differentiators" 
      className="w-full h-full rounded-2xl object-cover"
      style={{ minHeight: '400px' }} 
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutDifferentiators;