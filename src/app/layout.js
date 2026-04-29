import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import HeroSlider from "@/components/HeroSlider";
import PopularProducts from "@/components/PopularProducts";
import Tips from "@/components/Tips";
import AllProducts from "@/components/AllProducts";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Hello Summer",
  description: "Premium Men’s Seasonal Essentials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" data-theme="light">
      <body
        className={`${dmSans.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <NavBar />
        <HeroSlider />
        <PopularProducts />
        <Tips />
        <AllProducts />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
