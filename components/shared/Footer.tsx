"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp, MessageCircle } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-luxury-dark via-luxury-dark to-black text-zinc-300 pt-20 pb-8 z-20 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-3xl" />
      </div>

      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="font-playfair font-black text-3xl tracking-tight text-white mb-1">
                Clasic Journey
              </h4>
              <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase">
                Nepal
              </span>
            </div>
            
            <p className="font-sans text-sm text-zinc-400 leading-relaxed">
              Elevating travel experiences across Nepal with premium taxi services, luxury airport transfers, 
              and bespoke cultural tours. Your journey begins with comfort and sophistication.
            </p>
            
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm border border-gold/20 px-4 py-2 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span className="text-gold font-sans font-semibold text-xs uppercase tracking-wider">
                Available 24/7
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/9779824962065"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-gold hover:to-gold-light border border-white/10 hover:border-gold/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gold/20"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-gold hover:to-gold-light border border-white/10 hover:border-gold/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gold/20"
                aria-label="Facebook"
              >
                <svg className="w-[18px] h-[18px] text-zinc-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-gold hover:to-gold-light border border-white/10 hover:border-gold/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gold/20"
                aria-label="Instagram"
              >
                <svg className="w-[18px] h-[18px] text-zinc-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-gold hover:to-gold-light border border-white/10 hover:border-gold/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gold/20"
                aria-label="Twitter"
              >
                <svg className="w-[18px] h-[18px] text-zinc-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="mailto:adhikarispriya@gmail.com"
                className="group w-11 h-11 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-gold hover:to-gold-light border border-white/10 hover:border-gold/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gold/20"
                aria-label="Email"
              >
                <Mail size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h5 className="font-sans font-bold text-base text-white uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full" />
            </h5>
            <ul className="space-y-3 font-sans text-sm pt-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Services */}
          <div className="lg:col-span-3 space-y-5">
            <h5 className="font-sans font-bold text-base text-white uppercase tracking-wider relative inline-block">
              Popular Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full" />
            </h5>
            <ul className="space-y-3 font-sans text-sm pt-2">
              <li>
                <Link href="/services/airport-pickup" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  Airport Pickup Service
                </Link>
              </li>
              <li>
                <Link href="/services/hotel-transfer" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  Luxury Hotel Transfers
                </Link>
              </li>
              <li>
                <Link href="/services/kathmandu-city-tour" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  Kathmandu City Tour
                </Link>
              </li>
              <li>
                <Link href="/services/pokhara-tour" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  Pokhara Valley Tour
                </Link>
              </li>
              <li>
                <Link href="/services/chitwan-tour" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  Chitwan Safari Tour
                </Link>
              </li>
              <li>
                <Link href="/services/custom-nepal-tour" className="text-zinc-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold mr-2 transition-colors" />
                  Custom Nepal Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 space-y-5">
            <h5 className="font-sans font-bold text-base text-white uppercase tracking-wider relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-full" />
            </h5>
            <ul className="space-y-4 font-sans text-sm pt-2">
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div className="flex-1 pt-1">
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    Kathmandu, Nepal<br />
                    <span className="text-xs text-zinc-500">Serving all of Nepal</span>
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone size={18} className="text-gold" />
                </div>
                <div className="flex-1 pt-1">
                  <a 
                    href="https://wa.me/9779824962065" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zinc-400 hover:text-gold transition-colors block"
                  >
                    +977 9824962065
                    <span className="block text-xs text-zinc-500 mt-0.5">Available 24/7</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail size={18} className="text-gold" />
                </div>
                <div className="flex-1 pt-1">
                  <a 
                    href="mailto:adhikarispriya@gmail.com" 
                    className="text-zinc-400 hover:text-gold transition-colors break-all block"
                  >
                    adhikarispriya@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent font-sans text-xs uppercase tracking-widest px-4">
              Premium Travel Experience
            </span>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 font-sans text-xs text-zinc-500">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="text-center md:text-left">
              &copy; 2026 Clasic Journey Nepal. All Rights Reserved.
            </span>
            <span className="hidden md:block text-zinc-700">•</span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              Crafted with <span className="text-gold">❤</span> by Spriya
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/about" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span className="text-zinc-700">•</span>
            <Link href="/contact" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-gradient-to-br from-gold to-gold-light hover:from-gold-light hover:to-gold text-white p-4 rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-gold/30 ${
          isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp size={20} className="stroke-[2.5px]" />
      </button>
    </footer>
  );
}
