"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle, Clock, Shield, DollarSign, Users, Star, 
  MapPin, Calendar, Award, Headphones, Car, Plane, 
  Heart, Globe, ArrowRight, Phone, Mail
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
    <div ref={elementRef} className="font-playfair text-4xl md:text-5xl font-black text-gold">
      {count}{suffix}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-6"
          >
            <Heart size={16} className="text-gold" fill="currentColor" />
            <span className="text-sm font-semibold tracking-wider uppercase">Est. 2020</span>
          </motion.div>
          
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
                { year: "2020", title: "Company Founded", desc: "Started with a vision to revolutionize tourist transportation in Nepal" },
                { year: "2021", title: "Fleet Expansion", desc: "Added premium vehicles to serve more travelers across Nepal" },
                { year: "2023", title: "International Recognition", desc: "Received 5-star ratings from tourists worldwide" },
                { year: "2024", title: "Service Excellence", desc: "Expanded to cover all major tourist destinations in Nepal" },
                { year: "2026", title: "Leading the Way", desc: "Now serving 1000+ happy travelers annually with premium experiences" },
              ].map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`relative mb-12 ${idx % 2 === 0 ? "text-right pr-8 md:pr-16" : "text-left pl-8 md:pl-16 ml-auto"} w-full md:w-1/2`}
                >
                  <div className="bg-white border border-gold/20 rounded-2xl p-6 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute top-8 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg"
                      style={{ [idx % 2 === 0 ? 'right' : 'left']: '-2.5rem' }}
                    />
                    <span className="inline-block bg-gradient-to-r from-gold to-gold-light text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                      {milestone.year}
                    </span>
                    <h4 className="font-sans font-bold text-xl text-luxury-dark mb-2">{milestone.title}</h4>
                    <p className="text-zinc-600 text-sm">{milestone.desc}</p>
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
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gradient-to-br from-luxury-cream to-white rounded-xl border border-gold/10">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center">
                      <item.icon size={20} className="text-gold" />
                    </div>
                    <span className="font-medium text-sm text-luxury-dark">{item.text}</span>
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
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-luxury">
                  <Image src="/images/hero_pashupatinath.png" alt="Nepal Heritage" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-luxury">
                  <Image src="/images/about_taxi.png" alt="Our Vehicle" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-luxury">
                  <Image src="/images/hero_pokhara.png" alt="Pokhara" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-luxury">
                  <Image src="/images/hero_mountains.png" alt="Himalayas" fill className="object-cover" />
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
              { target: 1000, suffix: "+", label: "Happy Travelers" },
              { target: 500, suffix: "+", label: "Successful Tours" },
              { target: 10, suffix: "+", label: "Popular Destinations" },
              { target: 5, suffix: "★", label: "Customer Rating" },
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

      {/* Meet Our Drivers */}
      <section className="py-24 bg-gradient-to-b from-luxury-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
              Our Expert Team
            </h2>
            <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark">
              Meet Our Professional Drivers
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Kusal Nepal",
                role: "Travel guide And Driver",
                experience: "8+ Years",
                languages: "English, Hindi, Nepali",
                location: "Kathmandu, Nepal",
                bio: "Expert in mountain driving with extensive knowledge of Nepal's cultural heritage sites.",
                slug: "kusal-nepal"
              },
              {
                name: "Ramanath Upadhyaya",
                role: "Travel Guide & Driver",
                experience: "20+ Years",
                languages: "English, Japanese, Nepali",
                location: "Kathmandu, Nepal",
                bio: "Specialized in adventure tours and trekking route transfers with perfect safety record.",
                slug: "ramanath-upadhyaya"
              },
            ].map((driver, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/drivers/${driver.slug}`}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Driver Image with Overlay */}
                  <div className="relative h-96 overflow-hidden bg-gray-100">
                    <Image 
                      src={driver.slug === "kusal-nepal" ? "/images/kusal.jpg" : "/images/ramanath.jpg"}
                      alt={driver.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Steering wheel icon circle - Golden color */}
                    <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-[#c4a574] flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3" strokeWidth="2" fill="currentColor" />
                        <line x1="12" y1="3" x2="12" y2="6" strokeWidth="2" />
                        <line x1="12" y1="18" x2="12" y2="21" strokeWidth="2" />
                        <line x1="3" y1="12" x2="6" y2="12" strokeWidth="2" />
                        <line x1="18" y1="12" x2="21" y2="12" strokeWidth="2" />
                      </svg>
                    </div>

                    {/* Hello, I'm & Name overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <p className="text-white/90 text-sm font-medium mb-1">Hello, I&apos;m</p>
                      <h4 className="text-white font-playfair text-3xl font-bold mb-1">{driver.name}</h4>
                      <p className="text-white/90 text-sm font-medium">{driver.role}</p>
                    </div>
                  </div>

                  {/* Driver Info Card */}
                  <div className="p-6">
                    {/* 3-Column Info Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="text-center p-3 bg-[#f5f0e8] rounded-xl">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Calendar size={16} className="text-[#c4a574]" />
                        </div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Experience</p>
                        <p className="text-sm font-bold text-gray-900">{driver.experience}</p>
                      </div>
                      
                      <div className="text-center p-3 bg-[#f5f0e8] rounded-xl">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Globe size={16} className="text-[#c4a574]" />
                        </div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Languages</p>
                        <p className="text-sm font-bold text-gray-900">{driver.languages.split(',').length}</p>
                      </div>
                      
                      <div className="text-center p-3 bg-[#f5f0e8] rounded-xl">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <MapPin size={16} className="text-[#c4a574]" />
                        </div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                        <p className="text-sm font-bold text-gray-900">Nepal</p>
                      </div>
                    </div>

                    {/* Bio Text */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{driver.bio}</p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link href={`/drivers/${driver.slug}`}
                        className="flex-1 bg-[#c4a574] hover:bg-[#b39565] text-white text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300">
                        View Profile
                      </Link>
                      <a href="tel:+9779824962065"
                        className="px-5 py-3 bg-[#c4a574] hover:bg-[#b39565] text-white rounded-xl transition-all duration-300">
                        <Phone size={18} />
                      </a>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
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
              { name: "Kathmandu city", trips: "1000+", image: "/images/hero_pashupatinath.png" },
              { name: "Pokhara", trips: "200+", image: "/images/hero_pokhara.png" },
              { name: "Chitwan", trips: "270+", image: "/images/chitwantour.jpg" },
              { name: "Lumbini", trips: "150+",  image: "/images/lumbini.jpg" },
              { name: "Nagarkot", trips: "700+",  image: "/images/nagarkotview.jpg" },
              { name: "Bandipur", trips: "100+",  image: "/images/bandipur.jpg" },
              { name: "Ilam", trips: "50+",  image: "/images/ilam.jpg" },
              { name: "Chandragiri", trips: "800+",  image: "/images/Chandragiricablecar.jpg" },
              { name: "Chitlang", trips: "800+",  image: "/images/chitlang.jpg" },
              
            ].map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 cursor-pointer"
              >
                <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-gold" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">{dest.trips} Trips</span>
                  </div>
                  <h4 className="font-playfair text-2xl font-bold mb-2 group-hover:text-gold transition-colors">
                    {dest.name}
                  </h4>
                 { /*<div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-gold fill-gold" />
                      <span className="text-sm font-bold">{dest.rating}</span>
                    </div>
                    <button className="text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div> */}
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
              { icon: Users, title: "Professional Drivers", desc: "Licensed & experienced tour guides" },
              { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock customer assistance" },
              { icon: Car, title: "Comfortable Vehicles", desc: "Clean, modern, well-maintained fleet" },
              { icon: DollarSign, title: "Affordable Pricing", desc: "Transparent rates, no hidden fees" },
              { icon: MapPin, title: "Personalized Plans", desc: "Customized itineraries for you" },
              { icon: Globe, title: "Local Expertise", desc: "Deep knowledge of Nepal's culture" },
              { icon: Calendar, title: "Flexible Booking", desc: "Easy reservation & cancellation" },
              { icon: Award, title: "Multilingual Staff", desc: "English, Hindi, Chinese, Japanese" },
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
                  <feature.icon size={24} className="text-gold group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-sans font-bold text-lg text-luxury-dark mb-2 group-hover:text-gold transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-zinc-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-xs uppercase tracking-widest font-bold text-gold mb-2">
              Our Vehicles
            </h2>
            <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold text-luxury-dark">
              Premium Fleet Selection
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-light to-gold mx-auto mt-4 rounded-full" />
            <p className="text-zinc-600 mt-6 max-w-2xl mx-auto">
              Travel in comfort and style with our well-maintained, premium vehicles designed for Nepal&apos;s terrain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Classic Tourist Sedan",
                subtitle: "Perfect for Airport Transfers & City Tours",
                capacity: "4 Passengers",
                features: ["Premium AC", "Comfortable Leather Seats", "GPS Navigation", "Spacious Interior", "Clean & Sanitized", "Professional Driver"],
                luggage: "3 Large Suitcases",
                image: "/images/gadi1.png",
                color: "Pearl White",
                highlight: "Most Popular"
              },
              {
                name: "Premium Tourist Sedan",
                subtitle: "Ideal for Long Distance & Family Travel",
                capacity: "4-6 Passengers",
                features: ["Dual-Tone Sport Design", "Enhanced Comfort", "Mountain Ready", "Extra Luggage Space", "Premium Audio System", "Safety Certified"],
                luggage: "4 Large Suitcases",
                image: "/images/gadi2.png",
                color: "Pearl White",
                highlight: "Best for Families"
              },
            ].map((vehicle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gold/20 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2"
              >
               

                {/* Vehicle Image */}
                <div className="relative h-80 bg-gradient-to-br from-zinc-100 to-zinc-200 overflow-hidden">
                  <Image 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    priority={idx === 0}
                  />
                  {/* Subtle gradient for badge visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </div>
                
                {/* Vehicle Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-playfair text-2xl font-bold text-luxury-dark mb-2 group-hover:text-gold transition-colors">
                      {vehicle.name}
                    </h4>
                    <p className="text-zinc-600 text-sm font-medium">{vehicle.subtitle}</p>
                  </div>
                  
                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gold/10">
                    <div className="bg-gradient-to-br from-gold/5 to-gold-light/5 p-4 rounded-xl border border-gold/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Users size={18} className="text-gold" />
                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Capacity</span>
                      </div>
                      <p className="font-bold text-luxury-dark">{vehicle.capacity}</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 rounded-xl border border-primary/10">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-[18px] h-[18px] text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Luggage</span>
                      </div>
                      <p className="font-bold text-luxury-dark">{vehicle.luggage}</p>
                    </div>
                  </div>

                  {/* Vehicle Color */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-zinc-300 shadow-sm" />
                      <div>
                        <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Color</p>
                        <p className="text-sm font-bold text-luxury-dark">{vehicle.color}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h5 className="text-xs font-bold text-zinc-500 mb-4 uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle size={16} className="text-gold" />
                      Premium Features
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      {vehicle.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <div className="mt-8 pt-6 border-t border-gold/10">
                    <a 
                      href="https://wa.me/9779824962065?text=I%20want%20to%20book%20the%20vehicle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-white text-center font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Phone size={18} />
                        Book This Vehicle
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-luxury-cream via-white to-luxury-cream p-8 rounded-2xl border border-gold/10 max-w-4xl mx-auto">
              <h4 className="font-playfair text-2xl font-bold text-luxury-dark mb-4">
                All Vehicles Include
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {[
                  { icon: Shield, text: "Fully Insured" },
                  { icon: CheckCircle, text: "Regular Maintenance" },
                  { icon: Clock, text: "24/7 Available" },
                  { icon: Users, text: "Expert Drivers" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center">
                      <item.icon size={24} className="text-gold" />
                    </div>
                    <p className="text-sm font-semibold text-luxury-dark">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-28 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
        style={{ backgroundImage: `url('/images/hero_mountains.png')` }}>
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
              <Link href="/contact"
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-white font-sans font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300">
                <Calendar className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                <span>Book Your Journey</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
              
              <a href="https://wa.me/9779824962065" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-sans font-bold py-4 px-10 rounded-full border-2 border-white/30 hover:border-white/50 shadow-xl hover:scale-105 transition-all duration-300">
                <Phone size={20} />
                <span>WhatsApp: 9824962065</span>
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <a href="mailto:adhikarispriya@gmail.com" className="hover:text-gold transition-colors">
                  adhikarispriya@gmail.com
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
