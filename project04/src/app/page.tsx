"use client"; // This tells React we’re working on the user’s side (the browser).

// We need some tools from React to help us remember things (like if the menu is open or closed).
import { useState } from "react";
// We’re going to use pictures, so we import a tool to show images.
import Image from "next/image";

// This is where we build our web page!
export default function Home() {
  // Imagine this as a light switch. It remembers if the sidebar is ON (open) or OFF (closed).
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // This is like pressing the light switch to turn the sidebar ON or OFF.
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Flip it! If it's ON, turn it OFF. If it's OFF, turn it ON.
  };

  return (
    <div className="relative mobile:mx-5 mobile:mt-5">
      {/* This is a gray curtain that shows up when the sidebar is open. */}
      {/* Grayish overlay */}
      {sidebarVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-700 opacity-50 z-10"
          onClick={toggleSidebar} // Close the sidebar when clicking the overlay
        ></div>
      )}
      {/* This is the bar at the top where we put the logo and menu button. */}
      {/* Navigation bar */}
      <div className="navigation mobile:flex mobile:place-content-between mobile:items-center mb-5">
        <div>
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </div>
        {/* This is the button to open the sidebar (only shows on small screens). */}
        <div onClick={toggleSidebar} className="lg:hidden">
          <Image
            src="/icon-menu.svg"
            alt="menu"
            width={50}
            height={50}
            className="hover:cursor-pointer"
          />
        </div>

        {/* Top navigation bar for desktop */}
        <ul className="hidden lg:flex lg:space-x-8 lg:items-center">
          <li className="hover:text-SoftRed cursor-pointer font-bold text-sm text-Verydarkblue">
            Home
          </li>
          <li className="hover:text-SoftRed cursor-pointer font-bold text-sm text-Verydarkblue">
            New
          </li>
          <li className="hover:text-SoftRed cursor-pointer font-bold text-sm text-Verydarkblue">
            Popular
          </li>
          <li className="hover:text-SoftRed cursor-pointer font-bold text-sm text-Verydarkblue">
            Trending
          </li>
          <li className="hover:text-SoftRed cursor-pointer font-bold text-sm text-Verydarkblue">
            Categories
          </li>
        </ul>
      </div>
      {/* This is the sidebar that slides in and out! */}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-4/6 bg-OffWhite z-20 transform ${
          sidebarVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-end p-5 mb-10">
          <div onClick={toggleSidebar} className="hover:cursor-pointer">
            <Image
              src="/icon-menu-close.svg"
              alt="close"
              width={30}
              height={30}
            />
          </div>
        </div>
        <ul className="p-5 space-y-6">
          <li className="hover:text-SoftRed cursor-pointer font-bold text-1xs text-Verydarkblue">
            Home
          </li>
          <li className="hover:text-SoftRed cursor-pointer font-bold text-1xs text-Verydarkblue">
            New
          </li>
          <li className="hover:text-SoftRed cursor-pointer font-bold text-1xs text-Verydarkblue">
            Popular
          </li>
          <li className="hover:text-SoftRed cursor-pointer font-bold text-1xs text-Verydarkblue">
            Trending
          </li>
          <li className="hover:text-SoftRed cursor-pointer font-bold text-1xs text-Verydarkblue">
            Categories
          </li>
        </ul>
      </div>

      <div className="container1 mobile:flex mobile:flex-col mb-20">
        <div>
          {/* Main image */}
          <Image
            src="/image-web-3-mobile.jpg"
            alt="picture1"
            width={1000}
            height={50}
            className="mb-5"
          />
        </div>
        <div className="font-extrabold text-4xl mb-5">
          The Bright Future of Web 3.0?
        </div>
        <div className="mb-5 text-Darkgrayishblue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </div>
        <div className="">
          {/* Button that could lead to more content */}
          <button
            type="button"
            className="bg-SoftRed py-3 px-10 font-bold tracking-widest hover:cursor-pointer"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="container2 mobile:mb-14 desktop:col-start-7 desktop:col-end-11 desktop:row-start-2 desktop:row-end-4 desktop:h-full bg-pink-500">
        <div className="bg-Verydarkblue px-5 py-5">
          <div className="text-SoftOrange font-bold text-2xl mb-5">New</div>
          <div className="text-OffWhite">
            <div className="mb-5 border-b-2 border-Darkgrayishblue pb-5">
              <div className="title">Hydrogen VS Electric Cars</div>
              <div className="question text-Darkgrayishblue">
                Will hydrogen-fueled cars ever catch up to EVs?
              </div>
            </div>
            <div className="mb-5 border-b-2 border-Darkgrayishblue pb-5">
              <div className="title">The Downsides of AI Artistry</div>
              <div className="question text-Darkgrayishblue">
                What are the possible adverse effects of on-demand AI image
                generation?
              </div>
            </div>
            <div>
              <div className="title">Is VC Funding Drying Up?</div>
              <div className="question text-Darkgrayishblue">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container3 mb-28">
        <div className="flex mb-5">
          <div className="flex-0">
            <Image
              src="/image-retro-pcs.jpg"
              alt="logo"
              width={110}
              height={100}
            />
          </div>
          <div className="flex flex-col ml-4 flex-1 justify-between">
            <div className="font-bold text-SoftRed text-3xl">01</div>
            <div className="font-extrabold text-base">Reviving Retro PCs</div>
            <div className="text-Darkgrayishblue">
              What happens when old PCs are given modern upgrades?
            </div>
          </div>
        </div>
        <div className="flex mb-5">
          <div className="flex-0">
            <Image
              src="/image-top-laptops.jpg"
              alt="logo"
              width={110}
              height={100}
            />
          </div>
          <div className="flex flex-col ml-4 flex-1 justify-between">
            <div className="font-bold text-SoftRed text-3xl">02</div>
            <div className="font-extrabold text-base">
              Top 10 Laptops of 2022
            </div>
            <div className="text-Darkgrayishblue">
              Our best picks for various needs and budgets.
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-0">
            <Image
              src="/image-gaming-growth.jpg"
              alt="logo"
              width={110}
              height={100}
            />
          </div>
          <div className="flex flex-col ml-4 flex-1 justify-between">
            <div className="font-bold text-SoftRed text-3xl">03</div>
            <div className="font-extrabold text-base">The Growth of Gaming</div>
            <div className="text-Darkgrayishblue">
              How the pandemic has spiked fresh opportunities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
