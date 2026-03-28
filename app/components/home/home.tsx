import Image from "next/image";
import style from "./home.module.css";
import { Card } from "../ui/card/card";

export const Home = () => {
  return (
    <>
      <div className="w-[90%] m-auto">
        {/* First Section */}
        <div className="h-165 mb-10 flex">
          <div className="flex justify-center flex-col w-1/2">
            <div className="w-2/3">
              <p className={`${style.description}`}>SUMMER SERIES 2024</p>
              <h1>The Art of Living Well.</h1>
              <p className="my-4">
                Discover a thoughtfully selected range of essentials designed to
                elevate your daily ritual. Quality craftsmanship meets editorial
                aesthetic.
              </p>
              <button>SHOP NOW</button>
            </div>
          </div>
          <div className="w-1/2 h-full relative">
            <Image
              src="/images/watch.png"
              className="object-cover rounded-2xl"
              alt="Watch"
              fill
            />
          </div>
        </div>

        {/* Second Section */}
        <div>
          <h3>Browse Collections</h3>
          <div className="flex gap-6 h-200 mt-4">
            <div className={`${style["img-container"]} relative h-full w-2/3`}>
              <Image
                src="/images/desktop.png"
                className={`object-cover bg-top-left rounded-3xl object-center`}
                alt="Desktop"
                fill
              />
              <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
              <div className="flex flex-col gap-1 absolute bottom-6 left-6">
                <span className="text-white font-bold text-2xl">
                  Electronics
                </span>
                <span className="text-white font-medium text-[14px]">
                  Advanced utility for modern life
                </span>
              </div>
            </div>
            <div className="h-full flex flex-col gap-y-6  w-1/3">
              <div className={`relative h-1/2 ${style["img-container"]}`}>
                <Image
                  src="/images/coat.png"
                  className={`${style["img-container"]} rounded-2xl`}
                  alt="coat"
                  fill
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
                <div className="absolute bottom-6 z-10 left-6">
                  <span className="text-white font-bold text-2xl">Living</span>
                </div>
              </div>
              <div className={`relative h-1/2 ${style["img-container"]}`}>
                <Image
                  src="/images/leaf.png"
                  className={`object-cover rounded-2xl`}
                  alt="Leaf"
                  fill
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-white font-bold text-2xl">Apparel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex justify-between flex-wrap mt-10">
          <Card
            categoryType="ELECTRONICS"
            cardConfig={{
              height: "450px",
              width: "320px",
              imgPath: "/images/headphones.png",
            }}
            productName="Studio-Grade Audio"
            price="$299.00"
          />
          <Card
            categoryType="APPAREL"
            cardConfig={{
              height: "450px",
              width: "320px",
              imgPath: "/images/shoes.png",
            }}
            productName="Full-Grain Low Top"
            price="$180.00"
          />
          <Card
            categoryType="LIVING"
            cardConfig={{
              height: "450px",
              width: "320px",
              imgPath: "/images/tea.png",
            }}
            productName="Artisan Ceramic Set"
            price="$95.00"
          />
          <Card
            categoryType="APPAREL"
            cardConfig={{
              height: "450px",
              width: "320px",
              imgPath: "/images/sportShoes.png",
            }}
            productName="Velocity Runner"
            price="$120.00"
          />
        </div>
      </div>
      {/* Fourth Section */}
      <div className="flex flex-col my-40 justify-center  items-center h-full gap-10 w-[50%] m-auto">
        <h2 className="">The Weekly Curator</h2>
        <p className="w-[70%]">
          Join 50,000+ subscribers and get editorial guides on design, living,
          and exclusive early access to drops.
        </p>
        <div className="h-full flex w-[70%]">
          <input type="text" className="border-0 grow px-6 py-4 mx-4  h-full" placeholder="email@address.com" />
          <button className="rounded-xl px-6 py-4">Subscribe</button>
        </div>
      </div>
    </>
  );
};
