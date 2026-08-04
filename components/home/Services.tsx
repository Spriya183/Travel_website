"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Airport Pickup & Drop",
      slug: "airport-pickupAndDrop",
      image: "/images/airport_pickupanddrop.png",
      description: "Reliable airport pickup and drop services ensuring a safe, comfortable, and hassle-free journey to your destination..",
    },
    {
      title: "Hotel Transfer",
      slug: "hotel-transfer",
      image: "/images/hotel.jpg",
      description: "Comfortable and convenient hotel transfer services for a seamless travel experience.",
    },
    {
      title: "Kathmandu City Tour",
      slug: "kathmandu-city-tour",
      image: "/images/kathmanducity.jpg",
      description: "Explore the UNESCO World Heritage sites including Pashupatinath, Swayambhunath, Boudhanath, and Kathmandu Durbar Square.",
    },
    {
      title: "Pokhara Tour",
      slug: "pokhara-tour",
      image: "/images/hero_pokhara.png",
      description: "Explore the beauty of Pokhara with our unforgettable and hassle-free tour experience.",
    },
    {
      title: "Chitwan Tour",
      slug: "chitwan-tour",
      image: "/images/chitwantour.jpg",
      description: "Experience the wildlife and natural beauty of Chitwan with our comfortable and guided tours.",
    },
    {
      title: "Lumbini Tour",
      slug: "lumbini-tour",
      image: "/images/lumbini.jpg",
      description: "Discover the birthplace of Lord Buddha with our peaceful and memorable Lumbini tour.",
    },

    {
      title: "Mountain View",
      slug: "Mountaion View",
      image: "/images/nagarkotview.jpg",
      description: "Drive up to Nagarkot hill station for the most iconic panoramic Himalayan sunrise views and tranquil mountain scenery.",
    },
    {
      title: "All Day Booking",
      slug: "all-day-booking",
      image: "/images/alldaybooking.png",
      description: "Hire a vehicle and driver for the entire day. Perfect for business trips, visiting relatives, or custom shopping tours in the valley.",
    },
    {
      title: "Custom Nepal Tour",
      slug: "custom-nepal-tour",
      image: "/images/nepaltour.jpg",
      description: "Plan your own multi-day itinerary. Hire our experienced driver and premium tourist vehicle for a personalized cross-country adventure.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 15 } },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-luxury-cream z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
            What We Offer
          </h2>
          <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark leading-tight">
            Clasic Journey Nepal Service
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full bg-white rounded-2xl overflow-hidden border border-gold/10 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-primary/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <span className="text-white text-base font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      View Details <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-sans font-bold text-xl text-luxury-dark mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="font-sans text-sm text-zinc-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
