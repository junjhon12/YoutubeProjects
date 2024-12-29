"use client";

import { useState } from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return regex.test(email);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setIsValid(false);
    } else {
      setIsValid(true);
      // Handle successful email submission logic here
      console.log("Email submitted:", email);
    }
  };

  return (
    <div>
      <div className="iphone-12pro: parent grid grid-cols-12 grid-rows-12 gap-0 h-screen desktop:grid-cols-10 desktop:grid-rows-10 desktop:gap-0 desktop:h-screen">
        <div className="main-container col-start-2 col-end-12 row-start-2 row-end-12 flex flex-col desktop:col-start-3 desktop:col-end-8 desktop:row-start-1 desktop:row-end-12">
          <div className="top-content flex-1 flex flex-col items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={50}
              height={40}
              className="mr-2 mb-7 desktop:mt-8"
            />
            <div className="text-2xl pb-3 text-gray">
              We are launching <b className="text-black">soon!</b>
            </div>
            <div className="text-sm pb-5">Subscribe and get notified</div>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center desktop:flex-row desktop:justify-center"
            >
              <input
                type="email"
                name="email"
                id="userEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address ..."
                className={`w-full border px-10 py-2 rounded-3xl text-sm text-black ${
                  isValid ? "border-paleBlue" : "border-lightRed"
                } desktop:py-3 desktop:text-base desktop:w-80`}
              />
              <button
                type="submit"
                className="bg-blue rounded-3xl text-sm text-white w-full py-2 mt-3 hover:pointer-events-auto desktop:w-40 desktop:my-2 desktop:py-3 desktop:mx-4"
                style={{ boxShadow: "0 4px 8px rgba(29, 78, 216, 0.5)" }}
              >
                Notify Me
              </button>
            </form>
            <p
              className={`text-lightRed text-sm italic pt-1 text-center ${
                isValid ? "hidden" : "block"
              }`}
            >
              Please provide a valid email address
            </p>
          </div>
          <div className="middle-content flex-1">
            <Image
              src="/illustration-dashboard.png"
              alt="dashboard"
              width={140}
              height={100}
              className="h-full w-full pt-7 desktop:w-[80%] desktop:h-[100%] desktop:flex desktop:flex-col desktop:justify-self-center"
            />
          </div>
          <div className="bottom-content flex-1 flex flex-col justify-end items-center">
            <div className="socialMedia flex mb-10">
              <i className="fab fa-facebook-f rounded-full text-blue text-base border-gray border-opacity-35 border py-2 px-3 mx-3 hover:cursor-pointer hover:bg-blue hover:text-white"></i>
              <i className="fab fa-twitter rounded-full text-blue text-base border-gray border-opacity-35 border py-2 px-2 mx-3 hover:cursor-pointer hover:bg-blue hover:text-white"></i>
              <i className="fab fa-instagram rounded-full text-blue text-base border-gray border-opacity-35 border py-2 px-2 mx-3 hover:cursor-pointer hover:bg-blue hover:text-white"></i>
            </div>
            <div className="text-gray">
              &copy; Copyright Ping. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <div className="desktop"></div>
    </div>
  );
}
