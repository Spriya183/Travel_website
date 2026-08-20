import type { Metadata } from "next";
import { Montserrat, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Clasic Journey Nepal | Premium Tourist Taxi & Tours",
  description: "Experience premium airport pickup & drop, hotel transfers, and customized tours across Kathmandu, Pokhara, Chitwan, Lumbini, and Nagarkot with Clasic Journey Nepal.",
  keywords: "Clasic Journey Nepal, tourist taxi Nepal, airport taxi Kathmandu, Kathmandu sightseeing, Pokhara tour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${playfairDisplay.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-900">
        <Navbar />
        <main className="flex-grow pt-[64px] lg:pt-[108px] relative z-10 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


