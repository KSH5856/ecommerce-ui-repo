"use client";
import { useState } from "react";
import { RenderSVG } from "../ui/RenderSVG/renderSvg";
import { Card } from "../ui/card/card";
import { CardGroup } from "../card-group/cardGroup";
import { Tabs } from "../ui/tabs/tabs";
import { Pagination } from "../ui/pagination/pagination";

export const ShopListing = () => {
  const sortOptions = [
    { id: "newestArrival", label: "Newest Arrival" },
    { id: "priceLowToHigh", label: "Price" },
  ];

  const tabOptions = [
    {
      id: "allObjects",
      label: "All Objects",
      content: <CardGroup categoryType="allObjects" />,
    },
    {
      id: "furniture",
      label: "Furniture",
      content: <CardGroup categoryType="furniture" />,
    },
    {
      id: "lighting",
      label: "Lighting",
      content: <CardGroup categoryType="lighting" />,
    },
  ];

  const [toggleSort, setToggleSort] = useState(false);
  const [sortSelection, setSortSelection] = useState({
    id: "newestArrival",
    label: "Newest Arrival",
  });

  const handleSortSelection = (option: { id: string; label: string }) => {
    setSortSelection(option);
    setToggleSort((prev) => !prev);
  };

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
            <div className=" flex relative gap-x-2 min-w-50 h-full">
              <button
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => setToggleSort((prev) => !prev)}
              >
                Sort By : {sortSelection.label}
              </button>

              {/* Dropdown container*/}
              {toggleSort && (
                <div className="absolute top-12 left-0 rounded-lg p-1 z-10 bg-white  w-full flex gap-y-1 flex-col shadow-2xl">
                  {sortOptions.map((option) => (
                    <div
                      key={option.id}
                      className="hover:bg-gray-200 cursor-pointer rounded-lg px-4 py-2 w-full "
                      onClick={() => handleSortSelection(option)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tab component based on category */}
      <div className="w-[90%] my-10 m-auto p-4">
        <Tabs tabs={tabOptions} initialActiveId={"allObjects"} />
      </div>

      {/* Pagination */}
      <div className="flex justify-center mb-40 ">
        <Pagination
          totalRecords={100}
          onPageChange={(page) => {}}
        />
      </div>
    </>
  );
};
