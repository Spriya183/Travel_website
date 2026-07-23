"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, MapPin, ArrowRight, Plane } from "lucide-react";

const destinations = [
  {
    name: "Kathmandu",
    tagline: "City of Temples",
    trips: 280,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=600&q=85",
    description: "Explore the ancient temples, palaces, and vibrant culture of Nepal's capital city.",
    tag: "Most Popular",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Pokhara",
    tagline: "City of Lakes",
    trips: 210,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85",
    description: "Serene lakeside city with breathtaking Annapurna views and adventure activities.",
    tag: "Top Choice",
    color: "from-blue-500 to-teal-600",
  },
  {
    name: "Chitwan",
    tagline: "Wildlife Paradise",
    trips: 156,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&q=85",
    description: "UNESCO World Heritage jungle safari with rhinos, tigers, and exotic wildlife.",
    tag: "Adventure",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Lumbini",
    tagline: "Birthplace of Buddha",
    trips: 98,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85",
    description: "Sacred pilgrimage site — the birthplace of Lord Buddha, a UNESCO World Heritage Site.",
    tag: "Spiritual",
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "Bhaktapur",
    tagline: "City of Devotees",
    trips: 134,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=85",
    description: "Medieval city of art and architecture with magnificent pottery and wood carving.",
    tag: "Heritage",
    color: "from-rose-500 to-pink-600",
  },
  {
    name: "Nagarkot",
    tagline: "Himalayan Sunrise",
    trips: 89,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=85",
    description: "Famous for stunning Himalayan sunrise views including a panorama of Everest range.",
    tag: "Scenic",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Bandipur",
    tagline: "Hilltop Heritage",
    trips: 65,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584731353338-97c16f5e2d90?w=600&q=85",
    description: "Charming hilltop town with preserved Newari architecture and panoramic mountain views.",
    tag: "Hidden Gem",
    color: "from-yellow-500 to-amber-600",
  },
  {
    name: "Mustang",
    tagline: "Forbidden Kingdom",
    trips: 42,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=85",
    description: "Ancient kingdom with Tibetan culture, dramatic desert landscapes, and cave monasteries.",
    tag: "Exclusive",
    color: "from-red-500 to-orange-600",
  },
  {
    name: "Janakpur",
    tagline: "City of Janaki",
    trips: 54,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?w=600&q=85",
    description: "Birthplace of Sita Devi with the magnificent Janaki Temple and Maithili culture.",
    tag: "Pilgrimage",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Ilam",
    tagline: "Tea Garden Heaven",
    trips: 38,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=85",
    description: "Rolling tea gardens, breathtaking views, and the freshest Nepali tea experience.",
    tag: "Off-Beat",
    color: "from-lime-500 to-green-600",
  },
  {
    name: "Everest Region",
    tagline: "Top of the World",
    trips: 76,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1480732520806-8d6b29dbd1f0?w=600&q=85",
    description: "Gateway to the world's highest peak — Lukla flights, Namche Bazaar, and Tengboche.",
    tag: "Bucket List",
    color: "from-cyan-500 to-sky-600",
  },
];

export default function DestinationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-luxury-cream overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold mb-3">
            Nepal Explored
          </p>
          <h2 className="font-playfair font-black text-4xl sm:text-5xl md:text-6xl text-primary mb-4 leading-tight">
            Destinations We{" "}
            <span className="text-gradient-gold">Have Covered</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-2.5 h-2.5 bg-gold rounded-full" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <p className="font-sans text-zinc-600 text-lg leading-relaxed max-w-2xl mx-auto">
            From the Himalayan heights to the Terai plains, we take you everywhere Nepal has to
            offer — safely, comfortably, and in style.
          </p>
        </motion.div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + (index % 8) * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl overflow-hidden border border-white/50 shadow-lg cursor-pointer"
              style={{ height: "300px" }}
            >
              {/* Background image */}
              <img
                src={dest.image}
                alt={`${dest.name} — Classic Journey Nepal`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${dest.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Tag badge */}
              <div className="absolute top-4 left-4">
                <span className={`inline-block bg-gradient-to-r ${dest.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {dest.tag}
                </span>
              </div>

              {/* Rating badge */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                  <Star size={10} className="fill-gold text-gold" />
                  <span className="font-bold">{dest.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin size={12} className="text-gold" />
                  <span className="font-sans text-xs text-gold font-semibold uppercase tracking-wider">
                    {dest.tagline}
                  </span>
                </div>
                <h3 className="font-playfair font-bold text-xl text-white mb-2">{dest.name}</h3>

                {/* Hidden description revealed on hover */}
                <motion.div
                  initial={false}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, height: hoveredIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="font-sans text-xs text-white/80 leading-relaxed mb-3">
                    {dest.description}
                  </p>
                </motion.div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-white/70">
                    <Plane size={12} />
                    <span className="font-sans text-xs">{dest.trips} trips</span>
                  </div>
                  <a
                    href="/contact"
                    className="flex items-center gap-1.5 bg-gold/90 hover:bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors duration-300"
                  >
                    Book Now
                    <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
