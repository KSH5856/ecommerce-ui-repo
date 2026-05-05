"use client";
import { useEffect } from "react";
import { RenderSVG } from "../ui/RenderSVG/renderSvg";

export const ShopListing = () => {
  const callProductAPi = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log);
  };

  useEffect(() => {
    callProductAPi();
  }, []);
  return (
    <>
      <div className="flex justify-end">
        <div className="w-[40%]">
          {/* Top level widget */}
          <p style={{ color: "var(--primary-color-orange)", fontWeight: 500 }}>
            CURATED SELECTION
          </p>
          <h1>Shop All Objects</h1>
          <p className="my-4 text-wrap">
            A thoughtfully assembled collection of architectural essentials and
            digital-first design artifacts.
          </p>

          <div className="flex gap-x-1">
            {/* Search component */}
            <div className="relative">
              <RenderSVG
                iconName="search"
                className="absolute top-3 left-0.5"
                iconConfig={{
                  height: "18px",
                  width: "18px",
                }}
              />
              <input
                className="h-10 m-0 px-7 rounded-lg border-0"
                placeholder="Search products..."
              />
            </div>

            {/* Sort component */}
            <div className="relative">
              <button>Sort By</button>
              {/* Dropdown container*/}
              <div className="absolute top-10 left-20 rounded-lg p-1 z-10 bg-white  w-40 min-w-max flex gap-y-1 flex-col shadow-2xl">
                <div className="hover:bg-gray-200 cursor-pointer rounded-lg px-4  py-2 w-full ">
                  Newest Arrival
                </div>
                <div className="hover:bg-gray-200 cursor-pointer rounded-lg px-4  py-2 w-full ">
                  Price: Low to High
                </div>
              </div>
            </div>
          </div>

          {/* Tab component based on category */}
        </div>
      </div>
    </>
  );
};
