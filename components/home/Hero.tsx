"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Compass, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const slides = [
    {
      image: "/images/hero_mountains.png",
      title: "Majestic Himalayan",
      subtitle: "Adventures",
      description: "Experience the breathtaking beauty of Nepal's mountain ranges"
    },
    {
      image: "/images/hero_pokhara.png",
      title: "Serene Pokhara",
      subtitle: "Valley",
      description: "Discover tranquility in the heart of Nepal's lake city"
    },
    {
      image: "/images/hero_pashupatinath.png",
      title: "Sacred Cultural",
      subtitle: "Heritage",
      description: "Immerse yourself in Nepal's rich spiritual traditions"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* Static Background Base - Prevents black flash */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${slides[0].image}')` }}
      />

      {/* Background Images with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === activeIndex && (
            <motion.div
              key={slide.image}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          )
        ))}
      </AnimatePresence>

      {/* Enhanced Premium Gradient Overlays for Better Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/85 via-luxury-dark/60 to-luxury-dark/85 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10" />
      
      {/* Additional Text Contrast Layer */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-30 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Side - Main Content */}
          <div className="flex-1 text-center lg:text-left">



            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="font-playfair font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1] mb-4 drop-shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="block text-shadow-luxury"
                  >
                    {slides[activeIndex].title}
                  </motion.span>
                </AnimatePresence>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark drop-shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`subtitle-${activeIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-shadow-luxury"
                    >
                      {slides[activeIndex].subtitle}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="font-sans text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto lg:mx-0 mb-4 drop-shadow-lg"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`desc-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-shadow-luxury"
                >
                  {slides[activeIndex].description}
                </motion.span>
              </AnimatePresence>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="font-sans text-base text-white/90 max-w-xl mx-auto lg:mx-0 mb-10 drop-shadow-md"
            >
              Luxury airport transfers • Customized tours • Professional chauffeurs • 24/7 service
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/services"
                className="group relative overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-light hover:via-gold hover:to-gold-dark text-white font-sans font-bold py-4 px-8 rounded-full shadow-2xl shadow-gold/30 hover:shadow-gold/50 transform hover:scale-105 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <Compass className="relative group-hover:rotate-180 transition-transform duration-700" size={20} />
                <span className="relative">Explore Services</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-sans font-bold py-4 px-8 rounded-full border-2 border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
              >
                <Calendar size={20} />
                <span>Book Now</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-64 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-sans text-3xl font-black text-white">50+</p>
                  <p className="font-sans text-xs text-zinc-300 uppercase tracking-wide">Destinations</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-64 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-3xl font-black text-white">10k+</p>
                  <p className="font-sans text-xs text-zinc-300 uppercase tracking-wide">Happy Travelers</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-64 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-light to-gold-dark flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-3xl font-black text-white">4.9</p>
                  <p className="font-sans text-xs text-zinc-300 uppercase tracking-wide">Average Rating</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>



      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 right-8 z-30 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-white/60 hover:text-gold transition-colors duration-300 cursor-pointer group"
        >
          <span className="text-xs font-sans tracking-widest uppercase font-semibold group-hover:text-gold-light">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 group-hover:border-gold/50 flex items-start justify-center p-2 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-gold rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-20" />
    </section>
  );
}
