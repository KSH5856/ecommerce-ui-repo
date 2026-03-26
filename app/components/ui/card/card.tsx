import Image from "next/image";

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
  return (
    <div
      className="flex flex-col"
      style={{ width: cardConfig.width, height: cardConfig.height }}
    >
      <div className="relative w-full h-3/4">
        <Image src={cardConfig.imgPath} alt="Card Image" fill className="object-cover rounded-xl"/>
        <div className="absolute inset-0">
            {/* Need to render svg */}
        </div>
      </div>
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
        <span style={{
            color:"#1a1c1d",
            fontWeight:"600"
        }}>{productName}</span>
      </div>
    </div>
  );
};
