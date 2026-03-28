import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

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
    <html lang="en" className={`antialiased`}>
      <body className="h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
