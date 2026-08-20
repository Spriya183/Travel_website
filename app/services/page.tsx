import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Services from "../../components/features/home/Services";
import CTA from "../../components/features/home/CTA";

export const metadata: Metadata = {
  title: "Our Services | Clasic Journey Nepal",
  description: "Explore our premium tourist taxi services including airport pickups, Kathmandu sightseeing, Pokhara tours, and multi-day Nepal tours.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_mountains.png"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/80 via-primary/70 to-luxury-dark/90" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-gold mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-shadow-premium">
            Our Premium Services
          </h1>
          <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            From Airport Transfers to Multi-Day Adventures Across Nepal
          </p>
        </div>
      </section>

      <div className="py-20">
        <Services />
      </div>
      
      <CTA />
    </div>
  );
}
