import Image from "next/image";

export default function Home() {
  return (
    <div className="parent grid grid-cols-10 grid-rows-10 gap-0 h-screen bg-black">
      <div className="main-container col-start-4 col-end-8 row-start-3 row-end-8 rounded-2xl overflow-hidden flex justify-between">

        <div className="left-content flex-1 bg-red-300 flex flex-col items-center p-10  rounded-3xl">
          <div className="flex h-full flex-col align-middle bg-red-600 text-center text-white justify-between">
            <div className="font-bold text-2xl">Your Result</div>
            <div className="bg-orange-300 m-6 mx-14 h-full w-auto content-center rounded-full">
              <p className="text-5xl">76</p>
              <p>of 100</p>
            </div>
            <div>
              <div className="font-bold text-3xl pb-2">Great</div>
              <div className="mx-10">You scored higher than 65% of the people who have taken these tests.</div>  
            </div>
          </div>
        </div>

        <div className="right-content flex-1 bg-blue-300 flex flex-col items-center p-11">
          <div className="flex-1 flex-col align-middle bg-blue-400 w-full">
            <p className="font-bold pb-5 text-2xl">Summary</p>
            <div className="stat-container flex flex-col w-full">
              <div className="reaction-stat flex bg-red-100 rounded-xl py-3 justify-between mb-3 px-4">
                <div className="flex">
                  <Image src="./icon-reaction.svg" alt="reaction icon" width={25} height={25} className="mr-2"/>
                  <p>Reaction</p>  
                </div>
                <p>80 / 100</p>
              </div>
              <div className="memeory-stat flex bg-yellow-100 rounded-xl py-3 justify-between mb-3 px-4">
                <div className="flex">
                  <Image src="./icon-memory.svg" alt="reaction icon" width={25} height={25} className="mr-2"/>
                  <p>Memory</p>
                </div>
                <p>92 / 100</p>
              </div>
              <div className="verbal-stat flex bg-green-100 rounded-xl py-3 justify-between mb-3 px-4">
              <div className="flex">
                  <Image src="./icon-verbal.svg" alt="reaction icon" width={25} height={25} className="mr-2"/>
                  <p>Verbal</p>
                </div>
                <p>61 / 100</p>
              </div>
              <div className="visual-stat flex bg-blue-100 rounded-xl py-3 justify-between mb-3 px-4">
              <div className="flex">
                  <Image src="./icon-visual.svg" alt="reaction icon" width={25} height={25} className="mr-2"/>
                  <p>VIsual</p>
                </div>
                <p>72 / 100</p>
              </div>
            </div>
            <div className="button-section w-full text-center justify-end mt-8">
              <button type="button" className="rounded-3xl bg-gray-800 text-white px-10 w-full py-3 items-end">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
