"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Headphones,
  Car,
  DollarSign,
  Map,
  Globe,
  Calendar,
  Languages,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Professional & Experienced Drivers",
    description:
      "All our drivers are licensed, background-checked, and have years of experience navigating Nepal's diverse terrain — from mountain roads to city streets.",
    color: "from-blue-500 to-primary",
    delay: 0,
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our team is available around the clock. Whether it's a last-minute booking change or an emergency, we're always just a call or message away.",
    color: "from-green-500 to-emerald-600",
    delay: 0.1,
  },
  {
    icon: Car,
    title: "Safe & Comfortable Vehicles",
    description:
      "Our fleet consists of well-maintained, air-conditioned vehicles with GPS tracking. Your safety and comfort are our top priorities on every journey.",
    color: "from-orange-500 to-amber-600",
    delay: 0.15,
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Premium travel doesn't have to break the bank. We offer transparent, competitive pricing with no hidden fees — excellent value for world-class service.",
    color: "from-gold to-gold-dark",
    delay: 0.2,
  },
  {
    icon: Map,
    title: "Personalized Travel Plans",
    description:
      "No two travelers are the same. We craft custom itineraries tailored to your interests, timeline, and budget — ensuring a uniquely personal experience.",
    color: "from-pink-500 to-rose-600",
    delay: 0.25,
  },
  {
    icon: Globe,
    title: "Local Travel Expertise",
    description:
      "Born and raised in Nepal, our team has unparalleled knowledge of hidden gems, cultural hotspots, and the best experiences this country has to offer.",
    color: "from-purple-500 to-violet-600",
    delay: 0.3,
  },
  {
    icon: Calendar,
    title: "Flexible Booking Options",
    description:
      "Book in advance or at the last minute. We accommodate your schedule with flexible departure times, easy cancellations, and custom travel dates.",
    color: "from-teal-500 to-cyan-600",
    delay: 0.35,
  },
  {
    icon: Languages,
    title: "Multilingual Assistance",
    description:
      "Our team speaks Nepali, English, Hindi, Chinese, and more — ensuring you feel comfortable and understood throughout your entire journey.",
    color: "from-red-500 to-orange-600",
    delay: 0.4,
  },
];

export default function WhyChooseUsAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 bg-gradient-to-b from-luxury-cream via-white to-luxury-cream overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/6 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/6 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold mb-3">
            Our Commitment to You
          </p>
          <h2 className="font-playfair font-black text-4xl sm:text-5xl md:text-6xl text-primary mb-4 leading-tight">
            Why Choose <span className="text-gradient-gold">Classic Journey</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-2.5 h-2.5 bg-gold rounded-full" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <p className="font-sans text-zinc-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We don&apos;t just take you from A to B — we craft experiences that leave you with
            lifelong memories and a deep love for Nepal.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + feature.delay }}
                className="group relative bg-white rounded-3xl p-7 border border-gold/10 luxury-shadow hover-premium-card overflow-hidden cursor-default"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="font-playfair font-bold text-lg text-primary mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">{feature.description}</p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
