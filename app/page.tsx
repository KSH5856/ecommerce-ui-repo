"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const route = useRouter();

  useEffect(() => {
    route.push("/ecommerce/home");
  }, []);
  return <></>;
}
