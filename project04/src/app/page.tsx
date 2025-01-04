import Image from "next/image";

export default function Home() {
  return (
    <div className=" mobile:mx-5 mobile:mt-5">
      <div className="navigation mobile:flex mobile:place-content-between mobile:items-center mobile:mb-5">
        <div>
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </div>
        <div>
        <Image src="/icon-menu.svg" alt="logo" width={50} height={50} className="hover:cursor-pointer"/>
        </div>
      </div>

      <div className="container1 mobile:flex mobile:flex-col mb-20">
        <div>
          <Image src="/image-web-3-mobile.jpg" alt="picture1" width={1000} height={50} className="mb-5"/>
        </div>
        <div className="font-extrabold text-4xl mb-5">The Bright Future of Web 3.0?</div>
        <div className="mb-5 text-Darkgrayishblue">We dive into the next evolution of the web that claims t oput the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</div>
        <div className="">
          <button type="button" className="bg-SoftRed py-3 px-10 font-bold tracking-widest ">Read More</button>
        </div>
      </div>

      <div className="container2 mb-14">
        <div className="bg-Verydarkblue px-5 py-5">
          <div className="text-SoftOrange font-bold text-2xl mb-5">New</div>
          <div className="text-OffWhite">
            <div className="mb-5 border-b-2 border-Darkgrayishblue pb-5">
              <div className="title">Hydrogen VS Electric Cars</div>
              <div className="question text-Darkgrayishblue">Will hydrogen-fueled cars ever catch up to EVs?</div>
            </div>
            <div className="mb-5 border-b-2 border-Darkgrayishblue pb-5">
            <div className="title">The Downsides of AI Artistry</div>
            <div className="question text-Darkgrayishblue">What are the possible adverse effects of on-demand AI image generation?</div>
            </div>
            <div>
            <div className="title">Is VC Funding Drying Up?</div>
            <div className="question text-Darkgrayishblue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container3 mb-28">
        <div className="flex mb-5">
          <div className="flex-0"><Image src="/image-retro-pcs.jpg" alt="logo" width={110} height={100} /></div>
          <div className="flex flex-col ml-4 flex-1 justify-between">
            <div className="font-bold text-SoftRed text-3xl">01</div>
            <div className="font-extrabold text-base">Reviving Retro PCs</div>
            <div className="text-Darkgrayishblue">What happens when old PCs are given modern upgrades?</div>
          </div>
        </div>
        <div className="flex mb-5">
          <div className="flex-0">
            <Image src="/image-top-laptops.jpg" alt="logo" width={110} height={100} />
            </div>
          <div className="flex flex-col ml-4 flex-1 justify-between">
            <div className="font-bold text-SoftRed text-3xl">02</div>
            <div className="font-extrabold text-base">Top 10 Laptops of 2022</div>
            <div className="text-Darkgrayishblue">Our best picks for vaious needs and budgets.</div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-0"><Image src="/image-gaming-growth.jpg" alt="logo" width={110} height={100} /></div>
          <div className="flex flex-col ml-4 flex-1 justify-between">
            <div className="font-bold text-SoftRed text-3xl">03</div>
            <div className="font-extrabold text-base">The Growth of Gaming</div>
            <div className="text-Darkgrayishblue">How the pandemic has spiked fresh opportunities.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
