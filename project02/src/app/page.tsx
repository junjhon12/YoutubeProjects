import Image from "next/image";

export default function Home() {
  return (
    <div className="parent grid grid-cols-10 grid-rows-10 gap-0 h-screen bg-black">
      <div className="main-container col-start-4 col-end-8 row-start-3 row-end-8 border-2 border-white bg-white rounded-2xl overflow-hidden flex justify-between">

        <div className="left-content flex-1 bg-red-300 flex flex-col items-center p-11  rounded-3xl">
          <div className="flex-1 flex-col align-middle bg-red-600 justify-items-center">
            <h3 className="text-white border-2 border-black ">Your Result</h3>
            <h4 className="text-white border-2 border-black flex flex-col"><b>76</b> of 100</h4>
            <h2 className="text-white border-2 border-black">Great</h2>
            <p className="text-white border-2 border-black">You scored higher than 65% of the people who have taken these tests.</p>  
          </div>
          
        </div>
        <div className="right-content flex-1 bg-blue-300 flex flex-col items-center p-11">
          <div className="flex-1 flex-col align-middle bg-blue-400 w-full">
            <p>Summary</p>
            <div className="stat-container flex flex-col w-full">
              <div className="reaction-stat flex bg-red-200 rounded-3xl">
                <p>Reaction</p>
                <p>80 / 100</p>
              </div>
              <div className="memeory-stat flex bg-yellow-200  rounded-3xl">
                <p>Memory</p>
                <p>92 / 100</p>
              </div>
              <div className="verbal-stat flex bg-green-200  rounded-3xl">
                <p>Memory</p>
                <p>61 / 100</p>
              </div>
              <div className="visual-stat flex bg-blue-200  rounded-3xl">
                <p>Memory</p>
                <p>72 / 100</p>
              </div>
            </div>
            <div className="button-section w-full">
              <button type="button" className="rounded-3xl bg-gray-800 text-white px-10">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
