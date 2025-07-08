

 function NewsletterSection() {
  return (
    <section className="py-16 px-6 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Stay informed with tips on family child development, parenting advice, and
          <br />
          the vital role of play in a child's growth. You'll also receive updates on our
          <br />
          upcoming events and workshops.
        </p>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-md px-6 py-3 rounded-full text-gray-700 text-lg border border-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            style={{ fontFamily: "Arial", fontSize: "16px" }}
          />
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full">
          Subscribe
        </button>
      </div>
    </section>
  )
}
export default NewsletterSection