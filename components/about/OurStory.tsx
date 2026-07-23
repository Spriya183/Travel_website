"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flag, TrendingUp, Globe, Heart } from "lucide-react";

const milestones = [
  {
    year: "2023",
    icon: Flag,
    title: "Company Founded",
    description:
      "Classic Journey Nepal was born from a deep passion for sharing Nepal's extraordinary beauty with the world. Founded by travel enthusiasts who believed that every visitor deserves a safe, comfortable, and culturally enriching experience.",
    color: "from-gold to-gold-light",
    highlight: true,
  },
  {
    year: "2024",
    icon: TrendingUp,
    title: "Expanded Services",
    description:
      "We expanded our fleet and service offerings to include customized tour packages, long-distance travel to Pokhara, Chitwan, Lumbini, and Mustang. Added professional guides and luxury vehicle options to serve discerning travelers.",
    color: "from-primary to-secondary",
    highlight: false,
  },
  {
    year: "2025",
    icon: Globe,
    title: "Serving International Tourists",
    description:
      "Reached a milestone of serving international tourists from over 20 countries. Launched multilingual support and partnered with premium hotels across Nepal to offer complete travel packages for a seamless experience.",
    color: "from-secondary to-primary",
    highlight: false,
  },
  {
    year: "2026",
    icon: Heart,
    title: "Growing With Nepal",
    description:
      "Continuing to grow with a mission to preserve and promote Nepal's heritage, culture, and natural wonders. Every journey we curate is a tribute to this magnificent land and its warm-hearted people.",
    color: "from-gold-dark to-gold",
    highlight: false,
  },
];

export default function OurStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-luxury-cream to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute inset-0 bg-gradient-to-l from-gold to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold mb-3">
            Our Journey Through Time
          </p>
          <h2 className="font-playfair font-black text-4xl sm:text-5xl md:text-6xl text-primary mb-6 leading-tight">
            The Story Behind{" "}
            <span className="text-gradient-gold">Classic Journey</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-2.5 h-2.5 bg-gold rounded-full" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <p className="font-sans text-zinc-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Born from a passion for Nepal&apos;s breathtaking landscapes, ancient heritage, and
            vibrant culture — Classic Journey Nepal was created to connect the world with the magic
            of this incredible Himalayan nation.
          </p>
        </motion.div>
        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/20 via-gold/60 to-gold/20 transform -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col gap-8`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`group p-8 rounded-3xl border luxury-shadow hover-premium-card cursor-default relative overflow-hidden ${milestone.highlight
                        ? "bg-gradient-to-br from-primary to-secondary text-white border-primary/20"
                        : "bg-white border-gold/10 text-zinc-800"
                        }`}
                    >
                      {milestone.highlight && (
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,155,99,0.8),_transparent)]" />
                      )}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${milestone.highlight
                          ? "bg-gold/20 text-gold-light"
                          : `bg-gradient-to-r ${milestone.color} text-white`
                          }`}
                      >
                        <Icon size={12} />
                        <span>{milestone.year}</span>
                      </div>
                      <h3
                        className={`font-playfair font-bold text-2xl mb-3 ${milestone.highlight ? "text-white" : "text-primary"
                          }`}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        className={`font-sans text-sm leading-relaxed ${milestone.highlight ? "text-white/80" : "text-zinc-600"
                          }`}
                      >
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center items-center flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg border-4 border-white`}
                    >
                      <Icon size={22} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
