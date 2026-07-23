"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Destinations() {
  const destinations = [
    {
      name: "Kathmandu",
      image: "/images/hero_pashupatinath.png",
      tagline: "City of Temples",
      description: "The historical capital filled with ancient Durbar Squares and spiritual energy.",
    },
    {
      name: "Pokhara",
      image: "/images/hero_pokhara.png",
      tagline: "Lake City",
      description: "A tranquil paradise at the base of the mighty Annapurna mountain range.",
    },
    {
      name: "Chitwan",
      image: "/images/service_chitwan.png",
      tagline: "Wilderness Haven",
      description: "Dense subtropical forests filled with tigers, rhinos, and colorful bird species.",
    },
    {
      name: "Lumbini",
      image: "/images/hero_pokhara.png", // Reuse lakeside/peaceful boat image
      tagline: "Birthplace of Buddha",
      description: "A global center for peace, meditation, and historic Buddhist archaeology.",
    },
    {
      name: "Bhaktapur",
      image: "/images/hero_pashupatinath.png", // Reuse historic temple
      tagline: "Living Heritage",
      description: "An ancient town celebrated for its traditional pottery, woodcarving, and temples.",
    },
    {
      name: "Nagarkot",
      image: "/images/hero_mountains.png",
      tagline: "Himalayan Sunrise View",
      description: "A peaceful hill station that offers a stunning 360-degree panorama of the snow peaks.",
    },
    {
      name: "Pashupatinath",
      image: "/images/hero_pashupatinath.png",
      tagline: "Sacred Hindu Temple",
      description: "One of the most sacred Hindu temples dedicated to Lord Shiva on the Bagmati River.",
    },
    {
      name: "Swayambhunath",
      image: "/images/hero_pashupatinath.png", // Reuse historic temple
      tagline: "The Monkey Temple",
      description: "An iconic hilltop Buddhist stupa offering spectacular views of Kathmandu valley.",
    },
  ];

  return (
    <section className="relative py-24 bg-white z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
            Explore Nepal
          </h2>
          <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark leading-tight">
            Popular Travel Destinations
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="relative group h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Destination Image */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10" />

              {/* Info Container */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end h-1/2 text-white">
                {/* Location Icon & Tagline */}
                <div className="flex items-center gap-1 text-gold text-xs font-semibold tracking-wider uppercase mb-2">
                  <MapPin size={12} className="flex-shrink-0" />
                  <span>{dest.tagline}</span>
                </div>

                {/* Name */}
                <h4 className="font-playfair text-2xl font-bold mb-2 group-hover:text-gold transition-colors duration-300">
                  {dest.name}
                </h4>

                {/* Hidden description that slides up on hover */}
                <p className="font-sans text-xs text-zinc-300 font-light leading-relaxed max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
