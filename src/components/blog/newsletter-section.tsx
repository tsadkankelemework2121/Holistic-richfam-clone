function NewsletterSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="mx-auto mb-8 leading-relaxed"
          style={{
            fontSize: "32px",
            color: "#1E3A8A",
            fontFamily: "Arial",
            maxWidth: "1136px",
          }}
        >
          Stay informed with tips on family child development, parenting advice, and
          
          the vital role of play in a child's growth. You'll also receive updates on our
                     upcoming events and workshops.
        </p>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-md px-6 py-3 rounded-full text-gray-700 text-lg border border-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-[#F6F6F6]"
            style={{ fontFamily: "Arial" }}
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
