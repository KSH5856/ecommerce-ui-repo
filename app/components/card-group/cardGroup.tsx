import { Card } from "../ui/card/card";

export const CardGroup = ({ categoryType }: { categoryType: string }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
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
  );
};
