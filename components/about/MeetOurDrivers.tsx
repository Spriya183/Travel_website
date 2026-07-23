"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Phone, MessageCircle, Award, Languages, Clock } from "lucide-react";

const drivers = [
  {
    name: "Ram Bahadur Thapa",
    title: "Senior Tour Driver & Guide",
    experience: "12 Years",
    languages: ["Nepali", "English", "Hindi"],
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85",
    badge: "Top Rated",
    bio: "Ram has been guiding international tourists through Nepal's most spectacular routes for over 12 years. Known for his warmth, punctuality, and encyclopedic knowledge of Nepal's history and culture, he turns every drive into a memorable story.",
    specialties: ["Mountain Routes", "Heritage Tours", "Airport Transfers"],
    certifications: ["Nepal Tourism Board Licensed", "Defensive Driving Certified"],
    phone: "9779824962065",
  },
  {
    name: "Suresh Gurung",
    title: "Travel Guide & Driver",
    experience: "9 Years",
    languages: ["Nepali", "English", "Chinese"],
    rating: 4.8,
    reviews: 218,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85",
    badge: "Expert Guide",
    bio: "Suresh specializes in cultural and adventure tours across Nepal. His intimate knowledge of Pokhara, Chitwan, and the Annapurna region makes him the ideal companion for explorers seeking authentic Nepalese experiences.",
    specialties: ["Cultural Tours", "Wildlife Safaris", "Trekking Support"],
    certifications: ["Licensed Tour Guide", "First Aid Certified"],
    phone: "9779824962065",
  },
  {
    name: "Bikram Shrestha",
    title: "Long-Distance Travel Specialist",
    experience: "8 Years",
    languages: ["Nepali", "English", "Hindi", "Tibetan"],
    rating: 4.7,
    reviews: 176,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85",
    badge: "Multilingual",
    bio: "Bikram is our specialist for long-distance journeys — from Kathmandu to Mustang, Lumbini, and Ilam. His calm demeanor, safe driving, and ability to communicate in four languages make him a favorite among international travelers.",
    specialties: ["Long-Distance Routes", "Mustang & Ilam", "Buddhist Pilgrimages"],
    certifications: ["Nepal Tourism Board Licensed", "Route Safety Certified"],
    phone: "9779824962065",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={star <= Math.floor(rating) ? "text-gold fill-gold" : "text-zinc-300"}
        />
      ))}
    </div>
  );
}

export default function MeetOurDrivers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 bg-gradient-to-b from-luxury-cream via-white to-luxury-cream overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-gold mb-3">
            Our Professional Team
          </p>
          <h2 className="font-playfair font-black text-4xl sm:text-5xl md:text-6xl text-primary mb-4 leading-tight">
            Meet Our <span className="text-gradient-gold">Expert Drivers</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="w-2.5 h-2.5 bg-gold rounded-full" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <p className="font-sans text-zinc-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Our licensed, experienced drivers are not just chauffeurs — they are your personal
            guides, storytellers, and guardians throughout your Nepali adventure.
          </p>
        </motion.div>

        {/* Driver Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {drivers.map((driver, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gold/10 luxury-shadow hover-premium-card"
            >
              {/* Card top image area */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={driver.image}
                  alt={`${driver.name} — Classic Journey Nepal`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-gold to-gold-light text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    <Award size={11} />
                    {driver.badge}
                  </span>
                </div>

                {/* Bottom name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-xl text-white mb-0.5">{driver.name}</h3>
                  <p className="font-sans text-xs text-gold-light font-semibold uppercase tracking-wider">
                    {driver.title}
                  </p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 space-y-5">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 pb-5 border-b border-gold/10">
                  <div className="text-center">
                    <div className="font-playfair font-black text-xl text-primary">{driver.experience}</div>
                    <div className="font-sans text-xs text-zinc-500 uppercase tracking-wider mt-0.5">
                      <Clock size={10} className="inline mr-1" />Exp.
                    </div>
                  </div>
                  <div className="text-center border-x border-gold/10">
                    <div className="font-playfair font-black text-xl text-primary">{driver.rating}</div>
                    <div className="font-sans text-xs text-zinc-500 uppercase tracking-wider mt-0.5 flex items-center justify-center gap-0.5">
                      <Star size={10} className="fill-gold text-gold" />Rating
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-playfair font-black text-xl text-primary">{driver.reviews}</div>
                    <div className="font-sans text-xs text-zinc-500 uppercase tracking-wider mt-0.5">Reviews</div>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-2">
                  <StarRating rating={driver.rating} />
                  <span className="font-sans text-xs text-zinc-500">{driver.rating}/5 Rating</span>
                </div>

                {/* Bio */}
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">{driver.bio}</p>

                {/* Languages */}
                <div className="flex items-start gap-2">
                  <Languages size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  <div className="flex flex-wrap gap-1.5">
                    {driver.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="font-sans text-xs bg-gold/10 text-gold-dark border border-gold/20 px-2.5 py-1 rounded-full font-semibold"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-1.5">
                  {driver.certifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-600">
                      <Award size={12} className="text-gold flex-shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {driver.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="font-sans text-xs bg-primary/5 text-primary border border-primary/10 px-2.5 py-1 rounded-full font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Contact buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`tel:+${driver.phone}`}
                    className="flex items-center justify-center gap-2 bg-primary text-white text-xs font-bold py-3 rounded-xl hover:bg-primary-dark transition-colors duration-300"
                  >
                    <Phone size={13} />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${driver.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-light text-white text-xs font-bold py-3 rounded-xl hover:from-gold-dark hover:to-gold transition-all duration-300"
                  >
                    <MessageCircle size={13} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
