import "./globals.css";
import { Inter, Montserrat, Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Portfolio",
  description: "AG's Portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
