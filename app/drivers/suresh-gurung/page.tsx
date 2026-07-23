"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Star, Calendar, Globe, Shield, Award, 
  Phone, Mail, MapPin, CheckCircle, Car, Clock
} from "lucide-react";

export default function SureshGurungPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative h-96 bg-gradient-to-br from-secondary to-primary overflow-hidden">
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
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl border-4 border-white">
                SG
              </div>

              <div className="text-white text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-3">
                  <Award size={16} className="text-gold" />
                  <span className="text-sm font-bold">Premium Guide Certified</span>
                </div>
                <h1 className="font-playfair text-4xl md:text-5xl font-black mb-2">Suresh Gurung</h1>
                <p className="text-xl text-zinc-200 mb-4">Travel Guide & Professional Driver</p>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="text-gold fill-gold" />
                    <span className="font-bold text-lg">5.0</span>
                    <span className="text-zinc-200 text-sm">(95+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
