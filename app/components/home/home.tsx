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
      </div>
    </div>
  );
};
