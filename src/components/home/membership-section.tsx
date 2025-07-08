

// const  MembershipSection=()=> {
//   const packages = [
//     {
//       title: "One-Day Free Trial",
//       description: "Experience our offerings with a complimentary day at our center.",
//     },
//     {
//       title: "One-Month Plan",
//       description: "Perfect for those looking to try out our offerings over a short period.",
//     },
//     {
//       title: "Six-Month Plan",
//       description: "Ideal for families who want to commit to a longer-term learning experience.",
//     },
//     {
//       title: "Annual Plan",
//       description: "The ultimate package for year-round access and maximum benefits.",
//     },
//   ]

//   return (
//     <section className="px-6 py-12 bg-blue-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
//           <h2 className="text-3xl font-bold mb-4">Membership Packages</h2>
//           <p className="text-blue-100">
//             Become a valued member of our community and choose a plan that best suits your family's needs. Each package
//             is designed to offer <strong>flexibility, exclusive perks</strong>, and access to our nurturing programs and
//             safe, fun-filled spaces.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-4 gap-6">
//           {packages.map((pkg, index) => (
//             <div key={index} className="text-center">
//               <div className="p-6">
//                 <h3 className="font-bold text-lg text-blue-900 mb-4">{pkg.title}</h3>
//                 <p className="text-gray-600 text-sm mb-6 leading-relaxed">{pkg.description}</p>
//                 <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full w-full">
//                   Register now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
// export default MembershipSection