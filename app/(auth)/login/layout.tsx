import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "One place to manage the product efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
