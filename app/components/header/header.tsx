"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Header = () => {
  const router = usePathname();

  const getSelectedPage = () => {
    if (router === "/ecommerce/home") return "home";
    if (router === "/ecommerce/shop") return "shop";
    if (router === "/ecommerce/cart") return "cart";
    if (router === "/ecommerce/manage-users") return "manage-users";
  };

  return (
    <>
      <div className="h-20 mb-24 z-50 sticky top-0 bg-white flex justify-between items-center px-10">
        <h3>Curator Collective</h3>
        <div className={`flex justify-between items-center w-[30%]`}>
          <h4>
            <Link
              href="/ecommerce/home"
              className={`${getSelectedPage() === "home" ? "bg-(--primary-selected-color-blue) text-white py-2 px-4 rounded-lg font-medium no-underline" : ""}`}
            >
              Home
            </Link>
          </h4>
          <h4>
            <Link
              href="/ecommerce/shop"
              className={`${getSelectedPage() === "shop" ? "bg-(--primary-selected-color-blue) text-white py-2 px-4 rounded-lg font-medium no-underline" : ""}`}
            >
              Shop All
            </Link>
          </h4>
          <h4>
            <Link
              href="/ecommerce/cart"
              className={`${getSelectedPage() === "cart" ? "bg-(--primary-selected-color-blue) text-white py-2 px-4 rounded-lg font-medium no-underline" : ""}`}
            >
              Cart
            </Link>
          </h4>
          <h4>
            <Link
              href="/ecommerce/manage-users"
              className={`${getSelectedPage() === "manage-users" ? "bg-(--primary-selected-color-blue) text-white py-2 px-4 rounded-lg font-medium no-underline" : ""}`}
            >
              Manage Users
            </Link>
          </h4>
        </div>
        <button>Logout</button>
      </div>
    </>
  );
};
