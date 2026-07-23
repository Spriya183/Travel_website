"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United Kingdom",
    flag: "🇬🇧",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=85",
    rating: 5,
    tour: "Kathmandu & Pokhara 7-Day Tour",
    date: "March 2025",
    review:
      "Absolutely incredible service! Ram Bahadur was our driver for the entire week and he was phenomenal — punctual, knowledgeable, and such a warm personality. He pointed out hidden temples we'd never have found on our own. Classic Journey Nepal made our honeymoon truly magical!",
  },
  {
    name: "Rajesh Kumar",
    country: "India",
    flag: "🇮🇳",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85",
    rating: 5,
    tour: "Lumbini Pilgrimage Tour",
    date: "January 2025",
    review:
      "We came for a spiritual pilgrimage to Lumbini and Classic Journey Nepal arranged everything perfectly. The vehicle was spotlessly clean and comfortable. Our guide Suresh was deeply respectful of the sacred sites. I highly recommend them for religious tours in Nepal.",
  },
  {
    name: "Emma Hoffmann",
    country: "Germany",
    flag: "🇩🇪",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85",
    rating: 5,
    tour: "Everest Base Camp Transfer",
    date: "October 2024",
    review:
      "The transfer to Lukla was organized flawlessly. Everything was on time, the communication beforehand was excellent, and the farewell at the airport was like saying goodbye to old friends. This is how travel companies should operate. Absolutely 5 stars!",
  },
  {
    name: "David Chen",
    country: "Australia",
    flag: "🇦🇺",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85",
    rating: 5,
    tour: "Chitwan Wildlife Safari Tour",
    date: "November 2024",
    review:
      "We had a group of 8 people for a Chitwan wildlife tour and Classic Journey Nepal handled everything beautifully. The Hiace van was comfortable and the hotel arrangements were top-notch. Bikram, our driver, was a joy to travel with — full of wildlife knowledge and stories!",
  },
  {
    name: "Yuki Tanaka",
    country: "Japan",
    flag: "🇯🇵",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=85",
    rating: 5,
    tour: "Mustang Kingdom Explorer",
    date: "May 2025",
    review:
      "Mustang is a dream destination and Classic Journey Nepal made it a reality for us. The roads can be challenging but our driver navigated them with complete confidence. The cultural briefings before each site were incredibly helpful. An experience I will cherish forever.",
  },
  {
    name: "Michael Thompson",
    country: "USA",
    flag: "🇺🇸",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=85",
    rating: 5,
    tour: "Complete Nepal 14-Day Tour",
    date: "February 2025",
    review:
      "We did a 14-day complete Nepal tour and Classic Journey Nepal exceeded every expectation. From Kathmandu temples to Pokhara lakes, from Chitwan safaris to Nagarkot sunrises — every detail was handled with love and professionalism. Book with them. You won't regret it!",
  },
];

function StarDisplay({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < count ? "fill-gold text-gold" : "text-zinc-300"} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleIndexes = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [prev, currentIndex, next];
  };

  const [prevIdx, activeIdx, nextIdx] = getVisibleIndexes();

  return (
    <section className="relative py-28 bg-gradient-to-b from-primary to-primary-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold mb-3">
            Words from Our Travelers
          </p>
          <h2 className="font-playfair font-black text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight">
            Customer <span className="text-gradient-gold">Testimonials</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-2.5 h-2.5 bg-gold rounded-full" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main active card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 luxury-shadow"
              >
                {/* Quote icon */}
                <Quote size={48} className="text-gold/30 absolute top-8 right-8" />

                {/* Reviewer info */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full object-cover border-3 border-gold/40 shadow-lg"
                      style={{ borderWidth: "3px" }}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gold text-white text-sm rounded-full w-7 h-7 flex items-center justify-center shadow-md">
                      {testimonials[currentIndex].flag}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-xl text-white mb-0.5">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="font-sans text-sm text-gold-light font-semibold">
                      {testimonials[currentIndex].country}
                    </p>
                    <p className="font-sans text-xs text-white/50 mt-1">
                      {testimonials[currentIndex].tour} · {testimonials[currentIndex].date}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <StarDisplay count={testimonials[currentIndex].rating} />
                  </div>
                </div>

                {/* Review text */}
                <p className="font-sans text-white/80 text-base leading-relaxed italic">
                  &ldquo;{testimonials[currentIndex].review}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={goToPrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold/20 hover:border-gold/40 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === currentIndex
                      ? "w-8 h-2.5 bg-gold"
                      : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold/20 hover:border-gold/40 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Side preview cards - desktop only */}
          <div className="hidden xl:flex absolute top-1/2 -translate-y-1/2 left-0 w-64 opacity-40 scale-90">
            <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={testimonials[prevIdx].avatar}
                  alt={testimonials[prevIdx].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-sans font-bold text-xs text-white">{testimonials[prevIdx].name}</p>
                  <p className="font-sans text-xs text-gold-light">{testimonials[prevIdx].country}</p>
                </div>
              </div>
              <p className="font-sans text-xs text-white/60 line-clamp-2">
                {testimonials[prevIdx].review}
              </p>
            </div>
          </div>

          <div className="hidden xl:flex absolute top-1/2 -translate-y-1/2 right-0 w-64 opacity-40 scale-90">
            <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={testimonials[nextIdx].avatar}
                  alt={testimonials[nextIdx].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-sans font-bold text-xs text-white">{testimonials[nextIdx].name}</p>
                  <p className="font-sans text-xs text-gold-light">{testimonials[nextIdx].country}</p>
                </div>
              </div>
              <p className="font-sans text-xs text-white/60 line-clamp-2">
                {testimonials[nextIdx].review}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
