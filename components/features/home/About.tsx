"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  target: number;
  duration?: number;
  suffix?: string;
}

function CountUp({ target, duration = 2000, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);

    const timer = setInterval(() => {
      const step = Math.ceil(end / (totalMiliseconds / incrementTime));
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <div ref={elementRef} className="font-playfair text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-1">
      {count}
      {suffix}
    </div>
  );
}

export default function About() {
  const highlights = [
    "Punctual and Safe Airport Transfers",
    "Tailored Sightseeing & Road Trips",
    "Clean, Well-Maintained Tourist Taxis",

  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-luxury-cream to-white z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden shadow-luxury-lg border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 z-10">
              <Image
                src="/images/about_us.png"
                alt="Clasic Journey Nepal Taxi Service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Small decorative overlay details */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/15 rounded-full blur-2xl z-0"
            />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl z-0" />
          </motion.div>

          {/* Right Side: Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
              Discover Our Story
            </h2>
            <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark leading-tight mb-6">
              About Clasic Journey Nepal
            </h3>

            <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mb-6 rounded-full" />

            <p className="font-sans text-zinc-700 leading-relaxed mb-4 text-base">
              Clasic Journey Nepal is a trusted airport tourist taxi service dedicated to providing comfortable, safe, and reliable transportation for travelers visiting Nepal.
            </p>
            <p className="font-sans text-zinc-700 leading-relaxed mb-4 text-base">
              Whether you arrive at Tribhuvan International Airport or plan to explore Nepal&apos;s breathtaking destinations, we ensure a smooth and memorable journey.
            </p>
            <p className="font-sans text-zinc-700 leading-relaxed mb-6 text-base">
              Our experienced drivers prioritize customer safety, punctuality, and hospitality. From airport transfers to city sightseeing and long-distance tours, we are committed to delivering quality service with comfort and professionalism.
            </p>

            {/* Core bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  key={idx}
                  className="flex items-center gap-2 text-sm text-zinc-800"
                >
                  <CheckCircle2 className="text-gold flex-shrink-0" size={18} />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Counters Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.01 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 pt-12 border-t border-gold/20"
            >
              <div className="flex flex-col text-center">
                <CountUp target={2} suffix="+" />
                <span className="font-sans text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1">
                  Tourist Taxis
                </span>
              </div>

              <div className="flex flex-col text-center">
                <CountUp target={10} suffix="k+" />
                <span className="font-sans text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1">
                  Happy Clients
                </span>
              </div>

              <div className="flex flex-col text-center">
                <CountUp target={20} suffix="k+" />
                <span className="font-sans text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1">
                  Trips Done
                </span>
              </div>

              <div className="flex flex-col text-center">
                <CountUp target={18} suffix="+" />
                <span className="font-sans text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1">
                  Years Experience
                </span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
