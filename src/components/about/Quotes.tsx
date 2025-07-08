import abImg from "../../assets/abrham.png"
import alImg from "../../assets/albert.png"
import mImg from "../../assets/mandela.png"

const AboutQuotes = () => {
  const quotes = [
    {
      quote: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln",
      image: abImg, // Remove .src - abImg is already a string
      description:
        "RICHFAM believes in empowering all children, including those with disabilities, to shape their futures through creativity and participation.",
    },
    {
      quote: "Play is the highest form of research.",
      author: "Albert Einstein",
      image: alImg, // Remove .src - alImg is already a string
      description:
        "We recognize that play is essential for all children's growth. It fuels curiosity and innovation, allowing every child to learn and discover their potential.",
    },
    {
      quote: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
      image: mImg, // Remove .src - mImg is already a string
      description:
        "RICHFAM is built on transformative education that nurtures the growth of all children, fostering global citizens who lead with empathy and purpose.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900 mb-4">RICHFAM-Inspired Quotes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <p className="text-lg text-gray-800 italic mb-4">"{item.quote}"</p>
                <p className="text-blue-600 font-semibold">{item.author}</p>
              </div>
              <div className="mb-6">
                <img
                  src={item.image || "/placeholder.svg?height=256&width=400"}
                  alt={item.author}
                  className="w-full h-64 object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=256&width=400"
                  }}
                />
              </div>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutQuotes
