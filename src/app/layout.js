import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import HeroSlider from "@/components/HeroSlider";
import PopularProducts from "@/components/PopularProducts";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hello Summer",
  description: "Premium Men’s Seasonal Essentials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" data-theme="light">
      <body className="bg-background text-foreground">
        <NavBar />
        <HeroSlider />
        <PopularProducts />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
