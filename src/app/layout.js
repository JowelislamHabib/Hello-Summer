import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

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
  title: "Solis Summer",
  description: "Premium Men’s Seasonal Essentials",
  icons: {
    icon: "/public/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" data-theme="light">
      <body
        className={`${dmSans.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
