
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  CheckCircle, Clock, Shield, DollarSign, Users, Star,
  MapPin, Calendar, Award, Headphones, Car, Plane,
  Heart, Globe, ArrowRight, Phone, Mail, Zap, Info
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Counter Component
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div
      ref={elementRef}
      className="font-playfair text-4xl md:text-5xl font-black text-gold"
    >
      {count}
      {suffix}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_mountains.png"
            alt="Classic Journey Nepal"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/80 via-primary/70 to-luxury-dark/90" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-gold mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-shadow-premium">
            About Classic Journey Nepal
          </h1>

          <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            Your Trusted Travel Partner for Exploring the Beauty of Nepal
          </p>
        </motion.div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 bg-gradient-to-b from-white to-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
              Our Journey
            </h2>

            <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark">
              The Story Behind Classic Journey Nepal
            </h3>

            <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-zinc-700 text-lg leading-relaxed mb-16"
            >
              Founded with a passion for showcasing Nepal&apos;s rich heritage, vibrant culture, and
              breathtaking natural beauty, Classic Journey Nepal was born from the desire to help
              travelers experience our beloved country comfortably and safely.
            </motion.p>

            {/* Timeline */}
            <div className="relative">

              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold via-gold-light to-gold" />

              {[
                {
                  year: "2007",
                  title: "Classic Journey Nepal Founded",
                  desc: "Started with a passion for welcoming travelers to Nepal and providing safe, comfortable, and reliable transportation for their journeys."
                },
                {
                  year: "2012",
                  title: "Airport Transfers & Kathmandu Tours",
                  desc: "Expanded our services to provide airport pickups, hotel transfers, and full-day private taxi services for travelers exploring Kathmandu and its cultural heritage."
                },
                {
                  year: "2018",
                  title: "Exploring More of Nepal",
                  desc: "Expanded our transportation services beyond Kathmandu, helping travelers discover popular destinations including Pokhara, Chitwan, Lumbini, and Mustang."
                },
                {
                  year: "2023",
                  title: "Welcoming Travelers Worldwide",
                  desc: "Continued serving travelers from around the world with reliable private transportation, personalized journeys, and friendly local service."
                },
                {
                  year: "2026",
                  title: "Your Journey Across Nepal",
                  desc: "Today, Classic Journey Nepal helps travelers enjoy Nepal with airport pickups, hotel transfers, Kathmandu sightseeing, and private transportation for journeys across the country."
                },
              ].map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`relative mb-12 ${idx % 2 === 0
                    ? "text-right pr-8 md:pr-16"
                    : "text-left pl-8 md:pl-16 ml-auto"
                    } w-full md:w-1/2`}
                >
                  <div className="bg-white border border-gold/20 rounded-2xl p-6 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1">

                    <div
                      className="absolute top-8 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg"
                      style={{
                        [idx % 2 === 0 ? "right" : "left"]: "-2.5rem"
                      }}
                    />

                    <span className="inline-block bg-gradient-to-r from-gold to-gold-light text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                      {milestone.year}
                    </span>

                    <h4 className="font-sans font-bold text-xl text-luxury-dark mb-2">
                      {milestone.title}
                    </h4>

                    <p className="text-zinc-600 text-sm">
                      {milestone.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
                Who We Are
              </h2>

              <h3 className="font-playfair text-3xl sm:text-4xl font-extrabold text-luxury-dark mb-6">
                Your Premier Travel Companion in Nepal
              </h3>

              <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mb-6 rounded-full" />

              <div className="space-y-4 text-zinc-700 leading-relaxed">

                <p>
                  We provide comprehensive travel solutions including airport transfers, city tours,
                  long-distance travel, and fully customized travel packages throughout Nepal.
                </p>

                <p>
                  Our commitment to safety, comfort, punctuality, and creating unforgettable experiences
                  sets us apart in the industry. Every journey with us is meticulously planned with
                  attention to the smallest details.
                </p>

                <p>
                  From the moment you land at Tribhuvan International Airport to your last farewell,
                  we ensure your Nepal adventure is seamless, comfortable, and memorable.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">

                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Clock, text: "24/7 Availability" },
                  { icon: Award, text: "5-Star Rated" },
                  { icon: Users, text: "Expert Team" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-gradient-to-br from-luxury-cream to-white rounded-xl border border-gold/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center">
                      <item.icon size={20} className="text-gold" />
                    </div>

                    <span className="font-medium text-sm text-luxury-dark">
                      {item.text}
                    </span>
                  </div>
                ))}

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">

                <div className="bg-gradient-to-r from-gold/10 to-gold-light/10 p-6 rounded-2xl text-center">
                  <h4 className="font-playfair text-xl font-bold text-luxury-dark mb-4">Available Taxi Options</h4>
                  <div className="flex justify-center items-center gap-8">
                    <div className="flex flex-col items-center">
                      <Car size={40} className="text-gold mb-2" />
                      <span className="font-medium text-luxury-dark">2 Taxis Ready 24/7</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Clock size={40} className="text-gold mb-2" />
                      <span className="font-medium text-luxury-dark">Book 2‑4 hr in advance</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-48 rounded-2xl overflow-hidden shadow-luxury">
                  <Image
                    src="/images/about_taxi.png"
                    alt="Our Vehicle"
                    fill
                    className="object-cover"
                  />
                </div>

              </div>

              <div className="space-y-4 pt-8">

                <div className="relative h-48 rounded-2xl overflow-hidden shadow-luxury">
                  <Image
                    src="/images/hero_pokhara.png"
                    alt="Pokhara"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-64 rounded-2xl overflow-hidden shadow-luxury">
                  <Image
                    src="/images/hero_mountains.png"
                    alt="Himalayas"
                    fill
                    className="object-cover"
                  />
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Statistics - Numbers That Speak */}
      <section className="py-24 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
              Our Achievements
            </h2>

            <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Numbers That Speak
            </h3>

            <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { target: 20, suffix: "K+", label: "Happy Travelers" },
              { target: 11, suffix: "k+", label: "Successful Tours" },
              { target: 15, suffix: "+", label: "Popular Destinations" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <CountUp target={stat.target} suffix={stat.suffix} />

                <p className="text-white/80 mt-2 text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Professional Drivers & Guides */}
      <section className="py-24 bg-gradient-to-b from-luxury-cream to-white relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-light/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-playfair text-xs uppercase tracking-[0.25em] font-bold text-gold mb-3">
              Our Professional Team
            </h2>

            <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark">
              Travel With Experienced Local Professionals
            </h3>

            <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-5 rounded-full" />

            <p className="text-zinc-600 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Your journey is supported by professional drivers who know Nepal&apos;s roads,
              destinations, and local culture. Need more than transportation?
              A personal local guide can also be arranged upon request.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            {[
              {
                title: "Professional Drivers",
                desc: "Our experienced and courteous drivers ensure a safe, comfortable, and reliable journey across Nepal.",
                image: "/images/about_taxi.png",
                icon: Car,
              },
              {
                title: "Local Guides Available",
                desc: "Want to learn more about Nepal's history, culture, temples and traditions? A personal local guide can be arranged when needed.",
                image: "/images/hero_pashupatinath.png",
                icon: MapPin,
              },
              {
                title: "Personalized Assistance",
                desc: "From airport pickup to sightseeing and long-distance journeys, we arrange the right support based on your travel needs.",
                image: "/images/hero_pokhara.png",
                icon: Users,
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gold/10 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 via-transparent to-transparent" />
                </div>

                <div className="p-7 text-center min-h-[235px] flex flex-col">

                  <h4 className="font-playfair text-2xl font-bold text-luxury-dark mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h4>

                  <div className="w-10 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-5 rounded-full" />

                  <p className="text-zinc-600 text-sm leading-7">
                    {service.desc}
                  </p>

                  <div className="mt-auto pt-6">

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                    <div className="flex justify-center items-center gap-2 mt-5 text-xs font-semibold uppercase tracking-wider text-gold">
                      <Shield size={14} />
                      <span>Safe • Reliable • Local</span>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-10 bg-white rounded-3xl border border-gold/10 shadow-luxury p-6 sm:p-8"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

              <div className="w-16 h-16 flex-shrink-0 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg">
                <Headphones size={28} className="text-white" />
              </div>

              <div className="text-center lg:text-left flex-1">

                <h4 className="font-playfair text-2xl font-bold text-luxury-dark mb-2">
                  Need a Driver or Personal Guide?
                </h4>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  Tell us what kind of experience you&apos;re looking for, and we&apos;ll help arrange the right service for your journey.
                </p>

              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                Contact Us
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Destinations Covered */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
              Explore With Us
            </h2>

            <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark">
              Destinations We Cover
            </h3>

            <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">

            {[
              {
                name: "Kathmandu city",
                trips: "1000+",
                image: "/images/hero_pashupatinath.png"
              },
              {
                name: "Pokhara",
                trips: "200+",
                image: "/images/hero_pokhara.png"
              },
              {
                name: "Chitwan",
                trips: "270+",
                image: "/images/chitwantour.jpg"
              },
              {
                name: "Lumbini",
                trips: "150+",
                image: "/images/lumbini.jpg"
              },
              {
                name: "Nagarkot",
                trips: "700+",
                image: "/images/nagarkotview.jpg"
              },
              {
                name: "Bandipur",
                trips: "100+",
                image: "/images/bandipur.jpg"
              },
              {
                name: "Ilam",
                trips: "50+",
                image: "/images/ilam.jpg"
              },
              {
                name: "Chandragiri",
                trips: "800+",
                image: "/images/Chandragiricablecar.jpg"
              },
              {
                name: "Chitlang",
                trips: "800+",
                image: "/images/chitlang.jpg"
              },
            ].map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 cursor-pointer"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-gold" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {dest.trips} Trips
                    </span>
                  </div>

                  <h4 className="font-playfair text-2xl font-bold mb-2 group-hover:text-gold transition-colors">
                    {dest.name}
                  </h4>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
              Why Book With Us
            </h2>

            <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark">
              Your Benefits & Advantages
            </h3>

            <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: Users,
                title: "Professional Drivers",
                desc: "Licensed & experienced tour guides"
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                desc: "Round-the-clock customer assistance"
              },
              {
                icon: Car,
                title: "Comfortable Vehicles",
                desc: "Clean, modern, well-maintained fleet"
              },
              {
                icon: DollarSign,
                title: "Affordable Pricing",
                desc: "Transparent rates, no hidden fees"
              },
              {
                icon: MapPin,
                title: "Personalized Plans",
                desc: "Customized itineraries for you"
              },
              {
                icon: Globe,
                title: "Local Expertise",
                desc: "Deep knowledge of Nepal's culture"
              },
              {
                icon: Calendar,
                title: "Flexible Booking",
                desc: "Easy reservation & cancellation"
              },
              {
                icon: Award,
                title: "Multilingual Staff",
                desc: "English, Hindi, Chinese, Japanese"
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-gradient-to-br from-luxury-cream to-white p-6 rounded-2xl border border-gold/10 hover:border-gold/30 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold-light/20 group-hover:from-gold group-hover:to-gold-light flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <feature.icon
                    size={24}
                    className="text-gold group-hover:text-white transition-colors"
                  />
                </div>

                <h4 className="font-sans font-bold text-lg text-luxury-dark mb-2 group-hover:text-gold transition-colors">
                  {feature.title}
                </h4>

                <p className="text-sm text-zinc-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Our Taxi Service (New UI) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, #0a192f 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gold/50 rounded-full"></div>
              <span className="font-sans font-bold text-sm tracking-widest uppercase text-gold">OUR TAXI SERVICE</span>
              <div className="h-[2px] w-12 bg-gold/50 rounded-full"></div>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl font-bold text-[#0a192f] mb-6">
              Always Here for Your Journey
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
            <p className="text-zinc-600 max-w-3xl mx-auto text-base sm:text-lg">
              We provide reliable and comfortable taxi service for your airport transfers and city travels
              with punctuality, safety, and customer satisfaction as our priority.
            </p>
          </div>

          {/* Main Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            {/* Left Card - Dark */}
            <div className="bg-[#0a192f] rounded-[32px] p-8 sm:p-10 shadow-2xl text-white">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shrink-0 shadow-lg shadow-gold/20">
                  <Car size={40} className="text-[#0a192f]" />
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-medium text-white mb-2">Always Available</h3>
                  <p className="text-gold font-bold text-[13px] tracking-widest uppercase">2 TAXIS READY FOR YOU</p>
                </div>
              </div>

              <div className="h-px w-full bg-white/10 mb-8"></div>

              <p className="text-zinc-300 text-lg mb-12 leading-relaxed">
                We have 2 taxis available at all times to serve your immediate travel needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shrink-0 mt-1">
                    <Clock size={16} className="text-[#0a192f]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Available Anytime</h4>
                    <p className="text-sm text-zinc-400">24/7 service for your convenience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shrink-0 mt-1">
                    <Shield size={16} className="text-[#0a192f]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Safe & Reliable</h4>
                    <p className="text-sm text-zinc-400">Well-maintained vehicles with professional drivers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - White */}
            <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-[#0a192f] flex items-center justify-center shrink-0">
                  <Calendar size={36} className="text-white" />
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-medium text-[#0a192f] mb-2">Need More Than 2 or other Taxis?</h3>
                  <p className="text-gold font-bold text-[13px] tracking-widest uppercase">ADVANCE BOOKING REQUIRED</p>
                </div>
              </div>

              <div className="h-px w-full bg-gray-100 mb-8"></div>

              <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
                For groups or additional taxis, please contact us in advance to make proper arrangements.
              </p>

              <div className="bg-[#fff9f0] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 border border-gold/10 shadow-sm">
                <div className="bg-white rounded-full p-3 shrink-0 shadow-sm border border-gold/20">
                  <Clock size={40} className="text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-[19px] text-[#0a192f] mb-1">Advance Notice Required</h4>
                  <p className="text-gold font-bold text-[13px] tracking-widest uppercase mb-2">2 - 4 HOURS BEFORE</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">This helps us ensure smooth service for your entire group.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="bg-white rounded-[24px] shadow-[0_4px_25px_rgb(0,0,0,0.06)] border border-gold/30 p-2 sm:p-3 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

            {/* Left Box */}
            <div className="flex items-center gap-5 bg-[#0a192f] rounded-[20px] px-8 py-5 w-full md:w-auto">
              <Phone size={28} className="text-gold" fill="currentColor" />
              <div>
                <p className="text-white font-bold text-sm tracking-wider uppercase leading-tight">IMPORTANT</p>
                <p className="text-white font-bold text-sm tracking-wider uppercase leading-tight mt-0.5">TO NOTE</p>
              </div>
            </div>

            {/* Middle Text */}
            <div className="text-center md:text-left text-zinc-700 flex-1 px-6">
              <p className="mb-1 text-[15px]">We currently have <span className="font-bold text-gold">2 taxis</span> available anytime for immediate bookings.</p>
              <p className="text-[15px]">For more than 2 taxis or other taxis, please contact us <span className="font-bold text-gold">2-4 hours in advance</span>.</p>
            </div>

            {/* Right Contact Box */}
            <div className="flex items-center gap-4 md:border-l md:border-gray-200 md:pl-8 pr-6 pb-4 md:pb-0 w-full md:w-auto justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full border-2 border-zinc-200 flex items-center justify-center shrink-0">
                <Headphones size={24} className="text-[#0a192f]" />
              </div>
              <div>
                <p className="font-bold text-[#0a192f] text-[15px] mb-0.5">CONTACT US</p>
                <p className="text-sm text-zinc-600">We're here to help!</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative py-28 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
        style={{
          backgroundImage: `url('/images/hero_mountains.png')`
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/95 via-primary/90 to-luxury-dark/95" />

        <div className="absolute inset-0">

          <div className="absolute top-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" />

          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />

        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 text-shadow-premium">
              Ready to Explore Nepal With Us?
            </h2>

            <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed mb-10">
              Let Classic Journey Nepal take you on an unforgettable journey through the heart of the Himalayas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-white font-sans font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
              >
                <Calendar
                  className="group-hover:rotate-12 transition-transform duration-300"
                  size={20}
                />

                <span>Book Your Journey</span>

                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={18}
                />
              </Link>

              <a
                href="https://wa.me/9779851005029"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-sans font-bold py-4 px-10 rounded-full border-2 border-white/30 hover:border-white/50 shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Phone size={20} />
                <span>WhatsApp: +977 9851005029</span>
              </a>

            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">

              <div className="flex items-center gap-2">

                <Mail size={16} className="text-gold" />

                <a
                  href="mailto:classicjourneynepal2007@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  classicjourneynepal2007@gmail.com
                </a>

              </div>

              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />

              <div className="flex items-center gap-2">

                <MapPin size={16} className="text-gold" />

                <span>Kathmandu, Nepal</span>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}

