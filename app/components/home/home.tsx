import Image from "next/image";
import style from "./home.module.css";

export const Home = () => {
  return (
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
        <h2>Browse Collections</h2>
        <div className="flex gap-6 h-200 mt-4">
          <div className={`${style['img-container']} relative h-full w-2/3`}>
            <Image
              src="/images/desktop.png"
              className={`object-cover bg-top-left rounded-3xl object-center`}
              alt="Desktop"
              fill
            />
            <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
            <div className="flex flex-col gap-1 absolute bottom-6 left-6">
              <span className="text-white font-bold text-2xl">Electronics</span>
              <span className="text-white font-medium text-[14px]">
                Advanced utility for modern life
              </span>
            </div>
          </div>
          <div className="h-full flex flex-col gap-y-6  w-1/3">
            <div className={`relative h-1/2 ${style['img-container']}`}>
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
            <div className={`relative h-1/2 ${style['img-container']}`}>
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
    </div>
  );
};
