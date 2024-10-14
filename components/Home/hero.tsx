import Link from 'next/link'; // Step 1: Import Link

function HeroSection() {
  return (
    <section className="flex flex-col items-center bg-[url('https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-opacity-90 justify-center py-8 md:py-10 relative w-full h-[60vh]">
      <div className="w-full h-full flex flex-col items-center justify-center z-10 tracking-wide">
        <div className="text-center text-2xl md:text-4xl font-extralight text-white p-4">
          Empowering education for every 
          <span className="font-bold text-yellow-400 p-2 border-b-2 border-green-700">child</span>
          connecting dedicated home 
          <span className="mx-2 font-bold text-yellow-400 md:text-blue-900 p-2 border-b-2 border-green-700 rounded-lg">tutors.</span>
        </div>

        <div className="flex w-full justify-center mt-5">
          <Link href="/hire-tutor"> {/* Step 2: Use Link for navigation */}
            <button className="bg-[#1D4ED8] text-white border-solid border-medium border-[#1D4ED8] rounded-xl px-5 py-3 m-3 hover:text-[#1D4ED8] hover:bg-white shadow-sm">
              Hire Tutor
            </button>
          </Link>
          <Link href="/show-more"> {/* Step 2: Use Link for navigation */}
            <button className="bg-white text-black border-solid border-medium border-slate-500 rounded-xl px-5 py-3 m-3 hover:text-white hover:bg-slate-600 shadow-sm">
              Show More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
