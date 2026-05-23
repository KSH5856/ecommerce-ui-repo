import type { Metadata } from "next";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "One place to manage the product efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
