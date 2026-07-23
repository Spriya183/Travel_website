"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, Star } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=90"
          alt="Nepal Himalayan landscape"
          className="w-full h-full object-cover scale-105"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Multi-layer dark overlay for premium look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/30" />
        {/* Animated overlay shimmer */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(196,155,99,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating decorative orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-16 w-64 h-64 bg-gold/10 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md border border-gold/40 text-gold-light px-5 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-[0.2em] mb-8"
        >
          <MapPin size={12} />
          <span>Established in Nepal, 2000</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-playfair font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 text-shadow-premium"
        >
          About{" "}
          <span
            className="relative"
            style={{
              background: "linear-gradient(135deg, #c49b63, #d4af7a, #f0c87a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Classic Journey
          </span>
          <br />
          <span className="text-white/90 text-4xl sm:text-5xl md:text-6xl">Nepal</span>
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-2 h-2 bg-gold rounded-full" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="font-sans text-xl sm:text-2xl text-white/85 font-light leading-relaxed mb-6 max-w-3xl mx-auto italic"
        >
          &ldquo;Your Trusted Travel Partner for Exploring the Beauty of Nepal.&rdquo;
        </motion.p>



        {/* Quick stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { value: "2023", label: "Founded" },
            { value: "1,000+", label: "Happy Travelers" },
            { value: "11+", label: "Destinations" },
            { value: "5★", label: "Rated Service" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-playfair font-black text-2xl sm:text-3xl text-gold">{stat.value}</div>
              <div className="font-sans text-xs text-white/60 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors cursor-pointer"
        >
          <span className="font-sans text-xs uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
