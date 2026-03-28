"use client";
import Image from "next/image";
import Heart from "../../../../public/svg/heart.svg";
import style from "./card.module.css";
import { useState } from "react";

type CardProps = {
  cardConfig: {
    width: string;
    height: string;
    imgPath: string;
  };
  productName: string;
  categoryType: string;
  price: string;
};

export const Card = ({
  cardConfig,
  productName,
  categoryType,
  price,
}: CardProps) => {
  // Is liked will be controlled by api in future but for now we will use state to control the like functionality
  const [isLiked, setIsLiked] = useState(false);
  const heartCss = {
    width: 20,
    height: 20,
    fill: isLiked ? "var(--primary-selected-color-blue)" : "none",
  };

  // Will be eleiminate once the API is ready and will be managed by the parent
  const islikeHandler = () => {
    setIsLiked((prev) => !prev);
  };
  return (
    <div
      className="flex flex-col"
      style={{ width: cardConfig.width, height: cardConfig.height }}
    >
      {/* Image Rendered  */}
      <div className="relative w-full h-3/4">
        <Image
          src={cardConfig.imgPath}
          alt="Card Image"
          fill
          className="object-cover rounded-xl"
        />
        <span className={style.svgClass} onClick={islikeHandler}>
          <Heart {...heartCss} />
        </span>
      </div>

      {/* Content of card */}
      <div className="h-1/4 my-2 px-2">
        <div className="flex justify-between">
          <span
            style={{
              color: "#454652",
              letterSpacing: "0.6px",
              fontSize: "12px",
            }}
          >
            {categoryType}
          </span>
          <span
            style={{
              color: "var(--primary-selected-color-blue)",
              fontWeight: "600",
            }}
          >
            {price}
          </span>
        </div>
        <span
          style={{
            color: "#1a1c1d",
            fontWeight: "600",
          }}
        >
          {productName}
        </span>
      </div>
    </div>
  );
};
