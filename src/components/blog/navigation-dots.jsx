"use client"

function NavigationDots({ totalPages = 3, currentPage = 0, onPageChange }) {
  const handleDotClick = (pageIndex) => {
    if (onPageChange) {
      onPageChange(pageIndex)
    }
  }

  return (
    <div className="flex justify-center space-x-3">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleDotClick(index)}
          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
            currentPage === index ? "bg-[#1E3A8A]" : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label={`Go to page ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default NavigationDots
