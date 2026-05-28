import Image from "next/image";
import { Card } from "../ui/card/card";

export const CartComponent = () => {
  const cartItems = [{}, {}, {}];
  return (
    <>
      <div className="w-[90%] p-4 m-auto">
        {/* Top level widget */}
        <div>
          <p style={{ color: "var(--primary-color-orange)", fontWeight: 500 }}>
            REVIEW YOUR CART
          </p>
          <h1>Shop All Objects</h1>
          <p className="my-4 text-wrap">
            Your cart is waiting for you. Take a moment to review your selections and proceed to checkout when you're ready.
          </p>
        </div>

        {/* Cart items container */}
        <div className="flex gap-x-14 my-30 w-full">
          {/* Cart items */}
          <div className="w-2/3 flex flex-col gap-y-20">
            {cartItems.map((item, key) => {
              return (
                <div key={key} className="flex rounded-xl p-2 shadow-xl">
                  {/* Image */}
                  <div className="relative w-60 h-50">
                    <Image
                      src="/images/headphones.png"
                      alt="Desktop"
                      className="rounded-xl object-cover"
                      fill
                    />
                  </div>

                  {/* Item content */}
                  <div className="w-full px-6">
                    {/* Name and price */}
                    <div className="flex justify-between mt-2">
                      <div>
                        <label className="font-bold text-sm">CATEGORY</label>
                      </div>
                      <div>
                        <h3>$299.00</h3>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="mt-4">
                      <h3>Audio</h3>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between mt-14">
                      <div className="flex gap-x-6 text-(--primary-selected-color-blue) rounded-xl bg-(--bacground-color-light-blue) px-4">
                        <h3 className="cursor-pointer">-</h3>
                        <h3 className="">2</h3>
                        <h3 className="cursor-pointer">+</h3>
                      </div>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total bill */}
          <div className="w-1/3">
            <div className="p-4 flex flex-col gap-y-14  rounded-xl shadow-2xl">
              {/* Order summary */}
              <div className="mt-10">
                <h2>Order Summary</h2>
              </div>

              {/* Bill content */}
              <div className="border-b-2 p-4 border-(--bacground-color-light-blue) pb-10">
                <div className="flex justify-between">
                  <label className="font-bold text-sm">SubTotal</label>
                  <label className="font-bold text-sm">200</label>
                </div>
                <div className="flex justify-between mt-4">
                  <label className="font-bold text-sm">
                    Estimated Shipping
                  </label>
                  <label className="font-bold text-sm">20</label>
                </div>
              </div>

              {/* Total */}
              <div className="text-right mt-4">
                <label className="font-bold text-sm">TOTAL</label>
                <h2>400</h2>
              </div>

              {/* Proceed to checkout */}
              <div className="text-right">
                <button className="">PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
