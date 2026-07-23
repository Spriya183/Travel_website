"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "David Miller",
      country: "Australia",
      initials: "DM",
      rating: 5,
      text: "Unbelievable service! The driver picked us up right on time at Tribhuvan International Airport. The SUV taxi was clean, spacious, and the ride to Pokhara was incredibly smooth. Highly recommended for any traveler visiting Nepal!",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Sarah Jenkins",
      country: "United Kingdom",
      initials: "SJ",
      rating: 5,
      text: "We hired Clasic Journey Nepal for our family multi-day trip. They helped us design a custom package for Kathmandu, Chitwan, and Pokhara. Our driver was extremely polite, spoke good English, and knew the safest mountain routes.",
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Rajesh Sharma",
      country: "India",
      initials: "RS",
      rating: 5,
      text: "Highly professional tourist taxi service. Very easy booking process via WhatsApp and prompt communication. The rates are transparent with no hidden margins. Will definitely use them again for our next Himalayan holiday.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "Emily Dupont",
      country: "France",
      initials: "ED",
      rating: 5,
      text: "As a solo female traveler, safety was my primary concern. The driver from Clasic Journey Nepal was extremely respectful, helpful, and professional throughout my sightseeing tours in Kathmandu and Bhaktapur.",
      color: "from-purple-600 to-pink-600",
    },
    {
      name: "Kenji Tanaka",
      country: "Japan",
      initials: "KT",
      rating: 5,
      text: "Superb airport drop-off service. The driver arrived 10 minutes early at our hotel. The sedan tourist taxi was clean and the air conditioning worked perfectly. Safe driving practices and great customer care.",
      color: "from-rose-500 to-red-600",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) {
        autoPlayRef.current();
      }
    };

    if (!isHovered) {
      const interval = setInterval(play, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-white to-luxury-cream z-20 overflow-hidden">
      {/* Decorative light gradient backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
            Reviews
          </h2>
          <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark leading-tight">
            What Our Clients Say
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonial Box */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-white border border-gold/20 rounded-3xl p-8 sm:p-12 md:p-16 shadow-luxury-lg overflow-hidden"
        >
          {/* Quote Icon */}
          <div className="absolute top-8 right-8 text-primary/10">
            <Quote size={80} className="transform rotate-180" />
          </div>

          {/* Slider Content Wrapper */}
          <div className="relative min-h-[250px] flex flex-col items-center justify-between text-center">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>

            {/* Review Text */}
            <p className="font-sans text-base sm:text-lg text-zinc-700 italic leading-relaxed font-light mb-8 max-w-2xl">
              &ldquo;{reviews[activeIndex].text}&rdquo;
            </p>

            {/* User Profile */}
            <div className="flex flex-col items-center">
              {/* Circular Initials Avatar */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${reviews[activeIndex].color} flex items-center justify-center text-white font-sans font-bold text-lg shadow-md border-2 border-white mb-3`}>
                {reviews[activeIndex].initials}
              </div>
              <h4 className="font-sans font-bold text-zinc-950 text-base">
                {reviews[activeIndex].name}
              </h4>
              <p className="font-sans text-xs font-semibold text-zinc-500 uppercase tracking-widest mt-1">
                {reviews[activeIndex].country}
              </p>
            </div>
          </div>

          {/* Manual Arrow Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-gold bg-white hover:bg-gold/10 p-2.5 rounded-full border border-gold/20 shadow-md transition-all cursor-pointer hidden sm:block"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-gold bg-white hover:bg-gold/10 p-2.5 rounded-full border border-gold/20 shadow-md transition-all cursor-pointer hidden sm:block"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-gold w-8" : "bg-zinc-300 w-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
