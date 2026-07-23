"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Star, Calendar, Globe, Shield, Award, 
  Phone, Mail, MapPin, CheckCircle, Car, Clock
} from "lucide-react";

export default function RamBahadurThapaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative h-96 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full">
            <Link href="/about" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={20} />
              <span>Back to About Us</span>
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-white text-6xl font-bold shadow-2xl border-4 border-white">
                RBT
              </div>

              <div className="text-white text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-3">
                  <Award size={16} className="text-gold" />
                  <span className="text-sm font-bold">Gold Certified Driver</span>
                </div>
                <h1 className="font-playfair text-4xl md:text-5xl font-black mb-2">Ram Bahadur Thapa</h1>
                <p className="text-xl text-zinc-200 mb-4">Senior Tour Driver & Guide</p>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="text-gold fill-gold" />
                    <span className="font-bold text-lg">4.9</span>
                    <span className="text-zinc-200 text-sm">(120+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-white to-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Info */}
              <div className="bg-white rounded-2xl p-6 border border-gold/10 shadow-luxury">
                <h3 className="font-sans font-bold text-lg text-luxury-dark mb-4">Quick Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={18} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="text-zinc-500 text-xs">Experience</p>
                      <p className="font-semibold text-luxury-dark">12+ Years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Globe size={18} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="text-zinc-500 text-xs">Languages</p>
                      <p className="font-semibold text-luxury-dark">English, Hindi, Nepali</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield size={18} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="text-zinc-500 text-xs">License</p>
                      <p className="font-semibold text-luxury-dark">Professional A-Grade</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Car size={18} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="text-zinc-500 text-xs">Vehicle</p>
                      <p className="font-semibold text-luxury-dark">Tourist SUV & Sedan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-gold/10 to-gold-light/10 rounded-2xl p-6 border border-gold/20">
                <h3 className="font-sans font-bold text-lg text-luxury-dark mb-4">Contact Ram</h3>
                <div className="space-y-3">
                  <a href="https://wa.me/9779824962065" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white rounded-lg p-3 hover:shadow-lg transition-all">
                    <Phone size={18} className="text-gold" />
                    <div>
                      <p className="text-xs text-zinc-500">WhatsApp</p>
                      <p className="font-semibold text-luxury-dark text-sm">+977 9824962065</p>
                    </div>
                  </a>
                  <a href="mailto:adhikarispriya@gmail.com"
                    className="flex items-center gap-3 bg-white rounded-lg p-3 hover:shadow-lg transition-all">
                    <Mail size={18} className="text-gold" />
                    <div>
                      <p className="text-xs text-zinc-500">Email</p>
                      <p className="font-semibold text-luxury-dark text-sm">adhikarispriya@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-2xl p-6 border border-gold/10 shadow-luxury">
                <h3 className="font-sans font-bold text-lg text-luxury-dark mb-4">Availability</h3>
                <div className="flex items-center gap-3 text-sm">
                  <Clock size={18} className="text-gold" />
                  <p className="text-zinc-700">Available for bookings year-round</p>
                </div>
                <Link href="/contact"
                  className="mt-4 w-full bg-gradient-to-r from-gold to-gold-light text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all block">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Professional Introduction */}
              <div className="bg-white rounded-2xl p-8 border border-gold/10 shadow-luxury">
                <h2 className="font-playfair text-2xl font-bold text-luxury-dark mb-4">Professional Introduction</h2>
                <div className="space-y-4 text-zinc-700 leading-relaxed">
                  <p>
                    Namaste! I&apos;m Ram Bahadur Thapa, a senior professional driver with over 12 years of experience 
                    in tourist transportation across Nepal. I take immense pride in providing safe, comfortable, and 
                    memorable travel experiences for visitors from around the world.
                  </p>
                  <p>
                    Born and raised in the beautiful hills of Nepal, I have deep knowledge of our country&apos;s roads, 
                    culture, and heritage sites. My passion for sharing Nepal&apos;s beauty with travelers drives me to 
                    deliver exceptional service on every journey.
                  </p>
                  <p>
                    I specialize in mountain driving and heritage tours, ensuring that every trip is not just transportation 
                    but an enriching cultural experience. Safety is my top priority, combined with friendly service and 
                    insightful local knowledge.
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div className="bg-white rounded-2xl p-8 border border-gold/10 shadow-luxury">
                <h2 className="font-playfair text-2xl font-bold text-luxury-dark mb-6">Areas of Specialization</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Kathmandu Heritage Tours",
                    "Mountain Highway Driving",
                    "Pokhara Valley Routes",
                    "Chitwan Safari Transfers",
                    "Airport Pickup & Drop",
                    "Lumbini Pilgrimage Tours",
                    "Multi-Day Nepal Tours",
                    "Corporate Travel Services"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-gold flex-shrink-0" />
                      <span className="text-zinc-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety & Service */}
              <div className="bg-white rounded-2xl p-8 border border-gold/10 shadow-luxury">
                <h2 className="font-playfair text-2xl font-bold text-luxury-dark mb-6">Safety & Customer Service</h2>
                <div className="space-y-4 text-zinc-700">
                  <div className="flex gap-4">
                    <Shield className="text-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-luxury-dark mb-1">Safety First Approach</h4>
                      <p>Perfect safety record with zero accidents in 12 years. Regular vehicle maintenance, 
                      defensive driving techniques, and comprehensive insurance coverage.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Star className="text-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-luxury-dark mb-1">Customer-Focused Service</h4>
                      <p>Punctual pickups, clean vehicles, respectful behavior, and flexible to customer needs. 
                      I ensure every guest feels welcome and comfortable throughout their journey.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Globe className="text-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-luxury-dark mb-1">Cultural Knowledge</h4>
                      <p>Expert knowledge of Nepal&apos;s history, culture, and traditions. I love sharing stories 
                      about our heritage sites and answering questions about Nepali life.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Ram */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-gold/10">
                <h2 className="font-playfair text-2xl font-bold text-luxury-dark mb-6">Why Travelers Choose Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Experienced Professional", desc: "12+ years of tourist driving experience" },
                    { title: "Local Expert", desc: "Deep knowledge of Nepal's roads and culture" },
                    { title: "Multilingual", desc: "Fluent in English, Hindi, and Nepali" },
                    { title: "Reliable & Punctual", desc: "Always on time, never miss a pickup" },
                    { title: "Safe Driver", desc: "Perfect safety record, defensive driving" },
                    { title: "Friendly Service", desc: "Warm hospitality and helpful attitude" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Award size={20} className="text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-luxury-dark text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-zinc-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
