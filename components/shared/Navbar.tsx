"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Airport Pickup", href: "/services/airport-pickup" },
    { name: "Airport Drop", href: "/services/airport-drop" },
    { name: "Hotel Transfer", href: "/services/hotel-transfer" },
    { name: "Kathmandu City Tour", href: "/services/kathmandu-city-tour" },
    { name: "Pokhara Tour", href: "/services/pokhara-tour" },
    { name: "Chitwan Tour", href: "/services/chitwan-tour" },
    { name: "Lumbini Tour", href: "/services/lumbini-tour" },
    { name: "Bhaktapur Tour", href: "/services/bhaktapur-tour" },
    { name: "Nagarkot Tour", href: "/services/nagarkot-tour" },
    { name: "Airport to Hotel", href: "/services/airport-to-hotel-transfer" },
    { name: "All Day Booking", href: "/services/all-day-booking" },
    { name: "Custom Nepal Tour", href: "/services/custom-nepal-tour" },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-white/98 backdrop-blur-xl shadow-luxury-lg py-3"
            : "bg-white/95 backdrop-blur-md py-4 lg:py-5 border-b border-gold/10"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex flex-col group">
                <span className="font-playfair font-black text-2xl lg:text-3xl tracking-tight text-primary group-hover:text-gold transition-colors duration-300">
                  Clasic Journey
                </span>
                <span className="font-sans text-[10px] lg:text-xs tracking-[0.3em] text-gold uppercase mt-0.5 group-hover:text-primary transition-colors duration-300">
                  Nepal
                </span>
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`font-sans font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 ${pathname === "/"
                    ? "text-gold bg-gold/5"
                    : "text-luxury-dark hover:text-gold hover:bg-gold/5"
                  }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-sans font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 ${pathname === "/about"
                    ? "text-gold bg-gold/5"
                    : "text-luxury-dark hover:text-gold hover:bg-gold/5"
                  }`}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className={`font-sans font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 ${pathname.startsWith("/services")
                    ? "text-gold bg-gold/5"
                    : "text-luxury-dark hover:text-gold hover:bg-gold/5"
                  }`}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className={`font-sans font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 ${pathname === "/gallery"
                    ? "text-gold bg-gold/5"
                    : "text-luxury-dark hover:text-gold hover:bg-gold/5"
                  }`}
              >
                Gallery
              </Link>
              <Link
                href="/testimonials"
                className={`font-sans font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 ${pathname === "/testimonials"
                    ? "text-gold bg-gold/5"
                    : "text-luxury-dark hover:text-gold hover:bg-gold/5"
                  }`}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className={`font-sans font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 ${pathname === "/contact"
                    ? "text-gold bg-gold/5"
                    : "text-luxury-dark hover:text-gold hover:bg-gold/5"
                  }`}
              >
                Contact
              </Link>
            </div>

            {/* Action Button */}
            <div className="hidden md:flex items-center">
              <a
                href="https://wa.me/9779824962065"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-white font-sans font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <PhoneCall size={16} className="relative z-10" />
                <span className="relative z-10">Book Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-luxury-dark hover:text-gold hover:bg-gold/5 focus:outline-none transition-colors"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gold/10"
            >
              <div className="px-4 pt-4 pb-6 space-y-2 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${pathname === link.href
                        ? "text-gold bg-gold/10"
                        : "text-luxury-dark hover:bg-gold/5 hover:text-gold"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 px-4 border-t border-gold/10">
                  <a
                    href="https://wa.me/9779824962065"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold to-gold-light text-white font-sans font-bold py-3.5 px-5 rounded-full shadow-lg w-full"
                  >
                    <PhoneCall size={18} />
                    <span>Book Now on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
