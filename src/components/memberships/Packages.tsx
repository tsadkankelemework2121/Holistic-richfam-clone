const MembershipsPackages = () => {
  const packages = [
    {
      title: "One-Day Free Trial",
      description: "Experience our offerings with a complimentary one-day trial.",
      buttonText: "Register now",
    },
    {
      title: "One-Month Plan",
      description: "Perfect for those looking to try out our offerings or enjoy short-term benefits.",
      buttonText: "Register now",
    },
    {
      title: "Six-Month Plan",
      description: "Ideal for families who want to commit to consistent fun and learning opportunities.",
      buttonText: "Register now",
    },
    {
      title: "Annual Plan",
      description: "The ultimate package for year-round access and maximum savings.",
      buttonText: "Register now",
    },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900 mb-6">Membership Packages</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Become a valued member of our community and choose a plan that best suits your family's needs. Each package
            is designed to offer <span className="font-bold">flexibility</span>,{" "}
            <span className="font-bold">exclusive perks</span>, and access to our enriching programs and{" "}
            <span className="font-bold">safe, fun-filled spaces</span>.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">{pkg.title}</h3>
              <p className="text-gray-700 text-center mb-8 leading-relaxed">{pkg.description}</p>
              <div className="text-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full transition-colors shadow-md hover:shadow-lg">
                  {pkg.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MembershipsPackages
