import Image from "next/image";

export default function Home() {
  return (
    <div className="iphone-12pro: parent grid grid-cols-12 grid-rows-12 gap-0 h-screen">
      <div className="main-container bg-red-200 col-start-2 col-end-12 row-start-2 row-end-12 flex flex-col">
        <div className="top-content bg-red-300 flex-1 flex flex-col items-center">
          <Image src="./logo.svg" alt="logo" width={32} height={32}className="mr-2"/>
          <div>We are launching <b>soon!</b></div>
          <div>Subscribe and get notified</div>
          <input type="email" name="email" id="userEmail" placeholder="Your email address ..."/>
          <button type="submit">Notify Me</button>
        </div>
        <div className="middle-content bg-red-400 flex-1">
          <Image src="/illustration-dashboard.png" alt="dashboard" width={140} height={100} className="h-full w-full"/>
        </div>
        <div className="bottom-content bg-red-500 flex-1 flex flex-col content-end">
          <div className="socialMedia">
            <a href=""></a>
          </div>
          <div>&copy; Copyright Ping. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
{}