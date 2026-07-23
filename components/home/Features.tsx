"use client";

import { Plane, ShieldCheck, Award, Coins } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Plane className="w-7 h-7" />,
      title: "Airport Pickup & Drop",
      description: "Punctual, round-the-clock airport transfer services. We track your flight details to ensure zero waiting time.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Safe & Comfortable",
      description: "Clean, regularly serviced luxury tourist taxis. Complete peace of mind and comfort on winding Nepal roads.",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Professional Drivers",
      description: "Experienced, licensed, and friendly drivers with deep knowledge of local routes and Nepal's famous tourist spots.",
    },
    {
      icon: <Coins className="w-7 h-7" />,
      title: "Affordable Pricing",
      description: "Honest, competitive, and fully transparent rates with no hidden costs. Superior service value for every mile.",
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-white to-luxury-cream z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
            Why Clasic Journey Nepal
          </h2>
          <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark leading-tight">
            Premium Features for a Smooth Travel
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-white border border-gold/10 hover:border-gold/30 hover:shadow-luxury-lg flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2"
            >
              {/* Animated Icon Container */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-gold group-hover:to-gold-light mb-6 group-hover:scale-110 transition-all duration-500">
                <span className="text-primary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </span>
              </div>

              <h4 className="font-sans font-bold text-lg text-luxury-dark mb-3 group-hover:text-gold transition-colors">
                {feature.title}
              </h4>
              <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
