"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Thermometer, Luggage, CheckCircle2 } from "lucide-react";

const vehicles = [
  {
    name: "Tourist Car",
    model: "Toyota Corolla / Suzuki Swift",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=85",
    capacity: "1–3 Passengers",
    features: ["GPS Navigation", "Comfortable Seats", "Child Safety Lock", "First Aid Kit"],
    airConditioning: true,
    luggage: "2 Large Bags",
    ideal: "Solo & Couple Trips",
    color: "from-blue-500 to-primary",
    badge: "Economy",
  },
  {
    name: "SUV",
    model: "Toyota Fortuner / Land Cruiser",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700&q=85",
    capacity: "1–5 Passengers",
    features: ["4WD Capability", "Premium Interiors", "Entertainment System", "Panoramic Views"],
    airConditioning: true,
    luggage: "4 Large Bags",
    ideal: "Mountain Tours & Families",
    color: "from-gold to-gold-dark",
    badge: "Most Popular",
  },
  {
    name: "Hiace Van",
    model: "Toyota HiAce (Standard/Deluxe)",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=700&q=85",
    capacity: "6–12 Passengers",
    features: ["Spacious Interior", "Curtains & Privacy", "USB Charging", "Reclining Seats"],
    airConditioning: true,
    luggage: "8+ Large Bags",
    ideal: "Groups & Team Tours",
    color: "from-green-500 to-emerald-600",
    badge: "Group Choice",
  },
  {
    name: "Luxury Jeep",
    model: "Toyota Land Cruiser Prado",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=700&q=85",
    capacity: "1–4 Passengers",
    features: ["Off-Road Ready", "Leather Interiors", "Sunroof", "Premium Audio"],
    airConditioning: true,
    luggage: "3 Large Bags",
    ideal: "Luxury & Remote Destinations",
    color: "from-purple-500 to-violet-600",
    badge: "Premium",
  },
];

export default function OurFleet() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-luxury-cream overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/6 rounded-full blur-3xl" />
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
            Travel in Style
          </p>
          <h2 className="font-playfair font-black text-4xl sm:text-5xl md:text-6xl text-primary mb-4 leading-tight">
            Our <span className="text-gradient-gold">Premium Fleet</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-2.5 h-2.5 bg-gold rounded-full" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <p className="font-sans text-zinc-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Choose from our range of well-maintained, comfortable vehicles — from compact cars to
            luxury jeeps — all equipped for Nepal&apos;s diverse terrain.
          </p>
        </motion.div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.12 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gold/10 luxury-shadow hover-premium-card"
            >
              {/* Vehicle Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} — Classic Journey Nepal fleet`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block bg-gradient-to-r ${vehicle.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow`}
                  >
                    {vehicle.badge}
                  </span>
                </div>

                {/* AC badge */}
                {vehicle.airConditioning && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                      <Thermometer size={10} className="text-blue-300" />
                      <span>AC</span>
                    </div>
                  </div>
                )}

                {/* Vehicle name overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-playfair font-bold text-xl text-white">{vehicle.name}</h3>
                  <p className="font-sans text-xs text-white/70">{vehicle.model}</p>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-6 space-y-5">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 pb-4 border-b border-gold/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users size={14} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-sans text-xs text-zinc-500">Capacity</div>
                      <div className="font-sans font-bold text-xs text-primary">{vehicle.capacity}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Luggage size={14} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-sans text-xs text-zinc-500">Luggage</div>
                      <div className="font-sans font-bold text-xs text-gold-dark">{vehicle.luggage}</div>
                    </div>
                  </div>
                </div>

                {/* Ideal for */}
                <div className="flex items-center gap-2">
                  <div
                    className={`h-5 w-1 rounded-full bg-gradient-to-b ${vehicle.color}`}
                  />
                  <span className="font-sans text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Ideal For:
                  </span>
                  <span className="font-sans text-xs font-semibold text-primary">{vehicle.ideal}</span>
                </div>

                {/* Features list */}
                <div className="space-y-2">
                  {vehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-600">
                      <CheckCircle2 size={13} className="text-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Book CTA */}
                <a
                  href="/contact"
                  className={`block w-full text-center bg-gradient-to-r ${vehicle.color} text-white font-sans font-bold text-sm py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
                >
                  Book This Vehicle
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
