import type { Metadata } from "next";
import Services from "../../components/home/Services";
import CTA from "../../components/home/CTA";

export const metadata: Metadata = {
  title: "Our Services | Clasic Journey Nepal",
  description: "Explore our premium tourist taxi services including airport pickups, Kathmandu sightseeing, Pokhara tours, and multi-day Nepal tours.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-primary pt-12 pb-24 text-center">
        <h1 className="font-playfair font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
          Our <span className="text-gold">Services</span>
        </h1>
        <p className="font-sans text-zinc-300 mt-4 max-w-2xl mx-auto px-4">
          From quick airport transfers to multi-day cross-country adventures, explore our comprehensive range of premium transport services.
        </p>
      </div>

      <Services />
      <CTA />
    </>
  );
}
