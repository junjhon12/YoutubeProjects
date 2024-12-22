import Image from "next/image";

export default function Home() {
  return (
    <div className="parent grid grid-cols-6 grid-rows-5 gap-0 h-screen">
      {/* This grid item spans columns 2 to 5 and rows 2 to 4 */}
      <div className="column-container col-start-2 col-end-6 row-start-2 row-end-5 flex items-center justify-center border-4 rounded-2xl overflow-hidden">
        {/* Left Container */}
        <div className="column-left bg-orange-400 flex-1 h-full flex justify-center items-center">
          <div className="flex flex-col w-4/5 h-4/5 items-start justify-between">
            <div className="Logo-section w-full">
              <Image src="/icon-sedans.svg" alt="Sedan Icon" width={70} height={50}/>  
            </div>
            <div className="Info-section w-full">
              <h1 className="pb-5 text-3xl font-bold text-white transform scale-y-150 tracking-tighter font-lexend">SEDANS</h1>
              <h3 className="pr-20 text-white">Choose a sedan for it's affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</h3>
            </div>
            <div className="Button-section w-full">
              <button type="button" className="rounded-3xl px-6 py-3 bg-white text-orange-400 border-2 border-transparent hover:bg-transparent hover:border-white hover:text-white">Learn More</button>
            </div>
          </div>
        </div>
        {/* Center Container */}
        <div className="column-middle bg-cyan-700 flex-1 h-full flex items-center justify-center">
        <div className="flex flex-col w-4/5 h-4/5 items-start justify-between">
            <div className="Logo-section w-full">
              <Image src="/icon-suvs.svg" alt="Suv Icon" width={70} height={50}/>  
            </div>
            <div className="Info-section w-full">
              <h1 className="pb-5 text-3xl font-bold text-white transform scale-y-150 tracking-tighter">SUVS</h1>
              <h3 className="pr-20 text-white ">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</h3>
            </div>
            <div className="Button-section w-full">
              <button type="button" className=" rounded-3xl px-6 py-3 bg-white text-cyan-700 border-2 border-transparent hover:bg-transparent hover:border-white hover:text-white">Learn More</button>
            </div>
          </div>
        </div>
        {/* Right Container */}
        <div className="column-right bg-cyan-900 flex-1 h-full flex items-center justify-center">
        <div className="flex flex-col w-4/5 h-4/5 items-start justify-between">
            <div className="Logo-section  w-full">
              <Image src="/icon-luxury.svg" alt="Luxury Icon" width={70} height={50}/>  
            </div>
            <div className="Info-section w-full">
              <h1 className="pb-5 text-3xl font-bold text-white transform scale-y-150 tracking-tighter">LUXURY</h1>
              <h3 className="pr-20 text-white ">Cruise in the nest car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</h3>
            </div>
            <div className="Button-section  w-full">
              <button type="button" className="rounded-3xl px-6 py-3 bg-white text-cyan-900 border-2 border-transparent hover:bg-transparent hover:border-white hover:text-white">Learn More</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}