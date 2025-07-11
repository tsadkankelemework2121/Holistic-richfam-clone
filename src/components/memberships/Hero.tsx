
const MembershipsHero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image - Fixed to screen size */}
  
  <div className="absolute inset-0">
           <img
             src={"/memback.webp"}  
             alt="Happy children at RICHFAM"
             className="w-full h-full object-cover opacity-100"
           />
         </div>

      
      
      {/* Dark overlay */}
    
      
      {/* Compact content container */}
      <div className="relative h-full flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto px-4 text-center">
         <p className="text-xl md:text-2xl text-white leading-relaxed mt-36 mb-8">
  Join our membership program to access exclusive benefits, from priority access to events and activities to
  specialized services for families.
</p>
        </div>
      </div>
    </section>
  )
}

export default MembershipsHero