
import {Link} from "react-router-dom"
 function MembershipCallToAction() {
  return (
    <section className="py-16 px-6 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Become a member and give your family access to exciting games, safe spaces, and enriching workshops designed
          for all ages.
        </p>

        <Link to="/membership" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full">
          Be a member
        </Link>
      </div>
    </section>
  )
}
export default MembershipCallToAction