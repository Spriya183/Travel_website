"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const whatsappMessage = `Hi, I'm ${formData.name}.
Message: ${formData.message}.
Service: ${formData.service}.
Date: ${formData.date}.
Contact:
Email: ${formData.email}
Phone Number: ${formData.phone}`;

  const whatsappUrl = `https://wa.me/9779824962065?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, '_blank');
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-luxury-cream to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_mountains.png"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/80 via-primary/70 to-luxury-dark/90" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-gold mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-shadow-premium"
          >
            Let's Plan Your Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-200"
          >
            We're excited to hear from you and help create unforgettable memories in Nepal
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Left - Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-playfair text-3xl font-bold text-luxury-dark mb-6">Get in Touch</h2>
                <p className="text-zinc-600 leading-relaxed mb-8">
                  Have questions about our services? Want to book a tour? We're here to help you 
                  plan the perfect Nepal adventure.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-gold/10 shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-luxury-dark mb-2">Phone & WhatsApp</h3>
                    <a href="https://wa.me/9779824962065" target="_blank" rel="noopener noreferrer" 
                      className="text-gold hover:text-gold-dark transition-colors text-lg font-semibold block mb-1">
                      +977 9824962065
                    </a>
                    <p className="text-sm text-zinc-500">Available 24/7 for bookings</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-gold/10 shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-luxury-dark mb-2">Email Address</h3>
                    <a href="mailto:adhikarispriya@gmail.com" 
                      className="text-primary hover:text-secondary transition-colors font-semibold block mb-1">
                      adhikarispriya@gmail.com
                    </a>
                    <p className="text-sm text-zinc-500">We'll respond within 24 hours</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-6 border border-gold/10 shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-luxury-dark mb-2">Location</h3>
                    <p className="text-zinc-700 font-semibold mb-1">Kathmandu, Nepal</p>
                    <p className="text-sm text-zinc-500">Serving all of Nepal</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-gold/10 to-gold-light/10 rounded-2xl p-6 border border-gold/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-luxury-dark mb-2">Business Hours</h3>
                    <p className="text-zinc-700 font-semibold mb-1">24/7 Service</p>
                    <p className="text-sm text-zinc-600">We're always available for you</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right - Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gold/10 shadow-luxury-lg">
                <h2 className="font-playfair text-3xl font-bold text-luxury-dark mb-3">Send Us a Message</h2>
                <p className="text-zinc-600 mb-8">Fill out the form below and we'll get back to you as soon as possible</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-luxury-dark mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full pl-12 pr-4 py-3.5 border border-gold/20 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all outline-none"
                          placeholder="Spriya Adhikari"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-luxury-dark mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-12 pr-4 py-3.5 border border-gold/20 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all outline-none"
                          placeholder="adhikarispriya4@gmail.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-luxury-dark mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full pl-12 pr-4 py-3.5 border border-gold/20 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all outline-none"
                          placeholder="+977 9800000000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-luxury-dark mb-2">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full pl-12 pr-4 py-3.5 border border-gold/20 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-luxury-dark mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3.5 border border-gold/20 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="Airport Pickup">Airport Pickup</option>
                      <option value="Airport Drop">Airport Drop</option>
                      <option value="Kathmandu City Tour">Kathmandu City Tour</option>
                      <option value="Pokhara Tour">Pokhara Tour</option>
                      <option value="Chitwan Tour">Chitwan Safari Tour</option>
                      <option value="Lumbini Tour">Lumbini Pilgrimage</option>
                      <option value="Custom Tour">Custom Nepal Tour</option>
                      <option value="Multi-Day Tour">Multi-Day Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-luxury-dark mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-zinc-400" />
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full pl-12 pr-4 py-3.5 border border-gold/20 rounded-xl focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all outline-none resize-none"
                        placeholder="Tell us about your travel plans, number of passengers, destinations you'd like to visit..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-white font-sans font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-xs text-zinc-500 text-center">
                    By submitting this form, you'll get information within an hours
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
