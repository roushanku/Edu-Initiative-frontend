function HeroSection() {
    return (
      <section className="flex flex-col items-center justify-center py-8 md:py-10 relative w-full h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div className="w-full h-full bg-[url('https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-85"></div>
  
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
          <div className="text-center text-2xl md:text-4xl font-extralight text-white p-4">
            Empowering education for every 
            <span className="font-bold text-yellow-500 p-2 border-b-2 border-green-700">child</span>
            connecting dedicated home 
            <span className="font-bold text-yellow-500 p-2 border-b-2 border-green-700">tutors.</span>
          </div>
  
          <div className="flex w-full justify-center mt-5">
            <button className="bg-sky-600 text-white border-solid border-medium border-sky-600 rounded-md px-5 py-3 m-3 hover:text-sky-600 hover:bg-white shadow-sm">
              Hire Tutor
            </button>
            <button className="bg-sky-600 text-white border-solid border-medium border-sky-600 rounded-md px-5 py-3 m-3 hover:text-sky-600 hover:bg-white shadow-sm">
              Show More
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  