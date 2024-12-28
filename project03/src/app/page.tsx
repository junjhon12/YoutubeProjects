import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Home() {
  return (
    <div className="iphone-12pro: parent grid grid-cols-12 grid-rows-12 gap-0 h-screen">
      <div className="main-container col-start-2 col-end-12 row-start-2 row-end-12 flex flex-col">
        <div className="top-content flex-1 flex flex-col items-center">
          <Image src="/logo.svg" alt="logo" width={50} height={40} className="mr-2 mb-7"/>
          <div className="text-2xl pb-3">We are launching <b>soon!</b></div>
          <div className="text-sm pb-5">Subscribe and get notified</div>
          <input type="email" name="email" id="userEmail" placeholder="Your email address ..." className="w-full border-paleBlue border-solid border px-10 py-2 rounded-3xl text-sm text-black"/>
          <p className="text-lightRed text-sm italic pt-1 hidden">Please provide a valid email address</p>
          <button type="submit" className="bg-blue rounded-3xl test-sm text-white w-full py-2 mt-3 hover:pointer-events-auto"  style={{ boxShadow: '0 4px 8px rgba(29, 78, 216, 0.5)' }}>Notify Me</button>
        </div>
        <div className="middle-content flex-1">
          <Image src="/illustration-dashboard.png" alt="dashboard" width={140} height={100} className="h-full w-full pt-7"/>
        </div>
        <div className="bottom-content flex-1 flex flex-col justify-end items-center">
          <div className="socialMedia flex mb-10">
            <i className="fab fa-facebook-f rounded-full text-blue text-base border-gray border-opacity-35 border py-2 px-3 mx-3"></i>
            <i className="fab fa-twitter rounded-full text-blue text-base border-gray border-opacity-35 border py-2 px-2  mx-3"></i>
            <i className="fab fa-instagram rounded-full text-blue text-base border-gray border-opacity-35 border py-2 px-2 mx-3"></i>
          </div>
          <div className="text-gray">&copy; Copyright Ping. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}